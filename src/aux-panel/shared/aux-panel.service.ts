import * as _ from 'lodash';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatSidenav } from '@angular/material';

import { ObservableMedia } from "@angular/flex-layout";

@Injectable()
export class PipAuxPanelService {
    public _mobileAuxPanel: MatSidenav;
    public _desktopAuxPanel: MatSidenav;
    private _mode$: BehaviorSubject<string> = new BehaviorSubject('side');
    private _opened$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private _mode: string = 'side';
    private _mobileAuxPanelAliases: string[] = ['xs'];
    private _small: boolean = false;
    private _small$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public constructor(
        private media: ObservableMedia
    ) { }

    public set mobileAuxPanelAliases(aliases: string[]) {
        this._mobileAuxPanelAliases = aliases;
    }

    public get mobileAuxPanelAliases() {
        return this._mobileAuxPanelAliases;
    }

    public get mobileAuxPanel(): MatSidenav {
        return this._mobileAuxPanel;
    }

    public set mobileAuxPanel(auxPanel: MatSidenav) {
        this._mobileAuxPanel = auxPanel;
    }

    public set desktopAuxPanel(auxPanel: MatSidenav) {
        this._desktopAuxPanel = auxPanel;
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

    public toggleAux(auxPanel?: MatSidenav) {
        if (auxPanel) {
            auxPanel.toggle();
        } else {
            this.toggleMobileAux();
        }
    }

    public openAux(auxPanel?: MatSidenav) {
        if (auxPanel) {
            auxPanel.open();
        } else {
            this.openMobileAux();
        }
    }

    public closeAux(auxPanel?: MatSidenav) {
        if (auxPanel) {
            auxPanel.close();
        } else {
            this.closeMobileAux();
        }
    }

    public toggleMobileAux() {
        if (this._mobileAuxPanel) {
            this._mobileAuxPanel.toggle();
            this.opened = !this._mobileAuxPanel.opened;
        } else { 
            console.log('auxPanel not found'); 
        }
    }

    public openMobileAux() {
        this._mobileAuxPanel ? this._mobileAuxPanel.open() : console.log('auxPanel not found');
        this.opened = true;
    }

    public closeMobileAux() {
        this._mobileAuxPanel ? this._mobileAuxPanel.close() : console.log('auxPanel not found');
        this.opened = false;
    }

    public changeStateAux(auxPanel: MatSidenav = this._mobileAuxPanel) {
        if (auxPanel) {

        } else {
            console.log('AuxPanel not found');
        }
    }

    private isMobile() {
        let is = false;

        _.each(this._mobileAuxPanelAliases, (alias: string) => {
            if (this.media.isActive(alias)) is = true;
        });

        return is;
    }

}