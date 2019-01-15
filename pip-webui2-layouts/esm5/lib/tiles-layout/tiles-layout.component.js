/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Renderer, ElementRef, Input, Output, ChangeDetectorRef } from '@angular/core';
import { addResizeListener, removeResizeListener } from '../media/resize-layout.function';
/** @type {?} */
var masonry = require('masonry-layout');
var PipTilesLayoutComponent = /** @class */ (function () {
    function PipTilesLayoutComponent(renderer, elRef, cd) {
        var _this = this;
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
        this.listener = function () { _this.onResize(true); };
    }
    /**
     * @return {?}
     */
    PipTilesLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.columnWidth = this.columnWidth != null ? Math.floor(Number(this.columnWidth)) : 440;
        this.container = this.elRef.nativeElement.querySelector('.pip-tiles-content');
        addResizeListener(this.elRef.nativeElement, this.listener);
        this.sizer = document.createElement('div');
        this.container
            .appendChild(this.sizer)
            .className = 'pip-tile-sizer';
        setTimeout(function () {
            _this.masonry = new masonry(_this.container, _this.tilesOptions);
            _this.onResize(true);
        });
        if (this.animation === true) {
            setTimeout(function () {
                _this.elRef.nativeElement.classList.add('animation');
            }, 1000);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PipTilesLayoutComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['animation']) {
            if (changes['animation'].currentValue === true) {
                this.elRef.nativeElement.classList.add('animation');
            }
            else {
                this.elRef.nativeElement.classList.remove('animation');
            }
        }
    };
    /**
     * @return {?}
     */
    PipTilesLayoutComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                _this.masonry = new masonry(_this.container, _this.tilesOptions);
                _this.onResize(true);
            });
        });
        /** @type {?} */
        var config = { childList: true, characterData: true };
        this.observer.observe(this.elRef.nativeElement.getElementsByClassName('pip-tiles-content')[0], config);
    };
    /**
     * @return {?}
     */
    PipTilesLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.masonry) {
            this.masonry.destroy();
        }
        removeResizeListener(this.elRef.nativeElement, this.listener);
    };
    /**
     * @private
     * @param {?=} force
     * @return {?}
     */
    PipTilesLayoutComponent.prototype.onResize = /**
     * @private
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        /** @type {?} */
        var width = this.elRef.nativeElement.parentElement.offsetWidth;
        /** @type {?} */
        var containerWidth;
        if (!this.stretch && (width - 32) > this.columnWidth) {
            width = width - 24 * 2;
            /** @type {?} */
            var columns = Math.floor(width / Number(this.columnWidth));
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
            setTimeout(function () {
                _this.masonry.layout();
            }, 400);
        }
    };
    PipTilesLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-tiles-layout',
                    template: "<div class=\"pip-tiles-content\">\r\n  <ng-content></ng-content>\r\n</div>",
                    styles: [":host{display:block;position:relative;width:calc(100% - 16px)!important;padding:8px}:host.animation /deep/.pip-tile{transition:.35s!important}:host .pip-tiles-content{margin-left:auto;margin-right:auto;transition:width .35s;max-width:100%;display:flex;align-items:stretch}"]
                }] }
    ];
    /** @nocollapse */
    PipTilesLayoutComponent.ctorParameters = function () { return [
        { type: Renderer },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    PipTilesLayoutComponent.propDecorators = {
        columnWidth: [{ type: Input }],
        stretch: [{ type: Input }],
        animation: [{ type: Input }],
        resized: [{ type: Output }]
    };
    return PipTilesLayoutComponent;
}());
export { PipTilesLayoutComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXMtbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpcC13ZWJ1aTItbGF5b3V0cy8iLCJzb3VyY2VzIjpbImxpYi90aWxlcy1sYXlvdXQvdGlsZXMtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUNILFNBQVMsRUFDVCxZQUFZLEVBQ1osUUFBUSxFQUNSLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLGlCQUFpQixFQUdwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7SUFFcEYsT0FBTyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztBQUV6QztJQTRCSSxpQ0FDWSxRQUFrQixFQUNsQixLQUFpQixFQUNqQixFQUFxQjtRQUhqQyxpQkFPQztRQU5XLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQXZCeEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVoQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQU12Qyx1QkFBa0IsR0FBUSxJQUFJLENBQUM7UUFJaEMsaUJBQVksR0FBUTtZQUN2QixNQUFNLEVBQUUsRUFBRTtZQUNWLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsWUFBWSxFQUFFLFdBQVc7WUFDekIsa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDO1FBT0UsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBUSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFTSwwQ0FBUTs7O0lBQWY7UUFBQSxpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN6RixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlFLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVM7YUFDVCxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUN2QixTQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFFbEMsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5RCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUN6QixVQUFVLENBQUM7Z0JBQ1AsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4RCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDWjtJQUNMLENBQUM7Ozs7O0lBRU0sNkNBQVc7Ozs7SUFBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN2RDtpQkFBTTtnQkFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzFEO1NBQ0o7SUFDTCxDQUFDOzs7O0lBRUQsaURBQWU7OztJQUFmO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0JBQWdCLENBQUMsVUFBQSxTQUFTO1lBQzFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO2dCQUN2QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM5RCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7O1lBQ0csTUFBTSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFO1FBRXZELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDM0csQ0FBQzs7OztJQUVNLDZDQUFXOzs7SUFBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFCO1FBQ0Qsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7OztJQUVPLDBDQUFROzs7OztJQUFoQixVQUFpQixLQUFzQjtRQUF2QyxpQkFvQ0M7UUFwQ2dCLHNCQUFBLEVBQUEsYUFBc0I7O1lBQy9CLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVzs7WUFDMUQsY0FBYztRQUVsQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xELEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs7Z0JBRW5CLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFELGNBQWMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUVoRSxJQUFJLGNBQWMsR0FBRyxLQUFLLEVBQUU7Z0JBQ3hCLE9BQU8sRUFBRSxDQUFDO2dCQUNWLGNBQWMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQzthQUNuRTtZQUVELElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtnQkFDYixjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQ3JEO2lCQUFNO2dCQUNILElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQy9EO1lBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNsRDthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLGNBQWMsSUFBSSxLQUFLLEVBQUU7WUFDckQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGNBQWMsQ0FBQztZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsQyxVQUFVLENBQUM7Z0JBQ1AsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMxQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDWDtJQUNMLENBQUM7O2dCQTNISixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFFNUIsc0ZBQTRDOztpQkFDL0M7Ozs7Z0JBbkJHLFFBQVE7Z0JBQ1IsVUFBVTtnQkFNVixpQkFBaUI7Ozs4QkFjaEIsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBRUwsTUFBTTs7SUFrSFgsOEJBQUM7Q0FBQSxBQTVIRCxJQTRIQztTQXZIWSx1QkFBdUI7OztJQUNoQyw4Q0FBc0M7O0lBQ3RDLDBDQUEwQjs7SUFDMUIsNENBQTBCOztJQUUxQiwwQ0FBK0M7Ozs7O0lBRS9DLDRDQUF1Qjs7Ozs7SUFDdkIsMENBQXFCOzs7OztJQUNyQiwyQ0FBc0I7Ozs7O0lBQ3RCLHdDQUFtQjs7Ozs7SUFDbkIscURBQXVDOzs7OztJQUN2QywyQ0FBc0I7Ozs7O0lBQ3RCLDRDQUE0Qjs7SUFFNUIsK0NBTUU7Ozs7O0lBR0UsMkNBQTBCOzs7OztJQUMxQix3Q0FBeUI7Ozs7O0lBQ3pCLHFDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBSZW5kZXJlcixcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIE9uSW5pdCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYWRkUmVzaXplTGlzdGVuZXIsIHJlbW92ZVJlc2l6ZUxpc3RlbmVyIH0gZnJvbSAnLi4vbWVkaWEvcmVzaXplLWxheW91dC5mdW5jdGlvbic7XHJcblxyXG5jb25zdCBtYXNvbnJ5ID0gcmVxdWlyZSgnbWFzb25yeS1sYXlvdXQnKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwaXAtdGlsZXMtbGF5b3V0JyxcclxuICAgIHN0eWxlVXJsczogWycuL3RpbGVzLWxheW91dC5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RpbGVzLWxheW91dC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBpcFRpbGVzTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKSBjb2x1bW5XaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc3RyZXRjaDogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIGFuaW1hdGlvbiA9IHRydWU7XHJcblxyXG4gICAgQE91dHB1dCgpIHJlc2l6ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogYW55O1xyXG4gICAgcHJpdmF0ZSBtYXNvbnJ5OiBhbnk7XHJcbiAgICBwcml2YXRlIGxpc3RlbmVyOiBhbnk7XHJcbiAgICBwcml2YXRlIHNpemVyOiBhbnk7XHJcbiAgICBwcml2YXRlIHByZXZDb250YWluZXJXaWR0aDogYW55ID0gbnVsbDtcclxuICAgIHByaXZhdGUgb2JzZXJ2ZXI6IGFueTtcclxuICAgIHByaXZhdGUgZGVib3VuY2VkOiBGdW5jdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgdGlsZXNPcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgZ3V0dGVyOiAxNixcclxuICAgICAgICBjb2x1bW5XaWR0aDogJy5waXAtdGlsZS1zaXplcicsXHJcbiAgICAgICAgaXRlbVNlbGVjdG9yOiAnLnBpcC10aWxlJyxcclxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246ICcwcycsXHJcbiAgICAgICAgZml0V2lkdGg6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICAgICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICAgICkge1xyXG4gICAgICAgIHJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhlbFJlZi5uYXRpdmVFbGVtZW50LCAncGlwLXRpbGVzLWxheW91dCcsIHRydWUpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSAoKSA9PiB7IHRoaXMub25SZXNpemUodHJ1ZSk7IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuY29sdW1uV2lkdGggPSB0aGlzLmNvbHVtbldpZHRoICE9IG51bGwgPyBNYXRoLmZsb29yKE51bWJlcih0aGlzLmNvbHVtbldpZHRoKSkgOiA0NDA7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBpcC10aWxlcy1jb250ZW50Jyk7XHJcbiAgICAgICAgYWRkUmVzaXplTGlzdGVuZXIodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmxpc3RlbmVyKTtcclxuICAgICAgICB0aGlzLnNpemVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJcclxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc2l6ZXIpXHJcbiAgICAgICAgICAgIC5jbGFzc05hbWUgPSAncGlwLXRpbGUtc2l6ZXInO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tYXNvbnJ5ID0gbmV3IG1hc29ucnkodGhpcy5jb250YWluZXIsIHRoaXMudGlsZXNPcHRpb25zKTtcclxuICAgICAgICAgICAgdGhpcy5vblJlc2l6ZSh0cnVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGlvbicpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoY2hhbmdlc1snYW5pbWF0aW9uJ10pIHtcclxuICAgICAgICAgICAgaWYgKGNoYW5nZXNbJ2FuaW1hdGlvbiddLmN1cnJlbnRWYWx1ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGlvbicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGlvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcclxuICAgICAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc29ucnkgPSBuZXcgbWFzb25yeSh0aGlzLmNvbnRhaW5lciwgdGhpcy50aWxlc09wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblJlc2l6ZSh0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0geyBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IHRydWUgfTtcclxuXHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwaXAtdGlsZXMtY29udGVudCcpWzBdLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5tYXNvbnJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFzb25yeS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbW92ZVJlc2l6ZUxpc3RlbmVyKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5saXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJlc2l6ZShmb3JjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lcldpZHRoO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RyZXRjaCAmJiAod2lkdGggLSAzMikgPiB0aGlzLmNvbHVtbldpZHRoKSB7XHJcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggLSAyNCAqIDI7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29sdW1ucyA9IE1hdGguZmxvb3Iod2lkdGggLyBOdW1iZXIodGhpcy5jb2x1bW5XaWR0aCkpO1xyXG4gICAgICAgICAgICBjb250YWluZXJXaWR0aCA9IChOdW1iZXIodGhpcy5jb2x1bW5XaWR0aCkgKyAxNikgKiBjb2x1bW5zIC0gMTY7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyV2lkdGggPiB3aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ucy0tO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyV2lkdGggPSAoTnVtYmVyKHRoaXMuY29sdW1uV2lkdGgpICsgMTYpICogY29sdW1ucyAtIDE2O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29sdW1ucyA8IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemVyLnN0eWxlWyd3aWR0aCddID0gY29udGFpbmVyV2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplci5zdHlsZVsnd2lkdGgnXSA9IE51bWJlcih0aGlzLmNvbHVtbldpZHRoKSArICdweCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlWyd3aWR0aCddID0gKGNvbnRhaW5lcldpZHRoICsgMTApICsgJ3B4JztcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgncGlwLXN0cmV0Y2gnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZVsnd2lkdGgnXSA9ICcxMDAlJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGlwLXN0cmV0Y2gnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByZXZDb250YWluZXJXaWR0aCAhPT0gY29udGFpbmVyV2lkdGggfHwgZm9yY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2Q29udGFpbmVyV2lkdGggPSBjb250YWluZXJXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5yZXNpemVkLmVtaXQoY29udGFpbmVyV2lkdGgpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFzb25yeS5sYXlvdXQoKTtcclxuICAgICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19