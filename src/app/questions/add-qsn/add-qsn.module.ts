import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddQsnPageRoutingModule } from './add-qsn-routing.module';

import { AddQsnPage } from './add-qsn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddQsnPageRoutingModule
  ],
  declarations: [AddQsnPage]
})
export class AddQsnPageModule {}
