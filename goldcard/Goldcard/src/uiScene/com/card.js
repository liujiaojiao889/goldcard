/**
 * 每张牌 
 */

import { sceneManager,observer, setViewCenter, messageCenter } from '../../module/init_module';
import MiddleView from '../middle';
import AudioMudule from '../../module/com/audio';

//中间转折位置
const POKER_TWEEN = [
  {x:30,y:283},
  {x:30,y:283},
  {x:30,y:283},
  {x:126,y:283},
  {x:221,y:283},
  {x:316,y:283},
  {x:411,y:283},
  {x:506,y:400},
  {x:506,y:580},
]
//终点位置
const CARD_POSTION = [ 
  {x:30,y:80},
  {x:30,y:181}, 
  {x:30,y:283}, 
  {x:126,y:283},
  {x:221,y:283},
  {x:316,y:283},
  {x:411,y:283},
  {x:506,y:283},
  {x:506,y:387}
  
];

const POKERNUM = [0,1,2,3,4,5,6,7,8,9,10,11,12];

// 'S':'黑桃'// 'H':'红桃' // 'C':'梅花' // 'D':'方块'
const inconIndex = {
    S:0,
    H:1,
    C:2,
    D:3
}

  // j  4567  k 8 9 10 11  q 12 13 14 15
export default class CardView extends CardUI{
      constructor(pokertype,pokernum,index,none){
          super();          
          this.pokertype = pokertype;
          this.pokernum = pokernum;
          this.index = index;
          this.none = none;
          this.init();
      }
      init(){ 
          if(this.none == "luck"){
             this.creatpokertype();
             return;
          }        
          this.x = 518;
          this.y = 580;         
          this.alpha = 0;
          this.scale(0.9,0.9);   
          this.creatpokertype();
          observer.subscribe('game::reset', this.reset.bind(this));     // 游戏重置
      }

    // 创建牌型
    creatpokertype(){
      // console.log(this.pokertype,this.pokernum);
      // 黑色 或者 红色文字
      if(this.pokertype == 'S' || this.pokertype =='C' ){
          this.card_num.font = "poker_black" ;   
      }else{
          this.card_num.font = "poker_red"  ;        
      }
   
      //icon
      if(this.pokernum < 11){
       
          if(this.pokernum == 10){
            this.card_num.text  = 1;
          }else if(this.pokernum == 1){
            this.card_num.text ="A";
          }else{
            this.card_num.text = this.pokernum;
          }
          this.card_type.skin = "res/game/clip_icon.png";      
              
      }else{
     
        if(this.pokernum == 11){
          // j
          this.card_type.skin = "res/game/clip_j.png";
          this.card_num.text = "J";   

        }else if(this.pokernum == 12){
          // q
          this.card_type.skin = "res/game/clip_q.png";
          this.card_num.text = "Q"; 
       
        }else if(this.pokernum == 13){
          // k
          this.card_type.skin = "res/game/clip_k.png";
          this.card_num.text = "K"; 
         

        } 
      }

      this.card_type.index = inconIndex[this.pokertype];  
    }

    //发牌
    pokerEnter(flag){    
        let postionY = 283;
        let delay = 300;
        if(this.index>6){postionY = 580,delay = 100 }
        if(this.index == 1){delay = 250}    
        if(flag){
              AudioMudule.getInstance().play('showcard');     
        }else{
              AudioMudule.getInstance().play('pushcard'); 
        }         
        Laya.Tween.to(this,{alpha:1,y:postionY},delay,Laya.Ease.linearIn,Laya.Handler.create(this,function(){       
              Laya.Tween.to(this,{x:POKER_TWEEN[this.index].x,y:POKER_TWEEN[this.index].y,alpha:1,scalex:0.9,scaleY:0.9},delay,Laya.Ease.linearIn,Laya.Handler.create(this,function(){
                   Laya.Tween.to(this,{x:CARD_POSTION[this.index].x,y:CARD_POSTION[this.index].y,alpha:1,scalex:0.9,scaleY:0.9},delay,Laya.Ease.linearIn,null);              
                   
              }));         
        }));
    }

    //开牌   
    // openPoker(){
    //   Laya.timer.once(150*this.index,this,()=>{
    //      //隐藏反面
    //     Laya.Tween.to(this.pokerBack, {
    //         scaleX: 0,
    //       }, 150, Laya.Ease.linearIn,Laya.Handler.create( this, function () {
    //          this.pokerBack.visible = false;
    //          Laya.Tween.to(this.pokerFront, {
    //           scaleX: 1,
    //       }, 150, Laya.Ease.linearIn,null);
           
    //     }))
    //     //显示正面
    //     this.card_type.visible = true;
    //     this.card_num.visible = true;
    //     this.card_num_fan.visible = true;

    //   });
        
    // }

    //收牌

    closePoker(){
      Laya.Tween.to(this,{x:594,y:575,alpha:0,scalex:0.9,scaleY:0.9},100,Laya.Ease.backOut,null);
    }

    reset(){
        this.x = 518;
        this.y = 600;
          // anchoX 翻开牌面效果
        // this.pokerFront.scaleX = 0;
        // this.pokerFront.anchoX = 0.5;
        // this.alpha = 0;
        this.scale(0.9,0.9);
        // this.pokerbg.index = 1;
        // this.card_type.visible = false;
        // this.card_num.visible = false;
        // this.card_num_fan.visible = false;
        this.cardani.visible = false;
    }

}


