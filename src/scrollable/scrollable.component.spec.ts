import { TestBed, inject } from '@angular/core/testing';

import { ScrollableElementComponent } from './scrollable-element.component';

describe('a scrollable-element component', () => {
	let component: ScrollableElementComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ScrollableElementComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ScrollableElementComponent], (ScrollableElementComponent) => {
		component = ScrollableElementComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});