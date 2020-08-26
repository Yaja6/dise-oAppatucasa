import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegproductPage } from './regproduct.page';

const routes: Routes = [
  {
    path: '',
    component: RegproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegproductPageRoutingModule {}
