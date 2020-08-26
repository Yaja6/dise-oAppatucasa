import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegdealerPageRoutingModule } from './regdealer-routing.module';

import { RegdealerPage } from './regdealer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegdealerPageRoutingModule
  ],
  declarations: [RegdealerPage]
})
export class RegdealerPageModule {}
