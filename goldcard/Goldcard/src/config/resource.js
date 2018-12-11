import GAME_CONFIG from './config';


let XML = Laya.Loader.XML;
let IMAGE = Laya.Loader.IMAGE;
let ATLAS = Laya.Loader.ATLAS;
let BUFFER = Laya.Loader.BUFFER;

// 所有的资源
const RESOURCE = {};
// 游戏版本号
const GAME_VERSION = {};

// 字体资源
let fonts = [
    { url: "res/game/amount.fnt", name: 'amount', type: XML },
    { url: "res/game/timer.fnt", name: 'timer', type: XML },
    { url: "res/game/poker_red.fnt", name: 'poker_red', type: XML },
    { url: "res/game/poker_black.fnt", name: 'poker_black', type: XML }
  
];

// loading需要的资源优先加载
let loadingRes = [
    { url: 'res/loading/bg.jpg', type: IMAGE },
    { url: 'res/loading/loadbar.png', type: IMAGE },
    { url: 'res/loading/barbg.png', type: IMAGE },
    { url: 'res/loading/tip.png', type: IMAGE },
    { url: 'res/dragon/logo.png', type: IMAGE },
    { url: 'res/dragon/logo.sk', type: BUFFER }
    
]

// 不打包图片资源
let unPackRes = [
    //   game
    { url: 'res/game/bg.png', type: IMAGE },
    { url: 'res/game/car.png', type: IMAGE },
    { url: 'res/game/clip_icon.png', type: IMAGE },
    { url: 'res/game/clip_j.png', type: IMAGE },
    { url: 'res/game/clip_q.png', type: IMAGE },
    { url: 'res/game/clip_k.png', type: IMAGE },
    { url: 'res/game/clip_poker.png', type: IMAGE },
    { url: 'res/game/marquee.png', type: IMAGE },
    { url: 'res/game/mbg.png', type: IMAGE },
    { url: 'res/game/ti.png', type: IMAGE },
    { url: 'res/game/tou.png', type: IMAGE },
    { url: 'res/dragon/odd.png', type: IMAGE },
    { url: 'res/dragon/odd.sk', type: BUFFER },
    { url: 'res/dragon/fudai.png', type: IMAGE },
    { url: 'res/dragon/fudai.sk', type: BUFFER},
    { url: 'res/dragon/win.png', type: IMAGE },
    { url: 'res/dragon/win.sk', type: BUFFER},
    { url: 'res/dragon/lose.png', type: IMAGE },
    { url: 'res/dragon/lose.sk', type: BUFFER},
    { url: 'res/dragon/bet.png', type: IMAGE },
    { url: 'res/dragon/bet.sk', type: BUFFER},
    { url: 'res/dragon/double.png', type: IMAGE },
    { url: 'res/dragon/double.sk', type: BUFFER},
    { url: 'res/dragon/hot.png', type: IMAGE },
    { url: 'res/dragon/hot.sk', type: BUFFER},
    { url: 'res/dragon/card.png', type: IMAGE },
    { url: 'res/dragon/card.sk', type: BUFFER},  
    { url: 'res/dragon/bat.png', type: IMAGE },
    { url: 'res/dragon/bat.sk', type: BUFFER},  
    { url: 'res/dragon/poolani.png', type: IMAGE },
    { url: 'res/dragon/poolani.sk', type: BUFFER},   
    // alert
  
    { url: 'res/alert/clip_rebg.png', type: IMAGE },
    { url: 'res/alert/default.png', type: IMAGE },
    { url: 'res/alert/help1.png', type: IMAGE },
    { url: 'res/alert/help2.png', type: IMAGE },
    { url: 'res/alert/luckbg.png', type: IMAGE },
    { url: 'res/alert/luckcon.png', type: IMAGE },
    { url: 'res/alert/publicbg.png', type: IMAGE },    
    { url: 'res/alert/rebg.png', type: IMAGE },
    { url: 'res/alert/tipbg.png', type: IMAGE },
   
];

// 打包的json文件
let packRes = [
    { url: 'res/game.json', type: ATLAS },
    { url: 'res/alert.json', type: ATLAS }
];

// 字体
RESOURCE.fonts = fonts;
// 加载页资源
RESOURCE.loadingRes = loadingRes;
// 非加载页资源
RESOURCE.disLoadingRes = [...unPackRes, ...packRes];

// 总的资源
RESOURCE.images = [...RESOURCE.disLoadingRes, ...loadingRes];


let loop = (arr) => {
    if (typeof arr !== 'object') {
        return;
    }
    arr.forEach(function(item, i) {
        let newUrl;
        let jsonIndex;
        let fntIndex;
        let atlasIndex;
        if (typeof item.url === 'string') {
            // 若加载后缀有 .json 和.fnt 的, 则连它们对应的 png一起添加了
            jsonIndex = item.url.indexOf('.json');
            fntIndex = item.url.indexOf('.fnt');
            atlasIndex = item.url.indexOf('.atlas');
            if (jsonIndex > -1) {
                newUrl = item.url.substr(0, jsonIndex) + '.png';
            } else if (fntIndex > -1) {
                newUrl = item.url.substr(0, fntIndex) + '.png';
            }else if (atlasIndex > -1) {
                newUrl = item.url.substr(0, atlasIndex) + '.png';
            }

            if (newUrl) {
                GAME_VERSION[newUrl] = GAME_CONFIG.STATIC_VERTION;
            }

            GAME_VERSION[item.url] = GAME_CONFIG.STATIC_VERTION;
        } else {
            loop(item);
        }
    });
}

loop([...RESOURCE.fonts, ...RESOURCE.images]);


export { RESOURCE, GAME_VERSION };
