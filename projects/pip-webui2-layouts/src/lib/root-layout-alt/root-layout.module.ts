import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PipRootLayoutAltComponent } from './root-layout.component';

@NgModule({
  declarations: [
    PipRootLayoutAltComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule
  ],
  exports: [
    PipRootLayoutAltComponent
  ],
  providers: []
})
export class PipRootLayoutAltModule { }
