import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasserPage } from './passer.page';

const routes: Routes = [
  {
    path: '',
    component: PasserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasserPageRoutingModule {}
