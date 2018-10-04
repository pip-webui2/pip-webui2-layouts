import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material';

import { PipRootLayoutComponent } from './root-layout.component';

@NgModule({
  declarations: [
    PipRootLayoutComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    PipRootLayoutComponent
  ],
  providers: []
})
export class PipRootLayoutModule { }
