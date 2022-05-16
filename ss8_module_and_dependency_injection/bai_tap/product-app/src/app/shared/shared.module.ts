import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {DropdownModule, IconsModule, NavbarModule, WavesModule} from "angular-bootstrap-md";


@NgModule({
  declarations: [NavBarComponent],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    IconsModule,
    DropdownModule,
    WavesModule,
    NavbarModule
  ]
})
export class SharedModule { }
