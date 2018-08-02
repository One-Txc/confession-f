import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-memoirs',
  templateUrl: './memoirs.component.html',
  styleUrls: ['./memoirs.component.css']
})
export class MemoirsComponent implements OnInit {
  private layer:any;
  public isPc:Boolean = true;
  public title = "你好呀!";
  public okDesc = "你好呀";
  public noDesc = "我不好";
  public progress = 0;
  public bodydivSize = 500;
  public w = window.innerWidth ;
  public h = window.innerHeight ;

  public okCount = 0;
  public noCount = 0;

  constructor(public router: Router,
              public activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.okCount = 0;
    this.noCount = 0;

    this.isPc = this.IsPC();
    this.initPageSize();
    layui.use(['layer', 'form'], ()=>{
      this.layer = layui.layer;
    });

    //this.showMessageAndDZdesc();
  }


  okButtonClick(){
    if(this.progress == 0){
      this.title = "请问你是蕾姆吗？";
      this.okDesc = "我不是";
      this.noDesc = "当然是";
      this.progress += 1;
    }else if(this.progress == 1){
      layui.use(['layer', 'form'], function(){
        layui.layer.open({
          title:'',
          content: '那你打开我的回忆干嘛ヽ(‘⌒´メ)ノ',
        });
      });
    }else if(this.progress == 2){
      layui.use(['layer', 'form'], function(){
        layui.layer.open({
          title:'',
          content: '哦，再见',
          end:function () {
            alert("预警预警！！！！");
            alert("程序正在准备自杀,电脑即将爆炸!");
            alert("正在启动自杀程序...");
            alert("..............");
            alert("吓你的啦,我是好人");
          }
        });
      });
    }

  }


  noButtonClick(){
    if(this.progress == 0){
      layui.use(['layer', 'form'], function(){
        layui.layer.open({
          title:'',
          content: '那你还不快去休息!'
        });
      });
    }else if(this.progress == 1){
      this.title = "那你猜到了我是谁吗？";
      this.okDesc = "不知道";
      this.noDesc = "猜到了(这是送分题啊)";
      this.progress += 1;
    }else if(this.progress == 2){
      this.title = "没错啦，我当然是机智的天赋异禀的勇敢善良的聪明过人的努力刻苦的(此处省略8000字)鲁路修啦。" +
        "很久不见(好像才十几个小时)不知道你会不会想起我呀";
      this.okDesc = "";
      this.noDesc = "";
      $("#okButton").hide();
      $("#noButton").hide();

      this.progress += 1;
    }
  }



  showMessageAndDZdesc(){
    $("#body-div").hide();
    layui.use(['layer', 'form'], ()=>{
      this.layer = layui.layer;
      var layer = this.layer;

      layer.confirm('纳尼？', {
        title:'滴滴',
        btn: ['按钮一', '按钮二', '按钮三'] //可以无限个按钮
        ,btn3: function(index, layero){
          //按钮【按钮三】的回调
        }
      }, function(index, layero){
        //按钮【按钮一】的回调
      }, function(index){
        //按钮【按钮二】的回调
      });
    });
    // layui.use(['layer', 'form'], ()=>{
    //   this.layer = layui.layer;
    //   var layer = this.layer;
    //   layer.prompt({
    //     closeBtn:0,
    //     btn: ['确认'],
    //     formType: 1,
    //     title: '是谁打开了我的回忆录!',
    //     //area: [this.bodydivSize+'px', this.bodydivSize+'px'], //自定义文本域宽高
    //   }, (value, index, elem)=>{
    //     var key = "abc";
    //     if(value==key){
    //       layer.close(index);
    //       layer.msg("这是关于你的回忆录");
    //       $("#body-div").show();
    //     }else {
    //       layer.msg("你不是 "+key+" ,你打开我的回忆录干嘛");
    //     }
    //   });
    // });
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
