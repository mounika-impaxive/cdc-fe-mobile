import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateGoalsPage } from './update-goals.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateGoalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateGoalsPageRoutingModule {}
