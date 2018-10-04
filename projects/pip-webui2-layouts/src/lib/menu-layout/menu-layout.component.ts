import { Component, Renderer, ElementRef, Input, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'pip-menu-layout',
    styleUrls: ['./menu-layout.component.scss'],
    template: '<ng-content></ng-content>'
})
export class PipMenuLayoutComponent implements OnInit, OnDestroy {
    @Input() set single(single: boolean) {
        this.elRef.nativeElement.classList[single ? 'add' : 'remove']('pip-single-content');
        if (this) {
            this.cd.detectChanges();
        }
    }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private cd: ChangeDetectorRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-menu-layout', true);
    }

    public ngOnInit() {

    }

    public ngOnDestroy() {

    }
}
