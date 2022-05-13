import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FuramaServicesComponent} from '../furama-services-list/furama-services.component';
import {ServicesCreateComponent} from '../services-create/services-create.component';
import {ServicesEditComponent} from '../services-edit/services-edit.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'services-list'},
  {path: 'services-list', component: FuramaServicesComponent},
  {path: 'services-create', component: ServicesCreateComponent},
  {path: 'services-edit/:id', component: ServicesEditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServiceRoutingModule {
}
