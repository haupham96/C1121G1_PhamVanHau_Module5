import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductManagementComponent} from "./product-management.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";


const routes: Routes = [
  {path:'product',component:ProductManagementComponent, children : [
      {path:'',pathMatch:'full',redirectTo:'list'},
      {path:'list',component:ProductListComponent},
      {path:'create',component:ProductCreateComponent},
      {path:'edit/:id',component:ProductEditComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
