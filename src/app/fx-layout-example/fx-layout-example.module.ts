import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { PipMediaModule } from 'pip-webui2-layouts';

import { FxLayoutExampleComponent } from './fx-layout-example.component';
import { FxLayoutExampleRoutingModule } from './fx-layout-example.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    PipMediaModule,
    TranslateModule,
    FxLayoutExampleRoutingModule
  ],
  declarations: [FxLayoutExampleComponent]
})
export class FxLayoutExampleModule { }
