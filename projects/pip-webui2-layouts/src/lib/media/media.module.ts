import { NgModule, ModuleWithProviders } from '@angular/core';
import { BREAKPOINT } from '@angular/flex-layout';

import { PipShowHideDirective } from './media.directives';
import { PipMediaService } from './shared/media.service';
import { PIP_BREAKPOINTS } from './shared/breakpoints';
import { PipResizeDirective } from './resize.directive';

const PipBreakPointsProvider = {
  provide: BREAKPOINT,
  useValue: [...PIP_BREAKPOINTS]
};

@NgModule({
  declarations: [PipShowHideDirective, PipResizeDirective],
  exports: [PipShowHideDirective, PipResizeDirective]
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
