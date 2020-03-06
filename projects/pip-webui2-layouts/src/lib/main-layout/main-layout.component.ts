import { Component, ElementRef, Input, OnInit, AfterViewInit, OnDestroy, HostBinding } from '@angular/core';

import { addResizeListener } from '../media/resize-layout.function';
import { PipMediaService } from '../media/shared/media.service';

@Component({
    selector: 'pip-main-layout',
    templateUrl: 'main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class PipMainLayoutComponent implements OnInit, AfterViewInit, OnDestroy {

    @HostBinding('class.pip-main-layout') pipMainLayoutCls = true;

    @Input() public pipContainer;

    private element: any;
    private _resizeListener = () => this._onResize();

    constructor(
        private elRef: ElementRef,
        private mainMedia: PipMediaService,
    ) { }

    public ngOnInit() {
        if (this.pipContainer != null) {
            const firstSym = this.pipContainer.substr(0, 1);

            const element: any = firstSym === '#'
                ? document.getElementById(this.pipContainer.substring(1, this.pipContainer.length))
                : firstSym === '.'
                    ? document.getElementsByClassName(this.pipContainer.substring(1, this.pipContainer.length))
                    : document.getElementsByTagName(this.pipContainer);
            this.element = firstSym === '#' ? element : element.length > 0 ? element[0] : this.elRef.nativeElement;
        } else {
            this.element = this.elRef.nativeElement;
        }

        addResizeListener(this.element, this._resizeListener);
    }

    ngAfterViewInit() { this._onResize(); }

    ngOnDestroy() {
        removeEventListener(this.element, this._resizeListener);
    }

    private _onResize() {
        this.mainMedia.updateMainLayoutBreakpoints(this.element.offsetWidth);
    }
}
