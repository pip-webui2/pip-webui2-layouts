import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'pip-card',
	template: '<ng-content></ng-content>',
	styleUrls: ['./card-layout.component.scss']
})

export class PipCardLayoutComponent implements OnInit {

	ngOnInit() { }
}