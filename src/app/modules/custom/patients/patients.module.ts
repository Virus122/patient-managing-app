import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ValueSnippetComponent } from './value-snippet/value-snippet.component';


@NgModule({
  declarations: [
    PatientsComponent,
    ValueSnippetComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    SharedModule
  ]
})
export class PatientsModule { }
