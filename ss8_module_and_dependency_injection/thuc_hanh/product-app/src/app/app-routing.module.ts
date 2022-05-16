import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListProductComponent} from './list-product/list-product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {CategoryModule} from "./category-management/category/category.module";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'product-list'},
  {path: 'product-list', component: ListProductComponent},
  {path: 'product-create', component: CreateProductComponent},
  {path: 'product-edit/:id', component: EditProductComponent},
  {path:'category',
  loadChildren: () => import('./category-management/category/category.module').then(module => CategoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
