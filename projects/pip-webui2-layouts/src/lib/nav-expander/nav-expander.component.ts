import { Component, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { PipMediaService } from '../media/shared/media.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';

@Component({
    selector: 'pip-nav-expander',
    templateUrl: 'nav-expander.component.html',
    styleUrls: ['./nav-expander.component.scss']
})
export class PipNavExpanderComponent {

    private _mode$ = new BehaviorSubject<'sidenav' | 'rightnav'>('sidenav');


    @Input() public set mode(mode: 'sidenav' | 'rightnav') {
        this._mode$.next(mode);
    }
    @Input() public expandIcon = 'chevron_right';
    @Input() public collapseIcon = 'chevron_left';
    public icon$: Observable<string>;
    public show$: Observable<boolean>;

    constructor(
        public media: PipMediaService,
        public rs: PipRightnavService,
        public ss: PipSidenavService
    ) {
        this.icon$ = this._mode$.asObservable().pipe(
            switchMap(mode => mode === 'sidenav' ? this.ss.collapsed$ : this.rs.collapsed$),
            map(e => e ? this.expandIcon : this.collapseIcon)
        );
        this.show$ = this._mode$.asObservable().pipe(
            switchMap(mode => mode === 'sidenav' ? this.ss.currentView$ : this.rs.currentView$),
            map(v => v.collapseable)
        );
    }

    toggleCollapse() {
        switch (this._mode$.value) {
            case 'sidenav':
                this.ss.toggleCollapse();
                break;
            case 'rightnav':
                this.rs.toggleCollapse();
                break;
        }
    }
}
