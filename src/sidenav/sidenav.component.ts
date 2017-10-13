import { Component, Input, OnInit, Renderer, ElementRef } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";

import { PipSidenavService } from './shared/sidenav.service';

@Component({
	selector: 'pip-sidenav',
	templateUrl: 'sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})

export class PipSidenavComponent implements OnInit, AfterViewInit {
	@ViewChild('desktopSidenav') sidenav: MatSidenav;
	private _opened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	private _mode$: BehaviorSubject<string> = new BehaviorSubject<string>('');
	public mode: string = '';
	public small$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	public constructor(
		private service: PipSidenavService,
		private renderer: Renderer,
		private elRef: ElementRef,
		private media: ObservableMedia
	) {
		renderer.setElementClass(elRef.nativeElement, 'pip-sidenav', true);
		this.service.small$.subscribe((small) => {
			this.small$.next(small);
		});
	}

	public get opened$(): Observable<boolean> {
		return this._opened$;
	}

	public get mode$(): Observable<string> {
		return this._mode$;
	}

	ngOnInit() {
		this.media.asObservable().subscribe((change: MediaChange) => {
			if (!this.service.desktopSidenav) return;

			if (this.service.mobileSidenavAliases.includes(change.mqAlias)) this.service.desktopSidenav.close();
			else this.service.desktopSidenav.open();
		});
	}

	ngAfterViewInit() {
		this.service.desktopSidenav = this.sidenav;
	}
}