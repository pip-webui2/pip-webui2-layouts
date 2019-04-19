import { Component, OnInit } from '@angular/core';
import { UrlTree, Router } from '@angular/router';

import { PipAppbarService } from './shared/appbar.service';

@Component({
    selector: 'pip-appbar',
    templateUrl: 'appbar.component.html',
    styleUrls: ['./appbar.component.scss']
})
export class PipAppbarComponent implements OnInit {

    constructor(
        private router: Router,
        public appbar: PipAppbarService,
    ) { }

    ngOnInit() { }

    public isActive(url: string[]): boolean {
        return this.router.isActive(this.router.createUrlTree(url), false);
    }
}
