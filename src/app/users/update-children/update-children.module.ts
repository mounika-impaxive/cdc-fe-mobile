import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateChildrenPageRoutingModule } from './update-children-routing.module';

import { UpdateChildrenPage } from './update-children.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateChildrenPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [UpdateChildrenPage]
})
export class UpdateChildrenPageModule {}
