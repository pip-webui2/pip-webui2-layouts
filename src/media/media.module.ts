import { NgModule } from '@angular/core';
import { BREAKPOINTS } from '@angular/flex-layout';

import { PipMediaService } from './shared/media.service';

import { PIP_BREAKPOINTS } from './shared/breakpoints';

export const PipBreakPointsProvider = {
  provide: BREAKPOINTS,
  useValue: [...PIP_BREAKPOINTS]
};

@NgModule({
  declarations: [

  ],
  imports: [

  ],
  exports: [

  ],
  providers: [
    PipMediaService,
    PipBreakPointsProvider
  ]
})
export class PipMediaModule { }