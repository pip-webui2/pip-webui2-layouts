import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule, MatSlideToggleModule, MatTabsModule } from '@angular/material';
import { PipDocumentLayoutModule, PipTilesLayoutModule, PipMediaModule, PipMenuLayoutModule, PipShadowModule } from 'pip-webui2-layouts';

import { MainMenuLayoutExampleComponent } from './main-menu-layout-example.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatListModule, MatSlideToggleModule, MatTabsModule,
    PipDocumentLayoutModule, PipTilesLayoutModule, PipMediaModule, PipMenuLayoutModule, PipShadowModule
  ],
  declarations: [MainMenuLayoutExampleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainMenuLayoutExampleModule { }
