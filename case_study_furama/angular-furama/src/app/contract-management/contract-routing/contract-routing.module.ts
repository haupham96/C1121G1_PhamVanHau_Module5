import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContractListComponent} from '../contract-list/contract-list.component';
import {ContractCreateComponent} from '../contract-create/contract-create.component';

const routes: Routes = [
  {path: 'contract-list', component: ContractListComponent},
  {path: 'contract-create', component: ContractCreateComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContractRoutingModule {
}
