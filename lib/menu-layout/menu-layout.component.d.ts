import { Renderer, ElementRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
export declare class PipMenuLayoutComponent implements OnInit, OnDestroy {
    private renderer;
    private elRef;
    private cd;
    single: boolean;
    constructor(renderer: Renderer, elRef: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
