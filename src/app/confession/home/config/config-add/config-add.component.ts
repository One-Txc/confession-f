import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../../../service/config.service";
import {StringUtil} from "../../../../util/string-util";
import {isNullOrUndefined} from "util";
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";

// import {saveSvgAsPng} from "save-svg-as-png"

declare var layui:any;

declare var saveSvgAsPng:any;


@Component({
  selector: 'app-config-add',
  templateUrl: './config-add.component.html',
  styleUrls: ['./config-add.component.css']
})
export class ConfigAddComponent implements OnInit {
  protected layer:any;

  public mainConfig:any={
    title:"蕾姆同学你好呀",
    question:"今天要不要一起去看电影呀!",
    leftButtonText:"好啊",
    rightButtonText:"不好"
  };
  public leftButtonPopupCofigList:any=[{type:"msg",groupType:"left",}];
  public rightButtonPopupCofigList:any=[{type:"msg",groupType:"right",}];

  public id;
  public isSave:boolean = false;
  public isShowDetail:boolean = false;
  public url_pre = environment.url+"#/home/";

  constructor(private configService:ConfigService,
              public router: Router) { }

  ngOnInit() {
    this.initLeftButtonPopupCofigList();
    this.initRightButtonPopupCofigList();
    $("#body").css({
      'background-color': '#f5f5f5'
    });
    this.initLayui();

    // this.downQrcode();

  }

  protected initLayui(){
    layui.use(['layer', 'form'], ()=>{
      this.layer = layui.layer;
    });
  }

  go(){
    this.router.navigate(["home",this.id]);
  }

  getAuthorizationCode(){
    layui.use(['layer'], ()=>{
      layui.layer.open({
        title:"",
        content:"授权码填:9999"
      });
    });
  }

  showDetail(){
    this.isShowDetail = !this.isShowDetail;
  }

  showTemplate01CofigList(){
    this.isShowDetail = true;
    this.initTemplate01CofigList();
  }
  showTemplate02CofigList(){
    this.isShowDetail = true;
    this.initTemplate02CofigList();
  }
  hideDetail(){
    this.isShowDetail = false;
  }


  save(){
    var paramObj = {
      mainConfig:this.mainConfig,
      leftButtonPopupCofigList:this.leftButtonPopupCofigList,
      rightButtonPopupCofigList:this.rightButtonPopupCofigList
    };

    //数据校验
    if(!this.validateConfig(paramObj)){
      return;
    }
    console.log(paramObj);
    this.configService.save(paramObj).subscribe((resultData)=>{
      console.log(resultData);
      if(resultData.status=="0000"){
        //进行页面跳转
        this.id = resultData.resp;
        //this.router.navigate(["home",configId]);
        this.isSave = true;
      }else {
        layui.use(['layer'], ()=>{
          layui.layer.open({
            title:"",
            content:resultData.msg+""
          });
        });
      }
    });
  }

  private validateConfig(paramObj:any):Boolean{

    //mainConfig
    var mainConfig = paramObj.mainConfig;
    if(StringUtil.isBlank(mainConfig.title)){
      this.layer.msg("上面的显示标题-请填写");
      return false;
    }
    if(StringUtil.isBlank(mainConfig.question)){
      this.layer.msg("左边的问题-请填写");
      return false;
    }
    if(StringUtil.isBlank(mainConfig.leftButtonText)){
      this.layer.msg("左边按钮文字-请填写");
      return false;
    }
    if(StringUtil.isBlank(mainConfig.rightButtonText)){
      this.layer.msg("右边按钮文字-请填写");
      return false;
    }


    //leftButtonConfig
    var leftButtonPopupCofigList = paramObj.leftButtonPopupCofigList;
    if(isNullOrUndefined(leftButtonPopupCofigList) || leftButtonPopupCofigList.length == 0){
      this.layer.msg("左边按钮的设置必须存在!");
      return false;
    }
    for(var i=0;i<leftButtonPopupCofigList.length;i++){
      var config = leftButtonPopupCofigList[i];
      if(!this.validatePopupConfig("左边",i,config)){
        return false;
      }
    }

    var rightButtonPopupCofigList = paramObj.rightButtonPopupCofigList;
    if(isNullOrUndefined(rightButtonPopupCofigList) || rightButtonPopupCofigList.length == 0){
      this.layer.msg("右边按钮的设置必须存在!");
      return false;
    }
    for(var i=0;i<rightButtonPopupCofigList.length;i++){
      var config = rightButtonPopupCofigList[i];
      if(!this.validatePopupConfig("右边",i,config)){
        return false;
      }
    }
    return true;
  }

  private validatePopupConfig(direction:string,index:number,config:any):boolean{
    if(StringUtil.isBlank(config.type)){
      this.layer.msg(`${direction}按钮-第${index+1}次点击事件类型-请选择`);
      return false;
    }

    if(config.type=="msg"){
      if(StringUtil.isBlank(config.content)){
        this.layer.msg(`${direction}按钮-第${index+1}次点击-提示文字-请填写`);
        return false;
      }
    }else if(config.type=="html"){
      if(StringUtil.isBlank(config.path)){
        this.layer.msg(`${direction}按钮-第${index+1}次点击-弹出问题-请选择`);
        return false;
      }
    }
    return true;
  }



  get(){
    var id = 101;
    this.configService.get(id).subscribe((resultData)=>{
      console.log(resultData)
    });
  }

  addConfig(aaa:string){
    if(aaa=="left"){
      this.leftButtonPopupCofigList.push({
        type:"msg",
        groupType:"left",
      });
    }else if(aaa=="right"){
      this.rightButtonPopupCofigList.push({
        type:"msg",
        groupType:"right",
      });
    }
  }

  delectConfig(aaa:string,i:number){
    if(aaa=="left"){
      this.leftButtonPopupCofigList.splice(i,1);
    }else if(aaa=="right"){
      this.rightButtonPopupCofigList.splice(i,1);
    }
  }


  initRightButtonPopupCofigList(){
    this.rightButtonPopupCofigList = [
      {
        type:"msg",
        title:'',
        content:"请你吃冰棒!",
        groupType:"left"
      },
      {
        type:"msg",
        title:'',
        content:"请你吃冰果冻!",
        groupType:"left"
      },
      {
        type:"msg",
        title:'',
        content:"请你吃冰淇淋",
        groupType:"left"
      },
      {
        type:"msg",
        title:'',
        content:"请你吃冰棒+冰果冻+冰淇淋",
        groupType:"left"
      },
      {
        type:"html",
        title:'要不同意先答题!',
        path:"#/q-01",
        groupType:"left"
      },
      {
        type:"html",
        title:'再来一题!',
        path:"#/q-02",
        groupType:"left"
      },
      {
        type:"html",
        title:'还不放弃!',
        path:"#/q-03",
        groupType:"left"
      },
      {
        type:"msg",
        icon: 5,
        title:'',
        content:"不同意不罢休",
        groupType:"left"
      },
    ]

  }

  initLeftButtonPopupCofigList(){
    this.leftButtonPopupCofigList = [
      {
        type:"html",
        title:'拉钩钩!',
        path:"#/lagou",
        groupType:"right"
      }
    ]
  }


  /**
   * 模板一
   * 看电影
   */
  initTemplate01CofigList(){
    this.rightButtonPopupCofigList = [
      {
        type:"msg",
        title:'',
        content:"请你吃冰棒!",
        groupType:"left"
      },
      {
        type:"msg",
        title:'',
        content:"请你吃冰果冻!",
        groupType:"left"
      },
      {
        type:"msg",
        title:'',
        content:"请你吃冰淇淋",
        groupType:"left"
      },
      {
        type:"msg",
        title:'',
        content:"请你吃冰棒+冰果冻+冰淇淋",
        groupType:"left"
      },
      {
        type:"html",
        title:'要不同意先答题!',
        path:"#/q-01",
        groupType:"left"
      },
      {
        type:"html",
        title:'再来一题!',
        path:"#/q-02",
        groupType:"left"
      },
      {
        type:"html",
        title:'还不放弃!',
        path:"#/q-03",
        groupType:"left"
      },
      {
        type:"msg",
        icon: 5,
        title:'',
        content:"不同意不罢休",
        groupType:"left"
      },
    ];
    this.leftButtonPopupCofigList = [
      {
        type:"html",
        title:'拉钩钩!',
        path:"#/lagou",
        groupType:"right"
      }
    ]

  }


  /**
   * 模板二
   * 保大-保小-房产证写你的名字
   */
  initTemplate02CofigList(){
    this.rightButtonPopupCofigList = [
      {
        type:"msg",
        title:'',
        content:"保大!",
        groupType:"left"
      },
      {
        type:"msg",
        title:'',
        content:"我妈会游泳!",
        groupType:"left"
      },
      {
        type:"msg",
        title:'',
        content:"房产证写你的名字",
        groupType:"left"
      },
      {
        type:"msg",
        title:'',
        content:"还有一颗爱你的心",
        groupType:"left"
      },
      {
        type:"html",
        title:'要不同意先答题!',
        path:"#/q-01",
        groupType:"left"
      },
      {
        type:"html",
        title:'再来一题!',
        path:"#/q-02",
        groupType:"left"
      },
      {
        type:"html",
        title:'还不放弃!',
        path:"#/q-03",
        groupType:"left"
      },
      {
        type:"msg",
        icon: 5,
        title:'',
        content:"不同意不罢休",
        groupType:"left"
      },
    ];
    this.leftButtonPopupCofigList = [
      {
        type:"html",
        title:'拉钩钩!',
        path:"#/lagou",
        groupType:"right"
      }
    ]
  }

  downQrcode(){
    var image = $('#qrcode img')[0];
    var a = document.createElement('a');
    a.href = image.src;  //将画布内的信息导出为png图片数据
    a.download = ""+this.id;  //设定下载名称
    a.click(); //点击触发下载
  }


}
