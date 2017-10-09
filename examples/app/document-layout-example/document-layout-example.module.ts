import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
// import { MatButtonModule, MatInputModule } from '@angular/material';

import { DocumentLayoutExampleComponent } from './document-layout-example.component';
import { PipDocumentLayoutModule, PipMediaModule } from '../pip-webui2-layouts';

@NgModule({
  declarations: [
    DocumentLayoutExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,

    PipDocumentLayoutModule,
    PipMediaModule
  ],
  exports: [
    DocumentLayoutExampleComponent
  ],
  providers: [
    
  ],
})
export class DocumentLayoutExampleModule { }