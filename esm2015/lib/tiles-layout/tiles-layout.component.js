/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Renderer, ElementRef, Input, Output, ChangeDetectorRef } from '@angular/core';
import { addResizeListener, removeResizeListener } from '../media/resize-layout.function';
/** @type {?} */
const masonry = require('masonry-layout');
export class PipTilesLayoutComponent {
    /**
     * @param {?} renderer
     * @param {?} elRef
     * @param {?} cd
     */
    constructor(renderer, elRef, cd) {
        this.renderer = renderer;
        this.elRef = elRef;
        this.cd = cd;
        this.animation = true;
        this.resized = new EventEmitter();
        this.prevContainerWidth = null;
        this.tilesOptions = {
            gutter: 16,
            columnWidth: '.pip-tile-sizer',
            itemSelector: '.pip-tile',
            transitionDuration: '0s',
            fitWidth: false
        };
        renderer.setElementClass(elRef.nativeElement, 'pip-tiles-layout', true);
        this.listener = () => { this.onResize(true); };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.columnWidth = this.columnWidth != null ? Math.floor(Number(this.columnWidth)) : 440;
        this.container = this.elRef.nativeElement.querySelector('.pip-tiles-content');
        addResizeListener(this.elRef.nativeElement, this.listener);
        this.sizer = document.createElement('div');
        this.container
            .appendChild(this.sizer)
            .className = 'pip-tile-sizer';
        setTimeout(() => {
            this.masonry = new masonry(this.container, this.tilesOptions);
            this.onResize(true);
        });
        if (this.animation === true) {
            setTimeout(() => {
                this.elRef.nativeElement.classList.add('animation');
            }, 1000);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['animation']) {
            if (changes['animation'].currentValue === true) {
                this.elRef.nativeElement.classList.add('animation');
            }
            else {
                this.elRef.nativeElement.classList.remove('animation');
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.observer = new MutationObserver(mutations => {
            mutations.forEach((mutation) => {
                this.masonry = new masonry(this.container, this.tilesOptions);
                this.onResize(true);
            });
        });
        /** @type {?} */
        const config = { childList: true, characterData: true };
        this.observer.observe(this.elRef.nativeElement.getElementsByClassName('pip-tiles-content')[0], config);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.masonry) {
            this.masonry.destroy();
        }
        removeResizeListener(this.elRef.nativeElement, this.listener);
    }
    /**
     * @private
     * @param {?=} force
     * @return {?}
     */
    onResize(force = false) {
        /** @type {?} */
        let width = this.elRef.nativeElement.parentElement.offsetWidth;
        /** @type {?} */
        let containerWidth;
        if (!this.stretch && (width - 32) > this.columnWidth) {
            width = width - 24 * 2;
            /** @type {?} */
            let columns = Math.floor(width / Number(this.columnWidth));
            containerWidth = (Number(this.columnWidth) + 16) * columns - 16;
            if (containerWidth > width) {
                columns--;
                containerWidth = (Number(this.columnWidth) + 16) * columns - 16;
            }
            if (columns < 1) {
                containerWidth = width;
                this.sizer.style['width'] = containerWidth + 'px';
            }
            else {
                this.sizer.style['width'] = Number(this.columnWidth) + 'px';
            }
            this.container.style['width'] = (containerWidth + 10) + 'px';
            this.container.classList.remove('pip-stretch');
        }
        else {
            this.container.style['width'] = '100%';
            this.container.classList.add('pip-stretch');
        }
        if (this.prevContainerWidth !== containerWidth || force) {
            this.prevContainerWidth = containerWidth;
            this.resized.emit(containerWidth);
            setTimeout(() => {
                this.masonry.layout();
            }, 400);
        }
    }
}
PipTilesLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-tiles-layout',
                template: "<div class=\"pip-tiles-content\">\r\n  <ng-content></ng-content>\r\n</div>",
                styles: [":host{display:block;position:relative;width:calc(100% - 16px)!important;padding:8px}:host.animation /deep/.pip-tile{transition:.35s!important}:host .pip-tiles-content{margin-left:auto;margin-right:auto;transition:width .35s;max-width:100%;display:flex;align-items:stretch}"]
            }] }
];
/** @nocollapse */
PipTilesLayoutComponent.ctorParameters = () => [
    { type: Renderer },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
PipTilesLayoutComponent.propDecorators = {
    columnWidth: [{ type: Input }],
    stretch: [{ type: Input }],
    animation: [{ type: Input }],
    resized: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PipTilesLayoutComponent.prototype.columnWidth;
    /** @type {?} */
    PipTilesLayoutComponent.prototype.stretch;
    /** @type {?} */
    PipTilesLayoutComponent.prototype.animation;
    /** @type {?} */
    PipTilesLayoutComponent.prototype.resized;
    /**
     * @type {?}
     * @private
     */
    PipTilesLayoutComponent.prototype.container;
    /**
     * @type {?}
     * @private
     */
    PipTilesLayoutComponent.prototype.masonry;
    /**
     * @type {?}
     * @private
     */
    PipTilesLayoutComponent.prototype.listener;
    /**
     * @type {?}
     * @private
     */
    PipTilesLayoutComponent.prototype.sizer;
    /**
     * @type {?}
     * @private
     */
    PipTilesLayoutComponent.prototype.prevContainerWidth;
    /**
     * @type {?}
     * @private
     */
    PipTilesLayoutComponent.prototype.observer;
    /**
     * @type {?}
     * @private
     */
    PipTilesLayoutComponent.prototype.debounced;
    /** @type {?} */
    PipTilesLayoutComponent.prototype.tilesOptions;
    /**
     * @type {?}
     * @private
     */
    PipTilesLayoutComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PipTilesLayoutComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    PipTilesLayoutComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXMtbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpcC13ZWJ1aTItbGF5b3V0cy8iLCJzb3VyY2VzIjpbImxpYi90aWxlcy1sYXlvdXQvdGlsZXMtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUNILFNBQVMsRUFDVCxZQUFZLEVBQ1osUUFBUSxFQUNSLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLGlCQUFpQixFQUdwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7TUFFcEYsT0FBTyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztBQU96QyxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUF1QmhDLFlBQ1ksUUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsRUFBcUI7UUFGckIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBdkJ4QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWhCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBTXZDLHVCQUFrQixHQUFRLElBQUksQ0FBQztRQUloQyxpQkFBWSxHQUFRO1lBQ3ZCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixZQUFZLEVBQUUsV0FBVztZQUN6QixrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUM7UUFPRSxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMs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QUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNsRDthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLGNBQWMsSUFBSSxLQUFLLEVBQUU7WUFDckQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGNBQWMsQ0FBQztZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsQyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDMUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7SUFDTCxDQUFDOzs7WUEzSEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBRTVCLHNGQUE0Qzs7YUFDL0M7Ozs7WUFuQkcsUUFBUTtZQUNSLFVBQVU7WUFNVixpQkFBaUI7OzswQkFjaEIsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBRUwsTUFBTTs7OztJQUpQLDhDQUFzQzs7SUFDdEMsMENBQTBCOztJQUMxQiw0Q0FBMEI7O0lBRTFCLDBDQUErQzs7Ozs7SUFFL0MsNENBQXVCOzs7OztJQUN2QiwwQ0FBcUI7Ozs7O0lBQ3JCLDJDQUFzQjs7Ozs7SUFDdEIsd0NBQW1COzs7OztJQUNuQixxREFBdUM7Ozs7O0lBQ3ZDLDJDQUFzQjs7Ozs7SUFDdEIsNENBQTRCOztJQUU1QiwrQ0FNRTs7Ozs7SUFHRSwyQ0FBMEI7Ozs7O0lBQzFCLHdDQUF5Qjs7Ozs7SUFDekIscUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55O1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIFJlbmRlcmVyLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgT25Jbml0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBhZGRSZXNpemVMaXN0ZW5lciwgcmVtb3ZlUmVzaXplTGlzdGVuZXIgfSBmcm9tICcuLi9tZWRpYS9yZXNpemUtbGF5b3V0LmZ1bmN0aW9uJztcclxuXHJcbmNvbnN0IG1hc29ucnkgPSByZXF1aXJlKCdtYXNvbnJ5LWxheW91dCcpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BpcC10aWxlcy1sYXlvdXQnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGlsZXMtbGF5b3V0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGlsZXMtbGF5b3V0LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGlwVGlsZXNMYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGNvbHVtbldpZHRoOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzdHJldGNoOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgYW5pbWF0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICBAT3V0cHV0KCkgcmVzaXplZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBhbnk7XHJcbiAgICBwcml2YXRlIG1hc29ucnk6IGFueTtcclxuICAgIHByaXZhdGUgbGlzdGVuZXI6IGFueTtcclxuICAgIHByaXZhdGUgc2l6ZXI6IGFueTtcclxuICAgIHByaXZhdGUgcHJldkNvbnRhaW5lcldpZHRoOiBhbnkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBvYnNlcnZlcjogYW55O1xyXG4gICAgcHJpdmF0ZSBkZWJvdW5jZWQ6IEZ1bmN0aW9uO1xyXG5cclxuICAgIHB1YmxpYyB0aWxlc09wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBndXR0ZXI6IDE2LFxyXG4gICAgICAgIGNvbHVtbldpZHRoOiAnLnBpcC10aWxlLXNpemVyJyxcclxuICAgICAgICBpdGVtU2VsZWN0b3I6ICcucGlwLXRpbGUnLFxyXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzBzJyxcclxuICAgICAgICBmaXRXaWR0aDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICAgKSB7XHJcbiAgICAgICAgcmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKGVsUmVmLm5hdGl2ZUVsZW1lbnQsICdwaXAtdGlsZXMtbGF5b3V0JywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9ICgpID0+IHsgdGhpcy5vblJlc2l6ZSh0cnVlKTsgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5XaWR0aCA9IHRoaXMuY29sdW1uV2lkdGggIT0gbnVsbCA/IE1hdGguZmxvb3IoTnVtYmVyKHRoaXMuY29sdW1uV2lkdGgpKSA6IDQ0MDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGlwLXRpbGVzLWNvbnRlbnQnKTtcclxuICAgICAgICBhZGRSZXNpemVMaXN0ZW5lcih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMubGlzdGVuZXIpO1xyXG4gICAgICAgIHRoaXMuc2l6ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lclxyXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5zaXplcilcclxuICAgICAgICAgICAgLmNsYXNzTmFtZSA9ICdwaXAtdGlsZS1zaXplcic7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1hc29ucnkgPSBuZXcgbWFzb25yeSh0aGlzLmNvbnRhaW5lciwgdGhpcy50aWxlc09wdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLm9uUmVzaXplKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzWydhbmltYXRpb24nXSkge1xyXG4gICAgICAgICAgICBpZiAoY2hhbmdlc1snYW5pbWF0aW9uJ10uY3VycmVudFZhbHVlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFzb25yeSA9IG5ldyBtYXNvbnJ5KHRoaXMuY29udGFpbmVyLCB0aGlzLnRpbGVzT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVzaXplKHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9O1xyXG5cclxuICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BpcC10aWxlcy1jb250ZW50JylbMF0sIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hc29ucnkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXNvbnJ5LmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVtb3ZlUmVzaXplTGlzdGVuZXIodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUmVzaXplKGZvcmNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBsZXQgY29udGFpbmVyV2lkdGg7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdHJldGNoICYmICh3aWR0aCAtIDMyKSA+IHRoaXMuY29sdW1uV2lkdGgpIHtcclxuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCAtIDI0ICogMjtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gTWF0aC5mbG9vcih3aWR0aCAvIE51bWJlcih0aGlzLmNvbHVtbldpZHRoKSk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoID0gKE51bWJlcih0aGlzLmNvbHVtbldpZHRoKSArIDE2KSAqIGNvbHVtbnMgLSAxNjtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXJXaWR0aCA+IHdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zLS07XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJXaWR0aCA9IChOdW1iZXIodGhpcy5jb2x1bW5XaWR0aCkgKyAxNikgKiBjb2x1bW5zIC0gMTY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb2x1bW5zIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyV2lkdGggPSB3aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZXIuc3R5bGVbJ3dpZHRoJ10gPSBjb250YWluZXJXaWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemVyLnN0eWxlWyd3aWR0aCddID0gTnVtYmVyKHRoaXMuY29sdW1uV2lkdGgpICsgJ3B4JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGVbJ3dpZHRoJ10gPSAoY29udGFpbmVyV2lkdGggKyAxMCkgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdwaXAtc3RyZXRjaCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlWyd3aWR0aCddID0gJzEwMCUnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwaXAtc3RyZXRjaCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJldkNvbnRhaW5lcldpZHRoICE9PSBjb250YWluZXJXaWR0aCB8fCBmb3JjZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZDb250YWluZXJXaWR0aCA9IGNvbnRhaW5lcldpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZWQuZW1pdChjb250YWluZXJXaWR0aCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXNvbnJ5LmxheW91dCgpO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=