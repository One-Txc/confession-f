import { Component, OnInit } from '@angular/core';
import {Question} from "../question";

declare var parent: any;
@Component({
  selector: 'app-question-03',
  templateUrl: './question-03.component.html',
  styleUrls: ['./question-03.component.css']
})
export class Question03Component extends Question{

  constructor() {
    super();
  }

  question3sure(){
    this.layer.open({
      icon: 1,
      title: '可以吗'
      ,content: '低头我可以吻你吗!',
      end: function(index, layero){
        parent.layer.closeAll();
      }
    });
  }

}
