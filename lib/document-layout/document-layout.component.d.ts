import { Renderer, ElementRef, OnInit, OnDestroy } from '@angular/core';
export declare class PipDocumentLayoutComponent implements OnInit, OnDestroy {
    private renderer;
    private elRef;
    toolbar: boolean | string;
    constructor(renderer: Renderer, elRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
