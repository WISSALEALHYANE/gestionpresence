import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListePrePage } from './liste-pre.page';

const routes: Routes = [
  {
    path: '',
    component: ListePrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListePrePageRoutingModule {}
