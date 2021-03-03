import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageTherapistsPageRoutingModule } from './manage-therapists-routing.module';

import { ManageTherapistsPage } from './manage-therapists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageTherapistsPageRoutingModule
  ],
  declarations: [ManageTherapistsPage]
})
export class ManageTherapistsPageModule {}
