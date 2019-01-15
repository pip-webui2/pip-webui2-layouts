/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Renderer, ElementRef, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject } from 'rxjs';
import { MatSidenav } from '@angular/material';
import { addResizeListener } from '../media/resize-layout.function';
import { PipMediaService } from '../media/shared/media.service';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';
var PipMainLayoutComponent = /** @class */ (function () {
    function PipMainLayoutComponent(renderer, elRef, cd, mainMedia, sidenavService, rightnavService, media) {
        var _this = this;
        this.renderer = renderer;
        this.elRef = elRef;
        this.cd = cd;
        this.mainMedia = mainMedia;
        this.sidenavService = sidenavService;
        this.rightnavService = rightnavService;
        this.media = media;
        this._opened$ = new BehaviorSubject(false);
        this.small$ = new BehaviorSubject(false);
        renderer.setElementClass(elRef.nativeElement, 'pip-main-layout', true);
        this.listener = function () { _this.onResize(); };
    }
    Object.defineProperty(PipMainLayoutComponent.prototype, "opened$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._opened$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipMainLayoutComponent.prototype, "active$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.sidenavService.active$;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PipMainLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.pipContainer != null) {
            /** @type {?} */
            var firstSym = this.pipContainer.substr(0, 1);
            /** @type {?} */
            var element = firstSym === '#'
                ? document.getElementById(this.pipContainer.substring(1, this.pipContainer.length))
                : firstSym === '.'
                    ? document.getElementsByClassName(this.pipContainer.substring(1, this.pipContainer.length))
                    : document.getElementsByTagName(this.pipContainer);
            this.element = firstSym === '#' ? element : element.length > 0 ? element[0] : this.elRef.nativeElement;
        }
        else {
            this.element = this.elRef.nativeElement;
        }
        addResizeListener(this.element, this.listener);
        setTimeout(function () {
            _this.mainMedia.updateMainLayoutBreakpoints(_this.element.offsetWidth);
        });
        this.rightnavService.opened$.subscribe(function (opened) {
            if (_this.rightnavService._fixedRightnav) {
                _this.onResize();
            }
            _this.cd.detectChanges();
        });
        this.media.media$.subscribe(function (change) {
            if (_this.rightnavService.onlyFloating === true) {
                return;
            }
            if (_this.sidenavService.floatingSidenavAliases.includes(change.mqAlias)) {
                if (_this.rightnavService.fixedRightnav
                    && _this.rightnavService.fixedRightnav.opened
                    && _this.rightnavService.floatingRightnav) {
                    _this.rightnavService.closeFixedRightnav();
                    _this.rightnavService.floatingRightnav.open();
                }
            }
            else {
                if (_this.rightnavService.floatingRightnav && _this.rightnavService.floatingRightnav.opened) {
                    if (_this.rightnavService.fixedRightnav) {
                        _this.rightnavService.fixedRightnav.open();
                    }
                    _this.rightnavService.floatingRightnav.close();
                }
            }
        });
        this.sidenavService.small$.subscribe(function (small) {
            _this.small$.next(small);
            _this.cd.detectChanges();
        });
    };
    /**
     * @return {?}
     */
    PipMainLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        removeEventListener(this.element, this.listener);
    };
    /**
     * @return {?}
     */
    PipMainLayoutComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.sidenavService.fixedSidenav = this.sidenav;
        this.rightnavService.fixedRightnav = this.rightnav;
        this.onResize();
    };
    /**
     * @private
     * @return {?}
     */
    PipMainLayoutComponent.prototype.onResize = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rightnavWidth = this.rightnavService._fixedRightnav && this.rightnavService._fixedRightnav.opened
            ? this.rightnavService._fixedRightnav['_elementRef'].nativeElement.offsetWidth
            : 0;
        this.mainMedia.updateMainLayoutBreakpoints(this.element.offsetWidth - rightnavWidth);
    };
    PipMainLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-main-layout',
                    template: "<mat-sidenav-container class=\"pip-sidenav-container pip-sidenav-fixed-container\" [ngClass]=\"{ 'pip-small': small$ | async }\">\r\n    <mat-sidenav #fixedSidenav class=\"pip-sidenav\" [opened]=\"active$ | async\" mode=\"side\" position=\"start\">\r\n        <ng-content select=\"pip-sidenav-fixed\"></ng-content>\r\n    </mat-sidenav>\r\n    <mat-sidenav #fixedRightnav class=\"pip-rightnav\" opened=\"false\" mode=\"side\" position=\"end\">\r\n        <ng-content select=\"pip-rightnav-fixed\"></ng-content>\r\n    </mat-sidenav>\r\n    <ng-content select=\"pip-main-content\"></ng-content>\r\n</mat-sidenav-container>",
                    styles: [":host{overflow-x:hidden!important}:host /deep/ pip-main-content{flex:1 1 100%;box-sizing:border-box;display:flex;flex-direction:column;max-width:100%}::ng-deep .pip-main-layout{position:absolute;top:64px;bottom:0;left:0;right:0}::ng-deep .pip-sm .pip-main-layout,::ng-deep .pip-xs .pip-main-layout{top:56px}mat-sidenav.pip-sidenav{max-width:250px;width:250px;overflow-x:hidden}:host ::ng-deep mat-sidenav-content{transition:.3s;display:flex;margin-left:250px!important;flex-direction:column}.pip-sidenav-container{display:block;height:100%}:host .mat-drawer.mat-drawer-end{width:250px}::ng-deep .pip-main-lg .pip-main-layout .pip-sidenav-fixed-container.pip-small mat-sidenav.pip-sidenav{max-width:64px;width:64px;min-width:64px}::ng-deep .pip-main-lg .pip-main-layout .pip-sidenav-fixed-container.pip-small ::ng-deep mat-sidenav-content{margin-left:64px!important}::ng-deep .pip-main-md .pip-main-layout .pip-sidenav-fixed-container mat-sidenav.pip-sidenav{max-width:64px;width:64px;min-width:64px}::ng-deep .pip-main-md .pip-main-layout .pip-sidenav-fixed-container mat-sidenav-content{margin-left:64px!important}::ng-deep .pip-main-sm .pip-main-layout .pip-sidenav-fixed-container mat-sidenav.pip-sidenav,::ng-deep .pip-main-xs .pip-main-layout .pip-sidenav-fixed-container mat-sidenav.pip-sidenav{max-width:0;width:0;min-width:0;border-right:none!important}::ng-deep .pip-main-sm .pip-main-layout .pip-sidenav-fixed-container mat-sidenav-content,::ng-deep .pip-main-xs .pip-main-layout .pip-sidenav-fixed-container mat-sidenav-content{margin-left:0!important}:host.pip-sidenav-not-active mat-sidenav.pip-sidenav{max-width:0!important;width:0!important;min-width:0!important}:host.pip-sidenav-not-active .pip-sidenav-fixed-container ::ng-deep mat-sidenav-content{margin-left:0!important}"]
                }] }
    ];
    /** @nocollapse */
    PipMainLayoutComponent.ctorParameters = function () { return [
        { type: Renderer },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: PipMediaService },
        { type: PipSidenavService },
        { type: PipRightnavService },
        { type: MediaObserver }
    ]; };
    PipMainLayoutComponent.propDecorators = {
        pipContainer: [{ type: Input }],
        sidenav: [{ type: ViewChild, args: ['fixedSidenav',] }],
        rightnav: [{ type: ViewChild, args: ['fixedRightnav',] }]
    };
    return PipMainLayoutComponent;
}());
export { PipMainLayoutComponent };
if (false) {
    /** @type {?} */
    PipMainLayoutComponent.prototype.pipContainer;
    /** @type {?} */
    PipMainLayoutComponent.prototype.sidenav;
    /** @type {?} */
    PipMainLayoutComponent.prototype.rightnav;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutComponent.prototype.listener;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutComponent.prototype._opened$;
    /** @type {?} */
    PipMainLayoutComponent.prototype.small$;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutComponent.prototype.mainMedia;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutComponent.prototype.sidenavService;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutComponent.prototype.rightnavService;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutComponent.prototype.media;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlwLXdlYnVpMi1sYXlvdXRzLyIsInNvdXJjZXMiOlsibGliL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBb0MsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxhQUFhLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRSxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFekU7SUFnQkksZ0NBQ1ksUUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsRUFBcUIsRUFDckIsU0FBMEIsRUFDMUIsY0FBaUMsRUFDakMsZUFBbUMsRUFDbkMsS0FBb0I7UUFQaEMsaUJBV0M7UUFWVyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUNuQyxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBVnhCLGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQVUsS0FBSyxD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SUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsTUFBTTtZQUNuRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVc7WUFDOUUsQ0FBQyxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7O2dCQW5HSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IseW5CQUF5Qzs7aUJBRTVDOzs7O2dCQWRtQixRQUFRO2dCQUFFLFVBQVU7Z0JBQXNELGlCQUFpQjtnQkFNdEcsZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLGtCQUFrQjtnQkFQbEIsYUFBYTs7OytCQWVqQixLQUFLOzBCQUNMLFNBQVMsU0FBQyxjQUFjOzJCQUN4QixTQUFTLFNBQUMsZUFBZTs7SUE0RjlCLDZCQUFDO0NBQUEsQUFwR0QsSUFvR0M7U0EvRlksc0JBQXNCOzs7SUFDL0IsOENBQTZCOztJQUM3Qix5Q0FBK0M7O0lBQy9DLDBDQUFpRDs7Ozs7SUFFakQsMENBQXNCOzs7OztJQUN0Qix5Q0FBcUI7Ozs7O0lBRXJCLDBDQUFpRjs7SUFDakYsd0NBQThFOzs7OztJQUcxRSwwQ0FBMEI7Ozs7O0lBQzFCLHVDQUF5Qjs7Ozs7SUFDekIsb0NBQTZCOzs7OztJQUM3QiwyQ0FBa0M7Ozs7O0lBQ2xDLGdEQUF5Qzs7Ozs7SUFDekMsaURBQTJDOzs7OztJQUMzQyx1Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVkaWFPYnNlcnZlciwgTWVkaWFDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTWF0U2lkZW5hdiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgYWRkUmVzaXplTGlzdGVuZXIgfSBmcm9tICcuLi9tZWRpYS9yZXNpemUtbGF5b3V0LmZ1bmN0aW9uJztcclxuaW1wb3J0IHsgUGlwTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi4vbWVkaWEvc2hhcmVkL21lZGlhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQaXBTaWRlbmF2U2VydmljZSB9IGZyb20gJy4uL3NpZGVuYXYvc2hhcmVkL3NpZGVuYXYuc2VydmljZSc7XHJcbmltcG9ydCB7IFBpcFJpZ2h0bmF2U2VydmljZSB9IGZyb20gJy4uL3JpZ2h0bmF2L3NoYXJlZC9yaWdodG5hdi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwaXAtbWFpbi1sYXlvdXQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdtYWluLWxheW91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9tYWluLWxheW91dC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaXBNYWluTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgQElucHV0KCkgcHVibGljIHBpcENvbnRhaW5lcjtcclxuICAgIEBWaWV3Q2hpbGQoJ2ZpeGVkU2lkZW5hdicpIHNpZGVuYXY6IE1hdFNpZGVuYXY7XHJcbiAgICBAVmlld0NoaWxkKCdmaXhlZFJpZ2h0bmF2JykgcmlnaHRuYXY6IE1hdFNpZGVuYXY7XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcjogYW55O1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb3BlbmVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgICBwdWJsaWMgc21hbGwkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICAgICAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgbWFpbk1lZGlhOiBQaXBNZWRpYVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBzaWRlbmF2U2VydmljZTogUGlwU2lkZW5hdlNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByaWdodG5hdlNlcnZpY2U6IFBpcFJpZ2h0bmF2U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIG1lZGlhOiBNZWRpYU9ic2VydmVyXHJcbiAgICApIHtcclxuICAgICAgICByZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MoZWxSZWYubmF0aXZlRWxlbWVudCwgJ3BpcC1tYWluLWxheW91dCcsIHRydWUpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSAoKSA9PiB7IHRoaXMub25SZXNpemUoKTsgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG9wZW5lZCQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wZW5lZCQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhY3RpdmUkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpZGVuYXZTZXJ2aWNlLmFjdGl2ZSQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBpcENvbnRhaW5lciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0U3ltID0gdGhpcy5waXBDb250YWluZXIuc3Vic3RyKDAsIDEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudDogYW55ID0gZmlyc3RTeW0gPT09ICcjJ1xyXG4gICAgICAgICAgICAgICAgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBpcENvbnRhaW5lci5zdWJzdHJpbmcoMSwgdGhpcy5waXBDb250YWluZXIubGVuZ3RoKSlcclxuICAgICAgICAgICAgICAgIDogZmlyc3RTeW0gPT09ICcuJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLnBpcENvbnRhaW5lci5zdWJzdHJpbmcoMSwgdGhpcy5waXBDb250YWluZXIubGVuZ3RoKSlcclxuICAgICAgICAgICAgICAgICAgICA6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRoaXMucGlwQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZmlyc3RTeW0gPT09ICcjJyA/IGVsZW1lbnQgOiBlbGVtZW50Lmxlbmd0aCA+IDAgPyBlbGVtZW50WzBdIDogdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkZFJlc2l6ZUxpc3RlbmVyKHRoaXMuZWxlbWVudCwgdGhpcy5saXN0ZW5lcik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbk1lZGlhLnVwZGF0ZU1haW5MYXlvdXRCcmVha3BvaW50cyh0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmlnaHRuYXZTZXJ2aWNlLm9wZW5lZCQuc3Vic2NyaWJlKChvcGVuZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRuYXZTZXJ2aWNlLl9maXhlZFJpZ2h0bmF2KSB7IHRoaXMub25SZXNpemUoKTsgfVxyXG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tZWRpYS5tZWRpYSQuc3Vic2NyaWJlKChjaGFuZ2U6IE1lZGlhQ2hhbmdlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0bmF2U2VydmljZS5vbmx5RmxvYXRpbmcgPT09IHRydWUpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaWRlbmF2U2VydmljZS5mbG9hdGluZ1NpZGVuYXZBbGlhc2VzLmluY2x1ZGVzKGNoYW5nZS5tcUFsaWFzKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRuYXZTZXJ2aWNlLmZpeGVkUmlnaHRuYXZcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnJpZ2h0bmF2U2VydmljZS5maXhlZFJpZ2h0bmF2Lm9wZW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMucmlnaHRuYXZTZXJ2aWNlLmZsb2F0aW5nUmlnaHRuYXYpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0bmF2U2VydmljZS5jbG9zZUZpeGVkUmlnaHRuYXYoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0bmF2U2VydmljZS5mbG9hdGluZ1JpZ2h0bmF2Lm9wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0bmF2U2VydmljZS5mbG9hdGluZ1JpZ2h0bmF2ICYmIHRoaXMucmlnaHRuYXZTZXJ2aWNlLmZsb2F0aW5nUmlnaHRuYXYub3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRuYXZTZXJ2aWNlLmZpeGVkUmlnaHRuYXYpIHsgdGhpcy5yaWdodG5hdlNlcnZpY2UuZml4ZWRSaWdodG5hdi5vcGVuKCk7IH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0bmF2U2VydmljZS5mbG9hdGluZ1JpZ2h0bmF2LmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zaWRlbmF2U2VydmljZS5zbWFsbCQuc3Vic2NyaWJlKChzbWFsbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNtYWxsJC5uZXh0KHNtYWxsKTtcclxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5lbGVtZW50LCB0aGlzLmxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zaWRlbmF2U2VydmljZS5maXhlZFNpZGVuYXYgPSB0aGlzLnNpZGVuYXY7XHJcbiAgICAgICAgdGhpcy5yaWdodG5hdlNlcnZpY2UuZml4ZWRSaWdodG5hdiA9IHRoaXMucmlnaHRuYXY7XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25SZXNpemUoKSB7XHJcbiAgICAgICAgY29uc3QgcmlnaHRuYXZXaWR0aCA9IHRoaXMucmlnaHRuYXZTZXJ2aWNlLl9maXhlZFJpZ2h0bmF2ICYmIHRoaXMucmlnaHRuYXZTZXJ2aWNlLl9maXhlZFJpZ2h0bmF2Lm9wZW5lZFxyXG4gICAgICAgICAgICA/IHRoaXMucmlnaHRuYXZTZXJ2aWNlLl9maXhlZFJpZ2h0bmF2WydfZWxlbWVudFJlZiddLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGhcclxuICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIHRoaXMubWFpbk1lZGlhLnVwZGF0ZU1haW5MYXlvdXRCcmVha3BvaW50cyh0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGggLSByaWdodG5hdldpZHRoKTtcclxuICAgIH1cclxufVxyXG4iXX0=