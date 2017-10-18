import { Component, ElementRef, OnInit } from '@angular/core';
import { PipAppbarService } from '../appbar/shared/appbar.service';

@Component({
	selector: 'pip-appbar-shadow',
	template: '',
	styleUrls: ['./appbar-shadow.component.scss']
})
export class PipAppbarShadowComponent implements OnInit {
	constructor(
		private service: PipAppbarService,
		private el: ElementRef
	) {}

	ngOnInit() {
		this.service.shadowVisibility$.subscribe(isVisible => {
			this.el.nativeElement.style.top = isVisible ? '-2px' : '-30px';
		});
	}
}