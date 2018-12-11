
import { HelpPopDialog } from './com/helpPop';
import { ResultDialog } from './com/result';
import { RechargeDialog } from './com/recharge';
import { RankPopDialog } from './com/rankpop'
import { MessageDialog } from './com/tips';
import DefaulDialog  from './com/defaultBet';
import { LuckpopDialog } from './com/luckpop';
import {newHelpDialog} from './com/newhelp';
import {FudaiDialog} from './com/fudai';
// // 初始化所有弹层

export default function initAllPop({messageCenter, observer}) {
    // // 帮助弹层
    new HelpPopDialog().registerAction({messageCenter, observer});
    //结算
    new ResultDialog().registerAction({messageCenter, observer});
    
    // // 排行榜
    new RankPopDialog().registerAction({messageCenter, observer});
    // //充值
    new RechargeDialog().registerAction({messageCenter, observer});
    // // 福袋详情
    new LuckpopDialog().registerAction({messageCenter, observer});
    // // 公共提示
    new MessageDialog().registerAction({messageCenter, observer});
    // // 默认投币额
    new  DefaulDialog().registerAction({messageCenter, observer});
    //新手引导
    new  newHelpDialog().registerAction({messageCenter, observer});
    //福袋
    new FudaiDialog().registerAction({messageCenter, observer})

}