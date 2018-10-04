import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatSlideToggleModule, MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';
import { PipCardLayoutModule, PipMediaModule, PipShadowModule } from 'pip-webui2-layouts';

import { CardLayoutExampleComponent } from './card-layout-example.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    MatToolbarModule, MatSlideToggleModule, MatCardModule, MatButtonModule, MatInputModule,
    PipCardLayoutModule, PipMediaModule, PipShadowModule
  ],
  declarations: [CardLayoutExampleComponent]
})
export class CardLayoutExampleModule { }
