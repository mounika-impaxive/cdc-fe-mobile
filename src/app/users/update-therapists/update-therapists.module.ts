import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTherapistsPageRoutingModule } from './update-therapists-routing.module';

import { UpdateTherapistsPage } from './update-therapists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTherapistsPageRoutingModule
  ],
  declarations: [UpdateTherapistsPage]
})
export class UpdateTherapistsPageModule {}
