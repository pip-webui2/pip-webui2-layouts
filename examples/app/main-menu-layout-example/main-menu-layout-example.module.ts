import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatListModule, MatSlideToggleModule } from '@angular/material';

import { MainMenuLayoutExampleComponent } from './main-menu-layout-example.component';
import { PipDocumentLayoutModule, PipMediaModule } from '../pip-webui2-layouts';

@NgModule({
  declarations: [
    MainMenuLayoutExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatSlideToggleModule,

    PipMediaModule,
    PipDocumentLayoutModule
  ],
  exports: [
    MainMenuLayoutExampleComponent
  ],
  providers: [
    
  ],
})
export class MainMenuLayoutExampleModule { }