import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageGoalsPageRoutingModule } from './manage-goals-routing.module';

import { ManageGoalsPage } from './manage-goals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageGoalsPageRoutingModule
  ],
  declarations: [ManageGoalsPage]
})
export class ManageGoalsPageModule {}
