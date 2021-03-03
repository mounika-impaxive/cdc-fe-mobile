import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TherapistInsightPageRoutingModule } from './therapist-insight-routing.module';

import { TherapistInsightPage } from './therapist-insight.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TherapistInsightPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [TherapistInsightPage]
})
export class TherapistInsightPageModule {}
