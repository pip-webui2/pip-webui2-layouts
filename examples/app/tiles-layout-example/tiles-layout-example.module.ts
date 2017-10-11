import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { TilesLayoutExampleComponent } from './tiles-layout-example.component';
import { PipTilesLayoutModule, PipMediaModule } from '../pip-webui2-layouts';

@NgModule({
  declarations: [
    TilesLayoutExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,

    PipTilesLayoutModule
  ],
  exports: [
    TilesLayoutExampleComponent
  ],
  providers: [
    
  ],
})
export class TilesLayoutExampleModule { }