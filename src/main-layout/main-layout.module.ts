import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipMainLayoutComponent } from './main-layout.component';

@NgModule({
  declarations: [
    PipMainLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSidenavModule
  ],
  exports: [  
    PipMainLayoutComponent
  ],
  providers: [
    PipMainLayoutComponent
  ]
})
export class PipMainLayoutModule { }