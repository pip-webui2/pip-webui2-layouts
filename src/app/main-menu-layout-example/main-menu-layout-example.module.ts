import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { PipDocumentLayoutModule, PipTilesLayoutModule, PipMediaModule, PipMenuLayoutModule, PipShadowModule } from 'pip-webui2-layouts';

import { MainMenuLayoutExampleComponent } from './main-menu-layout-example.component';
import { MainMenuLayoutRoutingModule } from './main-menu-layout.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatListModule, MatSlideToggleModule, MatTabsModule,
    PipDocumentLayoutModule, PipTilesLayoutModule, PipMediaModule, PipMenuLayoutModule, PipShadowModule,
    MainMenuLayoutRoutingModule
  ],
  declarations: [MainMenuLayoutExampleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainMenuLayoutExampleModule { }
