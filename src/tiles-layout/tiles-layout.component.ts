import { transition } from '@angular/animations';
declare var require: any;

import { Component, Renderer, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { addResizeListener, removeResizeListener } from '../media/resize-layout.function';
import { MasonryOptions } from 'angular2-masonry';

var masonry = require('masonry-layout');

@Component({
    selector: 'pip-tiles',
    styleUrls: ['./tiles-layout.component.scss'],
    templateUrl: './tiles-layout.component.html'
})
export class PipTilesLayoutComponent implements OnInit, OnDestroy {
    @Input() columnWidth: number | string;
    @Input() isMobile: boolean;

    private container: any;
    private masonry: any;
    private listener: any;
    private sizer: any;
    private prevContainerWidth: any = null;
    
    public tilesOptions: MasonryOptions = {
        gutter: 16,
        columnWidth: '.pip-tile-sizer',
        itemSelector: '.pip-tile',
        transitionDuration: '0.35s',
        fitWidth: false
    };

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-tiles', true);
        this.listener = () => { this.onResize(); };
    }

    public ngOnInit() {
        this.columnWidth = this.columnWidth != null ? Math.floor(Number(this.columnWidth)) : 440;
        this.container = this.elRef.nativeElement;
        addResizeListener(this.elRef.nativeElement, this.listener);
        this.sizer = document.createElement('div');
        this.elRef.nativeElement
            .appendChild(this.sizer)
            .className = 'pip-tile-sizer';
        
        setTimeout(() => {
            this.masonry = new masonry(this.container, this.tilesOptions);
            this.onResize(true);
        });
    }

    public ngOnDestroy() {
        if (this.masonry) {
            this.masonry.destroy();
        }
        removeResizeListener(this.elRef.nativeElement, this.listener);
    }

    private onResize(force: boolean = false) {
        let width = this.elRef.nativeElement.parentElement.offsetWidth,
            containerWidth;

        if (!this.isMobile && (width - 36) > this.columnWidth) {
            width = width - 24 * 2;

            let columns = Math.floor(width / Number(this.columnWidth));
            containerWidth = (Number(this.columnWidth) + 16) * columns - 16;

            if (containerWidth > width) {
                columns--;
                containerWidth = (Number(this.columnWidth) + 16) * columns - 16;
            }
    
            if (columns < 1) {
                containerWidth = width;
                this.sizer.style['width'] = containerWidth + 'px';
            } else {
                this.sizer.style['width'] = Number(this.columnWidth) + 'px';
            }

            //this.container.style['width'] = (containerWidth + 10) + 'px';
            this.container.classList.remove('pip-mobile');
        } else {
            width = width - 16 * 2;
            containerWidth = width;

            this.sizer.style['width'] = containerWidth + 'px';
            // +10 to avoid precision related error
            //this.container.style['width'] = (containerWidth + 10) + 'px';
            this.container.classList.add('pip-mobile');
        }

        if (this.prevContainerWidth != containerWidth || force) {
            this.prevContainerWidth = containerWidth;
            this.masonry.layout();
        }
    }
}