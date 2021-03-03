import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentViewPage } from './parent-view.page';

const routes: Routes = [
  {
    path: '',
    component: ParentViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentViewPageRoutingModule {}
