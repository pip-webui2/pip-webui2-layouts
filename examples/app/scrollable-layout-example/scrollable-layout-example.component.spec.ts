import { TestBed, inject } from '@angular/core/testing';

import { ScrollableLayoutExampleComponent } from './scrollable-layout-example.component';

describe('a scrollable-layout-example component', () => {
	let component: ScrollableLayoutExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ScrollableLayoutExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ScrollableLayoutExampleComponent], (ScrollableLayoutExampleComponent) => {
		component = ScrollableLayoutExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});