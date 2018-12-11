var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var DefaultBetUI=(function(_super){
		function DefaultBetUI(){
			
		    this.betAmount=null;

			DefaultBetUI.__super.call(this);
		}

		CLASS$(DefaultBetUI,'ui.Alert.DefaultBetUI',_super);
		var __proto__=DefaultBetUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(DefaultBetUI.uiView);
		}
		DefaultBetUI.uiView={"type":"Dialog","props":{"width":515,"height":242},"child":[{"type":"Image","props":{"y":0,"x":0,"width":515,"skin":"res/alert/default.png","height":242}},{"type":"Box","props":{"y":81,"x":61},"child":[{"type":"Label","props":{"y":0,"x":-29,"width":369,"text":"土豪，您的默认投币额为","height":43,"fontSize":32,"font":"SimHei","color":"#bbbbf7"}},{"type":"Label","props":{"y":39,"x":28,"width":364,"text":"如有需要可自行修改哦~","height":43,"fontSize":32,"font":"SimHei","color":"#bbbbf7"}},{"type":"Label","props":{"y":0,"x":327,"width":110,"var":"betAmount","text":"0","height":43,"fontSize":32,"font":"SimHei","color":"#f67935","align":"center"}}]}]};
		return DefaultBetUI;
	})(Dialog);
var fudaiUI=(function(_super){
		function fudaiUI(){
			
		    this.fudaibox=null;
		    this.fudaipoint=null;
		    this.closeBtn=null;

			fudaiUI.__super.call(this);
		}

		CLASS$(fudaiUI,'ui.Alert.fudaiUI',_super);
		var __proto__=fudaiUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(fudaiUI.uiView);
		}
		fudaiUI.uiView={"type":"Dialog","props":{"width":673,"height":680},"child":[{"type":"Box","props":{"y":10,"x":10,"width":673,"var":"fudaibox","height":680},"child":[{"type":"Label","props":{"y":479,"x":182,"width":309,"var":"fudaipoint","text":"+99999","height":59,"font":"amount","align":"center"}},{"type":"Label","props":{"y":565,"x":204,"width":265,"text":"恭喜您获得同色牌型","height":40,"fontSize":28,"font":"Microsoft YaHei","color":"#fff177","align":"center"}}]},{"type":"Image","props":{"y":122,"x":538,"var":"closeBtn","skin":"res/alert/close.png"}}]};
		return fudaiUI;
	})(Dialog);
var HelpUI=(function(_super){
		function HelpUI(){
			
		    this.helpWarp=null;
		    this.betAmount=null;
		    this.oddtext1=null;
		    this.oddtext2=null;
		    this.oddtext3=null;
		    this.oddtext4=null;
		    this.oddtext5=null;
		    this.oddtext6=null;
		    this.closeBtn=null;
		    this.backBtn=null;

			HelpUI.__super.call(this);
		}

		CLASS$(HelpUI,'ui.Alert.HelpUI',_super);
		var __proto__=HelpUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HelpUI.uiView);
		}
		HelpUI.uiView={"type":"Dialog","props":{"width":650,"height":1100},"child":[{"type":"Box","props":{"y":4,"x":0,"scaleY":1.1,"scaleX":1.1},"child":[{"type":"Image","props":{"width":593,"skin":"res/alert/publicbg.png","height":993}},{"type":"Box","props":{"y":107,"x":47,"width":505,"var":"helpWarp","height":845},"child":[{"type":"Box","props":{"y":0,"x":0,"width":545,"name":"con","height":845},"child":[{"type":"ViewStack","props":{"y":-10,"x":0,"width":505,"selectedIndex":1,"name":"list","height":845},"child":[{"type":"Box","props":{"y":0,"x":0,"width":505,"name":"item0","height":845},"child":[{"type":"Image","props":{"y":-63,"x":0,"width":505,"skin":"res/alert/help1.png","name":"Img","height":845},"child":[{"type":"Label","props":{"y":632,"x":169,"width":61,"var":"betAmount","height":29,"fontSize":21,"font":"Arial","color":"#f56221","align":"center"}}]}]},{"type":"Box","props":{"y":0,"x":0,"width":505,"name":"item1","height":845},"child":[{"type":"Image","props":{"y":-56,"x":4,"width":505,"skin":"res/alert/help2.png","name":"Img","height":845},"child":[{"type":"Label","props":{"y":382,"x":315,"width":66,"var":"oddtext1","text":"10倍","height":30,"fontSize":21,"font":"Arial","color":"#dcd3fd","bold":true,"align":"center"}},{"type":"Label","props":{"y":418,"x":315,"width":66,"var":"oddtext2","text":"10倍","height":30,"fontSize":21,"font":"Arial","color":"#dcd3fd","bold":true,"align":"center"}},{"type":"Label","props":{"y":454,"x":315,"width":66,"var":"oddtext3","text":"10倍","height":30,"fontSize":21,"font":"Arial","color":"#dcd3fd","bold":true,"align":"center"}},{"type":"Label","props":{"y":490,"x":315,"width":66,"var":"oddtext4","text":"10倍","height":30,"fontSize":21,"font":"Arial","color":"#dcd3fd","bold":true,"align":"center"}},{"type":"Label","props":{"y":526,"x":315,"width":66,"var":"oddtext5","text":"10倍","height":30,"fontSize":21,"font":"Arial","color":"#dcd3fd","bold":true,"align":"center"}},{"type":"Label","props":{"y":562,"x":315,"width":66,"var":"oddtext6","text":"10倍","height":30,"fontSize":21,"font":"Arial","color":"#dcd3fd","bold":true,"align":"center"}}]}]}]}]},{"type":"Tab","props":{"y":710,"x":223,"width":59,"selectedIndex":0,"name":"pagination","height":21},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":2,"skin":"res/alert/clip_point.png","name":"item0"}},{"type":"Button","props":{"y":0,"x":34,"stateNum":2,"skin":"res/alert/clip_point.png","name":"item1"}}]}]},{"type":"Button","props":{"y":33,"x":510,"width":58,"var":"closeBtn","stateNum":1,"skin":"res/alert/close.png","height":58}},{"type":"Image","props":{"y":844,"x":167,"var":"backBtn","skin":"res/alert/gobtn.png"}},{"type":"Image","props":{"y":9,"x":179,"skin":"res/alert/helpT.png"}}]}]};
		return HelpUI;
	})(Dialog);
var helpNewUI=(function(_super){
		function helpNewUI(){
			
		    this.tipani=null;
		    this.ani3=null;
		    this.tipBox1=null;
		    this.tip1=null;
		    this.tip2=null;
		    this.goon=null;
		    this.cardBox=null;
		    this.startBtn=null;
		    this.tipBox2=null;

			helpNewUI.__super.call(this);
		}

		CLASS$(helpNewUI,'ui.Alert.helpNewUI',_super);
		var __proto__=helpNewUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(helpNewUI.uiView);
		}
		helpNewUI.uiView={"type":"Dialog","props":{"width":1334,"height":1334},"child":[{"type":"Image","props":{"y":1017.2,"x":752,"var":"tipBox1","skin":"res/alert/helptip.png"},"compId":3,"child":[{"type":"Box","props":{"y":31,"x":15,"width":249,"var":"tip1","height":71},"child":[{"type":"Label","props":{"y":1,"text":"1.","fontSize":26,"font":"Arial","color":"#00f6ff"}},{"type":"Label","props":{"x":24,"wordWrap":true,"width":225,"text":"点击“发牌”则 随机获得1-8张底牌","height":74,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}}]},{"type":"Box","props":{"y":20,"x":17,"width":249,"visible":false,"var":"tip2","height":85},"child":[{"type":"Label","props":{"y":1,"text":"2.","fontSize":26,"font":"Arial","color":"#00f6ff"}},{"type":"Label","props":{"y":-3,"x":26,"wordWrap":true,"width":225,"text":"点可选择要牌或加 倍，系统随机发一张 牌","height":84,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}}]}]},{"type":"Image","props":{"y":1020,"x":538,"visible":false,"var":"goon","skin":"res/alert/gobtn.png"}},{"type":"Box","props":{"y":250,"x":295,"width":751,"var":"cardBox","height":650},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"res/game/ti.png"}}]},{"type":"Clip","props":{"y":1193,"x":754,"var":"startBtn","skin":"res/game/clip_StartBtn.png","index":0,"clipY":2}},{"type":"Image","props":{"y":830,"x":571,"visible":false,"var":"tipBox2","skin":"res/alert/helptip2.png"},"compId":13,"child":[{"type":"Box","props":{"y":29,"x":19,"width":249,"height":84},"child":[{"type":"Label","props":{"y":1,"text":"3.","fontSize":26,"font":"Arial","color":"#00f6ff"}},{"type":"Label","props":{"x":24,"wordWrap":true,"width":225,"text":"当要的牌和底牌有 相同的牌即可获胜哦","height":74,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}}]}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"y":[{"value":1006,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":1010,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":5},{"value":1020,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":10},{"value":1010,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":15},{"value":1006,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":20}],"x":[{"value":752,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":752,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":5}]}}],"name":"tipani","id":1,"frameRate":24,"action":0},{"nodes":[],"name":"ani2","id":2,"frameRate":24,"action":0},{"nodes":[{"target":13,"keyframes":{"y":[{"value":871,"tweenMethod":"linearNone","tween":true,"target":13,"key":"y","index":0},{"value":855,"tweenMethod":"linearNone","tween":true,"target":13,"key":"y","index":5},{"value":871,"tweenMethod":"linearNone","tween":true,"target":13,"key":"y","index":10}],"x":[{"value":607,"tweenMethod":"linearNone","tween":true,"target":13,"key":"x","index":0},{"value":607,"tweenMethod":"linearNone","tween":true,"target":13,"key":"x","index":5}]}}],"name":"ani3","id":3,"frameRate":24,"action":0}]};
		return helpNewUI;
	})(Dialog);
var luckPanelUI=(function(_super){
		function luckPanelUI(){
			
		    this.bg=null;
		    this.cardBox=null;
		    this.Amount=null;
		    this.name=null;

			luckPanelUI.__super.call(this);
		}

		CLASS$(luckPanelUI,'ui.Alert.luckPanelUI',_super);
		var __proto__=luckPanelUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(luckPanelUI.uiView);
		}
		luckPanelUI.uiView={"type":"View","props":{"width":494,"height":70},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"res/alert/cel.png"}},{"type":"Box","props":{"y":7,"x":318,"width":167,"var":"cardBox","height":55}},{"type":"Label","props":{"y":14,"x":133,"width":127,"var":"Amount","text":"张三","height":40,"fontSize":25,"font":"Microsoft YaHei","color":"#e4ddfb","align":"center"}},{"type":"Label","props":{"y":15,"x":1,"width":97,"var":"name","text":"张三","height":40,"fontSize":25,"font":"Microsoft YaHei","color":"#e4ddfb","align":"center"}}]};
		return luckPanelUI;
	})(View);
var LuckpopUI=(function(_super){
		function LuckpopUI(){
			
		    this.poolAmount=null;
		    this.LuckBox=null;
		    this.btn_close=null;
		    this.nodata=null;
		    this.betAmount=null;

			LuckpopUI.__super.call(this);
		}

		CLASS$(LuckpopUI,'ui.Alert.LuckpopUI',_super);
		var __proto__=LuckpopUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LuckpopUI.uiView);
		}
		LuckpopUI.uiView={"type":"Dialog","props":{"width":650,"height":1100},"child":[{"type":"Box","props":{"y":0,"x":0,"scaleY":1.1,"scaleX":1.1},"child":[{"type":"Image","props":{"y":0,"x":0,"width":593,"skin":"res/alert/luckbg.png","height":993}},{"type":"Image","props":{"y":237,"x":45,"skin":"res/alert/luckcon.png"}},{"type":"Box","props":{"y":125,"x":58,"width":486,"height":109},"child":[{"type":"SkeletonPlayer","props":{"y":117,"x":243,"url":"res/dragon/poolani.sk"}},{"type":"Label","props":{"y":42,"x":117,"width":416,"var":"poolAmount","text":"0","scaleY":0.6,"scaleX":0.6,"height":59,"font":"amount","align":"center"}}]},{"type":"Image","props":{"y":13,"x":175,"skin":"res/alert/pt.png"}},{"type":"Image","props":{"y":233,"x":48,"skin":"res/alert/rankcon.png"}},{"type":"Label","props":{"y":246,"x":78,"width":56,"text":"昵称","height":40,"fontSize":28,"font":"Microsoft YaHei","color":"#0c0527","bold":false}},{"type":"Label","props":{"y":246,"x":197,"width":115,"text":"赢得奖励","height":40,"fontSize":28,"font":"Microsoft YaHei","color":"#0c0527"}},{"type":"Label","props":{"y":246,"x":386,"width":115,"text":"获奖牌型","height":40,"fontSize":28,"font":"Microsoft YaHei","color":"#0c0527"}},{"type":"Panel","props":{"y":306,"x":51,"width":496,"var":"LuckBox","height":467}},{"type":"Button","props":{"y":33,"x":513,"width":58,"var":"btn_close","stateNum":1,"skin":"res/alert/close.png","height":58}},{"type":"Label","props":{"y":448,"x":125,"width":368,"var":"nodata","height":42,"fontSize":28,"font":"Microsoft YaHei","color":"#b9a8f8","align":"center"}},{"type":"Label","props":{"y":814,"x":224,"width":90,"var":"betAmount","text":"50","height":32,"fontSize":26,"font":"SimHei","color":"#f56221","align":"center"}},{"type":"Label","props":{"y":814,"x":44,"wordWrap":true,"width":185,"text":"单局投币额达到 ","height":32,"fontSize":26,"font":"SimHei","color":"#b9a8f8"}},{"type":"Label","props":{"y":814,"x":296,"wordWrap":true,"width":265,"text":"（不含加倍），且拿到","height":32,"fontSize":26,"font":"SimHei","color":"#b9a8f8"}},{"type":"Label","props":{"y":844,"x":44,"wordWrap":true,"width":524,"text":"的牌型为同色（黑色或红色），即可分得宝藏奖励。根据要牌点数分得对应百分比的宝藏奖励，如A为1点分得1%的奖励，依此类推K为13点分得13%的奖励。","height":108,"fontSize":26,"font":"SimHei","color":"#b9a8f8"}}]}]};
		return LuckpopUI;
	})(Dialog);
var MessageUI=(function(_super){
		function MessageUI(){
			
		    this.closeBtn=null;
		    this.msg=null;
		    this.sureBtn=null;

			MessageUI.__super.call(this);
		}

		CLASS$(MessageUI,'ui.Alert.MessageUI',_super);
		var __proto__=MessageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MessageUI.uiView);
		}
		MessageUI.uiView={"type":"Dialog","props":{"width":593,"height":537},"child":[{"type":"Image","props":{"y":0,"x":0,"width":593,"skin":"res/alert/tipbg.png","height":537}},{"type":"Image","props":{"y":4,"x":190,"skin":"res/alert/tiptitle.png"}},{"type":"Image","props":{"y":36,"x":516,"width":58,"var":"closeBtn","skin":"res/alert/close.png","height":58}},{"type":"Label","props":{"y":166,"x":63,"wordWrap":true,"width":471,"var":"msg","valign":"middle","text":"你好","height":106,"fontSize":30,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Clip","props":{"y":403,"x":170,"var":"sureBtn","skin":"res/alert/clip_surebtn.png","index":1,"clipY":2}}]};
		return MessageUI;
	})(Dialog);
var RankUI=(function(_super){
		function RankUI(){
			
		    this.rankTab=null;
		    this.closeBtn=null;
		    this.rankCon=null;
		    this.rankList=null;
		    this.rankMine=null;
		    this.rankMineLogin=null;
		    this.rankNodata=null;
		    this.rich_list=null;

			RankUI.__super.call(this);
		}

		CLASS$(RankUI,'ui.Alert.RankUI',_super);
		var __proto__=RankUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RankUI.uiView);
		}
		RankUI.uiView={"type":"Dialog","props":{"y":0,"x":0,"width":650,"selectedIndex":1,"height":1100},"child":[{"type":"Box","props":{"y":0,"x":0,"scaleY":1.1,"scaleX":1.1},"child":[{"type":"Image","props":{"y":0,"x":0,"width":593,"skin":"res/alert/luckbg.png","height":993}},{"type":"Image","props":{"y":15,"x":184,"skin":"res/alert/rankt.png"}},{"type":"Image","props":{"y":94,"x":65,"skin":"res/alert/rlogo.png"},"child":[{"type":"Image","props":{"y":30,"x":168,"skin":"res/alert/rankIcon0.png"}},{"type":"Image","props":{"y":156,"x":168,"skin":"res/alert/rankIcon2.png"}},{"type":"Image","props":{"y":93,"x":168,"skin":"res/alert/rankIcon1.png"}}]},{"type":"Tab","props":{"y":310,"x":47,"width":508,"var":"rankTab","selectedIndex":0,"height":54},"child":[{"type":"Button","props":{"y":-4,"x":0,"width":118,"stateNum":2,"skin":"res/alert/clip_day.png","name":"item0","height":68}},{"type":"Button","props":{"y":-4,"x":128,"width":118,"stateNum":2,"skin":"res/alert/clip_week.png","name":"item1","height":68}},{"type":"Button","props":{"y":-4,"x":255,"width":118,"stateNum":2,"skin":"res/alert/clip_month.png","name":"item2","height":68}},{"type":"Button","props":{"y":-4,"x":383,"width":118,"stateNum":2,"skin":"res/alert/clip_myprize.png","name":"item3","height":68}}]},{"type":"Button","props":{"y":36,"x":519,"width":58,"var":"closeBtn","stateNum":1,"skin":"res/alert/close.png","height":58}},{"type":"Image","props":{"y":402,"x":47,"skin":"res/alert/luckcon.png"}},{"type":"Image","props":{"y":390,"x":50,"skin":"res/alert/rankcon.png"}},{"type":"ViewStack","props":{"y":389,"x":47,"width":505,"var":"rankCon","selectedIndex":1,"height":560},"child":[{"type":"Box","props":{"y":0,"x":0,"width":505,"name":"item0","height":560},"child":[{"type":"Label","props":{"y":19,"x":234,"width":122,"text":"投币金额","height":35,"fontSize":29,"font":"Microsoft YaHei","color":"#0c0527"}},{"type":"Label","props":{"y":19,"x":95,"width":119,"text":"用户昵称","height":38,"fontSize":29,"font":"Microsoft YaHei","color":"#0c0527"}},{"type":"Label","props":{"y":19,"x":7,"width":67,"text":"排名","height":40,"fontSize":29,"font":"Microsoft YaHei","color":"#0c0527"}},{"type":"Label","props":{"y":19,"x":377,"width":124,"text":"排名趋势","height":40,"fontSize":29,"font":"Microsoft YaHei","color":"#0c0527"}},{"type":"List","props":{"y":66,"x":6,"width":498,"var":"rankList","spaceY":0,"height":472},"child":[{"type":"Box","props":{"y":2,"x":-2,"width":502,"name":"render","height":67},"child":[{"type":"Image","props":{"y":1,"x":5,"skin":"res/alert/cel.png","name":"bg"}},{"type":"Clip","props":{"y":22,"x":427,"width":31,"skin":"res/alert/clip_trend.png","name":"trendIcon","index":0,"height":31,"clipY":3}},{"type":"Label","props":{"y":19,"x":239,"width":133,"text":"10000","name":"amount","height":42,"fontSize":25,"font":"Microsoft YaHei","color":"#e4ddfb","align":"center"}},{"type":"Label","props":{"y":19,"x":86,"width":132,"text":"userName","name":"name","height":41,"fontSize":24,"font":"Microsoft YaHei","color":"#e4ddfb","align":"center"}},{"type":"Label","props":{"y":19,"x":1,"width":65,"text":"1","name":"rankNum","height":42,"fontSize":25,"font":"Microsoft YaHei","color":"#e4ddfb","align":"center"}}]}]},{"type":"VScrollBar","props":{"name":"scrollBar"}}]},{"type":"Box","props":{"y":0,"x":0,"width":505,"name":"item1","height":560},"child":[{"type":"Label","props":{"y":19,"x":12,"width":67,"text":"序号","height":40,"fontSize":29,"font":"Microsoft YaHei","color":"#0c0527"}},{"type":"Label","props":{"y":19,"x":120,"width":146,"text":"赢得游戏币","height":40,"fontSize":29,"font":"Microsoft YaHei","color":"#0c0527"}},{"type":"Label","props":{"y":19,"x":346,"width":67,"text":"时间","height":40,"fontSize":29,"font":"Microsoft YaHei","color":"#0c0527"}},{"type":"List","props":{"y":71,"x":3,"width":497,"visible":true,"var":"rankMine","spaceY":-10,"height":488},"child":[{"type":"Box","props":{"y":0,"x":0,"width":491,"name":"render","height":77},"child":[{"type":"Image","props":{"y":3,"x":0,"skin":"res/alert/cel.png","name":"bg"}},{"type":"Label","props":{"y":25,"x":23,"width":32,"text":"1","name":"num","height":32,"fontSize":21,"font":"Microsoft YaHei","color":"#e4ddfb","align":"center"}},{"type":"Label","props":{"y":25,"x":113,"width":145,"text":"11000000","name":"coin","height":32,"fontSize":23,"font":"Microsoft YaHei","color":"#e4ddfb","align":"center"}},{"type":"Label","props":{"y":25,"x":258,"width":231,"text":"2017-06-13  11:48:59","name":"time","height":32,"fontSize":23,"font":"Microsoft YaHei","color":"#e4ddfb"}}]}]},{"type":"VScrollBar","props":{"name":"scrollBar"}},{"type":"Box","props":{"y":174,"x":77,"var":"rankMineLogin"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":215,"text":"您尚未登录，请 ","height":50,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Label","props":{"y":0,"x":219,"width":60,"text":"登录","height":50,"fontSize":30,"font":"Microsoft YaHei","color":"#ffea00"}},{"type":"Label","props":{"y":0,"x":291,"width":60,"text":"查看","height":50,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff"}}]}]}]},{"type":"Label","props":{"y":613,"x":226,"width":151,"visible":false,"var":"rankNodata","text":"暂无数据","height":38,"fontSize":30,"font":"Microsoft YaHei","color":"#fff3da","alpha":1,"align":"center"}},{"type":"List","props":{"y":125,"x":258,"width":237,"var":"rich_list","spaceY":24,"repeatY":3,"height":166},"child":[{"type":"Box","props":{"y":0,"x":0,"width":226,"name":"render","height":41},"child":[{"type":"Label","props":{"y":0,"x":144,"width":115,"text":"0","overflow":"hidden","name":"amount","height":36,"fontSize":28,"font":"Microsoft YaHei","color":"#b2f1fa","align":"center"}},{"type":"Label","props":{"y":1,"x":23,"width":163,"text":"虚位以待","name":"name","height":37,"fontSize":28,"font":"Microsoft YaHei","color":"#b2f1fa"}}]}]}]}]};
		return RankUI;
	})(Dialog);
var RechargeUI=(function(_super){
		function RechargeUI(){
			
		    this.closeBtn=null;
		    this.rechargeTab=null;
		    this.rechargeText=null;
		    this.rechageInput=null;
		    this.rechageNum=null;
		    this.rechargeBtn=null;

			RechargeUI.__super.call(this);
		}

		CLASS$(RechargeUI,'ui.Alert.RechargeUI',_super);
		var __proto__=RechargeUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RechargeUI.uiView);
		}
		RechargeUI.uiView={"type":"Dialog","props":{"y":0,"x":0,"width":650,"height":1100},"child":[{"type":"Box","props":{"y":-117,"x":-7,"scaleY":1.1,"scaleX":1.1},"child":[{"type":"Image","props":{"width":676,"skin":"res/alert/rebg.png","height":1171}},{"type":"Image","props":{"y":185,"x":523,"var":"closeBtn","skin":"res/alert/close.png"}},{"type":"Image","props":{"y":156,"x":184,"skin":"res/alert/ret.png"}},{"type":"Image","props":{"y":299,"x":43,"width":505,"skin":"res/alert/luckcon.png","height":532}},{"type":"Tab","props":{"y":287,"x":38,"width":508,"var":"rechargeTab","height":546},"child":[{"type":"Button","props":{"y":27,"x":18,"width":228,"stateNum":2,"skin":"res/alert/clip_rebg.png","name":"item0","height":263},"child":[{"type":"Image","props":{"y":59,"x":58,"skin":"res/alert/dia1.png"}},{"type":"Image","props":{"y":167,"x":51,"skin":"res/alert/numbg.png"},"child":[{"type":"Label","props":{"y":6,"x":7,"width":120,"text":"10元","height":31,"fontSize":28,"font":"SimHei","color":"#ffffff","align":"center"}}]}]},{"type":"Button","props":{"y":25,"x":253,"width":228,"stateNum":2,"skin":"res/alert/clip_rebg.png","name":"item1","height":263},"child":[{"type":"Image","props":{"y":59,"x":58,"skin":"res/alert/dia2.png"}},{"type":"Image","props":{"y":167,"x":51,"skin":"res/alert/numbg.png"},"child":[{"type":"Label","props":{"y":6,"x":7,"width":120,"text":"50元","height":31,"fontSize":28,"font":"SimHei","color":"#ffffff","align":"center"}}]}]},{"type":"Button","props":{"y":283,"x":18,"width":228,"stateNum":2,"skin":"res/alert/clip_rebg.png","name":"item2","height":263},"child":[{"type":"Image","props":{"y":21,"x":33,"skin":"res/alert/dia3.png"}},{"type":"Image","props":{"y":167,"x":51,"skin":"res/alert/numbg.png"},"child":[{"type":"Label","props":{"y":6,"x":7,"width":120,"text":"100元","height":31,"fontSize":28,"font":"SimHei","color":"#ffffff","align":"center"}}]}]},{"type":"Button","props":{"y":283,"x":253,"width":228,"stateNum":2,"skin":"res/alert/clip_rebg.png","name":"item3","height":263},"child":[{"type":"Image","props":{"y":21,"x":39,"skin":"res/alert/dia4.png"}},{"type":"Image","props":{"y":167,"x":51,"skin":"res/alert/numbg.png"},"child":[{"type":"Label","props":{"y":6,"x":7,"width":120,"text":"200元","height":31,"fontSize":28,"font":"SimHei","color":"#ffffff","align":"center"}}]}]}]},{"type":"Label","props":{"y":257,"x":125,"width":343,"var":"rechargeText","text":"1元  = 1钻石  = 500欢乐豆","height":24,"fontSize":26,"font":"SimHei","color":"#8574c4","bold":true,"align":"center"}},{"type":"Image","props":{"y":864,"x":59,"width":489,"var":"rechageInput","skin":"res/alert/cel.png","height":71}},{"type":"Label","props":{"y":872,"x":72,"width":453,"var":"rechageNum","valign":"middle","text":"100元","height":57,"fontSize":36,"font":"SimHei","color":"#ffffff"}},{"type":"Button","props":{"y":1001,"x":181,"var":"rechargeBtn","stateNum":1,"skin":"res/alert/rechargebtn.png"}},{"type":"Label","props":{"y":954,"x":68,"width":461,"text":"充值钻石成功后将为您自动兑换为欢乐豆","height":24,"fontSize":25,"font":"SimHei","color":"#8574c4","bold":true}}]}]};
		return RechargeUI;
	})(Dialog);
var ResultUI=(function(_super){
		function ResultUI(){
			
		    this.fudaibox=null;
		    this.fudaipoint=null;
		    this.winbox=null;
		    this.winAmount=null;
		    this.losebox=null;
		    this.closeBtn=null;

			ResultUI.__super.call(this);
		}

		CLASS$(ResultUI,'ui.Alert.ResultUI',_super);
		var __proto__=ResultUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ResultUI.uiView);
		}
		ResultUI.uiView={"type":"Dialog","props":{"width":679,"height":688},"child":[{"type":"Box","props":{"y":0,"x":0,"width":673,"visible":false,"var":"fudaibox","height":680},"child":[{"type":"Label","props":{"y":479,"x":182,"width":309,"var":"fudaipoint","text":"+99999","height":59,"font":"amount","align":"center"}},{"type":"Label","props":{"y":565,"x":204,"width":265,"text":"恭喜您获得同色牌型","height":40,"fontSize":28,"font":"Microsoft YaHei","color":"#fff177","align":"center"}}]},{"type":"Box","props":{"y":0,"x":0,"width":673,"visible":false,"var":"winbox","height":680},"child":[{"type":"Label","props":{"y":479,"x":200,"width":258,"var":"winAmount","text":"0","height":59,"font":"amount","align":"center"}}]},{"type":"Box","props":{"y":0,"x":0,"width":673,"visible":true,"var":"losebox","height":680}},{"type":"Image","props":{"y":116,"x":570,"var":"closeBtn","skin":"res/alert/close.png"}}]};
		return ResultUI;
	})(Dialog);
var BottomUI=(function(_super){
		function BottomUI(){
			
		    this.Btn_recharge=null;
		    this.Btn_sub=null;
		    this.countdown=null;
		    this.count=null;
		    this.Btn_add=null;
		    this.Btn_max=null;
		    this.betValue=null;
		    this.Btn_Start=null;
		    this.Btn_double=null;
		    this.bubble=null;

			BottomUI.__super.call(this);
		}

		CLASS$(BottomUI,'ui.Game.BottomUI',_super);
		var __proto__=BottomUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BottomUI.uiView);
		}
		BottomUI.uiView={"type":"View","props":{"y":25,"x":-10,"width":750,"height":290},"child":[{"type":"Image","props":{"y":7,"x":20,"var":"Btn_recharge","skin":"res/game/rechargeBtn.png"}},{"type":"Image","props":{"y":34,"x":160,"var":"Btn_sub","skin":"res/game/subBtn.png"}},{"type":"Image","props":{"y":147,"x":327,"width":116,"visible":false,"var":"countdown","skin":"res/game/clock.png","height":138},"child":[{"type":"Label","props":{"y":53,"x":25,"width":63,"var":"count","height":36,"font":"timer","align":"center"}}]},{"type":"Image","props":{"y":33,"x":519,"width":93,"var":"Btn_add","skin":"res/game/addBtn.png","height":90}},{"type":"Image","props":{"y":0,"x":630,"width":120,"var":"Btn_max","skin":"res/game/bigBtn.png","height":130}},{"type":"Image","props":{"y":18,"x":253,"skin":"res/game/inputbg.png"}},{"type":"Label","props":{"y":44,"x":290,"width":192,"var":"betValue","valign":"middle","text":"100","height":53,"fontSize":48,"font":"Arial","color":"#ffffff","bold":true,"align":"center"}},{"type":"Box","props":{"y":162,"x":472,"width":266,"var":"Btn_Start","height":110}},{"type":"Box","props":{"y":162,"x":28,"width":266,"var":"Btn_double","height":110}},{"type":"Image","props":{"y":130,"x":77,"visible":false,"var":"bubble","skin":"res/game/qipao.png"}}]};
		return BottomUI;
	})(View);
var CardUI=(function(_super){
		function CardUI(){
			
		    this.pokerFront=null;
		    this.pokerbg=null;
		    this.card_num=null;
		    this.card_type=null;
		    this.pokerBack=null;
		    this.cardani=null;

			CardUI.__super.call(this);
		}

		CLASS$(CardUI,'ui.Game.CardUI',_super);
		var __proto__=CardUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(CardUI.uiView);
		}
		CardUI.uiView={"type":"View","props":{"width":220,"height":280},"child":[{"type":"Box","props":{"y":0,"x":0,"width":220,"var":"pokerFront","height":280},"child":[{"type":"Clip","props":{"y":0,"x":0,"width":220,"var":"pokerbg","skin":"res/game/clip_poker.png","index":1,"height":280,"clipY":2,"clipX":1}},{"type":"Label","props":{"y":17,"x":24,"var":"card_num","text":"2","font":"poker_red","align":"center"}},{"type":"Clip","props":{"y":55,"x":25,"width":190,"var":"card_type","skin":"res/game/clip_icon.png","index":1,"height":220,"clipY":4,"clipX":1}}]},{"type":"Clip","props":{"visible":false,"var":"pokerBack","skin":"res/game/clip_poker.png","clipY":2}},{"type":"Box","props":{"y":127,"x":96,"visible":false,"var":"cardani"},"child":[{"type":"SkeletonPlayer","props":{"y":12,"x":8,"url":"res/dragon/card.sk","scaleY":1.2,"scaleX":1.2}}]}]};
		return CardUI;
	})(View);
var HeaderUI=(function(_super){
		function HeaderUI(){
			
		    this.Btn_back=null;
		    this.Btn_home=null;
		    this.Btn_rank=null;
		    this.Btn_menu=null;
		    this.poolbox=null;
		    this.poolAmount=null;
		    this.lock=null;
		    this.betAmount=null;
		    this.marquee_box=null;
		    this.Btn_yubox=null;
		    this.yuAmount=null;
		    this.Btn_recharge=null;
		    this.Btn_doubox=null;
		    this.douAmount=null;
		    this.menu_box=null;

			HeaderUI.__super.call(this);
		}

		CLASS$(HeaderUI,'ui.Game.HeaderUI',_super);
		var __proto__=HeaderUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HeaderUI.uiView);
		}
		HeaderUI.uiView={"type":"View","props":{"width":750,"mouseThrough":true,"mouseEnabled":true,"height":270},"child":[{"type":"Image","props":{"y":1,"x":10,"width":79,"visible":false,"var":"Btn_back","skin":"res/game/backBtn.png","height":80}},{"type":"Image","props":{"y":1,"x":562,"visible":false,"var":"Btn_home","skin":"res/game/homeBtn.png"}},{"type":"Image","props":{"y":1,"x":96,"width":78,"var":"Btn_rank","skin":"res/game/rankBtn.png","height":86}},{"type":"Image","props":{"y":1,"x":654,"width":79,"var":"Btn_menu","skin":"res/game/setBtn.png","height":80}},{"type":"Box","props":{"y":152,"x":111,"width":528,"var":"poolbox","height":110},"child":[{"type":"SkeletonPlayer","props":{"y":110,"x":281,"url":"res/dragon/poolani.sk","scaleY":0.9,"scaleX":0.9}},{"type":"Label","props":{"y":36,"x":162,"width":339,"var":"poolAmount","text":"0","scaleY":0.7,"scaleX":0.7,"height":59,"font":"amount","align":"center"}},{"type":"Image","props":{"y":-21,"x":144,"var":"lock","skin":"res/game/lock.png","scaleY":0.9,"scaleX":0.9}}]},{"type":"Image","props":{"y":244,"x":115,"width":524,"visible":false,"skin":"res/alert/tips.png","height":62},"child":[{"type":"Label","props":{"y":24,"x":10,"width":452,"var":"betAmount","height":32,"fontSize":22,"font":"SimHei","color":"#fff0ff","align":"center"}}]},{"type":"Box","props":{"y":157,"x":89,"width":560,"visible":false,"height":44},"child":[{"type":"Image","props":{"y":6,"x":0,"skin":"res/game/laba.png"}},{"type":"Image","props":{"y":0,"x":0,"width":560,"skin":"res/game/marquee.png","height":44}},{"type":"Box","props":{"y":8,"x":52,"width":488,"var":"marquee_box","height":30}}]},{"type":"Box","props":{"y":83,"x":496},"child":[{"type":"Image","props":{"y":5,"x":-1,"width":239,"var":"Btn_yubox","skin":"res/game/rebg.png","height":64},"child":[{"type":"Label","props":{"y":2,"x":49,"width":180,"var":"yuAmount","valign":"middle","text":"0","height":50,"fontSize":28,"font":"Arial","color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":7,"x":5,"skin":"res/game/yu.png"}}]},{"type":"Box","props":{"y":78,"x":38,"width":263,"height":78},"child":[{"type":"Image","props":{"y":8,"x":191,"var":"Btn_recharge","skin":"res/game/re.png"}},{"type":"Image","props":{"y":14,"x":0,"width":194,"var":"Btn_doubox","skin":"res/game/rebg.png","height":64},"child":[{"type":"Label","props":{"y":1,"x":42,"width":145,"var":"douAmount","valign":"middle","text":"0","height":48,"fontSize":28,"font":"Arial","color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":21,"x":4,"skin":"res/game/dou.png"}}]},{"type":"Image","props":{"y":-3,"x":267,"skin":"res/game/logo.png"}},{"type":"Box","props":{"y":91,"x":0,"var":"menu_box","right":145}},{"type":"Image","props":{"y":2,"x":471,"skin":"res/game/neice.png"}}]};
		return HeaderUI;
	})(View);
var MenuUI=(function(_super){
		function MenuUI(){
			
		    this.btn_sound=null;
		    this.btn_voice=null;
		    this.voicetext=null;
		    this.btn_help=null;

			MenuUI.__super.call(this);
		}

		CLASS$(MenuUI,'ui.Game.MenuUI',_super);
		var __proto__=MenuUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MenuUI.uiView);
		}
		MenuUI.uiView={"type":"View","props":{"width":130,"height":427},"child":[{"type":"Image","props":{"y":0,"x":0,"width":130,"skin":"res/game/setbg.png","name":"bg","height":283}},{"type":"Box","props":{"y":19,"x":5,"width":120,"var":"btn_sound","mouseEnabled":true,"height":130},"child":[{"type":"Clip","props":{"y":15,"x":30,"width":59,"var":"btn_voice","skin":"res/game/clip_on.png","index":0,"height":53,"clipY":2}},{"type":"Label","props":{"y":79,"x":14,"var":"voicetext","text":"音效:开","fontSize":26,"font":"SimHei","color":"#f9f7ff"}},{"type":"Image","props":{"y":130,"x":23,"skin":"res/game/lin.png"}}]},{"type":"Button","props":{"y":155,"x":5,"width":120,"var":"btn_help","height":130},"child":[{"type":"Image","props":{"y":20,"x":39,"skin":"res/game/ques.png"}},{"type":"Label","props":{"y":79,"x":34,"text":"帮助","fontSize":26,"font":"SimHei","color":"#f9f7ff"}}]},{"type":"Button","props":{"y":289,"x":5,"width":120,"visible":false,"name":"btn_notice","height":130},"child":[{"type":"Image","props":{"y":20,"x":33,"skin":"res/game/notice_btn.png"}},{"type":"Label","props":{"y":78,"x":34,"text":"公告","fontSize":26,"font":"SimHei","color":"#f9f7ff"}},{"type":"Image","props":{"y":17,"x":74,"skin":"res/game/noti.png","name":"red"}},{"type":"Image","props":{"y":-4,"x":23,"skin":"res/game/lin.png"}}]}]};
		return MenuUI;
	})(View);
var MiddleUI=(function(_super){
		function MiddleUI(){
			
		    this.pokBox=null;
		    this.pokerfan=null;
		    this.oddbox1=null;
		    this.oddbox2=null;
		    this.oddbox3=null;
		    this.oddbox4=null;
		    this.oddbox5=null;
		    this.oddbox6=null;
		    this.hot=null;
		    this.bat1=null;
		    this.bat2=null;
		    this.bat3=null;

			MiddleUI.__super.call(this);
		}

		CLASS$(MiddleUI,'ui.Game.MiddleUI',_super);
		var __proto__=MiddleUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MiddleUI.uiView);
		}
		MiddleUI.uiView={"type":"View","props":{"width":750,"height":779},"child":[{"type":"Image","props":{"y":0,"x":2,"skin":"res/game/mbg.png"}},{"type":"Image","props":{"y":-10,"x":0,"skin":"res/game/tou.png"}},{"type":"Image","props":{"y":1,"x":0,"width":751,"var":"pokBox","skin":"res/game/ti.png","height":650}},{"type":"Image","props":{"y":462,"x":508,"width":192,"var":"pokerfan","skin":"res/game/carbox.png","height":254,"alpha":1}},{"type":"Image","props":{"y":573,"x":-9,"width":750,"skin":"res/game/car.png","height":220}},{"type":"Box","props":{"y":66,"x":115},"child":[{"type":"Box","props":{"y":30,"x":381,"width":246,"var":"oddbox1","height":63,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"res/game/left.png"}},{"type":"Label","props":{"y":14,"x":18,"width":181,"text":"底牌1张:10倍","name":"oddtext","height":30,"fontSize":28,"font":"SimHei","color":"#9da7ff","align":"center"}}]},{"type":"Box","props":{"y":90,"x":384,"width":246,"var":"oddbox2","height":63,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"res/game/right.png"}},{"type":"Label","props":{"y":16,"x":39,"width":190,"text":"底牌1张:10倍","name":"oddtext","height":30,"fontSize":28,"font":"SimHei","color":"#9da7ff","align":"center"}}]},{"type":"Box","props":{"y":152,"x":385,"width":246,"var":"oddbox3","height":63,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"res/game/left.png"}},{"type":"Label","props":{"y":14,"x":23,"width":176,"text":"底牌1张:10倍","name":"oddtext","height":30,"fontSize":28,"font":"SimHei","color":"#9da7ff","align":"center"}}]},{"type":"Box","props":{"y":532,"x":123,"width":246,"var":"oddbox4","height":63,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"res/game/left.png"}},{"type":"Label","props":{"y":15,"x":10,"width":197,"text":"底牌1张:10倍","name":"oddtext","height":30,"fontSize":28,"font":"SimHei","color":"#9da7ff","align":"center"}}]},{"type":"Box","props":{"y":593,"x":126,"width":246,"var":"oddbox5","height":63,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"res/game/right.png"}},{"type":"Label","props":{"y":14,"x":32,"width":204,"text":"底牌1张:10倍","name":"oddtext","height":30,"fontSize":28,"font":"SimHei","color":"#9da7ff","align":"center"}}]},{"type":"Box","props":{"y":653,"x":126,"width":246,"var":"oddbox6","height":63,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"res/game/left.png"}},{"type":"Label","props":{"y":16,"x":9,"width":190,"text":"底牌1张:10倍","name":"oddtext","height":30,"fontSize":28,"font":"SimHei","color":"#9da7ff","align":"center"}}]}]},{"type":"Box","props":{"y":190,"x":65,"var":"hot"},"child":[{"type":"SkeletonPlayer","props":{"x":242,"url":"res/dragon/hot.sk"}},{"type":"SkeletonPlayer","props":{"y":505,"url":"res/dragon/hot.sk"}},{"type":"SkeletonPlayer","props":{"y":5,"x":614,"url":"res/dragon/hot.sk"}},{"type":"SkeletonPlayer","props":{"y":506,"x":352,"url":"res/dragon/hot.sk"}}]},{"type":"Box","props":{"y":453,"x":130,"width":100,"var":"bat1","height":100},"child":[{"type":"SkeletonPlayer","props":{"url":"res/dragon/bat.sk"}}]},{"type":"Box","props":{"y":353,"x":350,"width":100,"var":"bat2","height":100},"child":[{"type":"SkeletonPlayer","props":{"url":"res/dragon/bat.sk"}}]},{"type":"Box","props":{"y":435,"x":521,"width":100,"var":"bat3","height":100},"child":[{"type":"SkeletonPlayer","props":{"url":"res/dragon/bat.sk"}}]}]};
		return MiddleUI;
	})(View);
var RoomUI=(function(_super){
		function RoomUI(){
			
		    this.Middle=null;
		    this.Header=null;
		    this.Bottom=null;

			RoomUI.__super.call(this);
		}

		CLASS$(RoomUI,'ui.Game.RoomUI',_super);
		var __proto__=RoomUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RoomUI.uiView);
		}
		RoomUI.uiView={"type":"View","props":{"x":0,"width":750,"height":1334,"centerX":0},"child":[{"type":"Image","props":{"width":1334,"skin":"res/game/bg.png","height":1334,"centerX":0}},{"type":"Box","props":{"y":257,"x":0,"var":"Middle"}},{"type":"Box","props":{"y":0,"x":0,"var":"Header","top":0}},{"type":"Box","props":{"x":0,"var":"Bottom","bottom":0}}]};
		return RoomUI;
	})(View);
var loadUI=(function(_super){
		function loadUI(){
			
		    this.loading_box=null;
		    this.load_img=null;
		    this.load_txt=null;

			loadUI.__super.call(this);
		}

		CLASS$(loadUI,'ui.Start.loadUI',_super);
		var __proto__=loadUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loadUI.uiView);
		}
		loadUI.uiView={"type":"View","props":{"width":750,"height":1334,"centerX":0},"child":[{"type":"Image","props":{"y":0,"width":1334,"skin":"res/loading/bg.jpg","height":1334,"centerX":0}},{"type":"Box","props":{"y":0,"width":1334,"height":1334,"centerX":0}},{"type":"Box","props":{"y":1046,"x":32,"width":685,"var":"loading_box","height":79},"child":[{"type":"Image","props":{"y":0,"x":0,"width":685,"skin":"res/loading/barbg.png","sizeGrid":"20,35,20,35","height":79}},{"type":"Image","props":{"y":0,"x":0,"width":685,"var":"load_img","skin":"res/loading/loadbar.png","sizeGrid":"10,30,10,30","height":79}},{"type":"Label","props":{"y":-47,"x":214,"width":256,"var":"load_txt","text":"游戏加载中...","height":29,"fontSize":24,"font":"SimHei","color":"#f8f4f4"}}]},{"type":"Image","props":{"y":1179,"x":38,"skin":"res/loading/tip.png","bottom":41}},{"type":"Box","props":{"y":613,"x":379},"child":[{"type":"SkeletonPlayer","props":{"url":"res/dragon/logo.sk"}}]}]};
		return loadUI;
	})(View);