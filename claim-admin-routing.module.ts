import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimAdminPage } from './claim-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimAdminPageRoutingModule {}
