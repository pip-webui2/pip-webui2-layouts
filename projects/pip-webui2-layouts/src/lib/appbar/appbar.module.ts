import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { PipAppbarComponent } from './appbar.component';
import { PipAppbarService } from './shared/appbar.service';

@NgModule({
    declarations: [
        PipAppbarComponent
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        MatToolbarModule,
        RouterModule,
        TranslateModule
    ],
    exports: [
        PipAppbarComponent
    ],
    providers: [],
})
export class PipAppbarModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PipAppbarModule,
            providers: [
                PipAppbarService
            ]
        };
    }
}
