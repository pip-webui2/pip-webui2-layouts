import { Component, Input, OnInit, Renderer, ElementRef, ChangeDetectorRef } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";

import { each } from '../shared/layouts.utils';

@Component({
	selector: 'pip-root-layout',
	templateUrl: 'root-layout.component.html',
	styleUrls: ['./root-layout.component.scss']
})

export class PipRootLayoutComponent implements OnInit, AfterViewInit {
    @ViewChild('floatingSidenav') sidenav: MatSidenav;
    @ViewChild('floatingRightnav') rightnav: MatSidenav;

	public mode$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

	public constructor(
        private sidenavService: PipSidenavService,
        private rightnavService: PipRightnavService,
		private renderer: Renderer,
        private elRef: ElementRef,
		private media: ObservableMedia,
		private cd: ChangeDetectorRef
	) {
		renderer.setElementClass(elRef.nativeElement, 'pip-root-layout', true);
	}

	ngOnInit() {
		this.sidenavService.opened$.subscribe((opened) => {
			this.cd.detectChanges();
		});

		this.rightnavService.opened$.subscribe(() => {
			this.cd.detectChanges();
		});

		this.media.asObservable().subscribe((change: MediaChange) => {
			this.mode$.next(this.rightnavService.floatingRightnavAliases.includes(change.mqAlias) ? null : 'side');
			this.cd.detectChanges();
		});

		this.initMode();
	 }

	ngAfterViewInit() {
        this.sidenavService.floatingSidenav = this.sidenav;
        this.rightnavService.floatingRightnav = this.rightnav;
	}

	private initMode() {
		let mode = 'side';

		each(this.rightnavService.floatingRightnavAliases, (alias: string) => {
			if (this.media.isActive(alias)) mode = null;
		});

		this.mode$.next(mode);
	}

}