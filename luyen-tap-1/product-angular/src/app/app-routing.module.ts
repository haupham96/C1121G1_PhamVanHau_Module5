import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductManagementModule} from "./product-management/product-management.module";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ProductManagementModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
