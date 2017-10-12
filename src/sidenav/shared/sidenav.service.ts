import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatSidenav } from '@angular/material';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PipSidenavService {
    public _sidenav: MatSidenav;
    private _side$: BehaviorSubject<string> = new BehaviorSubject('side');
    private _opened$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    public mode: string = 'side';
    public small: boolean = false;

    public constructor() { }

    public get sidenav(): MatSidenav {
        return this._sidenav;
    }

    public set sidenav(sidenav: MatSidenav) {
        this._sidenav = sidenav;
    }

    public get side$(): Observable<string> {
        return this._side$;
    }

    public set side(s: string) {
        this._side$.next(s);
        this.mode = s;
    }

    public get opened$(): Observable<boolean> {
        return this._opened$;
    }

    public set opened(open: boolean) {
        this._opened$.next(open);
    }

    public toggleNav(sidenav: MatSidenav = this._sidenav) {
        if (sidenav) {
            sidenav.toggle();
            /*if(!sidenav.opened) {
                this.small = false;
            }*/
        } else { console.log('Sidenav not found'); }
    }

    public openNav(sidenav: MatSidenav = this._sidenav) {
        if (sidenav) {
            sidenav.open();
        } else {
            console.log('Sidenav not found');
        }
    }

    public closeNav(sidenav: MatSidenav = this._sidenav) {
        if (sidenav) {
            sidenav.close();
        } else {
            console.log('Sidenav not found');
        }
    }

    public changeStateNav(sidenav: MatSidenav = this._sidenav) {
        if (sidenav) {

        } else {
            console.log('Sidenav not found');
        }
    }

}