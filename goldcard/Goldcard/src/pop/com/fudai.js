
/**
	福袋弹层
*/
import CommonGameModule from '../../module/com/commonGameModule';
import { createSkeleton } from '../../common/laya.custom';
import UTILS from '../../config/utils';
import { messageCenter, observer} from '../../module/init_module';
import AudioMudule from '../../module/com/audio';

export class FudaiDialog extends fudaiUI{
	constructor(){
		super();
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
		observer.subscribe('fudai', this.myShow.bind(this));
	}

	myShow(data) {	
		    AudioMudule.getInstance().play('fudai'); 
		    let fudaiani = createSkeleton('res/dragon/fudai');	
			fudaiani.name = 'fudai';
			fudaiani.pos(336,340);
			fudaiani.once(Laya.Event.STOPPED, this, () => {
				fudaiani.play('loop', true);
			});
			fudaiani.play('show', false);
			
			this.fudaibox.addChild(fudaiani);
			this.fudaipoint.text = "+" + data.res.fuPoint;	
			this.popup();
		
			Laya.timer.once(2000, this, this.myClose);
			// 更新余额
			messageCenter.emitAjax("userAccount");

	}
	
	myClose(){	
		let fudaidargon = this.fudaibox.find("fudai");
		if(fudaidargon){
			this.fudaibox.find("fudai").destroy(true);
		}			
			
        Laya.timer.clear(this, this.close);
		this.close();
	}


}

