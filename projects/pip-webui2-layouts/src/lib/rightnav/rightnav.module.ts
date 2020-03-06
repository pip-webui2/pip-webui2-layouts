import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PIP_RIGHTNAV_CONFIG, PipRightnavConfig } from './shared/models';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ]
})
export class PipRightnavModule {
  static withConfig(config: PipRightnavConfig): ModuleWithProviders {
    return {
      ngModule: PipRightnavModule,
      providers: [
        {
          provide: PIP_RIGHTNAV_CONFIG,
          useValue: config?.views ?? []
        }
      ]
    };
  }
}
