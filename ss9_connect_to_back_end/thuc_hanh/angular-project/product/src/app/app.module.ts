import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductListComponent } from './product-management/product-list/product-list.component';
import { ProductEditComponent } from './product-management/product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-management/product-delete/product-delete.component';
import { ProductCreateComponent } from './product-management/product-create/product-create.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductManagementComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
