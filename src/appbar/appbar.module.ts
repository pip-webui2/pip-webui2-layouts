import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatToolbarModule } from '@angular/material';

import { PipAppbarComponent } from './appbar.component';

@NgModule({
  declarations: [
    PipAppbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  exports: [
    PipAppbarComponent
  ],
  providers: [],
})
export class PipAppbarModule { }