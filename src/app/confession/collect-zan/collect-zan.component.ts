import { Component, OnInit } from '@angular/core';

declare var BizQQWPA: any;

@Component({
  selector: 'app-collect-zan',
  templateUrl: './collect-zan.component.html',
  styleUrls: ['./collect-zan.component.css']
})
export class CollectZanComponent implements OnInit {

  //查看范围：1-所有，2-赞过我的
  public seeScope = 1;

  public itemList:any[] = [
    {id:1001,oid:9825307,qq:1001,woZan:true,zanWo:false},
    {id:1003,oid:9825307,qq:1003,woZan:false,zanWo:false},
    {id:1004,oid:9825307,qq:1004,woZan:true,zanWo:true},
    {id:1005,oid:9825307,qq:1005,woZan:true,zanWo:false},
    {id:1006,oid:9825307,qq:1006,woZan:false,zanWo:false},
    {id:1007,oid:9825307,qq:1007,woZan:true,zanWo:true},
    {id:1008,oid:9825307,qq:1008,woZan:true,zanWo:false},
  ];

  constructor() { }

  ngOnInit() {
    //查询数据

  }

  public changeSeeScope(){
    if(this.seeScope != 1){
      this.seeScope = 1;
    }else {
      this.seeScope = 2;
    }
    BizQQWPA.addCustom({aty: '0', a: '0', nameAccount: 800098263, selector: 'qq'});
  }

  go(item,index){
    window.open('https://h5.izuiyou.com/hybrid/share/workPermitShare?oid='+item.oid);
  }

}
