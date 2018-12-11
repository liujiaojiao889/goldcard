/**
 *头部
 */
 
import UTILS from '../config/utils';
import { observer, messageCenter } from '../module/init_module';
import CommonGameModule from '../module/com/commonGameModule';
import { clickOtherAreaHandler } from '../common/laya.custom';
import MenuUIView from './com/menu';
import AudioMudule from '../module/com/audio';
import BottomUIView from './bottom.js';
const commonGameInstance = CommonGameModule.getInstance();

export default class HeaderUIView extends HeaderUI {
    constructor() {
        super()
        this.init();
        this.initEvent();
        this.initConfig();
        HeaderUIView.instance = this;
    }

    static getInstance() { 
        return this.instance || new this();
    }
    
    init() {
        
        let poolmask = new Laya.Sprite();
        poolmask.graphics.drawRect(-20, 0, 600, 100, '#000000');    
        this.poolbox.mask = poolmask;
       
        observer.subscribe('update::useraccount', this.updateUserYuDou.bind(this));       
    }
    initConfig() {
        this.config = {
            tingDou: 0, //豆（左）
            yuNum: 0, //余（右）
            isFirstDefault: false // 是否第一次默认押注金额提示
        }
    }

    initEvent(){
         // 回退按钮
        commonGameInstance.isShowBtnBackHandler(this.Btn_back);
        // // 主页按钮
        commonGameInstance.isShowBtnHomeHandler(this.Btn_home);

        this.menu_box.addChild(MenuUIView.getInstance());
        //跑马灯
        CommonGameModule.getInstance().initMarquee(this.marquee_box);

        this.Btn_rank.on(Laya.Event.CLICK, this, () => { 
            AudioMudule.getInstance().play('btn'); 
            observer.publish("pop::rank", messageCenter);           
        });

        this.Btn_menu.on(Laya.Event.CLICK, this, () => {
           this.menu_box.getChildAt(0).toggle();
            AudioMudule.getInstance().play('btn'); 
        });

        this.poolbox.on(Laya.Event.CLICK,this,() =>{     
            messageCenter.emit("fuList")
            observer.publish("pop::fudai", messageCenter); 
            AudioMudule.getInstance().play('btn'); 
        });
        this.Btn_recharge.on(Laya.Event.CLICK,this,() =>{
            observer.publish("pop::recharge");
            AudioMudule.getInstance().play('btn'); 
        });
        this.Btn_yubox.on(Laya.Event.CLICK,this,this.yuNumPopBalanceShow.bind(this));

        // 点击其它区域菜单隐藏
        clickOtherAreaHandler(this.Btn_menu, this.menu_box);

    }

    poolAmountHandler(poolAmount){
        this.poolAmount.text = poolAmount;        
    }

     // 游戏中更新挺豆 & 余额
    updateUserYuDou(num) {
        // 增加余额
        if (num >= 0) {
            this._updateUserYu(num);

            // 扣减余额
        } else {
            //挺豆够扣的话就扣挺豆
            if (this.config.tingDou + num >= 0) {
                this._updateUserDou(num);
                //否则扣余额
            } else {
                this._updateUserYu(num);
            }
        }
    }

      // 更新用户挺豆（左边）
    _updateUserDou(num) {
        this.config.tingDou = Math.max(0, this.config.tingDou + num);
        this.douAmount.text = UTILS.getActiveStr(this.config.tingDou, 8);
    }


    // 更新用户余额（右边）
    _updateUserYu(num) {
        this.config.yuNum = Math.max(0, this.config.yuNum + num);
        this.yuAmount.text = UTILS.getActiveStr(this.config.yuNum, 8);

    }

    // 渲染用户余额
    renderUserAccount(data) {
        let tingDou = Number(data.TCoin) || 0;
        let yuNum = (Number(data.total) - tingDou) || 0;
        this.config.tingDou = tingDou;
        this.config.yuNum = yuNum;
        this.douAmount.text = UTILS.getActiveStr(tingDou, 8);
        this.yuAmount.text = UTILS.getActiveStr(yuNum, 8);

        this.defaultBetHandler(tingDou, yuNum);
    }

    // 默认投币额
    defaultBetHandler(tingDou, yuNum){
        let inputNum;
        if (this.config.isFirstDefault ) return;
        this.config.isFirstDefault = true;

        // 获取默认投币额
        let defaultBet = UTILS.getCookie("defaultBet" + GM.gameId + GM.user_id);
        defaultBet = defaultBet ? parseInt(defaultBet, 10) : null;

        // 存在cookie默认投币额 && 小于平台子账户余额
        if (defaultBet && defaultBet <= yuNum) {
            inputNum = defaultBet;
        } else {
            // 默认押注金额提示
            inputNum = commonGameInstance.defaultInputNotice(tingDou, yuNum);
        }

        // 最后转数字
        inputNum = Math.min(Number(inputNum), 300000);
        inputNum = Math.max(Number(inputNum), 100);

        // 更新投币金额
        observer.publish('bet::inputamount', inputNum);

        // 默认押注额
        observer.publish('pop::defaultbet',inputNum);
    }

    // 余额查询
    yuNumPopBalanceShow() {
        AudioMudule.getInstance().play('btn'); 
        // 未登录
        if (UTILS.willGotoLogin()) {
            return;
        }
        

        if (GM && GM.isCall_out === 1 && GM.popBalanceShow_out) {
            GM.popBalanceShow_out(GM.gameType);
        }

        // 更新余额
        messageCenter.emitAjax("userAccount");
    }

}
