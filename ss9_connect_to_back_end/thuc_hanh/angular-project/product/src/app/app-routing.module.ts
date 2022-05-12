import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductRoutingModule} from "./product-management/product-routing/product-routing.module";


@NgModule({
  imports: [RouterModule, ProductRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
