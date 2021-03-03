import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateGoalsPageRoutingModule } from './update-goals-routing.module';

import { UpdateGoalsPage } from './update-goals.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateGoalsPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [UpdateGoalsPage]
})
export class UpdateGoalsPageModule {}
