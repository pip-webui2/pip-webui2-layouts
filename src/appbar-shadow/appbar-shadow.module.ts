import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatToolbarModule } from '@angular/material';

import { PipAppbarShadowComponent } from './appbar-shadow.component';

@NgModule({
  declarations: [
    PipAppbarShadowComponent
  ],
  imports: [

  ],
  exports: [
    PipAppbarShadowComponent
  ],
  providers: [
  ],
})
export class PipAppbarShadowModule { }