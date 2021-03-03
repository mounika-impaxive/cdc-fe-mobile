import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTherapyPage } from './update-therapy.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTherapyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTherapyPageRoutingModule {}
