import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep } from 'lodash';
import { PipAppbarService, PipAppbarTab } from 'pip-webui2-layouts';

@Component({
    selector: 'pip-tabs-example',
    template: '<router-outlet></router-outlet>',
    styleUrls: ['./tabs-example.component.scss']
})
export class TabsExampleComponent implements OnInit, OnDestroy {

    private _savedTabs: PipAppbarTab[];

    constructor(
        private appbar: PipAppbarService,
        private translate: TranslateService
    ) {
        this._savedTabs = cloneDeep(this.appbar.tabs);
        this.appbar.tabs = [
            {
                name: () => this.translate.instant('PAGE.TAB.FIRST'),
                route: {
                    path: ['/tabs/glue/1']
                }
            },
            {
                name: () => this.translate.instant('PAGE.TAB.SECOND'),
                route: {
                    path: ['/tabs/glue/2']
                },
                isDefault: true
            }
        ];
        this.appbar.fallbackToSelect = true;
    }

    ngOnInit() { }

    ngOnDestroy() { this.appbar.tabs = this._savedTabs; }

}
