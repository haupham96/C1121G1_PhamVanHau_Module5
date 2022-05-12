import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "../product-list/product-list.component";
import {ProductCreateComponent} from "../product-create/product-create.component";
import {ProductEditComponent} from "../product-edit/product-edit.component";
import {ProductDeleteComponent} from "../product-delete/product-delete.component";

const route: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'product-list'},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'product-edit/:id', component: ProductEditComponent},
  {path: 'product-delete/:id', component: ProductDeleteComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ]
})
export class ProductRoutingModule {
}
