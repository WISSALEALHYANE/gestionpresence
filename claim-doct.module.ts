import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaimDoctPageRoutingModule } from './claim-doct-routing.module';

import { ClaimDoctPage } from './claim-doct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaimDoctPageRoutingModule
  ],
  declarations: [ClaimDoctPage]
})
export class ClaimDoctPageModule {}
