/**
 *底部
 */
// double0  star hand 
import UTILS from '../config/utils';
import GAME_CONFIG from '../config/config';

import { messageCenter, observer } from '../module/init_module';

import { clickOtherAreaHandler, addLongClickEvent } from '../common/laya.custom';
import CommonGameModule from '../module/com/commonGameModule';
import AudioMudule from '../module/com/audio';
import { createSkeleton } from '../common/laya.custom';
import HeaderUIView from './header.js'; 
export default class BottomUIView extends BottomUI {
    constructor() {
        super();
        this.init();
        this.game_flage = false;  //游戏标志
        this.countDownValue = null;
        this.deal = null;  //发牌按钮动画
        this.bet = null;    //加倍按钮动画
        this.doublecurrent = null //加倍金额
        this.betMin  = null //最小投币额
        BottomUIView.instance = this;
    }

    static getInstance() {
        return this.instance || new this();
    }

    init() { 
        this.keyBoardNumber = new window.Tools.KeyBoardNumber();
        // this.betValue.text = 10;
        this.betValue.text = 100;
        this.Btn_double.disabled = true;
        this.deal = createSkeleton('res/dragon/bet');
        this.bet = createSkeleton('res/dragon/double');
        this.deal.pos(132,51);
        this.bet.pos(132,51);
        this.Btn_Start.addChild(this.deal);
        this.Btn_double.addChild(this.bet);  
        this.deal.play("deal",true);
        this.bet.play("doublefan",true);
        this.initEvent();
        this.initConfig();
        this.subscribe();
    }

    // 订阅
    subscribe() {
        observer.subscribe('bet::inputamount', this.updateDomInput.bind(this));  // 投币额修改

        observer.subscribe('bet::success', this.betSuccess.bind(this));     // 投币成功    
        observer.subscribe('CountDown', this.beginCountDown.bind(this));     // 倒计时开始  
        observer.subscribe('game::reset', this.reset.bind(this));   //重置
        observer.subscribe('openButton',this.openButton.bind(this));  //点击开始关闭按钮
    }
    initConfig() {
        this.config = {  
            MIN_INPUT: 100,
            MAX_INPUT: 500000,
            base: 100,
            user_input_text: 100, //投币金额    
            isDouble:0 ,//是否加倍 
            gameStatus:'start'
        }
  
    }

    initEvent() {      
        // 减法加法按钮
        this.Btn_sub.on(Laya.Event.CLICK, this, this.addSubHandler.bind(this, 'sub'));
        this.Btn_add.on(Laya.Event.CLICK, this, this.addSubHandler.bind(this, 'add'));

        //最大按钮
        this.Btn_max.on(Laya.Event.CLICK, this,this.maxHandler);
        // 投币输入框
        this.betValue.on(Laya.Event.CLICK, this, () => {
            AudioMudule.getInstance().play('btn'); 
            // 游戏进行中判断
            if (this.btnDisAble()) return;
            this.showKeyBoardNumber();
        });
        this.Btn_recharge.on(Laya.Event.CLICK,this,() =>{
              AudioMudule.getInstance().play('btn'); 
             if (UTILS.willGotoLogin()) return;
             observer.publish("pop::recharge");
        });
        this.Btn_Start.on(Laya.Event.CLICK,this,this.startHander);
        
        this.Btn_double.on(Laya.Event.CLICK,this,()=>{ 
            AudioMudule.getInstance().play('btn'); 
            this.doublecurrent = this.betValue.text;
            let current = parseInt(this.betValue.text)*2;
            this.betValue.text = current;
            this.config.isDouble = 1;//加倍
            this.updateDomInput(current);      
            this.Btn_double.disabled = true;
            this.BetEmit('bet');
            this.disButton('bet');
           
        });
    }
  
    startHander(){      
        AudioMudule.getInstance().play('btn'); 

        if(this.checkEnoughBet()){
             // 未登录
            if (UTILS.willGotoLogin()) return;
            if(this.game_flage){
                // console.log("游戏进行中");
                return;
            }
    
            if(this.config.gameStatus == "start"){    
                this.BetEmit('deal'); 
                this.disButton();        
                this.config.gameStatus = "bet";    
            }else{                    
                this.BetEmit('bet');
                this.disButton('bet')
                this.game_flage = true;                   
            }     
        }
        
         
    }

      //游戏开始 发送命令
    BetEmit(bet){        
        messageCenter.emit(bet, { amount: this.config.user_input_text, isDouble: this.config.isDouble });
       
    }

      // 投币成功
    betSuccess() {
        // 更新用户余额
        observer.publish('update::useraccount', -1 * this.config.user_input_text);
       
        this.config.gameStatus ="start";
        this.stopCountDown();
        this.disButton('bet');
        // 设置默认投币额
        UTILS.setCookie("defaultBet" + GM.gameId + GM.user_id, this.config.user_input_text);
    }

     // 减法加法
    addSubHandler(type) {
         AudioMudule.getInstance().play('btn'); 
         // 未登录
        if (UTILS.willGotoLogin()) return;
        // 游戏进行中判断
        if (this.btnDisAble()) return;

        let config = this.config;
        let current = UTILS.addSubHandler(type,config.base, config.MIN_INPUT, config.MAX_INPUT, config.user_input_text);
        this.updateDomInput(current);

     
    }

     // max最大值按钮
    maxHandler() {
         AudioMudule.getInstance().play('btn'); 
         // 未登录
        if (UTILS.willGotoLogin()) return;
        // // 游戏进行中判断
        if (this.btnDisAble()) return;
        let current = 500000;
        current = current - current % this.config.base;
        current = Math.max(current, this.config.MIN_INPUT);
        current = Math.min(current, this.config.MAX_INPUT);
        this.updateDomInput(current);
    }

     // 判断余额是否投币
    checkEnoughBet() {
        // 未登录
        if (UTILS.willGotoLogin()) return;
        
        let header = HeaderUIView.getInstance();
        let yuNum = header.config.yuNum;
        let tingDou = header.config.tingDou;
        let bet = this.config.user_input_text;
        let bool = GAME_CONFIG.localStatus || yuNum >= bet || tingDou >= bet;
        if (!bool) {
            // 更新余额
            messageCenter.emitAjax("userAccount");  //防止用户在别处游戏带入金额后，又带出的情况
            observer.publish('common::tips', '余额不足，请充值...', () => {observer.publish('pop::recharge');});
        }
        return bool;
    }

    // 修改投币金额
    updateDomInput(num) {
        let _num = Number(num) || this.config.MIN_INPUT;
        this.betValue.text = _num;
        this.config.user_input_text = _num;

        if (_num === this.config.MIN_INPUT) {
            this.Btn_sub.disabled = true;
        } else {
            this.Btn_sub.disabled = false;
        }

        if (_num === this.config.MAX_INPUT) {
            this.Btn_add.disabled = true;
            this.Btn_max.disabled = true;
        } else {
            this.Btn_add.disabled = false;
            this.Btn_max.disabled = false;
        }

        if(num > this.config.MAX_INPUT){
             this.bubble.visible = true;
             this.betValue.text = 500000;
             this.config.user_input_text = 500000;
        }

       
          if(num >= this.betMin ){
              HeaderUIView.getInstance().poolbox.alpha = 1;
              HeaderUIView.getInstance().lock.visible = false;          
          }else{
              HeaderUIView.getInstance().poolbox.alpha = 0.5;
              HeaderUIView.getInstance().lock.visible = true;
          }
       


    }

     betMainHandler(betAmount){
          this.betMin = betAmount;
       
    }
    /*
    显示键盘
     */
    showKeyBoardNumber() {
        this.keyBoardNumber.enter('', {
            length: 8,
            close: this.hideKeyBoardNumber.bind(this),
            input: null
        });
    }
     /**
     * 键盘退出
     */
    
    hideKeyBoardNumber(type, value) {
        // let initVal;
        // if(value <100){
        //     initVal = value - value%10;
        // }else{
            //  initVal = value - value % 100;
        // }
        let  initVal = value - value % 100;
        if (type === "confirm" && initVal) {
         
            if(initVal <= this.config.MIN_INPUT){
                this.betValue.text = this.config.MIN_INPUT;
                this.updateDomInput( this.betValue.text);

            }else if(initVal > this.config.MAX_INPUT) {
                observer.publish('common::tips', '超出最大投币额');
                this.betValue.text = this.config.MAX_INPUT;
                this.updateDomInput( this.betValue.text);
            }else{
                this.betValue.text = initVal;
                this.updateDomInput( initVal);
            }

        }else if(type === "confirm" && !initVal){
            this.betValue.text = this.config.user_input_text;
        }

    }


     /**
     * 开始倒计时
     */
    beginCountDown(count){
        if( !count ) return;
        this.countdown.visible = true;
        this.count.text = count;
        let duration = 1000;      
        this.countDownValue = count;
        
        this.timerLoop(duration, this, this.countDownaction ,[count] );
    }
    countDownaction(count){
        Laya.Tween.to(this.count, {value:this.countDownValue--},1000);
        this.count.changeText(this.countDownValue);
        AudioMudule.getInstance().play('countdow'); 
        if(this.countDownValue < 0){
            this.stopCountDown();
            this.countdown.visible = false;
           
        }
    }
    /**
     * 停止倒计时
     */
    stopCountDown(){
        this.count.text = 0;
        this.clearTimer(this,this.countDownaction); 
        // 倒计时为0  如果没有点击发牌 自动发牌
        let bool = this.Btn_Start.disabled;
        if( this.config.gameStatus == "bet" && bool == false){
            this.BetEmit('bet');
            this.disButton('bet');
            
        }
              
    }

    /**
     * 游戏进行中判断
     */

    btnDisAble(){ 
        if (this.game_flag) {
        //    console.log("正在游戏中");
        }

        return this.game_flag;
    }

    disButton(cmd){
        this.bubble.visible = false;
        this.Btn_add.disabled = true;
        this.Btn_max.disabled = true;
        this.Btn_sub.disabled = true;
        this.betValue.disabled = true;
        this.Btn_Start.disabled = true;    
        if(cmd == 'bet'){
           this.Btn_Start.disabled = true;     
           this.Btn_double.disabled = true;
       
           this.Btn_double.getChildAt(0).play("doublefan",true);
           this.stopCountDown();
           this.countdown.visible = false;
        }       
    }

    openButton(){  
        if( this.config.user_input_text >= 250000){
             this.bubble.visible = true;
        }    
        this.Btn_double.disabled = false; 
        this.Btn_Start.disabled = false;   
        this.Btn_Start.getChildAt(0).play("bet",true);
        this.Btn_double.getChildAt(0).play("double",true);                 
        this.config.gameStatus ="bet";

        this.Btn_add.disabled = true;
        this.Btn_max.disabled = true;
        this.betValue.disabled = true;
        this.Btn_sub.disabled = true;
        
    }

    reset(){
        if(this.config.isDouble == 1){
              this.betValue.text =  this.doublecurrent;
              this.updateDomInput(this.betValue.text);
             
        }   
        //重置按钮
        this.config.gameStatus ="start";
        this.Btn_Start.getChildAt(0).play("deal",true);
        this.Btn_double.getChildAt(0).play("doublefan",true);
        this.config.isDouble = 0;//不加倍
        this.Btn_Start.disabled = false;
        this.Btn_double.disabled = true;
        this.Btn_add.disabled = false;
        this.Btn_max.disabled = false;
        this.Btn_sub.disabled = false;
        this.betValue.disabled = false;
        this.game_flage = false;
        this.bubble.visible = false;
        this.doublecurrent = null;
    }

   
}

