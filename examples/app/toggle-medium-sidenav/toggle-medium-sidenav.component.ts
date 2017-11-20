import { Component, OnInit, Input, Output, ChangeDetectorRef, Renderer, ElementRef } from '@angular/core';
import { PipMediaService, PipSidenavService, MediaMainChange } from '../pip-webui2-layouts';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
	selector: 'toggle-medium-sidenav',
	templateUrl: 'toggle-medium-sidenav.component.html',
	styleUrls: ['./toggle-medium-sidenav.component.scss']
})
export class ToggleMediumSidenavComponent implements OnInit {
	constructor(
		public media: PipMediaService,
		public sidenav: PipSidenavService,
		private cd: ChangeDetectorRef,
		private renderer: Renderer,
		private elRef: ElementRef
	) {  }

	private _icon$: BehaviorSubject<string> = new BehaviorSubject<string>('menu')
	
	public get icon$(): Observable<string> {
		return this._icon$;
	  }

	ngOnInit() {
		this.media.asObservableMain().subscribe((change: MediaMainChange) => {
			this.elRef.nativeElement.classList[change.aliases.includes('lg') ? 'add' : 'remove']('show');
		});

		this.sidenav.small$.subscribe((small) => {
			this._icon$.next(small ? 'chevron_right' : 'chevron_left');
			this.cd.detectChanges();
		  });
	}

	public toggleClick() {
		this.sidenav.toggleFixedNav();
	}
}