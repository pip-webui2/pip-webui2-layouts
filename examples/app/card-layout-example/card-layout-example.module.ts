import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatToolbarModule, MatSlideToggleModule, MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';

import { CardLayoutExampleComponent } from './card-layout-example.component';
import { PipCardLayoutModule, PipMediaModule, PipTopShadowModule } from '../pip-webui2-layouts';

@NgModule({
  declarations: [
    CardLayoutExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,

    PipCardLayoutModule,
    PipMediaModule,
    PipTopShadowModule
  ],
  exports: [
    CardLayoutExampleComponent
  ],
  providers: [
    
  ],
})
export class CardLayoutExampleModule { }