import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PipSidenavConfig } from './models/index';
import { PipSidenavStartService, PipSidenavEndService } from './sidenav.service';

/** @dynamic */
@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ]
})
export class PipSidenavStartModule {
  static forRoot(config?: PipSidenavConfig): ModuleWithProviders {
    return {
      ngModule: PipSidenavStartModule,
      providers: [
        {
          provide: PipSidenavStartService,
          useFactory: function (media) { return new PipSidenavStartService(media, config); },
          deps: [MediaObserver]
        }
      ]
    };
  }
}

/** @dynamic */
@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ]
})
export class PipSidenavEndModule {
  static forRoot(config?: PipSidenavConfig): ModuleWithProviders {
    return {
      ngModule: PipSidenavEndModule,
      providers: [
        {
          provide: PipSidenavEndService,
          useFactory: function (media) { return new PipSidenavEndService(media, config); },
          deps: [MediaObserver]
        }
      ]
    };
  }
}
