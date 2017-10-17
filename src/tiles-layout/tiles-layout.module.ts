import { NgModule } from '@angular/core';

import { PipTilesLayoutComponent } from './tiles-layout.component';

@NgModule({
  declarations: [
    PipTilesLayoutComponent
  ],
  imports: [
    MasonryModule
  ],
  exports: [  
    PipTilesLayoutComponent
  ],
  providers: [
    PipTilesLayoutComponent
  ]
})
export class PipTilesLayoutModule { }