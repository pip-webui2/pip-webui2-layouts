import { Component, Renderer, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { addResizeListener } from '../media/resize-layout.function';
import { PipMediaService } from '../media/shared/media.service';

@Component({ 
    selector: 'pip-main',
    template: '<ng-content></ng-content>'
 })
export class PipMainLayoutComponent implements OnInit, OnDestroy {
    @Input() public pipContainer;
    
    private listener: any;
    private element: any;

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private service: PipMediaService 
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-main', true);
        this.listener = () => { this.onResize(); };
    }

    public ngOnInit() {
        if (this.pipContainer != null) {
            let firstSym = this.pipContainer.substr(0, 1);

            let element = firstSym == '#' ? document.getElementById(this.pipContainer.substring(1, this.pipContainer.length )) : firstSym == '.'
                ? document.getElementsByClassName(this.pipContainer.substring(1, this.pipContainer.length)) 
                : document.getElementsByTagName(this.pipContainer);
            this.element = firstSym == '#' ? element : element.length > 0 ? element[0] : this.elRef.nativeElement;
        } else {
            this.element = this.elRef.nativeElement;
        }

        addResizeListener(this.element, this.listener);
        setTimeout(() => {
            this.service.updateMainLayoutBreakpoints(this.elRef.nativeElement.offsetWidth);
        });
    }

    public ngOnDestroy() {
        removeEventListener(this.element, this.listener);
    }

    private onResize() {
        this.service.updateMainLayoutBreakpoints(this.elRef.nativeElement.offsetWidth);
    }
}