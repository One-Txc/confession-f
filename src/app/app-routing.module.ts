import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./confession/home/index/index.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "",
        component: IndexComponent,
        pathMatch: 'full',
      },
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
