import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PipSidenavConfig, PIP_SIDENAV_START_CONFIG, PIP_SIDENAV_END_CONFIG } from './models/index';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ]
})
export class PipSidenavModule {
  static withConfig(config: {
    start?: PipSidenavConfig,
    end?: PipSidenavConfig
  }): ModuleWithProviders {
    return {
      ngModule: PipSidenavModule,
      providers: [
        {
          provide: PIP_SIDENAV_START_CONFIG,
          useValue: config.start
        },
        {
          provide: PIP_SIDENAV_END_CONFIG,
          useValue: config.end
        }
      ]
    };
  }
}
