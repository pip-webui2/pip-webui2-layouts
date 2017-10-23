import { TestBed, inject } from '@angular/core/testing';

import { CardExampleComponent } from './card-example.component';

describe('a card-example component', () => {
	let component: CardExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CardExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CardExampleComponent], (CardExampleComponent) => {
		component = CardExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});