import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsPageComponent } from './tab-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabsPageComponent],
  exports: [TabsPageComponent],
})
export class TabPageModule { }
