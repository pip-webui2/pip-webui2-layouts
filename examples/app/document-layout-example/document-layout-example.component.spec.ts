import { TestBed, inject } from '@angular/core/testing';

import { DocumentLayoutExampleComponent } from './document-layout-example.component';

describe('a document-layout-example component', () => {
	let component: DocumentLayoutExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DocumentLayoutExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DocumentLayoutExampleComponent], (DocumentLayoutExampleComponent) => {
		component = DocumentLayoutExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});