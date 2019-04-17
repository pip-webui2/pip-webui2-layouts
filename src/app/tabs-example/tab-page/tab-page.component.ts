import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PipAppbarService, PipAppbarTab } from 'pip-webui2-layouts';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-tab-page',
    templateUrl: './tab-page.html'
})
export class TabsPageComponent implements OnInit {

    public active$: Observable<PipAppbarTab>;

    constructor(
        private appbar: PipAppbarService,
        private route: ActivatedRoute
    ) {
        this.active$ = this.appbar.activeTab$;
    }

    ngOnInit() { }

}
