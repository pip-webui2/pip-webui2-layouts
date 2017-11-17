import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material'

import { PipSidenavFixedComponent } from './sidenav-fixed.component';
import { PipSidenavService } from './shared/sidenav.service';

@NgModule({
  declarations: [
    PipSidenavFixedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule
  ],
  exports: [
    PipSidenavFixedComponent
  ],
  providers: [
    PipSidenavService
  ]
})
export class PipSidenavModule { }