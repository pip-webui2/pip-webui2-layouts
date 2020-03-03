import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PipSidenavService } from './shared/sidenav.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ]
})
export class PipSidenavModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PipSidenavModule,
      providers: [
        PipSidenavService
      ]
    };
  }
}
