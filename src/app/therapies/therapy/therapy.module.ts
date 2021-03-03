import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TherapyPageRoutingModule } from './therapy-routing.module';

import { TherapyPage } from './therapy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TherapyPageRoutingModule
  ],
  declarations: [TherapyPage]
})
export class TherapyPageModule {}
