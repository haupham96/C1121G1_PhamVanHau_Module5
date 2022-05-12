import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ServiceRoutingModule} from './service-management/service-routing/service-routing.module';
import {CustomerRoutingModule} from './customer-management/customer-routing/customer-routing.module';
import {ContractRoutingModule} from './contract-management/contract-routing/contract-routing.module';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ServiceRoutingModule,
    CustomerRoutingModule,
    ContractRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
