import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarPage } from './sidebar.page';

const routes: Routes = [
  {
    path: '',
    component: SidebarPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [SidebarPage],
  exports: [RouterModule],
})
export class SidebarPageRoutingModule {}
