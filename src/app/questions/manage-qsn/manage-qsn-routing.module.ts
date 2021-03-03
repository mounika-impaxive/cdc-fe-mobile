import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageQsnPage } from './manage-qsn.page';

const routes: Routes = [
  {
    path: '',
    component: ManageQsnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageQsnPageRoutingModule {}
