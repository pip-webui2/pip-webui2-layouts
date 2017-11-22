import { Component, Renderer, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'pip-menu-layout',
    styleUrls: ['./menu-layout.component.scss'],
    template: '<ng-content></ng-content>'
})
export class PipMenuLayoutComponent implements OnInit, OnDestroy {
    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-main-layout', true);
    }

    public ngOnInit() {

    }

    public ngOnDestroy() {

    }
}