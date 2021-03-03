import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapistInsightPage } from './therapist-insight.page';

const routes: Routes = [
  {
    path: '',
    component: TherapistInsightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapistInsightPageRoutingModule {}
