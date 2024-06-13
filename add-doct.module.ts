import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDoctPageRoutingModule } from './add-doct-routing.module';

import { AddDoctPage } from './add-doct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDoctPageRoutingModule
  ],
  declarations: [AddDoctPage]
})
export class AddDoctPageModule {}
