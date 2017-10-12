import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { BREAKPOINTS, MediaChange, ObservableMedia } from "@angular/flex-layout";
import { MediaMainChange } from './media-main-change.model';

@Injectable()
export class PipMediaService {
    constructor(
        private media: ObservableMedia
    ) { }

    private mainLayoutBreakpoints: any = {};
    private mainChange$: BehaviorSubject<MediaMainChange> = new BehaviorSubject<MediaMainChange>({ aliases: [] });

    public activate() {
        this.media.asObservable().subscribe((change: MediaChange) => {
            let body = document.body;
            _.each(this.media['breakpoints'].aliases, (alias: any) => {
                body.classList[this.media.isActive(alias) ? 'add' : 'remove']('pip-' + alias);
            });
        });
        this.setMainLayoutBreakpoints();
        console.log('activated');
    }

    public updateMainLayoutBreakpoints(width: number) {
        let body = document.body;
        let aliases = [];
        _.each(this.media['breakpoints'].aliases, (alias: any) => {
            this.mainLayoutBreakpoints[alias].active = this._isMainInclude(width, alias);
            body.classList[this.mainLayoutBreakpoints[alias].active ? 'add' : 'remove']('pip-main-' + alias);
            if (this.mainLayoutBreakpoints[alias].active) aliases.push(alias);
        });

        this.mainChange$.next({aliases: aliases});
    }

    private setMainLayoutBreakpoints() {
        let regExp = new RegExp(/\([a-z-:' '0-9]+\)/g);
        this.mainLayoutBreakpoints = {};

        _.each(this.media['breakpoints'].items, (item: any) => {
            let matches = item.mediaQuery.match(regExp);
            this.mainLayoutBreakpoints[item.alias] = { min: 0, max: 10000, active: false };

            _.each(matches, (match) => {
                let num = match.match(new RegExp(/[0-9]+/g));
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
        return  this.mainLayoutBreakpoints[alias].active;
    }
}