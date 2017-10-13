import { Component, Input, OnInit, Renderer, ElementRef } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { PipSidenavService } from './shared/sidenav.service';
import { PipAuxPanelService } from '../aux-panel/shared/aux-panel.service';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";

@Component({
	selector: 'pip-mobile-sidenav',
	templateUrl: 'sidenav-mobile.component.html',
	styleUrls: ['./sidenav-mobile.component.scss']
})

export class PipSidenavMobileComponent implements OnInit, AfterViewInit {
    @ViewChild('mobileSidenav') sidenav: MatSidenav;
    @ViewChild('mobileAux') auxPanel: MatSidenav;
	private _auxMode$: BehaviorSubject<string> = new BehaviorSubject<string>('');
	public mode: string = '';

	public constructor(
        private service: PipSidenavService,
        private auxService: PipAuxPanelService,
		private renderer: Renderer,
        private elRef: ElementRef,
        private media: ObservableMedia
	) {
		renderer.setElementClass(elRef.nativeElement, 'pip-mobile-sidenav', true);
	}

	public get auxMode$(): Observable<string> {
		return this._auxMode$;
	}

	ngOnInit() {
        this.auxService.mode$.subscribe((mode) => {
            this._auxMode$.next(mode);
        });

        this.media.asObservable().subscribe((change: MediaChange) => {
			if (!this.auxService.mobileAuxPanel) return;

			if (this.service.mobileSidenavAliases.includes(change.mqAlias)) this.auxService.mode = null;
			else this.auxService.mode = 'side';
		});
     }

	ngAfterViewInit() {
        this.service.mobileSidenav = this.sidenav;
        this.auxService.mobileAuxPanel = this.auxPanel;
	}

}