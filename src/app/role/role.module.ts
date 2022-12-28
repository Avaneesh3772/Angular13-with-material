import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { QuarterlyComponent } from './quarterly/quarterly.component';
import { RoleAssignmentComponent } from './role-assignment/role-assignment.component';
import { RoleDefinitionComponent } from './role-definition/role-definition.component';


@NgModule({
  declarations: [
    RoleComponent,
    MonthlyComponent,
    QuarterlyComponent,
    RoleAssignmentComponent,
    RoleDefinitionComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }
