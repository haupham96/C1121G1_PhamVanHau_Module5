import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FuramaServicesComponent} from './service-management/furama-services-list/furama-services.component';
import {ServicesCreateComponent} from './service-management/services-create/services-create.component';
import {ServicesEditComponent} from './service-management/services-edit/services-edit.component';
import {CustomerListComponent} from './customer-management/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-management/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-management/customer-edit/customer-edit.component';
import {ContractListComponent} from './contract-management/contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-management/contract-create/contract-create.component';
import {ServiceManagementComponent} from './service-management/service-management.component';
import {CustomerManagementComponent} from './customer-management/customer-management.component';
import {ContractManagementComponent} from './contract-management/contract-management.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    FuramaServicesComponent,
    ServicesCreateComponent,
    ServicesEditComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ContractListComponent,
    ContractCreateComponent,
    ServiceManagementComponent,
    CustomerManagementComponent,
    ContractManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
