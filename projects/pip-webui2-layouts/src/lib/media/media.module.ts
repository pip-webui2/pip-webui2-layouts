import { NgModule } from '@angular/core';
import { BREAKPOINT } from '@angular/flex-layout';

import { PipShowHideDirective } from './media.directives';
import { PipMediaService } from './shared/media.service';
import { PIP_BREAKPOINTS } from './shared/breakpoints';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const PipBreakPointsProvider = {
  provide: BREAKPOINT,
  useValue: [...PIP_BREAKPOINTS]
};

@NgModule({
  declarations: [PipShowHideDirective],
  exports: [PipShowHideDirective]
})
export class PipMediaModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PipMediaModule,
      providers: [
        PipMediaService,
        PipBreakPointsProvider
      ]
    };
  }
}
