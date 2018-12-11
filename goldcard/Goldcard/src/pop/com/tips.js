/**
 * 公共提示弹层
 */
import { messageCenter, observer} from '../../module/init_module';
import AudioMudule from '../../module/com/audio'; 
export class MessageDialog extends MessageUI {
    constructor(...args) {
        super(...args);
       
        this.init();
    }

    init() {
        this.sureBtn.index = 1;
        this.initConfig();

        this.initEvent();
       
    }

    registerAction({ messageCenter, observer }) {

        // 订阅弹层出现
        observer.subscribe('common::tips', this.myShow.bind(this));
    }

 
    initConfig() {
     
        this.confirmCallBack = null; //确认回调
        this.cancelCallBack = null; //取消回调
    }

    initEvent() {
        // 关闭按钮
        this.closeBtn.on(Laya.Event.CLICK, this, () => {
            this.cancelCallBack && this.cancelCallBack();
            AudioMudule.getInstance().play("btn");
            this.myClose();

        });

        // 确定关闭按钮
        this.sureBtn.on(Laya.Event.CLICK, this, () => {
            AudioMudule.getInstance().play("btn");
           
            this.confirmCallBack && this.confirmCallBack();
            this.myClose();
        });

    }

    myShow(msg, confirmCallBack, cancelCallBack) {

        this.msg.text = msg;

        this.confirmCallBack = confirmCallBack;
        this.cancelCallBack = cancelCallBack;

        // 需要取消回调
        if (this.cancelCallBack) {
            window.UIConfig.closeDialogOnSide = false;

        }else {
            Laya.timer.once(5000, this, this.myClose);
        }

        this.popup();

    }

    myClose() {
        this.close();
        window.UIConfig.closeDialogOnSide = true;
        this.confirmCallBack = null;
        this.cancelCallBack = null;    
        Laya.timer.clear(this, this.myClose);
    }

}
