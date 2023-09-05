import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientSnippetComponent } from './patient-snippet/patient-snippet.component';
import { DetailEntryComponent } from './detail-entry/detail-entry.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PatientSnippetComponent,
    DetailEntryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
