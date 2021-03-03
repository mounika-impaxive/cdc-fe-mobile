import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTherapistsPage } from './update-therapists.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTherapistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTherapistsPageRoutingModule {}
