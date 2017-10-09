import { Directive, Renderer, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { addResizeListener } from '../media/resize-layout.function';

@Directive({ selector: '[pipMain]' })
export class PipMainLayoutDirective implements OnInit, OnDestroy {
    @Input() public pipContainer;
    
    private listener: any;
    private element: any;

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-main', true);
    }

    public ngOnInit() {
        this.listener = () => { this.onResize(); };

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
    }

    public ngOnDestroy() {
        removeEventListener(this.element, this.listener);
    }

    private onResize() {
        console.log('!---- main layout resized ----!');
    }
}