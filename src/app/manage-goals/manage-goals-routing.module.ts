import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageGoalsPage } from './manage-goals.page';

const routes: Routes = [
  {
    path: '',
    component: ManageGoalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageGoalsPageRoutingModule {}
