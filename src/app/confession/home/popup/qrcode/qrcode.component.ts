import { Component, OnInit } from '@angular/core';
import {Question} from "../question";

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent extends Question{



  constructor() {super()}

  ngOnInit() {

  }
}
