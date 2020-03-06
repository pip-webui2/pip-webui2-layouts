import { Component, HostBinding, OnDestroy, Input, ViewChild } from '@angular/core';
import { MatSidenavContent } from '@angular/material/sidenav';
import { BehaviorSubject, Subscription, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { PipAppbarService } from '../appbar/shared/appbar.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { PipSidenavPlacement, PipSidenavView } from '../sidenav/shared/models';
import { PipRightnavPlacement, PipRightnavView } from '../rightnav/shared/models';
import { addResizeListener, removeResizeListener, PipMediaService } from '../media/index';

interface RootLayoutOptions {
    sidenav: {
        view: PipSidenavView,
        opened: boolean,
        collapsed: boolean,
        width: number,
        rcm: number,
        mcm: number
    };
    rightnav: {
        view: PipRightnavView,
        opened: boolean,
        collapsed: boolean,
        width: number,
        rcm: number,
        mcm: number
    };
}

@Component({
    selector: 'pip-root-layout-alt',
    templateUrl: 'root-layout.component.html',
    styleUrls: ['./root-layout.component.scss']
})
export class PipRootLayoutAltComponent implements OnDestroy {

    private _element: HTMLElement;
    private _mainLayoutContainer: string;
    private _mainContent: MatSidenavContent;
    private _subs: { [name: string]: Subscription } = {};
    private _resizeListener: () => void;

    @Input() public set mainLayoutContainer(mainLayoutContainer: string) {
        this._mainLayoutContainer = mainLayoutContainer;
        this._updateListeners();
    }

    @HostBinding('class.pip-root-layout') readonly pipRootLayoutCls = true;
    @HostBinding('class.pip-with-tabs') get pipWithTabsCls() { return this.appbar.tabs?.length; }

    @ViewChild('mainContent', { static: false }) set mainContent(mainContent: MatSidenavContent) {
        this._mainContent = mainContent;
        this._updateListeners();
    }

    public mode$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    public options$: Observable<RootLayoutOptions>;

    public constructor(
        public ss: PipSidenavService,
        public rs: PipRightnavService,
        private appbar: PipAppbarService,
        private mainMedia: PipMediaService,
    ) {
        this.options$ = combineLatest(
            this.ss.currentView$,
            this.ss.opened$,
            this.ss.collapsed$,
            this.rs.currentView$,
            this.rs.opened$,
            this.rs.collapsed$
        ).pipe(
            map(([
                sview, sopened, scollapsed,
                rview, ropened, rcollapsed
            ]) => {
                const sw = (sview?.collapseable && scollapsed ? sview?.widthCollapsed : sview?.width) ?? this.ss.defaultView.width;
                const rw = (rview?.collapseable && rcollapsed ? rview?.widthCollapsed : rview?.width) ?? this.rs.defaultView.width;
                return {
                    sidenav: {
                        view: sview,
                        opened: sopened,
                        collapsed: scollapsed,
                        width: sw,
                        rcm: sopened && sview?.placement === PipSidenavPlacement.Root && ['side', 'push'].includes(sview.mode) ? sw : 0,
                        mcm: sopened && sview?.placement === PipSidenavPlacement.Main && ['side', 'push'].includes(sview.mode) ? sw : 0
                    },
                    rightnav: {
                        view: rview,
                        opened: ropened,
                        collapsed: rcollapsed,
                        width: rw,
                        rcm: ropened && rview?.placement === PipRightnavPlacement.Root && ['side', 'push'].includes(rview.mode) ? rw : 0,
                        mcm: ropened && rview?.placement === PipRightnavPlacement.Main && ['side', 'push'].includes(rview.mode) ? rw : 0
                    }
                };
            })
        );
        this._resizeListener = () => this._onResizeMain();
    }

    ngOnDestroy() {
        Object.keys(this._subs).forEach(k => this._subs[k] && this._subs[k].unsubscribe());
        if (this._resizeListener && this._element) {
            removeResizeListener(this._element, this._resizeListener);
        }
    }

    private _onResizeMain() {
        this.mainMedia.updateMainLayoutBreakpoints(this._element.offsetWidth);
    }

    private _updateListeners() {
        if (this._element) {
            removeResizeListener(this._element, this._resizeListener);
        }
        if (this._mainContent) {
            if (this.mainLayoutContainer != null) {
                const firstSym = this.mainLayoutContainer.substr(0, 1);

                const element: any = firstSym === '#'
                    ? document.getElementById(this.mainLayoutContainer.substring(1, this.mainLayoutContainer.length))
                    : firstSym === '.'
                        ? document.getElementsByClassName(this.mainLayoutContainer.substring(1, this.mainLayoutContainer.length))
                        : document.getElementsByTagName(this.mainLayoutContainer);
                this._element = firstSym === '#' ? element : element.length > 0
                    ? element[0]
                    : this._mainContent.getElementRef().nativeElement;
            } else {
                this._element = this._mainContent.getElementRef().nativeElement;
            }

            addResizeListener(this._element, this._resizeListener);
            setTimeout(() => {
                this.mainMedia.updateMainLayoutBreakpoints(this._element.offsetWidth);
            });
        }
    }

    public get mainLayoutContainer() { return this._mainLayoutContainer; }

    public containerCls(ctx: RootLayoutOptions, placement: 'root' | 'main') {
        const res = [];
        for (const nav of ['sidenav', 'rightnav']) {
            if (ctx[nav]?.view?.placement === placement) {
                if (ctx[nav]?.opened) { res.push(`pip-${nav}-open`); }
                if (ctx[nav]?.view?.collapseable && ctx[nav]?.collapsed) { res.push(`pip-${nav}-collapsed`); }
            }
        }
        return res;
    }

    public backdropClick(): void {
        this.ss.close();
        this.rs.close();
    }
}
