//配置
import UTILS from './utils';

let localStatus = !UTILS.initDebug('act', 'game_pangoldcard');
let debug = localStatus || UTILS.initDebug('debugFE', '1');
let STATIC_VERTION = window.staticVertion || Date.now();

const GAME_CONFIG = {
    localStatus, //本地
    debug, //是否开启debug模式
    STATIC_VERTION, // 静态资源版本号
    gameWidth: 750, //游戏宽度
    gameHeight: 1334, //游戏高度
    screenMode: Laya.Stage.SCREEN_VERTICAL, //游戏垂直竖屏
    scaleMode: Laya.Stage.SCALE_FIXED_AUTO,
    // scaleMode: (window.innerHeight/Math.max(1,window.innerWidth)>1.78)? Laya.Stage.SCALE_SHOWALL: Laya.Stage.SCALE_FIXED_HEIGHT,//屏幕适配
    alignH: Laya.Stage.ALIGN_CENTER, //水平居中
    alignV: Laya.Stage.ALIGN_MIDDLE, //垂直居中
    SOUND_STATE_KEY: `sound_${GM.gameId}` // 纪录游戏的声音状态的字段
    
}


export default GAME_CONFIG;