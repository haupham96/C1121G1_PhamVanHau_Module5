import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBatDongSanComponent} from './list-bat-dong-san/list-bat-dong-san.component';
import {ThemBatDongSanComponent} from './them-bai-dang/them-bat-dong-san.component';
import {EditBaiDangComponent} from './edit-bai-dang/edit-bai-dang.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'list-baiDang'},
  {path:'list-baiDang',component:ListBatDongSanComponent},
  {path:'create-baiDang',component:ThemBatDongSanComponent},
  {path:'edit-baiDang/:id',component:EditBaiDangComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
