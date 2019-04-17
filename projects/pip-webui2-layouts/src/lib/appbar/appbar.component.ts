import { Component, OnInit } from '@angular/core';

import { PipAppbarService } from './shared/appbar.service';

@Component({
    selector: 'pip-appbar',
    templateUrl: 'appbar.component.html',
    styleUrls: ['./appbar.component.scss']
})
export class PipAppbarComponent implements OnInit {

    constructor(
        public appbar: PipAppbarService,
    ) { }

    ngOnInit() { }

    public navigate(idx: number) {
        this.appbar.activeIdx = idx;
    }
}
