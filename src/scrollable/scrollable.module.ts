import { NgModule } from '@angular/core';

import { PipScrollableElementComponent } from './scrollable-element.component';
import { PipScrollableContainerComponent } from './scrollable-container.component';

@NgModule({
  declarations: [
    PipScrollableElementComponent,
    PipScrollableContainerComponent
  ],
  imports: [
    
  ],
  exports: [  
    PipScrollableElementComponent,
    PipScrollableContainerComponent
  ],
  providers: [
    PipScrollableElementComponent,
    PipScrollableContainerComponent
  ]
})
export class PipScrollableModule { }