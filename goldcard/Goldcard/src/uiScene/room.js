/**
 * 房间
 */
import { sceneManager,observer, setViewCenter, messageCenter } from '../module/init_module';
import UTILS from '../config/utils';

import { createSkeleton } from '../common/laya.custom';
import CommonGameModule from '../module/com/commonGameModule';
import AudioMudule from '../module/com/audio';

import HeaderUIView from './header.js';
import MiddleView from './middle.js'
import BottomUIView from './bottom.js';
// 房间
export default class RoomScene extends RoomUI {
    constructor(messageCenter) {
        super();

        this.sceneName = 'roomScene';
        
        this.init(messageCenter);
        RoomScene.instance = this;
    }

    static getInstance(messageCenter) {
        return this.instance || new this(messageCenter);
    }

    init(messageCenter) {        
         
         // 声音模块
        AudioMudule.getInstance().initResource();
        //订阅场景加载事件，请注意bind方法似乎会改变function，导致取消订阅的时候判断的回调函数和绑定的回调函数不相同
        observer.subscribe(this.sceneName + "_enter", this.onEnter.bind(this));
         
        // 添加房间各个模块 
       
        this.Middle.addChild(MiddleView.getInstance());
        this.Bottom.addChild(BottomUIView.getInstance());
        this.Header.addChild(HeaderUIView.getInstance());

        
       
      
        CommonGameModule.getInstance().registerAction(messageCenter, observer);

         // 注册
        messageCenter && this.registerAction(messageCenter);      
       
    }

    registerAction(){
        messageCenter.registerAction("init", this.initGameHandler.bind(this));   //游戏初始化  
        messageCenter.registerAction("userAccount", (data) => {  
            HeaderUIView.getInstance().renderUserAccount(data);
        });   // 用户余额     
        messageCenter.registerAction("deal", this.startGame.bind(this));             //点击开始
        messageCenter.registerAction("bet", this.result.bind(this));             //点击加倍或者要牌
         // 跑马灯
        messageCenter.registerAction("marquee", (data) => {
            observer.publish("msg::marquee", data);
        });


    }

    // 游戏初始化  复盘
    initGameHandler(data){  
        // 必须等到初始化游戏拿到数据后再去更新用户默认投币额
        // 是否登录
        HeaderUIView.getInstance().poolAmountHandler(data.res.poolAmount);
        BottomUIView.getInstance().betMainHandler(data.res.betMin);
        MiddleView.getInstance().oddHandler(data.res.oddConf);
        if (UTILS.checkLoginStatus()) {  
             // 新手引导       
            if(data.res.isNew == true){
                observer.publish("pop::newhelp", messageCenter);           
            }else{
                // 用户余额
                messageCenter.emitAjax('userAccount');
            }
            if(data.res.betAmount > 0){
                HeaderUIView.getInstance().config.isFirstDefault = true;
                observer.publish('bet::inputamount', data.res.betAmount);          
                MiddleView.getInstance().startGame(data);
                observer.publish('openButton');
                observer.publish('CountDown',8); 
            }             
        } else {
            observer.publish('bet::inputamount');
        }

    }
    
   // 点击开始 
    startGame(data){
        if (CommonGameModule.getInstance().errorHandler(data)) {
            observer.publish('game::reset');
            return;
        };

        MiddleView.getInstance().startGame(data);
        // observer.publish('bet::success');
        Laya.timer.once(1000,this,()=>{
           observer.publish('openButton');
           observer.publish('CountDown',8); 
        });
       

    }
    // 点击要牌或者加倍 拿到结果
    result(data){
        // console.log(data);
        // 错误处理
        if (CommonGameModule.getInstance().errorHandler(data)) {
            observer.publish('game::reset');
            return;
        };
        //投币成功
        observer.publish('bet::success');
        observer.publish('handcard',data);
        
        // 更新奖池 金额
        HeaderUIView.getInstance().poolAmountHandler(data.res.poolAmount); 
             
        Laya.timer.once(2000,this,()=>{
            MiddleView.getInstance().result(data);
        });
         
        let delay = 2000;
        if(data.res.prizePoint > 0){
            delay = 4000;
        }
        Laya.timer.once(delay,this,()=>{
            observer.publish('result',data); 
            if(data.res.fuPoint > 0){
                  Laya.timer.once(2000,this,()=>{
                     observer.publish('fudai',data);     
                  });               
            }             
            Laya.timer.once(2500,this,()=>{
              observer.publish('game::reset');      
            });
                                   
        });
    
        
          
    }

    onEnter() {
        // 视图居中
        setViewCenter();

        UTILS.log(this.sceneName + " enter");

        // 触发命令
        this.dispatchAction();

        //取消订阅时不用传递回调函数
        observer.unsubscribe(this.sceneName + "_enter");
    }

    // 触发
    dispatchAction() {
        messageCenter.emit("init"); 
    }

   
    onExit() {
        UTILS.log(this.sceneName + " exit");

        // 取消所有注册
        this.unRegisterAction();

        //发布退出事件
        observer.publish(this.sceneName + "_exit");

        this.clear();
    }

    //自定义方法，场景退出的时候是销毁还是removeSelf请自行抉择
    clear() {
        this.removeSelf();
    }

}
