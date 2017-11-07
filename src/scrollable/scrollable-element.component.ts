import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'pip-scrollable-element',
	template: '<ng-content></ng-content>',
	styleUrls: ['./scrollable-element.component.scss']
})

export class PipScrollableElementComponent implements OnInit {

	ngOnInit() { }
}