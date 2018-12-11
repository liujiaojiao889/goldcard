/**
 * { item_description }
    默认投币额提示
 */
import { messageCenter, observer} from '../../module/init_module';


export default class DefaulDialog extends DefaultBetUI{
    constructor() {
        super();
        
    }

  
    // 订阅
    registerAction() {

        // 投币成功
        observer.subscribe('pop::defaultbet', this.show.bind(this));

    }

    show(txt){
        this.betAmount.text = txt;

        this.popup();
        Laya.timer.once(2000, this, this.close);
    }



}