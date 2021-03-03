import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageQsnPageRoutingModule } from './manage-qsn-routing.module';

import { ManageQsnPage } from './manage-qsn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageQsnPageRoutingModule
  ],
  declarations: [ManageQsnPage]
})
export class ManageQsnPageModule {}
