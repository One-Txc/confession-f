import { Component, OnInit } from '@angular/core';
import {Question} from "../question";

@Component({
  selector: 'app-haha',
  templateUrl: './haha.component.html',
  styleUrls: ['./haha.component.css']
})
export class HahaComponent extends Question{

  constructor() {super()}

  ngOnInit() {

  }

}
