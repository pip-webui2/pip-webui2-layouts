/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Renderer, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';
import { MediaObserver } from '@angular/flex-layout';
import { each } from '../shared/layouts.utils';
var PipRootLayoutComponent = /** @class */ (function () {
    function PipRootLayoutComponent(sidenavService, rightnavService, renderer, elRef, media, cd) {
        this.sidenavService = sidenavService;
        this.rightnavService = rightnavService;
        this.renderer = renderer;
        this.elRef = elRef;
        this.media = media;
        this.cd = cd;
        this.mode$ = new BehaviorSubject(null);
        renderer.setElementClass(elRef.nativeElement, 'pip-root-layout', true);
    }
    /**
     * @return {?}
     */
    PipRootLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sidenavService.opened$.subscribe(function (opened) {
            _this.cd.detectChanges();
        });
        this.rightnavService.opened$.subscribe(function () {
            _this.cd.detectChanges();
        });
        this.media.media$.subscribe(function (change) {
            _this.mode$.next(_this.rightnavService.floatingRightnavAliases.includes(change.mqAlias) ? null : 'side');
            _this.cd.detectChanges();
        });
        this.initMode();
    };
    /**
     * @return {?}
     */
    PipRootLayoutComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.sidenavService.floatingSidenav = this.sidenav;
        this.rightnavService.floatingRightnav = this.rightnav;
    };
    /**
     * @private
     * @return {?}
     */
    PipRootLayoutComponent.prototype.initMode = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var mode = 'side';
        each(this.rightnavService.floatingRightnavAliases, function (alias) {
            if (_this.media.isActive(alias)) {
                mode = null;
            }
        });
        this.mode$.next(mode);
    };
    PipRootLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-root-layout',
                    template: "<mat-sidenav-container class=\"pip-sidenav-floating-container\">\r\n    <mat-sidenav #floatingSidenav opened=\"false\" class=\"pip-sidenav-floating\" position=\"start\">\r\n        <ng-content select=\"pip-sidenav-floating\"></ng-content>\r\n    </mat-sidenav>\r\n    <mat-sidenav #floatingRightnav opened=\"false\" [mode]=\"mode$ | async\" class=\"pip-rightnav\" position=\"end\">\r\n        <ng-content select=\"pip-rightnav-floating\"></ng-content>\r\n    </mat-sidenav>\r\n    <ng-content select=\"pip-root-content\"></ng-content>\r\n</mat-sidenav-container>",
                    styles: ["mat-sidenav{max-width:250px;width:250px;background-color:#eee}.pip-sidenav-floating-container{display:block;height:100%}:host{position:absolute;left:0;top:0;bottom:0;right:0}:host /deep/ pip-root-content{margin:0;width:100%;height:100%;min-width:100%;min-height:100%;display:flex;box-sizing:border-box;flex-direction:column!important}"]
                }] }
    ];
    /** @nocollapse */
    PipRootLayoutComponent.ctorParameters = function () { return [
        { type: PipSidenavService },
        { type: PipRightnavService },
        { type: Renderer },
        { type: ElementRef },
        { type: MediaObserver },
        { type: ChangeDetectorRef }
    ]; };
    PipRootLayoutComponent.propDecorators = {
        sidenav: [{ type: ViewChild, args: ['floatingSidenav',] }],
        rightnav: [{ type: ViewChild, args: ['floatingRightnav',] }]
    };
    return PipRootLayoutComponent;
}());
export { PipRootLayoutComponent };
if (false) {
    /** @type {?} */
    PipRootLayoutComponent.prototype.sidenav;
    /** @type {?} */
    PipRootLayoutComponent.prototype.rightnav;
    /** @type {?} */
    PipRootLayoutComponent.prototype.mode$;
    /**
     * @type {?}
     * @private
     */
    PipRootLayoutComponent.prototype.sidenavService;
    /**
     * @type {?}
     * @private
     */
    PipRootLayoutComponent.prototype.rightnavService;
    /**
     * @type {?}
     * @private
     */
    PipRootLayoutComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PipRootLayoutComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    PipRootLayoutComponent.prototype.media;
    /**
     * @type {?}
     * @private
     */
    PipRootLayoutComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdC1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlwLXdlYnVpMi1sYXlvdXRzLyIsInNvdXJjZXMiOlsibGliL3Jvb3QtbGF5b3V0L3Jvb3QtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxRQUFRLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFL0M7SUFZSSxnQ0FDWSxjQUFpQyxFQUNqQyxlQUFtQyxFQUNuQyxRQUFrQixFQUNsQixLQUFpQixFQUNqQixLQUFvQixFQUNwQixFQUFxQjtRQUxyQixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDakMsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQ3BCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBUjFCLFVBQUssR0FBNEIsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFVdEUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDekMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNuQyxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBbUI7WUFDNUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZHLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELGdEQUFlOzs7SUFBZjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzFELENBQUM7Ozs7O0lBRU8seUNBQVE7Ozs7SUFBaEI7UUFBQSxpQkFRQzs7WUFQTyxJQUFJLEdBQUcsTUFBTTtRQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsRUFBRSxVQUFDLEtBQWE7WUFDN0QsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQUU7UUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOztnQkFyREosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDhqQkFBeUM7O2lCQUU1Qzs7OztnQkFWUSxpQkFBaUI7Z0JBQ2pCLGtCQUFrQjtnQkFOQyxRQUFRO2dCQUFFLFVBQVU7Z0JBT3ZDLGFBQWE7Z0JBUDRCLGlCQUFpQjs7OzBCQWtCOUQsU0FBUyxTQUFDLGlCQUFpQjsyQkFDM0IsU0FBUyxTQUFDLGtCQUFrQjs7SUErQ2pDLDZCQUFDO0NBQUEsQUF2REQsSUF1REM7U0FqRFksc0JBQXNCOzs7SUFDL0IseUNBQWtEOztJQUNsRCwwQ0FBb0Q7O0lBRXBELHVDQUEwRTs7Ozs7SUFHdEUsZ0RBQXlDOzs7OztJQUN6QyxpREFBMkM7Ozs7O0lBQzNDLDBDQUEwQjs7Ozs7SUFDMUIsdUNBQXlCOzs7OztJQUN6Qix1Q0FBNEI7Ozs7O0lBQzVCLG9DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBSZW5kZXJlciwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUGlwU2lkZW5hdlNlcnZpY2UgfSBmcm9tICcuLi9zaWRlbmF2L3NoYXJlZC9zaWRlbmF2LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQaXBSaWdodG5hdlNlcnZpY2UgfSBmcm9tICcuLi9yaWdodG5hdi9zaGFyZWQvcmlnaHRuYXYuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lZGlhT2JzZXJ2ZXIsIE1lZGlhQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xyXG5cclxuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uL3NoYXJlZC9sYXlvdXRzLnV0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwaXAtcm9vdC1sYXlvdXQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdyb290LWxheW91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9yb290LWxheW91dC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGlwUm9vdExheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKCdmbG9hdGluZ1NpZGVuYXYnKSBzaWRlbmF2OiBNYXRTaWRlbmF2O1xyXG4gICAgQFZpZXdDaGlsZCgnZmxvYXRpbmdSaWdodG5hdicpIHJpZ2h0bmF2OiBNYXRTaWRlbmF2O1xyXG5cclxuICAgIHB1YmxpYyBtb2RlJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc2lkZW5hdlNlcnZpY2U6IFBpcFNpZGVuYXZTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmlnaHRuYXZTZXJ2aWNlOiBQaXBSaWdodG5hdlNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIG1lZGlhOiBNZWRpYU9ic2VydmVyLFxyXG4gICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgICApIHtcclxuICAgICAgICByZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MoZWxSZWYubmF0aXZlRWxlbWVudCwgJ3BpcC1yb290LWxheW91dCcsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2lkZW5hdlNlcnZpY2Uub3BlbmVkJC5zdWJzY3JpYmUoKG9wZW5lZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5yaWdodG5hdlNlcnZpY2Uub3BlbmVkJC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tZWRpYS5tZWRpYSQuc3Vic2NyaWJlKChjaGFuZ2U6IE1lZGlhQ2hhbmdlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSQubmV4dCh0aGlzLnJpZ2h0bmF2U2VydmljZS5mbG9hdGluZ1JpZ2h0bmF2QWxpYXNlcy5pbmNsdWRlcyhjaGFuZ2UubXFBbGlhcykgPyBudWxsIDogJ3NpZGUnKTtcclxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdE1vZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zaWRlbmF2U2VydmljZS5mbG9hdGluZ1NpZGVuYXYgPSB0aGlzLnNpZGVuYXY7XHJcbiAgICAgICAgdGhpcy5yaWdodG5hdlNlcnZpY2UuZmxvYXRpbmdSaWdodG5hdiA9IHRoaXMucmlnaHRuYXY7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0TW9kZSgpIHtcclxuICAgICAgICBsZXQgbW9kZSA9ICdzaWRlJztcclxuXHJcbiAgICAgICAgZWFjaCh0aGlzLnJpZ2h0bmF2U2VydmljZS5mbG9hdGluZ1JpZ2h0bmF2QWxpYXNlcywgKGFsaWFzOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWEuaXNBY3RpdmUoYWxpYXMpKSB7IG1vZGUgPSBudWxsOyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubW9kZSQubmV4dChtb2RlKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19