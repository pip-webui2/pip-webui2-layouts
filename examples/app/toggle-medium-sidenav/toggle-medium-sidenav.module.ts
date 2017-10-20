import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatListModule, MatIconModule } from '@angular/material';

import { ToggleMediumSidenavComponent } from './toggle-medium-sidenav.component';

@NgModule({
  declarations: [
    ToggleMediumSidenavComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RouterModule,
    CommonModule,
    FormsModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    ToggleMediumSidenavComponent
  ],
  providers: [],
})
export class ToggleMediumSidenavModule { }