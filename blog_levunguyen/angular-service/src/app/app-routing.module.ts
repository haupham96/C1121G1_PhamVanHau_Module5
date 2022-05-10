import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudentListComponent} from "./student-management/student-list/student-list.component";
import {StudentViewComponent} from "./student-management/student-view/student-view.component";
import {StudentCreateComponent} from "./student-management/student-create/student-create.component";
import {StudentEditComponent} from "./student-management/student-edit/student-edit.component";
import {StudentDeleteComponent} from "./student-management/student-delete/student-delete.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'student-list'},
  {path: 'student-list', component: StudentListComponent},
  {path: 'student-view/:id', component: StudentViewComponent},
  {path: 'student-create', component: StudentCreateComponent},
  {path: 'student-edit/:id', component: StudentEditComponent},
  {path: 'student-delete/:id', component: StudentDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
