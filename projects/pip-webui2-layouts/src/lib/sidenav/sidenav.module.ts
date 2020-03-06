import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PIP_SIDENAV_CONFIG, PipSidenavConfig } from './shared/models';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ]
})
export class PipSidenavModule {
  static withConfig(config: PipSidenavConfig): ModuleWithProviders {
    return {
      ngModule: PipSidenavModule,
      providers: [
        {
          provide: PIP_SIDENAV_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
