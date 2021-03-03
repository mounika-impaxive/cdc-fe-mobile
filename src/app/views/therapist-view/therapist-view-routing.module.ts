import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapistViewPage } from './therapist-view.page';

const routes: Routes = [
  {
    path: '',
    component: TherapistViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapistViewPageRoutingModule {}
