import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./confession/home/index/index.component";
import {ConfigAddComponent} from "./confession/home/config/config-add/config-add.component";
import {MemoirsComponent} from "./confession/home/memoirs/memoirs.component";
import {AnniComponent} from "./confession/home/popup/anni/anni.component";
import {HahaComponent} from "./confession/home/popup/haha/haha.component";
import {OkComponent} from "./confession/home/popup/ok/ok.component";
import {Question01Component} from "./confession/home/question-01/question-01.component";
import {Question02Component} from "./confession/home/question-02/question-02.component";
import {Question03Component} from "./confession/home/popup/question-03/question-03.component";
import {XingxingComponent} from "./confession/home/popup/xingxing/xingxing.component";
import {CollectZanComponent} from "./confession/collect-zan/collect-zan.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home/:id', component: IndexComponent},
  {path: 'home', component: IndexComponent},
  {path: 'config/add', component: ConfigAddComponent},
  {path: 'memoris', component: MemoirsComponent},

  {path: 'aini', component: AnniComponent},
  {path: 'mjg', component: HahaComponent},
  {path: 'lagou', component: OkComponent},
  {path: 'q-01', component: Question01Component},
  {path: 'q-02', component: Question02Component},
  {path: 'q-03', component: Question03Component},
  {path: 'xingxing', component: XingxingComponent},
  {path: 'szm', component: OkComponent},


  {path: 'collectZan', component: CollectZanComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
