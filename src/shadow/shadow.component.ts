import { Component, ElementRef, Input } from '@angular/core';
import { shadowAttachmentSide } from './shared/shadowAttachmentSide.model';

@Component({
	selector: 'pip-shadow',
	template: '',
	styleUrls: ['./shadow.component.scss']
})
export class PipShadowComponent {
	@Input() set visible(isVisible: boolean) {
		switch (this._attachmentSide) {
			case shadowAttachmentSide.top: {
				this.el.nativeElement.style.top = isVisible ? '-2px' : '-30px';
				break;
			}

			case shadowAttachmentSide.left: {
				this.el.nativeElement.style.left = isVisible ? '-2px' : '-30px';
				break;
			}

			case shadowAttachmentSide.right: {
				this.el.nativeElement.style.right = isVisible ? '-2px' : '-30px';
				break;
			}

			case shadowAttachmentSide.bottom: {
				this.el.nativeElement.style.bottom = isVisible ? '-2px' : '-30px';
				break;
			}
		}
	}

	@Input() set attachmentSide(side: string) {
		let index = shadowAttachmentSide.all.indexOf(side);
		this._attachmentSide = index > -1 ? side : shadowAttachmentSide.top;
		this.el.nativeElement.classList = [this._acttacnmentSideClasses[this._attachmentSide]];
	}

	private _attachmentSide: string = null;
	private _acttacnmentSideClasses: any = {
		top: 'pip-top-shadow',
		left: 'pip-left-shadow',
		right: 'pip-right-shadow',
		bottom: 'pip-bottom-shadow'
	};

	constructor(
		private el: ElementRef
	) { }

}