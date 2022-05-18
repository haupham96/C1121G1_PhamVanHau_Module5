import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductManagementComponent } from './product-management.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [ProductManagementComponent, ProductListComponent, ProductCreateComponent, ProductEditComponent],
    imports: [
        CommonModule,
        ProductManagementRoutingModule,
        MDBBootstrapModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        FormsModule,
    ]
})
export class ProductManagementModule { }
