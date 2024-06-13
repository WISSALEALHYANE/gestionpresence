import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VenirPage } from './venir.page';

const routes: Routes = [
  {
    path: '',
    component: VenirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VenirPageRoutingModule {}
