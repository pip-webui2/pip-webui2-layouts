import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material';

import { PipRightnavService } from './shared/rightnav.service';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ]
})
export class PipRightnavModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PipRightnavModule,
      providers: [
        PipRightnavService
      ]
    };
  }
}
