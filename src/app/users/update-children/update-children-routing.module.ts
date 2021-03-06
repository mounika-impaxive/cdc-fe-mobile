import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateChildrenPage } from './update-children.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateChildrenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateChildrenPageRoutingModule {}
