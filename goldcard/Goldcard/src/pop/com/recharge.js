/**
 * 充值
 *
 */

import UTILS from '../../config/utils.js';
import { messageCenter, observer} from '../../module/init_module';
import AudioMudule from '../../module/com/audio'; 
const VALUES = ["10", "50", "100", "200"];

export class RechargeDialog extends RechargeUI{
        constructor(...args){
            super(...args);
            this.init();
        }
        init () {
            this.keyBoardNumber = new window.Tools.KeyBoardNumber();    
            this.rechargeTab.selectedIndex = 2;
            this.rechageNum.text = 100;
            //取php的配置
            if(window.recharge_odd){
                this.rechargeText.text = window.recharge_odd;
            }
            
            this.rechargeTab.selectHandler = new Laya.Handler(this, function (index) { 
                if(index == -1){return;}                
                this.rechageNum.text = VALUES[index];
                AudioMudule.getInstance().play("btn");
            });
            this.rechageInput.on(Laya.Event.CLICK,this,this.showKeyboard);
            this.closeBtn.on(Laya.Event.CLICK, this,this.Myclose);
            this.rechargeBtn.on(Laya.Event.CLICK, this, function(){
               AudioMudule.getInstance().play("btn");     
               if(this.rechageNum.text>0){
                    this.gorechange(); 
               }else{
                    return;
               }
               this.close();
               
            });                 
        }
        
        // 订阅弹层
        registerAction({messageCenter, observer}) {           
            observer.subscribe('pop::recharge', this.myShow.bind(this));
        }       
        onKeyboardInput (value) {
            this.rechageNum.text = value;
            for(let i in VALUES){
                if(VALUES[i] == value){
                    this.rechargeTab.selectedIndex = i;
                    return;
                }
            }
            this.rechargeTab.selectedIndex = -1;
        }
        showKeyboard () {
            AudioMudule.getInstance().play("btn");
            let KEYBOARD_CONFIG = {
                "length" : 8,
                "input" : this.onKeyboardInput.bind(this),
                "close" : function (type, value) {
                    if(type === "confirm"){
                        this.onKeyboardInput(value);
                    }
                }.bind(this)
            };
            this.keyBoardNumber.enter(this.rechageNum.text, KEYBOARD_CONFIG);
        }
        gorechange(){ 
          
            let gameId = window.gameId;
            let gameName = window.tradeName;
            let shuoldPay = this.rechageNum.text;
            let gameplatform = window.platform;
            let currentUrl = window.redirect_uri;
            let _targetUrl = '';
            if (Number(shuoldPay) > 0) {
                _targetUrl = `/?act=payment&gameId=${gameId}&tradeName=${gameName}&amount=${shuoldPay}&platform=${gameplatform}&redirect_uri=${currentUrl}`;

                window.location.href = _targetUrl;
            }

        }

        // 出现
        myShow() {
            this.scale(1.2,1.2);
            this.popup();
        }
        Myclose(){
            AudioMudule.getInstance().play("btn");
            this.close();
        }
    }

  

