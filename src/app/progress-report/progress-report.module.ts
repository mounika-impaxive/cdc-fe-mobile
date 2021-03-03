import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressReportPageRoutingModule } from './progress-report-routing.module';

import { ProgressReportPage } from './progress-report.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressReportPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [ProgressReportPage]
})
export class ProgressReportPageModule {}
