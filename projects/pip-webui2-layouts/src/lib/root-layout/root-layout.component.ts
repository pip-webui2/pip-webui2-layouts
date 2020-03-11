import { Component, HostBinding, OnDestroy, Input, ViewChild } from '@angular/core';
import { BehaviorSubject, Subscription, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { PipAppbarService } from '../appbar/shared/appbar.service';
import { PipMediaService } from '../media/index';
import { PipSidenavStartService, PipSidenavEndService, PipSidenavView, PipSidenavPosition, PipSidenavSide } from '../sidenav/index';
import { PipResizeEvent } from '../media/resize.directive';

type RootLayoutOptions = {
    [name in PipSidenavSide]: {
        view: PipSidenavView,
        opened: boolean,
        collapsed: boolean,
        width: number,
        rcm: number,
        mcm: number
    }
};

@Component({
    selector: 'pip-root-layout',
    templateUrl: 'root-layout.component.html',
    styleUrls: ['./root-layout.component.scss']
})
export class PipRootLayoutComponent implements OnDestroy {

    private _subs: { [name: string]: Subscription } = {};

    public psp = PipSidenavPosition;

    @HostBinding('class.pip-root-layout') readonly pipRootLayoutCls = true;
    @HostBinding('class.pip-with-tabs') get pipWithTabsCls() { return this.appbar.tabs?.length; }

    public mode$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    public options$: Observable<RootLayoutOptions>;

    public constructor(
        public ss: PipSidenavStartService,
        public se: PipSidenavEndService,
        private appbar: PipAppbarService,
        private mainMedia: PipMediaService,
    ) {
        this.options$ = combineLatest(
            this.ss.currentView$,
            this.ss.opened$,
            this.ss.collapsed$,
            this.se.currentView$,
            this.se.opened$,
            this.se.collapsed$
        ).pipe(
            map(([
                sview, sopened, scollapsed,
                rview, ropened, rcollapsed
            ]) => {
                const sw = scollapsed
                    ? sview?.widthCollapsed ?? this.ss.defaultView.widthCollapsed
                    : sview?.width ?? this.ss.defaultView.width;
                const rw = rcollapsed
                    ? rview?.widthCollapsed ?? this.se.defaultView.widthCollapsed
                    : rview?.width ?? this.se.defaultView.width;
                return {
                    [PipSidenavSide.Start]: {
                        view: sview,
                        opened: sopened,
                        collapsed: scollapsed,
                        width: sw,
                        rcm: sopened && sview?.position === PipSidenavPosition.Root && ['side', 'push'].includes(sview.mode) ? sw : 0,
                        mcm: sopened && sview?.position === PipSidenavPosition.Main && ['side', 'push'].includes(sview.mode) ? sw : 0
                    },
                    [PipSidenavSide.End]: {
                        view: rview,
                        opened: ropened,
                        collapsed: rcollapsed,
                        width: rw,
                        rcm: ropened && rview?.position === PipSidenavPosition.Root && ['side', 'push'].includes(rview.mode) ? rw : 0,
                        mcm: ropened && rview?.position === PipSidenavPosition.Main && ['side', 'push'].includes(rview.mode) ? rw : 0
                    }
                };
            })
        );
    }

    ngOnDestroy() {
        Object.keys(this._subs).forEach(k => this._subs[k] && this._subs[k].unsubscribe());
    }

    public onResizeMain(e: PipResizeEvent) {
        this.mainMedia.updateMainLayoutBreakpoints(e.newWidth);
    }

    public containerCls(ctx: RootLayoutOptions, position: PipSidenavPosition) {
        const res = [];
        for (const side of Object.keys(PipSidenavSide).map(k => PipSidenavSide[k])) {
            if (ctx[side]?.view?.position === position) {
                if (ctx[side]?.opened) { res.push(`pip-sidenav-${side}-open`); }
                if (ctx[side]?.collapsed) { res.push(`pip-sidenav-${side}-collapsed`); }
            }
        }
        return res;
    }

    public backdropClick(): void {
        this.ss.close();
        this.se.close();
    }
}
