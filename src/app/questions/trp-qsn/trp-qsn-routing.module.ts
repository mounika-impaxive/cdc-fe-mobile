import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrpQsnPage } from './trp-qsn.page';

const routes: Routes = [
  {
    path: '',
    component: TrpQsnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrpQsnPageRoutingModule {}
