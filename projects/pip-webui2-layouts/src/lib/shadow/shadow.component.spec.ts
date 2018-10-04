import { TestBed, inject } from '@angular/core/testing';

import { AppbarShadowComponent } from './appbar-shadow.component';

describe('a appbar-shadow component', () => {
	let component: AppbarShadowComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AppbarShadowComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AppbarShadowComponent], (AppbarShadowComponent) => {
		component = AppbarShadowComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});