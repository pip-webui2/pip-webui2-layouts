import { Component, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { PipMediaService } from '../media/shared/media.service';
import { PipSidenavStartService, PipSidenavEndService, PipSidenavSide } from '../sidenav';

@Component({
    selector: 'pip-nav-expander',
    templateUrl: 'nav-expander.component.html',
    styleUrls: ['./nav-expander.component.scss']
})
export class PipNavExpanderComponent {

    private _side$ = new BehaviorSubject<PipSidenavSide>(PipSidenavSide.Start);


    @Input() public set side(side: PipSidenavSide) {
        this._side$.next(side);
    }
    @Input() public expandIcon = 'chevron_right';
    @Input() public collapseIcon = 'chevron_left';
    public icon$: Observable<string>;
    public show$: Observable<boolean>;

    constructor(
        public media: PipMediaService,
        public se: PipSidenavEndService,
        public ss: PipSidenavStartService
    ) {
        this.icon$ = this._side$.asObservable().pipe(
            switchMap(side => side === PipSidenavSide.Start ? this.ss.collapsed$ : this.se.collapsed$),
            map(e => e ? this.expandIcon : this.collapseIcon)
        );
        this.show$ = this._side$.asObservable().pipe(
            switchMap(side => side === PipSidenavSide.Start ? this.ss.currentView$ : this.se.currentView$),
            map(v => v.collapseable)
        );
    }

    toggleCollapse() {
        switch (this._side$.value) {
            case PipSidenavSide.Start:
                this.ss.toggleCollapse();
                break;
            case PipSidenavSide.End:
                this.se.toggleCollapse();
                break;
        }
    }
}
