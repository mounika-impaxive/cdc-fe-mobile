import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapyPage } from './therapy.page';

const routes: Routes = [
  {
    path: '',
    component: TherapyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapyPageRoutingModule {}
