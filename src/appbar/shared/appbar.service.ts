import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PipAppbarService {
    private _class$ = new BehaviorSubject<string>(''); 
    public visibility = new BehaviorSubject<boolean>(true);
    private _shadowVisibility$ = new BehaviorSubject<boolean>(false);

    public constructor() {}

    public set shadowVisibility(visible: boolean) {
        this._shadowVisibility$.next(visible);
    }

    public set class(newClass: string) {
        this._class$.next(newClass);
    }

    public get class$(): BehaviorSubject<string> {
        return this._class$;
    }

    public get shadowVisibility$(): Observable<boolean> {
        return this._shadowVisibility$;
    }
}