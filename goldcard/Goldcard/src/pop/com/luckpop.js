
/**
 * Class for window pop dialog.
 *福袋弹层
 */
// import { createSkeleton } from '../../common/laya.custom';
import UTILS from '../../config/utils';
import CardView from '../../uiScene/com/card';
import AudioMudule from '../../module/com/audio'; 
export class LuckpopDialog extends LuckpopUI{
	constructor(){
		super();
		this.init();
	}
	// 注册
	registerAction({messageCenter,observer}) {
		// 订阅弹层
		messageCenter.registerAction("fuList",this.fuListHandler.bind(this));
	
		observer.subscribe('pop::fudai', this.myShow.bind(this));
	}

	init(){
        this.btn_close.on(Laya.Event.CLICK, this, this.myClose);
		this.LuckBox.vScrollBarSkin = '';
	}


    fuListHandler(data){
		this.poolAmount.text = data.res.poolAmount;
		this.betAmount.text = data.res.betMin;
		if(data.res.list.length > 0){	
			let fulist = data.res.list || [];
			for(let i = 0;i<fulist.length;i++){
				let pan = new luckpanel(fulist[i].user_name,fulist[i].prize_point,fulist[i].card,i);
				pan.y = 70*i;
		        pan.x = 0;
				this.LuckBox.addChild(pan);
			}
			
		}else{
			this.nodata.text = '暂时没有记录！快玩游戏吧！'
		}	

	}
	myShow() {
        this.show();
	}


    myClose() {
		AudioMudule.getInstance().play("btn");
		this.LuckBox.removeChildren();
        this.close();

    }
}

class luckpanel extends luckPanelUI{
	constructor(name,Amount,cardInfo,i){
		super();
		this.init(name,Amount,cardInfo,i);

	}
	init(name,Amount,cardInfo,i){
		if(i%2 ==0){
			this.bg.visible = true;
		}else{
			this.bg.visible = false;
		}
		
		this.name.text = UTILS.getActiveStr(name,7);
		this.Amount.text = UTILS.getActiveStr(Amount,9);
		cardInfo.forEach((item,index) => {
            let pokertype = cardInfo[index].substring(0,1); //花色       
			let pokerNum = cardInfo[index].substr(1); //数字
			let none = "luck";
			let card = new CardView(pokertype,pokerNum,index,none); 		
			card.scaleX = 0.2;
			card.scaleY = 0.2;
			card.pokerBack.visible = false;	
			card.x = index*17;
			card.y = 0;
			this.cardBox.addChild(card);   
			if(index == cardInfo.length-1){
				let redbg = new Laya.Image('res/alert/pink.png');
				redbg.width = card.width;
				redbg.height = card.height;
				card.addChild(redbg);

			}
        }); 
		
		
		
	}
}