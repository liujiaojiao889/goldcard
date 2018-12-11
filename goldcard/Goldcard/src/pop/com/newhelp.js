
/**
	新手引导弹层
*/
import zsySlider from '../../common/laya.zsySlider';
import { messageCenter, observer} from '../../module/init_module';
import AudioMudule from '../../module/com/audio'; 
import CardView from '../../uiScene/com/card';
import MiddleView from '../../uiScene/middle';
// / 'S':'黑桃'// 'H':'红桃' // 'C':'梅花' // 'D':'方块'
const CARDINFO = ["H6", "S1", "C5", "D4", "C7", "D10"];
const HANDINFO = ["H6"]

export class newHelpDialog extends helpNewUI{
	constructor(){
		super();
        this.flag = false;
        this.cardInfo = [];
		this.init();
	}

	init() {		
        this.initDom();
        this.tipani.play();	
       
	}
    // 注册
	registerAction({messageCenter,observer}) {		
		// 订阅弹层
		observer.subscribe('pop::newhelp', this.myShow.bind(this));
	}

	initDom() {       
        this.startBtn.on(Laya.Event.CLICK,this,()=>{
            AudioMudule.getInstance().play("btn");
            if(this.startBtn.index == 0){
              
                this.tip1.visible = false;
                this.tip2.visible = true;
                this.startBtn.index = 1;
                 this.tipBox1.visible = false;
                this.showcard(CARDINFO);
                Laya.Tween.to(this.tipBox1,{y:1010},1300,Laya.Ease.linearIn,Laya.Handler.create(this,function(){ 
                    this.tipBox1.visible = true;
                }));

            }else{  
                
                this.startBtn.visible =  false;          
                this.tipBox1.visible = false;                                                 
                this.goon.visible = true;
                this.flag = true;    
                Laya.Tween.to(this.tipBox2,{y:820},1000,Laya.Ease.linearIn,Laya.Handler.create(this,function(){ 
                     this.tipBox2.visible = true;  
                }));
                this.showcard(HANDINFO);   
            }
        });


        this.goon.on(Laya.Event.CLICK,this,()=>{
            messageCenter.emitAjax('userAccount'); 
            AudioMudule.getInstance().play("btn");
            this.Myclose();
        })
	   
	}
/**
 * 
 * 发牌牌
 */
   
    showcard(cardInfo){     
        cardInfo.forEach((item,index) => {
            if(this.flag){
                this.caeatcard(0,cardInfo);
            }else{
                this.caeatcard(index,cardInfo)
            }    
        }); 

        Laya.timer.once(1200,this,()=>{
            this.showResult();
        });

    }
/**
 * 
 * 创建牌
 */
    caeatcard(index,cardInfo){
         Laya.timer.once(200 * index, this, () => { 
            let none = "luck";
            let pokertype = cardInfo[index].substring(0,1); //花色       
			let  pokerNum = cardInfo[index].substr(1); //数字	
            let card = new CardView(pokertype,pokerNum,index,none); 	
            if(this.flag){
                card = new CardView(pokertype,pokerNum,6,none); 	
            }else{
                card = new CardView(pokertype,pokerNum,index,none); 	
            }
				
			card.scaleX = 0.9;
			card.scaleY = 0.9;
            card.x = 518;
            card.y = 600;
			card.pokerBack.visible = false;	
            this.cardInfo.push(card)
			this.cardBox.addChild(card); 
            card.pokerEnter();  

         });      
    }

    //展示相同的牌
    showResult(){
        if(this.cardInfo.length>6){
             this.cardInfo[0].cardani.visible = true;
             this.cardInfo[6].cardani.visible = true
        }
       
    }
	
	Myclose(){
		AudioMudule.getInstance().play("btn");
		this.close();
       
	}

	myShow() {
		this.popup();
	}
}

