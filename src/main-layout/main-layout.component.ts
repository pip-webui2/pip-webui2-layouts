import { Component, Renderer, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { addResizeListener } from '../media/resize-layout.function';
import { PipMediaService } from '../media/shared/media.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';

@Component({ 
    selector: 'pip-main',
    template: '<ng-content></ng-content>',
    styleUrls: ['./main-layout.component.scss']
 })
export class PipMainLayoutComponent implements OnInit, OnDestroy {
    @Input() public pipContainer;
    
    private listener: any;
    private element: any;

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private service: PipMediaService,
        private rightnavService: PipRightnavService
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
            this.service.updateMainLayoutBreakpoints(this.element.offsetWidth);
        });
        this.rightnavService.opened$.subscribe((opened: boolean) => {
            if (this.rightnavService._fixedRightnav) this.onResize();
        });
    }

    public ngOnDestroy() {
        removeEventListener(this.element, this.listener);
    }

    private onResize() {
        let rightnavWidth = this.rightnavService.opened ? this.rightnavService._fixedRightnav['_elementRef'].nativeElement.offsetWidth : 0;
        this.service.updateMainLayoutBreakpoints(this.element.offsetWidth - rightnavWidth);
    }
}