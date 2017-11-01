import { Component, Renderer, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'pip-document',
    styleUrls: ['./document-layout.component.scss'],
    template: '<div class="pip-document-content"><ng-content></ng-content></div>'
})
export class PipDocumentLayoutComponent implements OnInit, OnDestroy {
    @Input() set toolbar(toolbar: boolean | string) {
        this.elRef.nativeElement.classList[toolbar === 'true' || toolbar === true ? 'add' : 'remove']('pip-with-toolbar');
    }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-document', true);
    }

    public ngOnInit() {

    }

    public ngOnDestroy() {

    }
}