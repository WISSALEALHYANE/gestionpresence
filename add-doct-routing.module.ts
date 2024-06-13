import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDoctPage } from './add-doct.page';

const routes: Routes = [
  {
    path: '',
    component: AddDoctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDoctPageRoutingModule {}
