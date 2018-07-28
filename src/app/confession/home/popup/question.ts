

import {OnInit} from "@angular/core";

declare var parent: any;
export class Question implements OnInit {
  protected layer:any;


  ngOnInit(): void {
    this.initLayui();
  }
  protected initLayui(){
    layui.use(['layer', 'form'], ()=>{
      this.layer = layui.layer;
    });
  }
}
