import { Injectable, Inject, Optional } from '@angular/core';
import { Observable, BehaviorSubject, of, combineLatest } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { cloneDeep, defaultsDeep } from 'lodash';

import { PipRightnavView, PIP_RIGHTNAV_CONFIG, PipRightnavPlacement, PipRightnavConfig } from './models';
import { switchMap, map, shareReplay, distinctUntilChanged, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PipRightnavService {

    private _currentView: PipRightnavView;
    private _defaultView$: BehaviorSubject<PipRightnavView> = new BehaviorSubject<PipRightnavView>({
        name: 'default',
        placement: PipRightnavPlacement.Root,
        mode: 'side',
        width: 200,
        widthCollapsed: 64
    });
    private _active$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private _collapsed$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private _opened$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private _views$: BehaviorSubject<PipRightnavView[]> = new BehaviorSubject<PipRightnavView[]>([]);

    public active$ = this._active$.asObservable();
    public collapsed$ = this._collapsed$.asObservable();
    public opened$ = this._opened$.asObservable();
    public views$ = this._views$.asObservable();
    public currentView$: Observable<PipRightnavView>;

    public constructor(
        private media: MediaObserver,
        @Optional() @Inject(PIP_RIGHTNAV_CONFIG) sc: PipRightnavConfig
    ) {
        if (sc) {
            if (sc.views && sc.views.length) {
                const defaultView = sc.views.find(v => v.name === 'default');
                if (defaultView) { this.defaultView = defaultView; }
                const correctViews = sc.views?.filter(v => v.alias) ?? [];
                if (correctViews && correctViews.length) { this.views = correctViews; }
            }
            if (sc.opened) { this._opened$.next(true); }
        }
        this.currentView$ = combineLatest(this._defaultView$.asObservable(), this.views$).pipe(
            switchMap(([defaultView, views]) => {
                const correctViews = views?.filter(v => v.alias) ?? [];
                if (!views || !correctViews.length) { return of(defaultView); }
                return this.media.asObservable().pipe(
                    map((changes: MediaChange[]) => {
                        for (const change of changes) {
                            for (const view of correctViews) {
                                if (change.mqAlias === view.alias) {
                                    return view;
                                }
                            }
                        }
                        return defaultView;
                    })
                );
            }),
            distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
            tap(v => this._currentView = v),
            shareReplay()
        );
    }

    //#region Properties
    public get defaultView$(): Observable<PipRightnavView> {
        return this._defaultView$.asObservable();
    }

    public get defaultView(): PipRightnavView {
        return new Proxy(this._defaultView$.value, {
            set: (target, p, value) => {
                const nv = cloneDeep(this._defaultView$.value);
                nv[p] = value;
                this._defaultView$.next(nv);
                return true;
            },
            defineProperty() { throw new Error(); },
            deleteProperty() { throw new Error(); }
        });
    }

    public set defaultView(defaultView: PipRightnavView) {
        this._defaultView$.next(defaultView);
    }

    public get active(): boolean {
        return this._active$.value;
    }

    public set active(active: boolean) {
        this._active$.next(active);
    }

    public get collapsed(): boolean {
        return this._collapsed$.value;
    }

    public set collapsed(collapsed: boolean) {
        this._collapsed$.next(collapsed);
    }

    public get opened(): boolean {
        return this._opened$.value;
    }

    public set opened(opened: boolean) {
        this._opened$.next(opened);
    }
    public get views(): PipRightnavView[] {
        return new Proxy(this._views$.value, {
            set() { throw new Error(); },
            defineProperty() { throw new Error(); },
            deleteProperty() { throw new Error(); }
        });
    }

    public set views(views: PipRightnavView[]) {
        const vts = cloneDeep(views);
        if (vts) {
            const di = vts.findIndex(v => v.name === 'default');
            if (di !== -1) {
                this.defaultView = vts[di];
                vts.splice(di, 1);
            }
        }
        this._views$.next(vts);
    }

    public get allViews$(): Observable<PipRightnavView[]> {
        return combineLatest(
            this.defaultView$,
            this.views$
        ).pipe(
            map(([dv, vs]) => vs && vs.length ? [dv, ...vs] : [dv])
        );
    }

    public get currentView(): PipRightnavView {
        return this._currentView;
    }
    //#endregion

    //#region Methods
    public expand() {
        if (!this.active) { return; }
        this.collapsed = true;
    }

    public collapse() {
        if (!this.active) { return; }
        this.collapsed = false;
    }

    public toggleCollapse() {
        if (!this.active) { return; }
        this.collapsed = !this.collapsed;
    }

    public open() {
        if (!this.active || this.opened) { return; }
        this.opened = true;
    }

    public close() {
        if (!this.active || !this.opened) { return; }
        this.opened = false;
    }

    public toggle() {
        if (!this.active) { return; }
        this.opened = !this.opened;
    }

    public createView(view: PipRightnavView) {
        if (view?.name === 'default') { return; }
        const views = this._views$.value;
        views.push(defaultsDeep(view, {
            width: 200,
            widthCollapsed: 64
        } as PipRightnavView));
        this._views$.next(views);
    }

    public updateView(view: PipRightnavView) {
        const populatedView = defaultsDeep(cloneDeep(view), {
            width: 200,
            widthCollapsed: 64
        } as PipRightnavView);
        if (populatedView?.name === 'default') {
            this.defaultView = populatedView;
        } else {
            const views = this._views$.value.map(v => v.name === populatedView.name ? populatedView : v);
            this._views$.next(views);
        }
    }

    public removeViewAt(position: number) {
        const views = this._views$.value;
        if (position < 0 || position >= views.length) { return; }
        views.splice(position, 1);
        this._views$.next(views);
    }

    public removeView(name: string) {
        const views = this._views$.value.filter(v => v.name === name);
        this._views$.next(views);
    }
    //#endregion
}
