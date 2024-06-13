import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilAdminPage } from './profil-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilAdminPageRoutingModule {}
