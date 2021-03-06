import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {popupRoutes} from "./popup-routes";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { QrcodeComponent } from './qrcode/qrcode.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    //RouterModule,
    BrowserModule,
    FormsModule,
    RouterModule.forChild(popupRoutes)
  ],
  declarations: [QrcodeComponent]
})
export class PopupModule { }
