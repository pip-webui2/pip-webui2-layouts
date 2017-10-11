import { NgModule } from '@angular/core';
import { MasonryModule  } from 'angular2-masonry';

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