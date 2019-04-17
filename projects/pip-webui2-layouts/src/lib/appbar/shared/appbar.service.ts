import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { PipAppbarTab } from '../appbar.tab';

@Injectable()
export class PipAppbarService {

    private _tabs$: BehaviorSubject<PipAppbarTab[]> = new BehaviorSubject([]);
    private _activeIdx$: BehaviorSubject<number> = new BehaviorSubject(null);

    public constructor(
        private router: Router
    ) { }

    private _navigateByIndex(idx: number) {
        if (typeof idx === 'number' && idx >= 0) {
            this.router.navigate(
                Array.isArray(this.activeTab.route.path) ? this.activeTab.route.path : [this.activeTab.route.path],
                this.activeTab.route.extras
            );
        }
    }

    public get tabs$(): Observable<PipAppbarTab[]> {
        return this._tabs$.asObservable();
    }

    public get tabs(): PipAppbarTab[] {
        return this._tabs$.getValue();
    }

    public set tabs(tabs: PipAppbarTab[]) {
        this._tabs$.next(tabs);
        if (tabs && tabs.length) {
            if (this.activeIdx >= tabs.length || this.activeIdx < 0 || this.activeIdx === null) {
                const defaultIdx = Math.max(tabs.findIndex(t => t.isDefault), 0);
                const idx = tabs.findIndex(t =>
                    t.route
                    && t.route.path
                    && this.router.routerState.snapshot.url.startsWith(Array.isArray(t.route.path) ? t.route.path[0] : t.route.path)
                );
                this.activeIdx = idx >= 0 ? idx : defaultIdx;
            } else {
                this._navigateByIndex(this.activeIdx);
            }
        }
    }

    public get activeIdx$(): Observable<number> {
        return this._activeIdx$.asObservable();
    }

    public get activeIdx(): number {
        return this._activeIdx$.getValue();
    }

    public set activeIdx(idx: number) {
        this._activeIdx$.next(idx);
        this._navigateByIndex(idx);
    }

    public get activeTab$(): Observable<PipAppbarTab> {
        return combineLatest(
            this.tabs$,
            this.activeIdx$
        ).pipe(
            map(([tabs, idx]) => {
                return tabs && idx >= 0 && idx < tabs.length && tabs[idx] || null;
            })
        );
    }

    public get activeTab(): PipAppbarTab {
        return this.tabs && this.activeIdx >= 0 && this.activeIdx < this.tabs.length && this.tabs[this.activeIdx] || null;
    }

    public set activeTab(tab: PipAppbarTab) {
        if (!tab) { return; }
        const idx = this.tabs && this.tabs.findIndex(t => t.name === tab.name);
        if (idx >= 0) {
            this.activeIdx = idx;
        }
    }
}
