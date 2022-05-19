import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProductComponent} from "./product-management/list-product/list-product.component";
import {CreateProductComponent} from "./product-management/create-product/create-product.component";
import {EditProductComponent} from "./product-management/edit-product/edit-product.component";


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'product/list'},
  {path:'product/list',component:ListProductComponent},
  {path:'product/create',component:CreateProductComponent},
  {path:'product/edit/:id',component:EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
