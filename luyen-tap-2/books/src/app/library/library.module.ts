import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LibraryRoutingModule} from './library-routing.module';
import {LibraryComponent} from './library.component';
import {BookListComponent} from './book-list/book-list.component';
import {CardListComponent} from './card-list/card-list.component';
import {CardCreateComponent} from './card-create/card-create.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { BookReturnComponent } from './book-return/book-return.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [LibraryComponent, BookListComponent, CardListComponent, CardCreateComponent, BookReturnComponent],
  exports: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    MDBBootstrapModule,
    ReactiveFormsModule
  ]
})
export class LibraryModule {
}
