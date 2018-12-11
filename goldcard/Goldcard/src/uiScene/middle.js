/**
 * 游戏主流程
 */

import { sceneManager,observer, setViewCenter, messageCenter } from '../module/init_module';

import CardView from './com/card';
import { createSkeleton } from '../common/laya.custom';
import AudioMudule from '../module/com/audio'; 

export default class MiddleView extends MiddleUI{
      constructor(messageCenter){
          super();
          this.count = null;
          this.cardBox = [];
          this.oddbox = [];
          this.odds = [];
          this.oddani = null;
          this.flag = false;  //true 代表要牌
          this.oddaniflag = false;
          this.init();
          MiddleView.instance = this;

      }

      static getInstance(){
          return this.instance || new this();

      }

      init(){
          this.oddbox1.visible = false;
          this.oddbox2.visible = false;
          this.oddbox3.visible = false;
          this.oddbox4.visible = false;
          this.oddbox5.visible = false;
          this.oddbox6.visible = false;
          this.oddbox.push(this.oddbox1,this.oddbox2,this.oddbox3,this.oddbox4,this.oddbox5,this.oddbox6);
          
          observer.subscribe('result', this.result.bind(this));     // 游戏结算
          observer.subscribe('game::reset',this.reset.bind(this));
          observer.subscribe('handcard', this.continueGame.bind(this));     // 拿到手牌

      }

    // 牌型倍率
     oddHandler(oddConf){
          //  文字
         for(let i in oddConf){                
            let odd = oddConf[i]
            this.odds.push(odd);
            let index = parseInt(i);
            if(this.oddbox[parseInt(i)-1]){
                  this.oddbox[parseInt(i)-1].visible = true;
                  this.oddbox[parseInt(i)-1].getChildByName("oddtext").text = "底牌" + index +"张:" + oddConf[i] +"倍";
            }    
            if(parseInt(i) == 6){
                this.oddbox[parseInt(i)-1].getChildByName("oddtext").text = "底牌≥" + index +"张:" + oddConf[i] +"倍";
            }
         }
    
      }
  
    // 游戏发牌开始
     startGame(data){
         let cardInfo = data.res.card;
       
         //蝙蝠飞走动画
         this.baTwenn();
            
         cardInfo.forEach((item,index) => {
            this.creatCard(index,cardInfo);
         }); 
         Laya.Tween.to(this.pokerfan,{y:600,alpha:0},500,Laya.Ease.circInOut,null); 
         // 高亮倍率
         Laya.timer.once(1000,this,()=>{
             this.pokeroddHight();    
         });
    
      } 

     //蝙蝠
      baTwenn(reset){
        if(reset == "reset"){
           Laya.Tween.to(this.bat1,{x:130,y:453,alpha:1},500,Laya.Ease.backOut,null);
           Laya.Tween.to(this.bat2,{x:350,y:353,alpha:1},500,Laya.Ease.backOut,null);
           Laya.Tween.to(this.bat3,{x:521,y:435,alpha:1},500,Laya.Ease.backOut,null);
        }else{
           Laya.Tween.to(this.bat1,{x:530,y:600,alpha:0},2000,Laya.Ease.backIn,null);
           Laya.Tween.to(this.bat2,{x:530,y:600,alpha:0},2000,Laya.Ease.backIn,null);
           Laya.Tween.to(this.bat3,{x:530,y:600,alpha:0},2000,Laya.Ease.backIn,null);

        }
      }


      // 手牌
      continueGame(data){
       
         this.flag = true;
         let handcard = data.res.handCard;     
         handcard.forEach((item,index) =>{        
             this.creatCard(index,handcard);
         });
      }

      //创建card
      creatCard(index,cardInfo){
         let card;
         Laya.timer.once(200 * index, this, () => { 
              let pokertype = cardInfo[index].substring(0,1); //花色       
              let  pokerNum = cardInfo[index].substr(1); //数字
              if(this.flag){
                 let cardInfoConindex  = parseInt(this.cardBox.length);
                 card = new CardView(pokertype,pokerNum,cardInfoConindex);               
              }else{                  
                 card = new CardView(pokertype,pokerNum,index);  
              }
              card.pokerEnter(this.flag);       
              this.cardBox.push(card);   
              this.pokBox.addChild(card);
           
          });           
      }

      //倍率高亮
      pokeroddHight(){
          //倍率放大缩小
          for(let i in this.oddbox){
               this.oddbox[i].alpha = 0.4;

          }
          let index = this.cardBox.length;
          let oddani = createSkeleton('res/dragon/odd');
          oddani.pos(115,66);
          oddani.name = "oddani";     
          let target ;
          if(this.cardBox.length > 6){
                this.oddbox[5].addChild(oddani);
                target = this.oddbox[5];  
          }else{  
                if(index == 2 || index == 5){
                    oddani.pos(130,66);
                }
                target = this.oddbox[index-1];
                target.alpha = 1;
                this.oddbox[index-1].addChild(oddani);
          } 
          this.timerLoop(1000, this, this.oddaniTween ,[target]);
         
      }
      //倍率放大缩小
      oddaniTween(target){
          this.oddaniflag = true;
          target.getChildByName("oddtext").color = "#ffe67b";
          Laya.Tween.to(target,{scaleX:1.2,scaleY:1.2,alpha:1},500,Laya.Ease.cubicInOut,Laya.Handler.create(this,function(){
                Laya.Tween.to(target,{scaleX:1,scaleY:1,alpha:1},500,Laya.Ease.cubicInOut,null);
               
          }));   

      }

      //结算
      result(data){
        // 清除放大倍率定时器
        this.clearTimer(this,this.oddaniTween); 
       
        // 比较数组里面相同的数据 并且高亮          
        for(let i = 0;i < this.cardBox.length-1;i++){
          this.count = 0;       
          if(this.cardBox[i].pokernum == this.cardBox[this.cardBox.length-1].pokernum){
            this.count ++;
            this.cardBox[i].cardani.visible = true;
            this.cardBox[this.cardBox.length-1].cardani.visible = true;
        
            this.highPoker();
          }
        }

      }


     //某张高亮的牌
      highPoker(){
        let name;
        if(this.count>0){
           if(this.cardBox.length == 3 || this.cardBox.length == 6 ){
              name = "right";
           }else{
              name = "left";
           }
          let index = parseInt(this.cardBox.length)-2;
         
          if(this.cardBox.length>6){
              this.oddbox[5].find("oddani").play("left",true);
          }else{
              this.oddbox[index].find("oddani").play(name,true);
          }
          
        }
       
      }



      //游戏重置   
      reset(){ 
          if(this.flag){
            if(this.oddaniflag){
                this.clearTimer(this,this.oddaniTween);          
            }
            ///字体颜色恢复
            for(let i in this.oddbox){
                this.oddbox[i].find("oddtext").color = "#9da7ff";
                this.oddbox[i].alpha = 1;
            }

            for(let i in this.cardBox){ 
                this.cardBox[i].closePoker();
            };
            let index = parseInt(this.cardBox.length)-2;
            if(this.cardBox.length>6){
                index = 5           
            }        
            //清除动画
            if(this.oddbox[index].find("oddani")){
                this.oddbox[index].find("oddani").destroy(true);
            }
            
            Laya.Tween.to(this.pokerfan,{y:462,alpha:1},300,Laya.Ease.circIn,null); 
            let reset = "reset";
            this.baTwenn(reset);      
            
            this.cardBox = []; 
            this.flag  = false;

          }
         
          
      }


}





 