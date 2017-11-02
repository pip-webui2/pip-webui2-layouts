import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatToolbarModule } from '@angular/material';

import { DocumentLayoutExampleComponent } from './document-layout-example.component';
import { PipDocumentLayoutModule, PipMediaModule, PipShadowModule } from '../pip-webui2-layouts';

@NgModule({
  declarations: [
    DocumentLayoutExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,

    PipDocumentLayoutModule,
    PipMediaModule,
    PipShadowModule
  ],
  exports: [
    DocumentLayoutExampleComponent
  ],
  providers: [
    
  ],
})
export class DocumentLayoutExampleModule { }