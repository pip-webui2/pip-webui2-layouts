import { Component, Input, OnInit, Renderer, ElementRef, ChangeDetectorRef } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";

import { PipSidenavService } from './shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';

@Component({
	selector: 'pip-sidenav',
	templateUrl: 'sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})

export class PipSidenavComponent implements OnInit, AfterViewInit {
	@ViewChild('desktopSidenav') sidenav: MatSidenav;
	@ViewChild('desktopRightnav') rightnav: MatSidenav;
	private _opened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public small$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	public constructor(
		private service: PipSidenavService,
		private rightnavService: PipRightnavService,
		private renderer: Renderer,
		private elRef: ElementRef,
		private media: ObservableMedia,
		private cd: ChangeDetectorRef
	) { }

	public get opened$(): Observable<boolean> {
		return this._opened$;
	}

	ngOnInit() {
		this.media.asObservable().subscribe((change: MediaChange) => {
			if (this.rightnavService.onlyMobile === true) return;

			if (this.service.mobileSidenavAliases.includes(change.mqAlias)) {
				if (this.rightnavService.desktopRightnav && this.rightnavService.desktopRightnav.opened && this.rightnavService.mobileRightnav) {
					this.rightnavService.closeDesktopRightnav();
					this.rightnavService.mobileRightnav.open();
				}
			} else {
				if (this.rightnavService.mobileRightnav && this.rightnavService.mobileRightnav.opened) {
					if (this.rightnavService.desktopRightnav) this.rightnavService.desktopRightnav.open();
					this.rightnavService.mobileRightnav.close();
				}
			}
		});

		this.service.small$.subscribe((small) => {
			this.small$.next(small);
			this.cd.detectChanges();
		});

		this.rightnavService.opened$.subscribe((opened) => {
			this.cd.detectChanges();
		});

		this.service.active$.subscribe((active) => {
			if (!this.sidenav) return;

			if (active && !this.sidenav.opened) this.sidenav.open();
			if (!active && this.sidenav.opened) this.sidenav.close();
			this.elRef.nativeElement.classList[active ? 'remove' : 'add']('pip-sidenav-not-active');
		});
	}

	ngAfterViewInit() {
		this.service.desktopSidenav = this.sidenav;
		this.rightnavService.desktopRightnav = this.rightnav;
	}
}