import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimDoctPage } from './claim-doct.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimDoctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimDoctPageRoutingModule {}
