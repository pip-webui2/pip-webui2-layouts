import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FxLayoutExampleComponent } from './fx-layout-example.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [FxLayoutExampleComponent]
})
export class FxLayoutExampleModule { }
