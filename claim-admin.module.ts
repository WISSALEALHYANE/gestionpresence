import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaimAdminPageRoutingModule } from './claim-admin-routing.module';

import { ClaimAdminPage } from './claim-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaimAdminPageRoutingModule
  ],
  declarations: [ClaimAdminPage]
})
export class ClaimAdminPageModule {}
