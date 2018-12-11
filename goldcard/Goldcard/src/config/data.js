// ajax地址数据
export const AJAX_URL = {
    day: `/?act=game_pangoldcard&st=get_today_bet_rank&userId=${userId}`,
    week: `/?act=game_pangoldcard&st=get_bet_rank&type=week&userId=${userId}`,
    month: `?act=game_pangoldcard&st=get_bet_rank&type=month&userId=${userId}`,
    rankList: `?act=game_pangoldcard&st=get_bet_rank&type=day&userId=${userId}`,
    userAccount: `/?act=game_gamebase&st=queryUserAccount&data=*&gameId=${gameId}&type=1` //用户余额
}

// 错误信息
export const ERROR_TEXT = {
    '3' : '参数有误',
    '4' : '用户正在投币，请勿刷接口',
    '5' : '余额不足',
    '6' : '用户还未建档',
    '7' : '服务器开小差了，投币额以欢乐值的形式已退回到您的账号了哟~',
    '10' : '福袋中奖已锁定',  
    '12' : '用户上次押注还未完成，请勿刷接口',
    '21' : '游戏维护中，请刷新页面',
    '31' : '地球信号不好，请稍后重试~',
    '50' : '单笔押注上限',
    '51' : '单日押注上限',
    '81' : '触发OTP' ,
    '82' : '支付渠道禁用',
    '1001' : '您的操作太频繁，请稍后再试!',
    '1002' : '您的牌已发!',
    '1003' : '无法押注',
    '1004' : '发牌失败,金额已经回滚,请重试!'
}

// 声音集合
export const AUDIO_SOURCES = ["pushcard","countdow","lose","win","showcard","btn","fudai"];




