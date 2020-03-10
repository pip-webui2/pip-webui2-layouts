import { Component, HostBinding, OnDestroy, Input, ViewChild } from '@angular/core';
import { MatSidenavContent } from '@angular/material/sidenav';
import { BehaviorSubject, Subscription, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { PipAppbarService } from '../appbar/shared/appbar.service';
import { addResizeListener, removeResizeListener, PipMediaService } from '../media/index';
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

    // private _element: HTMLElement;
    // private _mainLayoutContainer: string;
    // private _mainContent: MatSidenavContent;
    private _subs: { [name: string]: Subscription } = {};
    // private _resizeListener: () => void;

    public psp = PipSidenavPosition;

    @HostBinding('class.pip-root-layout') readonly pipRootLayoutCls = true;
    @HostBinding('class.pip-with-tabs') get pipWithTabsCls() { return this.appbar.tabs?.length; }

    // @ViewChild('mainContent', { static: false }) set mainContent(mainContent: MatSidenavContent) {
    //     this._mainContent = mainContent;
    //     this._updateListeners();
    // }

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
                const sw = (sview?.collapseable && scollapsed ? sview?.widthCollapsed : sview?.width) ?? this.ss.defaultView.width;
                const rw = (rview?.collapseable && rcollapsed ? rview?.widthCollapsed : rview?.width) ?? this.se.defaultView.width;
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
        // this._resizeListener = () => this._onResizeMain();
    }

    ngOnDestroy() {
        Object.keys(this._subs).forEach(k => this._subs[k] && this._subs[k].unsubscribe());
        // if (this._resizeListener && this._element) {
        //     removeResizeListener(this._element, this._resizeListener);
        // }
    }

    // private _onResizeMain() {
    //     this.mainMedia.updateMainLayoutBreakpoints(this._element.offsetWidth);
    // }

    public onResizeMain(e: PipResizeEvent) {
        this.mainMedia.updateMainLayoutBreakpoints(e.newWidth);
    }

    // private _updateListeners() {
    //     if (this._element) {
    //         removeResizeListener(this._element, this._resizeListener);
    //     }
    //     if (this._mainContent) {
    //         if (this._mainLayoutContainer != null) {
    //             const firstSym = this._mainLayoutContainer.substr(0, 1);

    //             const element: any = firstSym === '#'
    //                 ? document.getElementById(this._mainLayoutContainer.substring(1, this._mainLayoutContainer.length))
    //                 : firstSym === '.'
    //                     ? document.getElementsByClassName(this._mainLayoutContainer.substring(1, this._mainLayoutContainer.length))
    //                     : document.getElementsByTagName(this._mainLayoutContainer);
    //             this._element = firstSym === '#' ? element : element.length > 0
    //                 ? element[0]
    //                 : this._mainContent.getElementRef().nativeElement;
    //         } else {
    //             this._element = this._mainContent.getElementRef().nativeElement;
    //         }

    //         addResizeListener(this._element, this._resizeListener);
    //         setTimeout(() => {
    //             this.mainMedia.updateMainLayoutBreakpoints(this._element.offsetWidth);
    //         });
    //     }
    // }

    // public get mainLayoutContainer() { return this._mainLayoutContainer; }

    public containerCls(ctx: RootLayoutOptions, position: PipSidenavPosition) {
        const res = [];
        for (const side of Object.keys(PipSidenavSide).map(k => PipSidenavSide[k])) {
            if (ctx[side]?.view?.position === position) {
                if (ctx[side]?.opened) { res.push(`pip-sidenav-${side}-open`); }
                if (ctx[side]?.view?.collapseable && ctx[side]?.collapsed) { res.push(`pip-sidenav-${side}-collapsed`); }
            }
        }
        return res;
    }

    public backdropClick(): void {
        this.ss.close();
        this.se.close();
    }
}
