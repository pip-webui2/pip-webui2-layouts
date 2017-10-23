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
    public _mobileSidenav: MatSidenav;
    public _desktopSidenav: MatSidenav;
    private _mode$: BehaviorSubject<string> = new BehaviorSubject('side');
    private _opened$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private _mode: string = 'side';
    private _mobileSidenavAliases: string[] = ['xs'];
    private _small: boolean = false;
    private _small$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public constructor(
        private media: PipMediaService
    ) { }
    
    public set mobileSidenavAliases(aliases: string[]) {
        this._mobileSidenavAliases = aliases;
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

    public get mobileSidenavAliases() {
        return this._mobileSidenavAliases;
    }

    public get mobileSidenav(): MatSidenav {
        return this._mobileSidenav;
    }

    public set mobileSidenav(sidenav: MatSidenav) {
        this._mobileSidenav = sidenav;
    }

    public get desktopSidenav(): MatSidenav {
        return this._desktopSidenav;
    }

    public set desktopSidenav(sidenav: MatSidenav) {
        this._desktopSidenav = sidenav;
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

    private toggleSmall() {
        this._small == true ? this.small = false : this.small = true;
    }

    public toggleNav(sidenav?: MatSidenav) {
        if (sidenav) {
            sidenav.toggle();
        } else { 
            this.isMobile() ? this.toggleMobileNav() :  this.toggleDesktopNav()
        }
    }

    public openNav(sidenav?: MatSidenav) {
        if (sidenav) {
            sidenav.open();
        } else {
            this.isMobile() ? this.openMobileNav() : this.openDesktopNav();
        }
        this.opened = true;
    }

    public closeNav(sidenav?: MatSidenav) {
        if (sidenav) {
            sidenav.close();
        } else {
            this.isMobile() ? this.closeMobileNav() : this.closeDesktopNav();
        }
        this.opened = false;
    }

    public toggleMobileNav() {
        if (this._mobileSidenav) {
            this._mobileSidenav.toggle();
            this.opened = !this._mobileSidenav.opened;
        } else {
            console.log('Mobile sidenav not found');
        }
    }

    public openMobileNav() {
        this._mobileSidenav ? this._mobileSidenav.open() : console.log('Mobile sidenav not found');
    }

    public closeMobileNav() {
        this._mobileSidenav ? this._mobileSidenav.close() : console.log('Mobile sidenav not found');
    }

    public toggleDesktopNav() {
        this._desktopSidenav ? this.toggleSmall() : console.log('Desktop sidenav not found');
    }

    public openDesktopNav() {
        this._desktopSidenav ? this.small = false : console.log('Desktop sidenav not found');
    }

    public closeDesktopNav() {
        this._desktopSidenav ? this.small = true : console.log('Desktop sidenav not found')
    }

    public changeStateNav(sidenav: MatSidenav = this._mobileSidenav) {
        if (sidenav) {

        } else {
            console.log('Sidenav not found');
        }
    }

    private isMobile() {
        let is = false;

        _.each(this._mobileSidenavAliases, (alias: string) => {
            if (this.media.isMainActive(alias)) is = true;
        });

        return is;
    }

}