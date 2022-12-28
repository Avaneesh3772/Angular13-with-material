import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestatementComponent } from './restatement.component';

const routes: Routes = [{ path: '', component: RestatementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestatementRoutingModule { }
