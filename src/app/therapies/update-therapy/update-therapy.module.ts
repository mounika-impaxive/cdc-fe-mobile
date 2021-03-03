import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTherapyPageRoutingModule } from './update-therapy-routing.module';

import { UpdateTherapyPage } from './update-therapy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTherapyPageRoutingModule
  ],
  declarations: [UpdateTherapyPage]
})
export class UpdateTherapyPageModule {}
