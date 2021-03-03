import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageTherapyPageRoutingModule } from './manage-therapy-routing.module';

import { ManageTherapyPage } from './manage-therapy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageTherapyPageRoutingModule
  ],
  declarations: [ManageTherapyPage]
})
export class ManageTherapyPageModule {}
