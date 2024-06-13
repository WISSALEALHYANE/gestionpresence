import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenirPageRoutingModule } from './venir-routing.module';

import { VenirPage } from './venir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenirPageRoutingModule
  ],
  declarations: [VenirPage]
})
export class VenirPageModule {}
