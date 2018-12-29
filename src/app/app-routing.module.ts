import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./confession/home/index/index.component";
import {ConfigAddComponent} from "./confession/home/config/config-add/config-add.component";
import {MemoirsComponent} from "./confession/home/memoirs/memoirs.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home/:id', component: IndexComponent},
  {path: 'home', component: IndexComponent},
  {path: 'config/add', component: ConfigAddComponent},
  {path: 'memoris', component: MemoirsComponent},

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
