import { Component, Input, OnInit, Renderer, ElementRef, ChangeDetectorRef } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";

import { PipSidenavService } from './shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';

@Component({
	selector: 'pip-sidenav-fixed',
	templateUrl: 'sidenav-fixed.component.html',
	styleUrls: ['./sidenav-fixed.component.scss']
})

export class PipSidenavFixedComponent implements OnInit, AfterViewInit {
	@ViewChild('fixedSidenav') sidenav: MatSidenav;
	@ViewChild('fixedRightnav') rightnav: MatSidenav;
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
			if (this.rightnavService.onlyFloating === true) return;

			if (this.service.floatingSidenavAliases.includes(change.mqAlias)) {
				if (this.rightnavService.fixedRightnav && this.rightnavService.fixedRightnav.opened && this.rightnavService.floatingRightnav) {
					this.rightnavService.closeFixedRightnav();
					this.rightnavService.floatingRightnav.open();
				}
			} else {
				if (this.rightnavService.floatingRightnav && this.rightnavService.floatingRightnav.opened) {
					if (this.rightnavService.fixedRightnav) this.rightnavService.fixedRightnav.open();
					this.rightnavService.floatingRightnav.close();
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
		this.service.fixedSidenav = this.sidenav;
		this.rightnavService.fixedRightnav = this.rightnav;
	}
}