import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatToolbarModule } from '@angular/material';

import { MainLayoutExampleComponent } from './main-layout-example.component';
import { PipMainLayoutModule, PipMediaModule, PipTopShadowModule } from '../pip-webui2-layouts';


@NgModule({
  declarations: [
    MainLayoutExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,

    PipMainLayoutModule,
    PipMediaModule,
    PipTopShadowModule
  ],
  exports: [
    MainLayoutExampleComponent
  ],
  providers: [
    
  ],
})
export class MainLayoutExampleModule { }