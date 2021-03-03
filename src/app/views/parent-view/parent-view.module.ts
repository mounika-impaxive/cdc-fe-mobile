import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentViewPageRoutingModule } from './parent-view-routing.module';

import { ParentViewPage } from './parent-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentViewPageRoutingModule
  ],
  declarations: [ParentViewPage]
})
export class ParentViewPageModule {}
