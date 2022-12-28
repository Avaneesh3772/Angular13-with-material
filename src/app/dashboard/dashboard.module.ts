import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DialogUserinfoComponent } from './dialog-userinfo/dialog-userinfo.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DialogUserinfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
