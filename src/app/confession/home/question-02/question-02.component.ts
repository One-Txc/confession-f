import { Component, OnInit } from '@angular/core';
declare var parent: any;
@Component({
  selector: 'app-question-02',
  templateUrl: './question-02.component.html',
  styleUrls: ['./question-02.component.css']
})
export class Question02Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  question2sure(){

    layui.use(['layer', 'form'], ()=>{
      var layer = layui.layer;
      layer.open({
        icon: 1,
        title: '惊不惊喜不喜'
        ,content: '我喜欢痴痴的望着你!',
        end: function(index, layero){
          parent.layer.closeAll();
        }
      });
    });
  }

}
