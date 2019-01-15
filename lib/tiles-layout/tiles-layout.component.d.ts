import { EventEmitter, Renderer, ElementRef, OnInit, OnDestroy, OnChanges, ChangeDetectorRef, AfterViewInit, SimpleChanges } from '@angular/core';
export declare class PipTilesLayoutComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
    private renderer;
    private elRef;
    private cd;
    columnWidth: number | string;
    stretch: boolean;
    animation: boolean;
    resized: EventEmitter<number>;
    private container;
    private masonry;
    private listener;
    private sizer;
    private prevContainerWidth;
    private observer;
    private debounced;
    tilesOptions: any;
    constructor(renderer: Renderer, elRef: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private onResize;
}
