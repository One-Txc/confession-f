import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {IndexComponent} from "./confession/home/index/index.component";
import {ServiceURLInterceptor} from "./core/service-url.interceptor";
import {RouterModule} from "@angular/router";
import {HttpModule, RequestOptions, XHRBackend} from "@angular/http";
import {CommonModule, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {Question01Component} from "./confession/home/question-01/question-01.component";
import {Question02Component} from "./confession/home/question-02/question-02.component";
import {Question03Component} from "./confession/home/popup/question-03/question-03.component";
import {HahaComponent} from "./confession/home/popup/haha/haha.component";
import {OkComponent} from "./confession/home/popup/ok/ok.component";
import {XingxingComponent} from "./confession/home/popup/xingxing/xingxing.component";
import {ConfigService} from "./service/config.service";
import {ConfigAddComponent} from "./confession/home/config/config-add/config-add.component";
import {InterceptorService} from "ng2-interceptors";
import {MemoirsComponent} from "./confession/home/memoirs/memoirs.component";
import {AnniComponent} from "./confession/home/popup/anni/anni.component";


export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions) {
  const service = new InterceptorService(xhrBackend, requestOptions);
  service.addInterceptor(new ServiceURLInterceptor());
  // Add interceptors here with service.addInterceptor(interceptor)
  return service;
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Question01Component,
    Question02Component,
    Question03Component,
    HahaComponent,
    OkComponent,
    XingxingComponent,
    ConfigAddComponent,
    MemoirsComponent,
    AnniComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    //RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ServiceURLInterceptor,ConfigService,
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    },
    {
      provide: InterceptorService,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
