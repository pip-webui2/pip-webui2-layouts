import { Component, OnInit, OnDestroy } from '@angular/core';
import { PipSidenavService } from '../pip-webui2-layouts';

@Component({
	selector: 'card-layout-example',
	templateUrl: 'card-layout-example.component.html'
})

export class CardLayoutExampleComponent implements OnInit, OnDestroy {
	private sidenavActive: boolean = false;
	
	public isTransparent: boolean = false;

	constructor(
		public sidenav: PipSidenavService
	) { }

	ngOnInit() {
		this.sidenav.active = this.sidenavActive;
	}

	public ngOnDestroy() {
		this.sidenav.active = true;
	}

	public onSidenavClick() {
		this.sidenavActive = !this.sidenavActive;
		console.log('this.sidenavActive', this.sidenavActive);
		this.sidenav.active = this.sidenavActive;
	}
}