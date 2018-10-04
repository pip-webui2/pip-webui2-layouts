import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MediaChange, ObservableMedia, BreakPoint } from '@angular/flex-layout';

import { MediaMainChange } from './media-main-change.model';
import { each } from '../../shared/layouts.utils';

@Injectable()
export class PipMediaService {
    constructor(
        private media: ObservableMedia
    ) { }

    private mainLayoutBreakpoints: any = {};
    private mainChange$: BehaviorSubject<MediaMainChange> = new BehaviorSubject<MediaMainChange>({ aliases: [] });

    public activate() {
        this.media.asObservable().subscribe((change: MediaChange) => {
            this.updateBodyLayoutBreakpoints();
        });
        this.updateBodyLayoutBreakpoints();
        this.setMainLayoutBreakpoints();
    }

    private updateBodyLayoutBreakpoints() {
        const body = document.body;
        each(this.media['breakpoints'].aliases, (alias: any) => {
            body.classList[this.media.isActive(alias) ? 'add' : 'remove']('pip-' + alias);
        });
    }

    public updateMainLayoutBreakpoints(width: number) {
        const body = document.body;
        const aliases = [];
        each(this.media['breakpoints'].aliases, (alias: any) => {
            this.mainLayoutBreakpoints[alias].active = this._isMainInclude(width, alias);
            body.classList[this.mainLayoutBreakpoints[alias].active ? 'add' : 'remove']('pip-main-' + alias);
            if (this.mainLayoutBreakpoints[alias].active) { aliases.push(alias); }
        });

        this.mainChange$.next({aliases: aliases});
    }

    private setMainLayoutBreakpoints() {
        const regExp = new RegExp(/\([a-z-:' '0-9]+\)/g);
        this.mainLayoutBreakpoints = {};

        each(this.media['breakpoints'].items, (item: any) => {
            const matches = item.mediaQuery.match(regExp);
            this.mainLayoutBreakpoints[item.alias] = { min: 0, max: 10000, active: false };

            each(matches, (match) => {
                const num = match.match(new RegExp(/[0-9]+/g));
                num ? (match.includes('max-width') ? this.mainLayoutBreakpoints[item.alias].max = Number(num) :
                    (match.includes('min-width') ? this.mainLayoutBreakpoints[item.alias].min = Number(num) : '')) : '';
            });
        });
    }

    private _isMainInclude(width: number, alias: string) {
        return this.mainLayoutBreakpoints[alias].max >= width && this.mainLayoutBreakpoints[alias].min <= width;
    }

    public asObservableMain(): Observable<MediaMainChange> {
        return this.mainChange$;
    }

    public isMainActive(alias) {
        return this.mainLayoutBreakpoints[alias] && this.mainLayoutBreakpoints[alias].active;
    }
}
