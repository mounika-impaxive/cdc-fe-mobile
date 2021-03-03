import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TherapistsPageRoutingModule } from './therapists-routing.module';

import { TherapistsPage } from './therapists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TherapistsPageRoutingModule
  ],
  declarations: [TherapistsPage]
})
export class TherapistsPageModule {}
