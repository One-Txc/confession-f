import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var layui: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    layui.use(['layer', 'form'], function(){
      var layer = layui.layer;
      var form = layui.form;
      layer.msg('Hello World');
    });
  }

}
