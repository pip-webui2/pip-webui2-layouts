import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { PipNavExpanderComponent } from './nav-expander.component';

@NgModule({
  declarations: [
    PipNavExpanderComponent
  ],
  exports: [
    PipNavExpanderComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ]
})
export class PipNavExpanderModule { }
