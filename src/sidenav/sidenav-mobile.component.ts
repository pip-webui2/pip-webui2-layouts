import * as _ from 'lodash';

import { Component, Input, OnInit, Renderer, ElementRef, ChangeDetectorRef } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { PipSidenavService } from './shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";

@Component({
	selector: 'pip-mobile-sidenav',
	templateUrl: 'sidenav-mobile.component.html',
	styleUrls: ['./sidenav-mobile.component.scss']
})

export class PipSidenavMobileComponent implements OnInit, AfterViewInit {
    @ViewChild('mobileSidenav') sidenav: MatSidenav;
    @ViewChild('mobileRightnav') rightnav: MatSidenav;

	public constructor(
        private service: PipSidenavService,
        private rightnavService: PipRightnavService,
		private renderer: Renderer,
        private elRef: ElementRef,
		private media: ObservableMedia,
		private cd: ChangeDetectorRef
	) {
		renderer.setElementClass(elRef.nativeElement, 'pip-mobile-sidenav', true);
	}

	ngOnInit() {
		this.service.opened$.subscribe((opened) => {
			this.cd.detectChanges();
		});

		this.rightnavService.opened$.subscribe(() => {
			this.cd.detectChanges();
		});
	 }

	ngAfterViewInit() {
        this.service.mobileSidenav = this.sidenav;
        this.rightnavService.mobileRightnav = this.rightnav;
	}

}