import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageTherapyPage } from './manage-therapy.page';

const routes: Routes = [
  {
    path: '',
    component: ManageTherapyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageTherapyPageRoutingModule {}
