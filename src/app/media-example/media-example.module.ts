import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { PipMediaModule, PipShadowModule, PipScrollableModule } from 'pip-webui2-layouts';

import { MediaExampleComponent } from './media-example.component';
import { MediaRoutingModule } from './media-example.routing.module';

@NgModule({
  declarations: [MediaExampleComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule,
    TranslateModule,
    PipMediaModule, PipShadowModule, PipScrollableModule,
    MediaRoutingModule
  ]
})
export class MediaExampleModule { }
