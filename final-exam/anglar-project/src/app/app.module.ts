import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { ListBatDongSanComponent } from './list-bat-dong-san/list-bat-dong-san.component';
import { ThemBatDongSanComponent } from './them-bai-dang/them-bat-dong-san.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditBaiDangComponent } from './edit-bai-dang/edit-bai-dang.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBatDongSanComponent,
    ThemBatDongSanComponent,
    EditBaiDangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
