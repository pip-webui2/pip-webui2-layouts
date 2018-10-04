import { TestBed, inject } from '@angular/core/testing';

import { CardLayoutComponent } from './card-layout.component';

describe('a card-layout component', () => {
	let component: CardLayoutComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CardLayoutComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CardLayoutComponent], (CardLayoutComponent) => {
		component = CardLayoutComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});