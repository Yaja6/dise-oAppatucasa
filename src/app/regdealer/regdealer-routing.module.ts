import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegdealerPage } from './regdealer.page';

const routes: Routes = [
  {
    path: '',
    component: RegdealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegdealerPageRoutingModule {}
