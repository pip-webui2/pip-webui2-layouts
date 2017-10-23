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
	) {
		renderer.setElementClass(elRef.nativeElement, 'pip-sidenav', true);
	}

	public get opened$(): Observable<boolean> {
		return this._opened$;
	}

	ngOnInit() {
		this.media.asObservable().subscribe((change: MediaChange) => {
			if (this.service.mobileSidenavAliases.includes(change.mqAlias)) {
				if (this.service.desktopSidenav) this.service.desktopSidenav.close();
				if (this.rightnavService.desktopRightnav && this.rightnavService.desktopRightnav.opened && this.rightnavService.mobileRightnav) {
					this.rightnavService.closeDesktopRightnav();
					this.rightnavService.mobileRightnav.open();
				}
			} else {
				if (this.service.desktopSidenav) this.service.desktopSidenav.open();
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
	}

	ngAfterViewInit() {
		this.service.desktopSidenav = this.sidenav;
		this.rightnavService.desktopRightnav = this.rightnav;
	}
}