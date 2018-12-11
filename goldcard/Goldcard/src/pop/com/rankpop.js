/**
 * 排行榜弹层
 */
import UTILS from '../../config/utils.js';
import { messageCenter, observer} from '../../module/init_module';
import AudioMudule from '../../module/com/audio'; 
export class RankPopDialog extends RankUI {
	constructor(...args){
		super(...args);
		this.init();
	}

	init() {
        
		this.initConfig();

		this.initEvent();
	}

	// 注册

	registerAction({messageCenter, observer}) {			
		messageCenter.registerAction("day", this.renderRankList.bind(this));   // 日周月
		messageCenter.registerAction("week", this.renderRankList.bind(this));
		messageCenter.registerAction("month", this.renderRankList.bind(this));
		messageCenter.registerAction("rankList",this.renderRichList.bind(this)) //富豪榜
		messageCenter.registerAction("myRank", this.rendermMyPrizeLog.bind(this));  // 战绩
		// 订阅弹层
		observer.subscribe("pop::rank",this.myShow.bind(this));
	}


	// 触发
	dispatchAction(messageCenter) {
        messageCenter.emitAjax(this.config.perioArr[0]);
		messageCenter.emitAjax(this.config.perioArr[3]);
		
	}

	// 初始化配置参数
	initConfig() {
		this.config = {
			isFirstMyList : true ,  //第一次渲染我的战绩
			perioArr : ["day", "week", "month","rankList"] ,  //日周月排行榜
			isFirst : true
		}
	}

	// 初始化事件
	initEvent() {		
		this.closeBtn.on(Laya.Event.CLICK, this, this.Myclose);
		// 去登录
		this.rankMineLogin.on(Laya.Event.CLICK, this, UTILS.gotoLogin);

		// tab切换
		this.rankTab.selectHandler = new Laya.Handler(this, this.onTabSelected);
		//我的战绩
		this.rankMine.vScrollBarSkin = ''; 
		//日周月
		this.rankList.vScrollBarSkin = ''; 
		this.rankList.array = [];
		this.rankMine.array = [];	
		this.rankTab.selectedIndex = 0;

	}
 
	// tab切换
	onTabSelected(index) {
		AudioMudule.getInstance().play("btn");
		let target = 0;
		let type;     
		if(index==-1){
			return;
		}  		
		if(index === 3){
            target = 1;
			if(GM.userLogged == false){
				this.isLoadingOrContent(3);		
			}else{
				messageCenter.emit('myRank');
			}
					
		}else{
            target = 0;	
            this.rankList.array = [];      
			// 1 2 3
			type = this.config.perioArr[index];
			// 发送排行榜ajax请求
			messageCenter.emitAjax(type);
            this.isLoadingOrContent(1);	
					
		}
		this.rankCon.selectedIndex = target;
		
	}

	// 富豪榜渲染
	renderRichList(data) {
        
		let infoArray = data.data || [];
		if(data.code !== "000" ){
			return;
		}
        if(infoArray.length>0){
			let temp = [];
			infoArray.forEach((item,index) => {			
				temp.push({
					name : UTILS.getActiveStr(item.nickname , 4),
					amount : UTILS.getActiveStr(parseInt(item.amount) , 9)
				});

			})
			this.rich_list.array = temp;
		}
       

	}

	// 我的战绩
	rendermMyPrizeLog(data) {
		
       
		let prizelist = data.res.list;
		if(prizelist.length == 0){
			this.isLoadingOrContent(0);
		}else{
			this.isLoadingOrContent(2);
		}
		let result = [];
		prizelist.forEach((item,index) => {
			result.push({
				bg : {visible : index%2 == 1 ? true : false},
				num  : index+1,
				coin : UTILS.getActiveStr(parseInt(item.prize_amount),9),
				time : item.raw_add_time

			});
	
		});
      
		this.rankMine.array = result;
	  
	}
    
	// 日周月排行榜
	//   1 下降 2 平  3  上升
	// index 0 平 1 上  2 下降
	renderRankList(response) {
		if(response.data.length == 0){
           this.isLoadingOrContent(0); 
        }else{
           this.isLoadingOrContent(2);  
           let result = [];

            response.data.forEach((item , index) => {
                let trend = Number(item.rank_trend);
				let trendindex;
				if(trend == 1){
					trendindex = 2;
				}else if(trend == 2){
					trendindex = 0;
				}else if(trend == 3){
					trendindex = 1;
				}
                result.push({
					bg : {visible : index%2 == 1 ? true : false},
                    rankNum : {
                        text : index+1
                    },
                    name : UTILS.getActiveStr(item.nickname , 9),
                    amount : UTILS.getActiveStr(parseInt(item.amount) , 10),
                    trendIcon :  {
                        index :  trendindex
                    }
                })
            })
        
            this.rankCon.selectedIndex = 0;
            this.rankList.array = result; 
        }
		
	}

    // 加载中或者显示数据
	isLoadingOrContent(type) {
		// 暂无数据
		if(type === 0){
			this.rankNodata.visible = true;
			this.rankNodata.text = "暂无数据噢…";
			
		// 加载中
		}else if(type === 1){
			this.rankNodata.visible = true;
			this.rankNodata.text = "加载中…";
			
			this.rankMineLogin.visible = false;

		// 显示内容
		}else if(type === 2){
			this.rankNodata.visible = false;		
			this.rankMineLogin.visible = false;

		// 未登录
		}else if(type === 3){
			this.rankNodata.visible = false;
			this.rankMineLogin.visible = true;
		}

	}
	

	// 出现
	myShow(messageCenter) {
		if(this.config.isFirst){
			// 触发
			this.dispatchAction(messageCenter);
			this.isLoadingOrContent(1);
			this.config.isFirst = false;
		}
		this.rankTab.selectedIndex  = this.rankCon.selectedIndex = 0;	
	
		this.popup();

	}

	Myclose(){
		AudioMudule.getInstance().play("btn");
		this.close();
	}


}                                           