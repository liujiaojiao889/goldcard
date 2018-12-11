
/**
	帮助弹层
*/
import zsySlider from '../../common/laya.zsySlider';
import { messageCenter, observer} from '../../module/init_module';
import AudioMudule from '../../module/com/audio'; 
export class HelpPopDialog extends HelpUI{
	constructor(){
		super();
		this.oddtext = [];
		this.init();
	}

	init() {
		
		this.oddtext.push(this.oddtext1,this.oddtext2,this.oddtext3,this.oddtext4,this.oddtext5,this.oddtext6)
		this.initDom();
		this.initEvent();
	}

	// 注册
	registerAction({messageCenter,observer}) {		
		// // 订阅弹层
		messageCenter.registerAction("help",this.helpHandler.bind(this));
		observer.subscribe('pop::help', this.myShow.bind(this));
	}

	initDom() {
	    // 初始化帮助页滑动效果
		let slider = new zsySlider(this.helpWarp);
	}

	initEvent() {
		this.backBtn.on(Laya.Event.CLICK, this, this.Myclose);
		this.closeBtn.on(Laya.Event.CLICK, this, this.Myclose);	
	}
	//投币额 和倍率
	helpHandler(data){
		
		this.betAmount.text = data.res.betMin;
		let odd = data.res.oddConf;

		for(let i in odd){
			let index = parseInt(i) - 1;
			if(index<6){
				this.oddtext[index].text = odd[i];
			}
			
		}

	}
	Myclose(){
		AudioMudule.getInstance().play("btn");
		this.close();
	}

	myShow() {
		this.scale(1.2,1.2);
		this.popup();
	}
}

