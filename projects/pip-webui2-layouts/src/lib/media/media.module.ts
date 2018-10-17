import { NgModule } from '@angular/core';
import { BREAKPOINT } from '@angular/flex-layout';

import { PipMediaService } from './shared/media.service';
import { PIP_BREAKPOINTS } from './shared/breakpoints';

const PipBreakPointsProvider = {
  provide: BREAKPOINT,
  useValue: [...PIP_BREAKPOINTS]
};

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    PipMediaService,
    PipBreakPointsProvider
  ]
})
export class PipMediaModule { }
