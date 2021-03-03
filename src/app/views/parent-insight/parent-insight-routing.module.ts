import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentInsightPage } from './parent-insight.page';

const routes: Routes = [
  {
    path: '',
    component: ParentInsightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentInsightPageRoutingModule {}
