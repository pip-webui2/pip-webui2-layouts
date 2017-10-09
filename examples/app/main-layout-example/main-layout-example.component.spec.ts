import { TestBed, inject } from '@angular/core/testing';

import { MainLayoutExampleComponent } from './main-layout-example.component';

describe('a main-layout-example component', () => {
	let component: MainLayoutExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MainLayoutExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MainLayoutExampleComponent], (MainLayoutExampleComponent) => {
		component = MainLayoutExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});