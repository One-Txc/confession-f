import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Question} from "../popup/question";
declare var parent: any;

@Component({
  selector: 'app-question-01',
  templateUrl: './question-01.component.html',
  styleUrls: ['./question-01.component.css']
})
export class Question01Component extends Question{

  constructor() {
    super();
  }


  sure(){
      this.layer.open({
        icon: 6,
        title: ''
        , content: '傻瓜我属于你的啊!',
        end: function (index, layero) {
          parent.layer.closeAll();
        }
      })
  }

}
