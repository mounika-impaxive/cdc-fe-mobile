import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrpQsnPageRoutingModule } from './trp-qsn-routing.module';

import { TrpQsnPage } from './trp-qsn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrpQsnPageRoutingModule
  ],
  declarations: [TrpQsnPage]
})
export class TrpQsnPageModule {}
