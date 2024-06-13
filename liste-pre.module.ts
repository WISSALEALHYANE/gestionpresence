import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListePrePageRoutingModule } from './liste-pre-routing.module';

import { ListePrePage } from './liste-pre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListePrePageRoutingModule
  ],
  declarations: [ListePrePage]
})
export class ListePrePageModule {}
