import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {IndexComponent} from "./confession/home/index/index.component";
import {ServiceURLInterceptor} from "./core/service-url.interceptor";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {Question01Component} from "./confession/home/question-01/question-01.component";
import {Question02Component} from "./confession/home/question-02/question-02.component";
import {Question03Component} from "./confession/home/popup/question-03/question-03.component";
import {HahaComponent} from "./confession/home/popup/haha/haha.component";
import {OkComponent} from "./confession/home/popup/ok/ok.component";
import {XingxingComponent} from "./confession/home/popup/xingxing/xingxing.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Question01Component,
    Question02Component,
    Question03Component,
    HahaComponent,
    OkComponent,
    XingxingComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    //RouterModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    ServiceURLInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
