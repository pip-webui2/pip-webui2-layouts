import { Component, OnInit } from '@angular/core';
import { PipMediaService } from '../pip-webui2-layouts'

@Component({
	selector: 'main-layout-example',
	templateUrl: 'main-layout-example.component.html',
	styleUrls: ['./main-layout-example.component.scss']
})

export class MainLayoutExampleComponent implements OnInit {

	ngOnInit() { }

	constructor(
		public media: PipMediaService
	) {
	}
}