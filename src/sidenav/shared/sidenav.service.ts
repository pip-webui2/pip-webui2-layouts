import * as _ from 'lodash';
import { Injectable, isDevMode } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatSidenav } from '@angular/material';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ObservableMedia } from "@angular/flex-layout";
import { PipMediaService } from '../../media/shared/media.service'

@Injectable()
export class PipSidenavService {
    public _floatingSidenav: MatSidenav;
    public _fixedSidenav: MatSidenav;
    private _mode$: BehaviorSubject<string> = new BehaviorSubject('side');
    private _opened$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private _mode: string = 'side';
    private _floatingSidenavAliases: string[] = ['xs'];
    private _small: boolean = false;
    private _small$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private _active$: BehaviorSubject<boolean> = new BehaviorSubject(true);

    public constructor(
        private media: PipMediaService
    ) { }
    
    public set floatingSidenavAliases(aliases: string[]) {
        this._floatingSidenavAliases = aliases;
    }

    public get small() {
        return this._small;
    }

    public set small(sm: boolean) {
        this._small$.next(sm);
        this._small = sm;
    }

    public get small$(): Observable<boolean> {
        return this._small$;
    }

    public get floatingSidenavAliases() {
        return this._floatingSidenavAliases;
    }

    public get floatingSidenav(): MatSidenav {
        return this._floatingSidenav;
    }

    public set floatingSidenav(sidenav: MatSidenav) {
        this._floatingSidenav = sidenav;
    }

    public get fixedSidenav(): MatSidenav {
        return this._fixedSidenav;
    }

    public set fixedSidenav(sidenav: MatSidenav) {
        this._fixedSidenav = sidenav;
    }

    public get mode$(): Observable<string> {
        return this._mode$;
    }

    public set mode(s: string) {
        this._mode$.next(s);
        this._mode = s;
    }

    public get opened$(): Observable<boolean> {
        return this._opened$;
    }

    public set opened(open: boolean) {
        this._opened$.next(open);
    }

    public get active$(): Observable<boolean> {
        return this._active$;
    }

    public set active(active: boolean) {
        this._active$.next(active);
    }
    
    public isActive(): boolean {
        if (this._active$.getValue() == true) { return true; }
        else {
            console.log('Sidenav is not active');

            return false;
        }
    }

    private toggleSmall() {
        this._small == true ? this.small = false : this.small = true;
    }

    public toggleNav(sidenav?: MatSidenav) {
        if (!this.isActive()) return;

        if (sidenav) {
            sidenav.toggle();
        } else { 
            this.isFloating() ? this.toggleFloatingNav() :  this.toggleFixedNav()
        }
    }

    public openNav(sidenav?: MatSidenav) {
        if (!this.isActive()) return;

        if (sidenav) {
            sidenav.open();
        } else {
            this.isFloating() ? this.openFloatingNav() : this.openFixedNav();
        }
        this.opened = true;
    }

    public closeNav(sidenav?: MatSidenav) {
        if (!this.isActive()) return;

        if (sidenav) {
            sidenav.close();
        } else {
            this.isFloating() ? this.closeFloatingNav() : this.closeFixedNav();
        }
        this.opened = false;
    }

    public toggleFloatingNav() {
        if (!this.isActive()) return;

        if (this._floatingSidenav) {
            this._floatingSidenav.toggle();
            this.opened = !this._floatingSidenav.opened;
        } else {
            console.log('Floating sidenav not found');
        }
    }

    public openFloatingNav() {
        this._floatingSidenav ? this._floatingSidenav.open() : console.log('Floating sidenav not found');
    }

    public closeFloatingNav() {
        this._floatingSidenav ? this._floatingSidenav.close() : console.log('Floating sidenav not found');
    }

    public toggleFixedNav() {
        this._fixedSidenav ? this.toggleSmall() : console.log('Fixed sidenav not found');
    }

    public openFixedNav() {
        this._fixedSidenav ? this.small = false : console.log('Fixed sidenav not found');
    }

    public closeFixedNav() {
        this._fixedSidenav ? this.small = true : console.log('Fixed sidenav not found')
    }

    public changeStateNav(sidenav: MatSidenav = this._floatingSidenav) {
        if (sidenav) {

        } else {
            console.log('Sidenav not found');
        }
    }

    private isFloating() {
        let is = false;

        _.each(this._floatingSidenavAliases, (alias: string) => {
            if (this.media.isMainActive(alias)) is = true;
        });

        return is;
    }

}