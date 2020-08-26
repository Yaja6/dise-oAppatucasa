import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegproductPageRoutingModule } from './regproduct-routing.module';

import { RegproductPage } from './regproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegproductPageRoutingModule
  ],
  declarations: [RegproductPage]
})
export class RegproductPageModule {}
