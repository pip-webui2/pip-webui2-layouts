import * as _ from 'lodash';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatSidenav } from '@angular/material';

import { ObservableMedia } from "@angular/flex-layout";

@Injectable()
export class PipRightnavService {
    public _mobileRightnav: MatSidenav;
    public _desktopRightnav: MatSidenav;
    private _opened$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private _mobileRightnavAliases: string[] = ['xs'];

    public constructor(
        private media: ObservableMedia
    ) { }

    public set mobileRightnavAliases(aliases: string[]) {
        this._mobileRightnavAliases = aliases;
    }

    public get mobileRightnavAliases() {
        return this._mobileRightnavAliases;
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

    public get opened$(): Observable<boolean> {
        return this._opened$;
    }

    public set opened(open: boolean) {
        this._opened$.next(open);
    }

    public toggleRightnav(rightnav?: MatSidenav) {
        if (rightnav) {
            rightnav.toggle();
        } else {
            this.isMobile() ? this.toggleMobileRightnav() : this.toggleDesktopRightnav();
        }
    }

    public openRightnav(rightnav?: MatSidenav) {
        if (rightnav) {
            rightnav.open();
        } else {
            this.isMobile() ? this.openMobileRightnav() : this.openDesktopRightnav();
        }
    }

    public closeRightnav(rightnav?: MatSidenav) {
        if (rightnav) {
            rightnav.close();
        } else {
            this.isMobile() ? this.closeMobileRightnav() : this.closeDesktopRightnav();
        }
    }

    public toggleMobileRightnav() {
        if (this._mobileRightnav) {
            this._mobileRightnav.toggle();
            this.opened = !this._mobileRightnav.opened;
        } else { 
            console.log('rightnav not found'); 
        }
    }

    public toggleDesktopRightnav() {
        if (this._desktopRightnav) {
            this._desktopRightnav.toggle();
            this.opened = !this._desktopRightnav.opened;
        } else { 
            console.log('rightnav not found'); 
        }
    }

    public openMobileRightnav() {
        this._mobileRightnav ? this._mobileRightnav.open() : console.log('rightnav not found');
        this.opened = true;
    }

    public closeMobileRightnav() {
        this._mobileRightnav ? this._mobileRightnav.close() : console.log('rightnav not found');
        this.opened = false;
    }

    public openDesktopRightnav() {
        this._desktopRightnav ? this._desktopRightnav.open() : console.log('rightnav not found');
        this.opened = true;
    }

    public closeDesktopRightnav() {
        this._desktopRightnav ? this._desktopRightnav.close() : console.log('rightnav not found');
        this.opened = false;
    }

    public changeStateRightnav(rightnav: MatSidenav = this._mobileRightnav) {
        if (rightnav) {

        } else {
            console.log('rightnav not found');
        }
    }

    private isMobile() {
        let is = false;

        _.each(this._mobileRightnavAliases, (alias: string) => {
            if (this.media.isActive(alias)) is = true;
        });

        return is;
    }

}