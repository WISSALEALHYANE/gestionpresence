import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasserPageRoutingModule } from './passer-routing.module';

import { PasserPage } from './passer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasserPageRoutingModule
  ],
  declarations: [PasserPage]
})
export class PasserPageModule {}
