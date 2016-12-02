import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmeupComponent } from './smeup.component';

import { AuthGuardService } from '../auth-guard.service';

const routes: Routes = [
  {
    path: 'smeup',
    component: SmeupComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SmeupRoutingModule { }
