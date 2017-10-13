import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material'

import { PipSidenavComponent } from './sidenav.component';
import { PipSidenavMobileComponent } from './sidenav-mobile.component';
import { PipSidenavService } from './shared/sidenav.service';

@NgModule({
  declarations: [
    PipSidenavComponent,
    PipSidenavMobileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule
  ],
  exports: [
    PipSidenavComponent,
    PipSidenavMobileComponent
  ],
  providers: [
    PipSidenavService
  ]
})
export class PipSidenavModule { }