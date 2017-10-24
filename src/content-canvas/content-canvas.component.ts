import { Component, Renderer, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'pip-content',
    styleUrls: ['./content-canvas.component.scss'],
    template: '<ng-content></ng-content>'
})
export class PipContentCanvasComponent implements OnInit, OnDestroy {
    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-content', true);
    }

    public ngOnInit() {

    }

    public ngOnDestroy() {

    }
}