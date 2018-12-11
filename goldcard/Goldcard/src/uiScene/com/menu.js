import CommonGameModule from '../../module/com/commonGameModule';
import UTILS from '../../config/utils';
import GAME_CONFIG from '../../config/config';
import { observer,messageCenter } from '../../module/init_module';
import RoomScene from '../room';
import AudioMudule from '../../module/com/audio';
/**
 * Menu ui visualization of the data that model contains.
 * 菜单
 * @class      MenuUIView (name)
 */
const SOUND_STATE_KEY = `sound_${GM.gameId}`;
export default class MenuUIView extends MenuUI {
    constructor() {
        super()
        this.init()

        MenuUIView.instance = this;
    }

    static getInstance() {
        return this.instance || new this();
    }

    init() {
        // 初始化公告按钮
        CommonGameModule.getInstance().noticeSystem(this, 427);
        this.initEvent();
        this.initSoundState();                             
        this.hide();
    }

    initEvent() {
        // 声音   
        this.btn_sound.on(Laya.Event.CLICK, this, () => { 
            this.changeSoundState();
        });

        // 帮助
        this.btn_help.on(Laya.Event.CLICK, this, () => {
            AudioMudule.getInstance().play("btn");     
            observer.publish('pop::help',messageCenter);
            messageCenter.emit("help");
        });


    }

    // 初始化声音状态
    initSoundState() {
          // 取cookie
        let _current = UTILS.getCookie(SOUND_STATE_KEY);
        // 0 开启  1  关闭
        // 0  false  1  true
        if (_current == 'false') {
            this.btn_voice.index = 1;
            observer.publish('game::voice', false);
            this.voicetext.text = "音效:关";
        } else { 
            UTILS.setCookie(SOUND_STATE_KEY, 'true');          
            this.btn_voice.index = 0;     
            this.voicetext.text = "音效:开";
            observer.publish('game::voice', true);                               
        }

    }

    // 改变声音状态
    changeSoundState() {
        // 取cookie
        let _current = UTILS.getCookie(SOUND_STATE_KEY);
        let bool;
        if (_current === 'true') {
            _current = 'false';
            this.btn_voice.index = 1;
            this.voicetext.text = "音效:关";
            bool = false;
        } else {
            AudioMudule.getInstance().play('btn');
            _current = 'true';
            this.btn_voice.index = 0;
            this.voicetext.text = "音效:开";
            bool = true;
        }

        observer.publish('game::voice', bool);
        UTILS.setCookie(SOUND_STATE_KEY,_current);
    }

    // 设置中心点
    setAnchor() {
        let attr = null;
        if (this.x === 0) {
            attr = { pivotX: 0.5 * this.width, x: 0.5 * this.width };
        } else {
            attr = { pivotX: 0, x: 0 };
        }

        this.set(attr);
    }

    toggle() {
        if (this.visible) {
            this.hide();
        } else {
            this.show();
        }
    }

    show() {
        this.visible = true;
        this.setAnchor();
        Laya.Tween.from(this, { scaleX: 0, scaleY: 0 }, 200, Laya.Ease.backOut, Laya.Handler.create(this, this.setAnchor));
    }

    hide() {
        this.visible = false;
    }


}
