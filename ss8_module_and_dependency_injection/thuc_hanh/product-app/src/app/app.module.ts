import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {CreateProductComponent} from './create-product/create-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {ListProductComponent} from './list-product/list-product.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from "@angular/forms";
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryListComponent } from './category-management/category-list/category-list.component';
import { CategoryCreateComponent } from './category-management/category-create/category-create.component';
import { CategoryEditComponent } from './category-management/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './category-management/category-delete/category-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    EditProductComponent,
    ListProductComponent,
    CategoryManagementComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
