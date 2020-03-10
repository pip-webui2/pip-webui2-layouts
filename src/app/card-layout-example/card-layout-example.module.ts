import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { PipCardLayoutModule, PipMediaModule, PipShadowModule } from 'pip-webui2-layouts';

import { CardLayoutExampleComponent } from './card-layout-example.component';
import { CardLayoutRoutingModule } from './card-layout.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    TranslateModule,
    MatToolbarModule, MatSlideToggleModule, MatCardModule, MatButtonModule, MatInputModule,
    PipCardLayoutModule, PipMediaModule, PipShadowModule,
    CardLayoutRoutingModule
  ],
  declarations: [CardLayoutExampleComponent]
})
export class CardLayoutExampleModule { }
