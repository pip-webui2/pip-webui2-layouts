import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef, HostBinding, OnDestroy } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject, Unsubscribable, empty, Subscription, Observable, combineLatest } from 'rxjs';

import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import { each } from '../shared/layouts.utils';
import { map, switchMap } from 'rxjs/operators';
import { RippleState } from '@angular/material/core';
import { PipAppbarService } from '../appbar/shared/appbar.service';
import { PipSidenavPlacement } from '../sidenav/shared/models';

@Component({
    selector: 'pip-root-layout',
    templateUrl: 'root-layout.component.html',
    styleUrls: ['./root-layout.component.scss']
})
export class PipRootLayoutComponent implements OnInit, AfterViewInit, OnDestroy {

    private _subs: { [name: string]: Subscription } = {};
    private _sidenavMediaQuery: MediaQueryList[] = [];

    @HostBinding('class.pip-root-layout') readonly pipRootLayoutCls = true;
    @HostBinding('class.pip-with-tabs') get pipWithTabsCls() { return this.appbar.tabs?.length; }

    @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
    @ViewChild('rightnav', { static: false }) rightnav: MatSidenav;

    public mode$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    public options$: Observable<any>;

    public constructor(
        public ss: PipSidenavService,
        private appbar: PipAppbarService,
        private rightnavService: PipRightnavService,
        private media: MediaObserver,
        private cd: ChangeDetectorRef,
        private changeDetectorRef: ChangeDetectorRef,
        private mediaMatcher: MediaMatcher
    ) {
        this.options$ = combineLatest(
            this.ss.currentView$,
            this.ss.opened$,
            this.ss.collapsed$
        ).pipe(
            map(([view, opened, expanded]) => ({ view, opened, dense: !expanded }))
        );
    }

    ngOnInit() {
        // this.ss.opened$.subscribe((opened) => {
        //     this.cd.detectChanges();
        // });

        // this.rightnavService.opened$.subscribe(() => {
        //     this.cd.detectChanges();
        // });

        // this.media.media$.subscribe((change: MediaChange) => {
        //     this.mode$.next(this.rightnavService.floatingRightnavAliases.includes(change.mqAlias) ? null : 'side');
        //     this.cd.detectChanges();
        // });

        // this.initMode();
    }

    ngAfterViewInit() {
        // this.rightnavService.floatingRightnav = this.rightnav;
    }

    ngOnDestroy() { Object.keys(this._subs).forEach(k => this._subs[k] && this._subs[k].unsubscribe()); }

    // private initMode() {
    //     let mode = 'side';

    //     each(this.rightnavService.floatingRightnavAliases, (alias: string) => {
    //         if (this.media.isActive(alias)) { mode = null; }
    //     });

    //     this.mode$.next(mode);
    // }

    public containerClasses(ctx: any) {
        const res = [];
        if (ctx?.opened) { res.push('pip-sidenav-open'); }
        if (ctx?.dense) { res.push('pip-sidenav-dense'); }
        switch (ctx?.view?.placement) {
            case PipSidenavPlacement.Root:
                res.push('pip-sidenav-root');
                break;
            case PipSidenavPlacement.Main:
                res.push('pip-sidenav-main');
                break;
        }
        return res;
    }

    public backdropClick(): void {
        this.ss.close();
    }

}
