import { Component, Renderer, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'pip-main-menu',
    styleUrls: ['./main-menu-layout.component.scss'],
    template: '<ng-content></ng-content>'
})
export class PipMainMenuLayoutComponent implements OnInit, OnDestroy {
    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-main-menu', true);
    }

    public ngOnInit() {

    }

    public ngOnDestroy() {

    }
}