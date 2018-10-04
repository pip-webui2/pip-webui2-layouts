import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';

import { PipAppbarComponent } from './appbar.component';

@NgModule({
  declarations: [
    PipAppbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    PipAppbarComponent
  ],
  providers: [],
})
export class PipAppbarModule { }
