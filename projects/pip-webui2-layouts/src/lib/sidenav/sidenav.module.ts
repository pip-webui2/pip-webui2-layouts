import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material';

import { PipSidenavService } from './shared/sidenav.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
  ],
  providers: [
    PipSidenavService
  ]
})
export class PipSidenavModule { }
