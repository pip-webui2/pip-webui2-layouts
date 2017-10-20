import { TestBed, inject } from '@angular/core/testing';

import { ToggleMediumSidenavComponent } from './toggle-medium-sidenav.component';

describe('a toggle-medium-sidenav component', () => {
	let component: ToggleMediumSidenavComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ToggleMediumSidenavComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ToggleMediumSidenavComponent], (ToggleMediumSidenavComponent) => {
		component = ToggleMediumSidenavComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});