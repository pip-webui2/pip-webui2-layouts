import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatToolbarModule } from '@angular/material';

import { PipShadowComponent } from './shadow.component';

@NgModule({
  declarations: [
    PipShadowComponent
  ],
  imports: [

  ],
  exports: [
    PipShadowComponent
  ],
  providers: [
  ],
})
export class PipShadowModule { }