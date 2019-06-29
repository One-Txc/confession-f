import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collect-zan',
  templateUrl: './collect-zan.component.html',
  styleUrls: ['./collect-zan.component.css']
})
export class CollectZanComponent implements OnInit {

  //查看范围：1-所有，2-赞过我的
  public seeScope = 1;

  constructor() { }

  ngOnInit() {
  }

  public changeSeeScope(){
    if(this.seeScope != 1){
      this.seeScope = 1;
    }else {
      this.seeScope = 2;
    }
  }

}
