
/**
	结算弹层
*/
import CommonGameModule from '../../module/com/commonGameModule';
import { createSkeleton } from '../../common/laya.custom';
import UTILS from '../../config/utils';
import { messageCenter, observer} from '../../module/init_module';
import AudioMudule from '../../module/com/audio';

export class ResultDialog extends ResultUI{
	constructor(){
		super();
		this.delay = null;
		this.init();
	}

	init() {
		this.closeBtn.on(Laya.Event.CLICK,this,()=>{
			this.close();

		});
	}

	// 注册
	registerAction({messageCenter,observer}) {		
		// // 订阅弹层
		observer.subscribe('result', this.myShow.bind(this));
	}

	myShow(data) {			
		if(parseInt(data.res.prizePoint) >0 ){	
			let path = 'res/dragon/win';
			let name = 'win';
			this.creatDragon(this.winbox,path,name);
			this.winAmount.text = "+" + data.res.prizePoint;
			this.delay = 2000;			
		}else{					
			let path = 'res/dragon/lose';
			let name = 'lose';
			this.creatDragon(this.losebox,path,name);
			this.delay = 2000;
			CommonGameModule.getInstance().jiujijin();
		}

		this.popup();         
		Laya.timer.once(this.delay, this, this.myClose);
		// 更新余额
        messageCenter.emitAjax("userAccount");

	}

    //添加动画
	creatDragon(target,path,name){
		target.visible = true;
		let targetani = createSkeleton(path);
		targetani.name = name ;
		target.addChild(targetani);
		targetani.pos(336,340);
		targetani.once(Laya.Event.STOPPED, this, () => {
			targetani.play('loop', true);
		});
		targetani.play('show', false);
		AudioMudule.getInstance().play(name); 
	}

	myClose(){		
		//销毁box里面的动画
		let windragon = this.winbox.find("win");
		let losedargon = this.losebox.find("lose");
		if(windragon){
			this.winbox.find("win").destroy(true);
		}
		if(losedargon){
			this.losebox.find("lose").destroy(true);
		}
	
		this.winbox.visible = false;
		this.losebox.visible = false;				
        Laya.timer.clear(this, this.close);
		this.close();
	}


}

