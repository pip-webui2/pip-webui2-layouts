import { Component, ElementRef, Input } from '@angular/core';

@Component({
	selector: 'pip-top-shadow',
	template: '',
	styleUrls: ['./top-shadow.component.scss']
})
export class PipTopShadowComponent {
	@Input() set visible(isVisible: boolean) {
		this.el.nativeElement.style.top = isVisible ? '-2px' : '-30px';
	}

	constructor(
		private el: ElementRef
	) {}

}