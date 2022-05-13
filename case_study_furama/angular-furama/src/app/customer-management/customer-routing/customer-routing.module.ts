import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from '../customer-list/customer-list.component';
import {CustomerEditComponent} from '../customer-edit/customer-edit.component';
import {CustomerCreateComponent} from '../customer-create/customer-create.component';

const routes: Routes = [
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-edit/:id', component: CustomerEditComponent},
  {path: 'customer-create', component: CustomerCreateComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class CustomerRoutingModule {
}
