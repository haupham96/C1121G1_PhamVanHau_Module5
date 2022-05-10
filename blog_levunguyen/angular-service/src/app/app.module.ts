import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { StudentCreateComponent } from './student-management/student-create/student-create.component';
import { StudentEditComponent } from './student-management/student-edit/student-edit.component';
import { StudentListComponent } from './student-management/student-list/student-list.component';
import { StudentDeleteComponent } from './student-management/student-delete/student-delete.component';
import { StudentViewComponent } from './student-management/student-view/student-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    StudentManagementComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentListComponent,
    StudentDeleteComponent,
    StudentViewComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
