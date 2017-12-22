import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatToolbarModule, MatButtonModule } from '@angular/material';

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
    MatButtonModule,

    PipDocumentLayoutModule,
    PipMediaModule,
    PipShadowModule
  ],
  exports: [
    DocumentLayoutExampleComponent
  ],
  providers: [
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DocumentLayoutExampleModule { }