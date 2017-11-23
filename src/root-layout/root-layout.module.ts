import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material'

import { PipRootLayoutComponent } from './root-layout.component';

@NgModule({
  declarations: [
    PipRootLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule
  ],
  exports: [
    PipRootLayoutComponent
  ],
  providers: [

  ]
})
export class PipRootLayoutModule { }