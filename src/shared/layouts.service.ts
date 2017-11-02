import * as _ from 'lodash';
import { Injectable, isDevMode } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatSidenav } from '@angular/material';

import { ObservableMedia } from "@angular/flex-layout";
import { PipMediaService } from '../media/shared/media.service'

@Injectable()
export class PipLayoutsService {
    // For sidenav
    public _mobileSidenav: MatSidenav;
    public _desktopSidenav: MatSidenav;
    private _modeSidenav$: BehaviorSubject<string> = new BehaviorSubject('side');
    private _openedSidenav$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private _modeSidenav: string = 'side';
    private _mobileSidenavAliases: string[] = ['xs'];
    private _smallSidenav: boolean = false;
    private _smallSidenav$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private _activeSidenav$: BehaviorSubject<boolean> = new BehaviorSubject(true);

    // For rightnav
    public _mobileRightnav: MatSidenav;
    public _desktopRightnav: MatSidenav;
    private _onlyMobile: boolean = true;
    private _opened$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private _mobileRightnavAliases: string[] = ['xs'];

    public constructor(
        private mainMedia: PipMediaService,
        private media: ObservableMedia
    ) { }
    
    // Sidenav functions

    public set mobileSidenavAliases(aliases: string[]) {
        this._mobileSidenavAliases = aliases;
    }

    public get smallSidenav() {
        return this._smallSidenav;
    }

    public set smallSidenav(sm: boolean) {
        this._smallSidenav$.next(sm);
        this._smallSidenav = sm;
    }

    public get smallSidenav$(): Observable<boolean> {
        return this._smallSidenav$;
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

    public get modeSidenav$(): Observable<string> {
        return this._modeSidenav$;
    }

    public set modeSidenav(s: string) {
        this._modeSidenav$.next(s);
        this._modeSidenav = s;
    }

    public get openedSidenav$(): Observable<boolean> {
        return this._openedSidenav$;
    }

    public set openedSidenav(open: boolean) {
        this._openedSidenav$.next(open);
    }

    public get activeSidenav$(): Observable<boolean> {
        return this._activeSidenav$;
    }

    public set activeSidenav(active: boolean) {
        this._activeSidenav$.next(active);
    }
    
    public isActiveSidenav(): boolean {
        if (this._activeSidenav$.getValue() == true) { return true; }
        else {
            console.log('Sidenav is not active');

            return false;
        }
    }

    private toggleSmallSidenav() {
        this._smallSidenav == true ? this.smallSidenav = false : this.smallSidenav = true;
    }

    public toggleSidenav(sidenav?: MatSidenav) {
        if (!this.isActiveSidenav()) return;

        if (sidenav) {
            sidenav.toggle();
        } else { 
            this.isMobileSidenav() ? this.toggleMobileNav() :  this.toggleDesktopSidenav()
        }
    }

    public openSidenav(sidenav?: MatSidenav) {
        if (!this.isActiveSidenav()) return;

        if (sidenav) {
            sidenav.open();
        } else {
            this.isMobileSidenav() ? this.openMobileSidenav() : this.openDesktopSidenav();
        }
        this.openedSidenav = true;
    }

    public closeSidenav(sidenav?: MatSidenav) {
        if (!this.isActiveSidenav()) return;

        if (sidenav) {
            sidenav.close();
        } else {
            this.isMobileSidenav() ? this.closeMobileSidenav() : this.closeDesktopSidenav();
        }
        this.openedSidenav = false;
    }

    public toggleMobileNav() {
        if (!this.isActiveSidenav()) return;

        if (this._mobileSidenav) {
            this._mobileSidenav.toggle();
            this.openedSidenav = !this._mobileSidenav.opened;
        } else {
            console.log('Mobile sidenav not found');
        }
    }

    public openMobileSidenav() {
        this._mobileSidenav ? this._mobileSidenav.open() : console.log('Mobile sidenav not found');
    }

    public closeMobileSidenav() {
        this._mobileSidenav ? this._mobileSidenav.close() : console.log('Mobile sidenav not found');
    }

    public toggleDesktopSidenav() {
        this._desktopSidenav ? this.toggleSmallSidenav() : console.log('Desktop sidenav not found');
    }

    public openDesktopSidenav() {
        this._desktopSidenav ? this.smallSidenav = false : console.log('Desktop sidenav not found');
    }

    public closeDesktopSidenav() {
        this._desktopSidenav ? this.smallSidenav = true : console.log('Desktop sidenav not found')
    }

    public changeStateSidenav(sidenav: MatSidenav = this._mobileSidenav) {
        if (sidenav) {

        } else {
            console.log('Sidenav not found');
        }
    }

    private isMobileSidenav() {
        let is = false;

        _.each(this._mobileSidenavAliases, (alias: string) => {
            if (this.mainMedia.isMainActive(alias)) is = true;
        });

        return is;
    }

    // Rightnav functions

    public set mobileRightnavAliases(aliases: string[]) {
        this._mobileRightnavAliases = aliases;
    }

    public get mobileRightnavAliases() {
        return this._mobileRightnavAliases;
    }

    public set onlyMobileRightnav(only: boolean) {
        this._onlyMobile = only;
    }

    public get onlyMobileRightnav() {
        return this._onlyMobile;
    }

    public get mobileRightnav(): MatSidenav {
        return this._mobileRightnav;
    }

    public set mobileRightnav(rightnav: MatSidenav) {
        this._mobileRightnav = rightnav;
    }

    public set desktopRightnav(rightnav: MatSidenav) {
        this._desktopRightnav = rightnav;
    }

    public get desktopRightnav(): MatSidenav {
        return this._desktopRightnav;
    }

    public get openedRightnav$(): Observable<boolean> {
        return this._opened$;
    }

    public set openedRightnav(open: boolean) {
        this._opened$.next(open);
    }

    public toggleRightnav(rightnav?: MatSidenav) {
        if (rightnav) {
            rightnav.toggle();
        } else {
            this.isMobileRightnav() ? this.toggleMobileRightnav() : this.toggleDesktopRightnav();
        }
    }

    public openRightnav(rightnav?: MatSidenav) {
        if (rightnav) {
            rightnav.open();
        } else {
            this.isMobileRightnav() ? this.openMobileRightnav() : this.openDesktopRightnav();
        }
    }

    public closeRightnav(rightnav?: MatSidenav) {
        if (rightnav) {
            rightnav.close();
        } else {
            this.isMobileRightnav() ? this.closeMobileRightnav() : this.closeDesktopRightnav();
        }
    }

    public toggleMobileRightnav() {
        if (this._mobileRightnav) {
            this._mobileRightnav.toggle();
            this.openedRightnav = !this._mobileRightnav.opened;
        } else { 
            console.log('rightnav not found'); 
        }
    }

    public toggleDesktopRightnav() {
        if (this._desktopRightnav) {
            this._desktopRightnav.toggle();
            this.openedRightnav = !this._desktopRightnav.opened;
        } else { 
            console.log('rightnav not found'); 
        }
    }

    public openMobileRightnav() {
        this._mobileRightnav ? this._mobileRightnav.open() : console.log('rightnav not found');
        this.openedRightnav = true;
    }

    public closeMobileRightnav() {
        this._mobileRightnav ? this._mobileRightnav.close() : console.log('rightnav not found');
        this.openedRightnav = false;
    }

    public openDesktopRightnav() {
        this._desktopRightnav ? this._desktopRightnav.open() : console.log('rightnav not found');
        this.openedRightnav = true;
    }

    public closeDesktopRightnav() {
        this._desktopRightnav ? this._desktopRightnav.close() : console.log('rightnav not found');
        this.openedRightnav = false;
    }

    public changeStateRightnav(rightnav: MatSidenav = this._mobileRightnav) {
        if (rightnav) {

        } else {
            console.log('rightnav not found');
        }
    }

    private isMobileRightnav() {
        if (this._onlyMobile === true) return true;

        let is = false;

        _.each(this._mobileRightnavAliases, (alias: string) => {
            if (this.media.isActive(alias)) is = true;
        });

        return is;
    }
}