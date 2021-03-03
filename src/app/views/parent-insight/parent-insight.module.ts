import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentInsightPageRoutingModule } from './parent-insight-routing.module';

import { ParentInsightPage } from './parent-insight.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentInsightPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [ParentInsightPage]
})
export class ParentInsightPageModule {}
