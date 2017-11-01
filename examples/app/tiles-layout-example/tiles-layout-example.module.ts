import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { MatToolbarModule } from '@angular/material';

import { TilesLayoutExampleComponent } from './tiles-layout-example.component';
import { PipTilesLayoutModule, PipMediaModule, PipTopShadowModule } from '../pip-webui2-layouts';

@NgModule({
  declarations: [
    TilesLayoutExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,

    PipTilesLayoutModule,
    PipTopShadowModule
  ],
  exports: [
    TilesLayoutExampleComponent
  ],
  providers: [
    
  ],
})
export class TilesLayoutExampleModule { }