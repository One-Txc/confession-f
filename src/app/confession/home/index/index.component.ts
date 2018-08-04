import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {isNullOrUndefined} from "util";
import {ConfigService} from "../../../service/config.service";

// declare var $: any;
// declare var layui: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private layer:any;
  public isPc:Boolean = true;
  public title = "**************************";
  public question = "要不要一起去漫展啊?";
  public isDz = true;
  public pictrueUrl = "/assets/img/hua.jpg";

  public bodydivSize = 500;
  public w = window.innerWidth ;
  public h = window.innerHeight ;

  public okCount = 0;
  public noCount = 0;
  public noList = [];
  public okList = [];

  public mainConfig:any = {
    leftButtonText:"好呀",
    rightButtonText:"不好",
  };


  constructor(public router: Router,
              public activatedRoute: ActivatedRoute,
              private configService:ConfigService,) {

  }

  ngOnInit() {
    this.initNoList();
    this.initOkList();

    this.okCount = 0;
    this.noCount = 0;

    this.isPc = this.IsPC();
    this.initPageSize();
    //查询
    this.activatedRoute.params.subscribe((params) => {
      var id = params.id;
      if(!isNullOrUndefined(id)){
        this.initDataWithId(id);
      }else {
        this.activatedRoute.queryParams.subscribe((params) => {
          var title = params.title;
          var question = params.question;
          if(isNullOrUndefined(question) && isNullOrUndefined(title)){
            this.isDz = false;
            this.showMessageAndDZdesc();
          }
          if(!isNullOrUndefined(question)){
            this.question = question;
          }
          if(!isNullOrUndefined(title)){
            this.title = title;
          }
        });
      }
    });
    layui.use(['layer', 'form'], ()=>{
       this.layer = layui.layer;
    });

  }


  initNoList() {
    this.noList = [
      {
        type:"msg",
        title:'',
        content:"请你吃冰棒!"
      },
      {
        type:"msg",
        title:'',
        content:"请你吃冰果冻!"
      },
      {
        type:"msg",
        title:'',
        content:"请你吃冰淇淋"
      },
      {
        type:"msg",
        title:'',
        content:"请你吃冰棒+冰果冻+冰淇淋"
      },
      {
          type:"html",
          title:'要不同意先答题!',
          path:"#/q-01"
      },
      {
          type:"html",
          title:'再来一题!',
          path:"#/q-02"
      },
      {
          type:"html",
          title:'还不放弃!',
          path:"#/q-03"
      },
      {
        type:"msg",
        icon: 5,
        title:'',
        content:"不同意不罢休"
      },
    ];
  }

  initOkList() {
    this.okList = [
      {
        type:"html",
        title:'拉钩钩!',
        path:"#/lagou"
      }
    ]

  }


  noButtonClick(){
    this.noCount += 1;
    var noCount = this.noCount;
    var noList = this.noList;
    if(noCount <= noList.length){
      var popupConfig = noList[noCount-1];
      var popObj = this.hanleWithConfig(popupConfig);
      layui.layer.open(popObj);
      if(noCount == noList.length){
        //绑定事件
        $('#noButton').mouseover(()=>{
          this.elementMove("noButton");
        });
      }
    }else {
      this.elementMove("noButton");
    }
  }

  private hanleWithConfig(popupConfig:any):any{
    var bodydivSize = this.bodydivSize;
    var popObj;
    if(popupConfig.type == "msg"){
      popObj = {
        title: popupConfig.title,
        content: popupConfig.content
      }
    }else {
      popObj = {
        //closeBtn:0,
        title: popupConfig.title,
        type: 2,
        area: [bodydivSize+'px', bodydivSize+'px'],
        content: popupConfig.path,
      }
      if(popupConfig.path.indexOf("/q-") >= 0){
        popObj.closeBtn = 0;
      }
    }
    return popObj;
  }

  okButtonClick(){
    this.okCount += 1;
    var okCount = this.okCount;
    var okList = this.okList;
    if(okCount <= okList.length){
      var popupConfig = okList[okCount-1];
      var popObj = this.hanleWithConfig(popupConfig);
      layui.layer.open(popObj);
    }else {
      var popupConfig = okList[okList.length-1];
      var popObj = this.hanleWithConfig(popupConfig);
      layui.layer.open(popObj);
    }
  }

  elementMove(elementId,){
    var w = this.w;
    var h = this.h;
    var idSelectStr = "#"+elementId;
    var bWidth = $(idSelectStr).outerWidth(true)
    var bHeigth = $(idSelectStr).outerHeight(true)
    var indexTop = $(idSelectStr).offset().top;
    var indexLeft = $(idSelectStr).offset().left;

    var leftP;
    do{
      leftP = parseInt((Math.random()*(w-bWidth))+"");
    }while(leftP<=(indexLeft+bWidth) && leftP>=indexLeft && false);
    indexLeft = leftP;

    var topP;
    do{
      topP = parseInt((Math.random()*(h-bHeigth))+"");
    }while(topP<=(indexTop+bHeigth) && topP>=indexTop && false);
    indexTop = topP;
    var bcss = {
      position: 'absolute',
      left: indexLeft+'px',
      top: indexTop+'px'
    };
    $(idSelectStr).css(bcss)
  }

  showMessageAndDZdesc(){
    $("#dzh-desc").show();
    layui.use(['layer', 'form'], ()=>{
      this.layer = layui.layer;
      layui.use(['layer', 'form'], function(){
        var layer = layui.layer;
        layui.layer.open({
          // title: '我发四',
          // content: '由于小哥哥最近吃了太多狗粮,所以强势求女友呀,发过一个交友帖，走过路过不要错过呀!'
          // content: '体验了你确定不给我一个赞和好评吗!'
          content: '手机端也已经可以啦!'
        });
      });
    });
  }

  private initDataWithId(id:any){
    //查询
    this.configService.get(id).subscribe((resultData)=>{
      console.log(resultData);
      this.mainConfig = resultData.mainConfig;
      this.okList = resultData.leftButtonPopupCofigList;
      this.noList = resultData.rightButtonPopupCofigList;
      this.title = this.mainConfig.title;
      this.question = this.mainConfig.question;
    });

  }
  private initPageSize(){
    var bodydivSize = 500;
    var skewingLeft = 0;
    var skewingTop = 0;
    var w = window.innerWidth ;
    var h = window.innerHeight ;
    console.log(w);
    console.log(h);

    //不是电脑端则去除广告和提示
    if(!this.isPc){
      bodydivSize = w<h?w:h;
      bodydivSize = bodydivSize*0.9;
    }
    if(w > bodydivSize){
      skewingLeft = (w-bodydivSize)/2;
    }
    if(h > bodydivSize){
      skewingTop = (h-bodydivSize)/2;
    }
    var css = {
      'height': bodydivSize+'px',
      'width': bodydivSize+'px',
      'margin-left': skewingLeft+'px',
      'margin-top': skewingTop+'px'
    };
    $("#body-div").css(css);
    var dzhCss = {
      'height': bodydivSize+'px',
      'width': bodydivSize+'px',
      'margin-left': skewingLeft+'px',
    };
    $("#dzh-desc").css(dzhCss);

    $("#body").css({
      'background-color': '#2E2D3C'
    });

    this.bodydivSize = bodydivSize;
  }

  //判断是手机还是pc
  IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }

}
