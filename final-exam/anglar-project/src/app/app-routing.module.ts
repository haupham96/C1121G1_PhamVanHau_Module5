import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBatDongSanComponent} from './list-bat-dong-san/list-bat-dong-san.component';
import {ThemBatDongSanComponent} from './them-bat-dong-san/them-bat-dong-san.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'list-baiDang'},
  {path:'list-baiDang',component:ListBatDongSanComponent},
  {path:'create-baiDang',component:ThemBatDongSanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
