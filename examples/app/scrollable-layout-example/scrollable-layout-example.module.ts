import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatToolbarModule } from '@angular/material';

import { ScrollableLayoutExampleComponent } from './scrollable-layout-example.component';
import { PipScrollableLayoutModule, PipTopShadowModule } from '../pip-webui2-layouts';

@NgModule({
  declarations: [
    ScrollableLayoutExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,

    PipScrollableLayoutModule,
    PipTopShadowModule
  ],
  exports: [
    ScrollableLayoutExampleComponent
  ],
  providers: [
    
  ],
})
export class ScrollableLayoutExampleModule { }