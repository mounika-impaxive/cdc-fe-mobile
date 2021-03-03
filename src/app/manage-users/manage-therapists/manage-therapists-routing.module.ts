import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageTherapistsPage } from './manage-therapists.page';

const routes: Routes = [
  {
    path: '',
    component: ManageTherapistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageTherapistsPageRoutingModule {}
