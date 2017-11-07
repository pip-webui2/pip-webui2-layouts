import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'pip-scrollable-container',
	template: '<ng-content></ng-content>',
	styleUrls: ['./scrollable-container.component.scss']
})

export class PipScrollableContainerComponent implements OnInit {

	ngOnInit() { }
}