import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

import { TabsPageComponent } from './tab-page.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    TranslateModule
  ],
  declarations: [TabsPageComponent],
  exports: [TabsPageComponent],
})
export class TabPageModule { }
