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
export class PipMainLayoutComponent {
    /**
     * @param {?} renderer
     * @param {?} elRef
     * @param {?} cd
     * @param {?} mainMedia
     * @param {?} sidenavService
     * @param {?} rightnavService
     * @param {?} media
     */
    constructor(renderer, elRef, cd, mainMedia, sidenavService, rightnavService, media) {
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
        this.listener = () => { this.onResize(); };
    }
    /**
     * @return {?}
     */
    get opened$() {
        return this._opened$;
    }
    /**
     * @return {?}
     */
    get active$() {
        return this.sidenavService.active$;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.pipContainer != null) {
            /** @type {?} */
            const firstSym = this.pipContainer.substr(0, 1);
            /** @type {?} */
            const element = firstSym === '#'
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
        setTimeout(() => {
            this.mainMedia.updateMainLayoutBreakpoints(this.element.offsetWidth);
        });
        this.rightnavService.opened$.subscribe((opened) => {
            if (this.rightnavService._fixedRightnav) {
                this.onResize();
            }
            this.cd.detectChanges();
        });
        this.media.media$.subscribe((change) => {
            if (this.rightnavService.onlyFloating === true) {
                return;
            }
            if (this.sidenavService.floatingSidenavAliases.includes(change.mqAlias)) {
                if (this.rightnavService.fixedRightnav
                    && this.rightnavService.fixedRightnav.opened
                    && this.rightnavService.floatingRightnav) {
                    this.rightnavService.closeFixedRightnav();
                    this.rightnavService.floatingRightnav.open();
                }
            }
            else {
                if (this.rightnavService.floatingRightnav && this.rightnavService.floatingRightnav.opened) {
                    if (this.rightnavService.fixedRightnav) {
                        this.rightnavService.fixedRightnav.open();
                    }
                    this.rightnavService.floatingRightnav.close();
                }
            }
        });
        this.sidenavService.small$.subscribe((small) => {
            this.small$.next(small);
            this.cd.detectChanges();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        removeEventListener(this.element, this.listener);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.sidenavService.fixedSidenav = this.sidenav;
        this.rightnavService.fixedRightnav = this.rightnav;
        this.onResize();
    }
    /**
     * @private
     * @return {?}
     */
    onResize() {
        /** @type {?} */
        const rightnavWidth = this.rightnavService._fixedRightnav && this.rightnavService._fixedRightnav.opened
            ? this.rightnavService._fixedRightnav['_elementRef'].nativeElement.offsetWidth
            : 0;
        this.mainMedia.updateMainLayoutBreakpoints(this.element.offsetWidth - rightnavWidth);
    }
}
PipMainLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-main-layout',
                template: "<mat-sidenav-container class=\"pip-sidenav-container pip-sidenav-fixed-container\" [ngClass]=\"{ 'pip-small': small$ | async }\">\r\n    <mat-sidenav #fixedSidenav class=\"pip-sidenav\" [opened]=\"active$ | async\" mode=\"side\" position=\"start\">\r\n        <ng-content select=\"pip-sidenav-fixed\"></ng-content>\r\n    </mat-sidenav>\r\n    <mat-sidenav #fixedRightnav class=\"pip-rightnav\" opened=\"false\" mode=\"side\" position=\"end\">\r\n        <ng-content select=\"pip-rightnav-fixed\"></ng-content>\r\n    </mat-sidenav>\r\n    <ng-content select=\"pip-main-content\"></ng-content>\r\n</mat-sidenav-container>",
                styles: [":host{overflow-x:hidden!important}:host /deep/ pip-main-content{flex:1 1 100%;box-sizing:border-box;display:flex;flex-direction:column;max-width:100%}::ng-deep .pip-main-layout{position:absolute;top:64px;bottom:0;left:0;right:0}::ng-deep .pip-sm .pip-main-layout,::ng-deep .pip-xs .pip-main-layout{top:56px}mat-sidenav.pip-sidenav{max-width:250px;width:250px;overflow-x:hidden}:host ::ng-deep mat-sidenav-content{transition:.3s;display:flex;margin-left:250px!important;flex-direction:column}.pip-sidenav-container{display:block;height:100%}:host .mat-drawer.mat-drawer-end{width:250px}::ng-deep .pip-main-lg .pip-main-layout .pip-sidenav-fixed-container.pip-small mat-sidenav.pip-sidenav{max-width:64px;width:64px;min-width:64px}::ng-deep .pip-main-lg .pip-main-layout .pip-sidenav-fixed-container.pip-small ::ng-deep mat-sidenav-content{margin-left:64px!important}::ng-deep .pip-main-md .pip-main-layout .pip-sidenav-fixed-container mat-sidenav.pip-sidenav{max-width:64px;width:64px;min-width:64px}::ng-deep .pip-main-md .pip-main-layout .pip-sidenav-fixed-container mat-sidenav-content{margin-left:64px!important}::ng-deep .pip-main-sm .pip-main-layout .pip-sidenav-fixed-container mat-sidenav.pip-sidenav,::ng-deep .pip-main-xs .pip-main-layout .pip-sidenav-fixed-container mat-sidenav.pip-sidenav{max-width:0;width:0;min-width:0;border-right:none!important}::ng-deep .pip-main-sm .pip-main-layout .pip-sidenav-fixed-container mat-sidenav-content,::ng-deep .pip-main-xs .pip-main-layout .pip-sidenav-fixed-container mat-sidenav-content{margin-left:0!important}:host.pip-sidenav-not-active mat-sidenav.pip-sidenav{max-width:0!important;width:0!important;min-width:0!important}:host.pip-sidenav-not-active .pip-sidenav-fixed-container ::ng-deep mat-sidenav-content{margin-left:0!important}"]
            }] }
];
/** @nocollapse */
PipMainLayoutComponent.ctorParameters = () => [
    { type: Renderer },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: PipMediaService },
    { type: PipSidenavService },
    { type: PipRightnavService },
    { type: MediaObserver }
];
PipMainLayoutComponent.propDecorators = {
    pipContainer: [{ type: Input }],
    sidenav: [{ type: ViewChild, args: ['fixedSidenav',] }],
    rightnav: [{ type: ViewChild, args: ['fixedRightnav',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlwLXdlYnVpMi1sYXlvdXRzLyIsInNvdXJjZXMiOlsibGliL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBb0MsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxhQUFhLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRSxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFPekUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7OztJQVcvQixZQUNZLFFBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLEVBQXFCLEVBQ3JCLFNBQTBCLEVBQzFCLGNBQWlDLEVBQ2pDLGVBQW1DLEVBQ25DLEtBQW9CO1FBTnBCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDakMsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBQ25DLFVBQUssR0FBTCxLQUFLLENBQWU7UUFWeEIsYUFBUSxHQUE2QixJQUFJLGVB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LENBQUMsY0FBYyxDQUFDLE1BQU07WUFDbkcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXO1lBQzlFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7WUFuR0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHluQkFBeUM7O2FBRTVDOzs7O1lBZG1CLFFBQVE7WUFBRSxVQUFVO1lBQXNELGlCQUFpQjtZQU10RyxlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQVBsQixhQUFhOzs7MkJBZWpCLEtBQUs7c0JBQ0wsU0FBUyxTQUFDLGNBQWM7dUJBQ3hCLFNBQVMsU0FBQyxlQUFlOzs7O0lBRjFCLDhDQUE2Qjs7SUFDN0IseUNBQStDOztJQUMvQywwQ0FBaUQ7Ozs7O0lBRWpELDBDQUFzQjs7Ozs7SUFDdEIseUNBQXFCOzs7OztJQUVyQiwwQ0FBaUY7O0lBQ2pGLHdDQUE4RTs7Ozs7SUFHMUUsMENBQTBCOzs7OztJQUMxQix1Q0FBeUI7Ozs7O0lBQ3pCLG9DQUE2Qjs7Ozs7SUFDN0IsMkNBQWtDOzs7OztJQUNsQyxnREFBeUM7Ozs7O0lBQ3pDLGlEQUEyQzs7Ozs7SUFDM0MsdUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlciwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1lZGlhT2JzZXJ2ZXIsIE1lZGlhQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IGFkZFJlc2l6ZUxpc3RlbmVyIH0gZnJvbSAnLi4vbWVkaWEvcmVzaXplLWxheW91dC5mdW5jdGlvbic7XHJcbmltcG9ydCB7IFBpcE1lZGlhU2VydmljZSB9IGZyb20gJy4uL21lZGlhL3NoYXJlZC9tZWRpYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGlwU2lkZW5hdlNlcnZpY2UgfSBmcm9tICcuLi9zaWRlbmF2L3NoYXJlZC9zaWRlbmF2LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQaXBSaWdodG5hdlNlcnZpY2UgfSBmcm9tICcuLi9yaWdodG5hdi9zaGFyZWQvcmlnaHRuYXYuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGlwLW1haW4tbGF5b3V0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnbWFpbi1sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGlwTWFpbkxheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXBDb250YWluZXI7XHJcbiAgICBAVmlld0NoaWxkKCdmaXhlZFNpZGVuYXYnKSBzaWRlbmF2OiBNYXRTaWRlbmF2O1xyXG4gICAgQFZpZXdDaGlsZCgnZml4ZWRSaWdodG5hdicpIHJpZ2h0bmF2OiBNYXRTaWRlbmF2O1xyXG5cclxuICAgIHByaXZhdGUgbGlzdGVuZXI6IGFueTtcclxuICAgIHByaXZhdGUgZWxlbWVudDogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX29wZW5lZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgcHVibGljIHNtYWxsJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwcml2YXRlIG1haW5NZWRpYTogUGlwTWVkaWFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgc2lkZW5hdlNlcnZpY2U6IFBpcFNpZGVuYXZTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmlnaHRuYXZTZXJ2aWNlOiBQaXBSaWdodG5hdlNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBtZWRpYTogTWVkaWFPYnNlcnZlclxyXG4gICAgKSB7XHJcbiAgICAgICAgcmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKGVsUmVmLm5hdGl2ZUVsZW1lbnQsICdwaXAtbWFpbi1sYXlvdXQnLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVyID0gKCkgPT4geyB0aGlzLm9uUmVzaXplKCk7IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBvcGVuZWQkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcGVuZWQkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWN0aXZlJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaWRlbmF2U2VydmljZS5hY3RpdmUkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5waXBDb250YWluZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdFN5bSA9IHRoaXMucGlwQ29udGFpbmVyLnN1YnN0cigwLCAxKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IGZpcnN0U3ltID09PSAnIydcclxuICAgICAgICAgICAgICAgID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5waXBDb250YWluZXIuc3Vic3RyaW5nKDEsIHRoaXMucGlwQ29udGFpbmVyLmxlbmd0aCkpXHJcbiAgICAgICAgICAgICAgICA6IGZpcnN0U3ltID09PSAnLidcclxuICAgICAgICAgICAgICAgICAgICA/IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5waXBDb250YWluZXIuc3Vic3RyaW5nKDEsIHRoaXMucGlwQ29udGFpbmVyLmxlbmd0aCkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0aGlzLnBpcENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IGZpcnN0U3ltID09PSAnIycgPyBlbGVtZW50IDogZWxlbWVudC5sZW5ndGggPiAwID8gZWxlbWVudFswXSA6IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZGRSZXNpemVMaXN0ZW5lcih0aGlzLmVsZW1lbnQsIHRoaXMubGlzdGVuZXIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1haW5NZWRpYS51cGRhdGVNYWluTGF5b3V0QnJlYWtwb2ludHModGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJpZ2h0bmF2U2VydmljZS5vcGVuZWQkLnN1YnNjcmliZSgob3BlbmVkOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0bmF2U2VydmljZS5fZml4ZWRSaWdodG5hdikgeyB0aGlzLm9uUmVzaXplKCk7IH1cclxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubWVkaWEubWVkaWEkLnN1YnNjcmliZSgoY2hhbmdlOiBNZWRpYUNoYW5nZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yaWdodG5hdlNlcnZpY2Uub25seUZsb2F0aW5nID09PSB0cnVlKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2lkZW5hdlNlcnZpY2UuZmxvYXRpbmdTaWRlbmF2QWxpYXNlcy5pbmNsdWRlcyhjaGFuZ2UubXFBbGlhcykpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0bmF2U2VydmljZS5maXhlZFJpZ2h0bmF2XHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5yaWdodG5hdlNlcnZpY2UuZml4ZWRSaWdodG5hdi5vcGVuZWRcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnJpZ2h0bmF2U2VydmljZS5mbG9hdGluZ1JpZ2h0bmF2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodG5hdlNlcnZpY2UuY2xvc2VGaXhlZFJpZ2h0bmF2KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodG5hdlNlcnZpY2UuZmxvYXRpbmdSaWdodG5hdi5vcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yaWdodG5hdlNlcnZpY2UuZmxvYXRpbmdSaWdodG5hdiAmJiB0aGlzLnJpZ2h0bmF2U2VydmljZS5mbG9hdGluZ1JpZ2h0bmF2Lm9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0bmF2U2VydmljZS5maXhlZFJpZ2h0bmF2KSB7IHRoaXMucmlnaHRuYXZTZXJ2aWNlLmZpeGVkUmlnaHRuYXYub3BlbigpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodG5hdlNlcnZpY2UuZmxvYXRpbmdSaWdodG5hdi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2lkZW5hdlNlcnZpY2Uuc21hbGwkLnN1YnNjcmliZSgoc21hbGwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zbWFsbCQubmV4dChzbWFsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZWxlbWVudCwgdGhpcy5saXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2lkZW5hdlNlcnZpY2UuZml4ZWRTaWRlbmF2ID0gdGhpcy5zaWRlbmF2O1xyXG4gICAgICAgIHRoaXMucmlnaHRuYXZTZXJ2aWNlLmZpeGVkUmlnaHRuYXYgPSB0aGlzLnJpZ2h0bmF2O1xyXG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUmVzaXplKCkge1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0bmF2V2lkdGggPSB0aGlzLnJpZ2h0bmF2U2VydmljZS5fZml4ZWRSaWdodG5hdiAmJiB0aGlzLnJpZ2h0bmF2U2VydmljZS5fZml4ZWRSaWdodG5hdi5vcGVuZWRcclxuICAgICAgICAgICAgPyB0aGlzLnJpZ2h0bmF2U2VydmljZS5fZml4ZWRSaWdodG5hdlsnX2VsZW1lbnRSZWYnXS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgICAgIDogMDtcclxuICAgICAgICB0aGlzLm1haW5NZWRpYS51cGRhdGVNYWluTGF5b3V0QnJlYWtwb2ludHModGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoIC0gcmlnaHRuYXZXaWR0aCk7XHJcbiAgICB9XHJcbn1cclxuIl19