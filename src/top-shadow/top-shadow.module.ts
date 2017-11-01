import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatToolbarModule } from '@angular/material';

import { PipTopShadowComponent } from './top-shadow.component';

@NgModule({
  declarations: [
    PipTopShadowComponent
  ],
  imports: [

  ],
  exports: [
    PipTopShadowComponent
  ],
  providers: [
  ],
})
export class PipTopShadowModule { }