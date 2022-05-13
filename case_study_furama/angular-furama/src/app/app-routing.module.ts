import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ServiceRoutingModule} from './service-management/service-routing/service-routing.module';
import {CustomerRoutingModule} from './customer-management/customer-routing/customer-routing.module';
import {ContractRoutingModule} from './contract-management/contract-routing/contract-routing.module';
import {ServicesModule} from './service-management/services.module';
import {CustomerModule} from './customer-management/customer.module';
import {ContractModule} from './contract-management/contract.module';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ServicesModule,
    CustomerModule,
    ContractModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
