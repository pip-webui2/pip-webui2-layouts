/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Renderer2, ElementRef, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject, Subscription, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
import { addResizeListener } from '../media/resize-layout.function';
import { PipMediaService } from '../media/shared/media.service';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';
var PipMainLayoutAltComponent = /** @class */ (function () {
    function PipMainLayoutAltComponent(renderer2, elRef, cd, mainMedia, sidenavService, rightnavService, media) {
        var _this = this;
        this.renderer2 = renderer2;
        this.elRef = elRef;
        this.cd = cd;
        this.mainMedia = mainMedia;
        this.sidenavService = sidenavService;
        this.rightnavService = rightnavService;
        this.media = media;
        this.subs = new Subscription();
        this.uFloating$ = new BehaviorSubject(false);
        this.small$ = new BehaviorSubject(false);
        this.renderer2.addClass(this.elRef.nativeElement, 'pip-main-layout-alt');
        this.listener = function () { _this.onResize(); };
        this.sidenavService.fixedSidenav = null;
        this.sidenavService.isUniversal = true;
        this.sidenavService.opened = false;
        this.sidenavService.mode = 'over';
        this.activeSidenav$ = combineLatest(this.sidenavService.opened$, this.sidenavService.active$)
            .pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 2), opened = _b[0], active = _b[1];
            return opened && active;
        }));
    }
    /**
     * @return {?}
     */
    PipMainLayoutAltComponent.prototype.ngOnInit = /**
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
    };
    /**
     * @return {?}
     */
    PipMainLayoutAltComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        removeEventListener(this.element, this.listener);
        this.subs.unsubscribe();
    };
    /**
     * @return {?}
     */
    PipMainLayoutAltComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.uFloating$.next(this.sidenavService.isUniversalFloating());
        this.subs.add(this.mainMedia.asObservableMain()
            .subscribe(function (change) {
            /** @type {?} */
            var floating = _this.sidenavService.isUniversalFloating();
            if (_this.uFloating$.getValue() !== floating) {
                setTimeout(function () { return _this.uFloating$.next(floating); }, 0);
            }
        }));
        this.onResize();
        this.sidenavService.universalSidenav = this.sidenav;
        this.rightnavService.fixedRightnav = this.rightnav;
    };
    /**
     * @return {?}
     */
    PipMainLayoutAltComponent.prototype.backdropClick = /**
     * @return {?}
     */
    function () {
        this.sidenavService.closeNav();
    };
    /**
     * @private
     * @return {?}
     */
    PipMainLayoutAltComponent.prototype.onResize = /**
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
    PipMainLayoutAltComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-main-layout-alt',
                    template: "<mat-sidenav-container class=\"pip-sidenav-container pip-sidenav-fixed-container\"\r\n                       [style.zIndex]=\"(uFloating$.asObservable() | async) ? 0 : 'inherit'\" (backdropClick)=\"backdropClick()\">\r\n    <mat-sidenav #universalSidenav class=\"pip-sidenav\" [opened]=\"activeSidenav$ | async\" mode=\"sidenavService.mode$ | async\"\r\n                 [fixedInViewport]=\"uFloating$.asObservable() | async\" fixedTopGap=\"0\" position=\"start\">\r\n        <ng-content select=\"pip-sidenav\"></ng-content>\r\n    </mat-sidenav>\r\n    <mat-sidenav #fixedRightnav class=\"pip-rightnav\" opened=\"false\" [mode]=\"rightnavService.fixedRightnavMode$ | async\" position=\"end\">\r\n        <ng-content select=\"pip-rightnav-fixed\"></ng-content>\r\n    </mat-sidenav>\r\n    <ng-content select=\"pip-main-content\"></ng-content>\r\n</mat-sidenav-container>",
                    styles: [":host{overflow-x:hidden!important}:host /deep/ pip-main-content{flex:1 1 100%;box-sizing:border-box;display:flex;flex-direction:column;max-width:100%}::ng-deep .pip-main-layout-alt{position:absolute;top:64px;bottom:0;left:0;right:0}::ng-deep .pip-sm .pip-main-layout-alt,::ng-deep .pip-xs .pip-main-layout-alt{top:56px}mat-sidenav.pip-sidenav{max-width:250px;width:250px;overflow-x:hidden}:host ::ng-deep mat-sidenav-content{transition:.3s;display:flex;overflow-x:hidden;flex-direction:column}.pip-sidenav-container{display:block;height:100%}/deep/ .pip-main-gt-sm .pip-sidenav-container .mat-drawer-backdrop{background-color:transparent}:host .mat-drawer.mat-drawer-end{width:250px}"]
                }] }
    ];
    /** @nocollapse */
    PipMainLayoutAltComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: PipMediaService },
        { type: PipSidenavService },
        { type: PipRightnavService },
        { type: MediaObserver }
    ]; };
    PipMainLayoutAltComponent.propDecorators = {
        pipContainer: [{ type: Input }],
        sidenav: [{ type: ViewChild, args: ['universalSidenav',] }],
        rightnav: [{ type: ViewChild, args: ['fixedRightnav',] }]
    };
    return PipMainLayoutAltComponent;
}());
export { PipMainLayoutAltComponent };
if (false) {
    /** @type {?} */
    PipMainLayoutAltComponent.prototype.pipContainer;
    /** @type {?} */
    PipMainLayoutAltComponent.prototype.sidenav;
    /** @type {?} */
    PipMainLayoutAltComponent.prototype.rightnav;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutAltComponent.prototype.listener;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutAltComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutAltComponent.prototype.subs;
    /** @type {?} */
    PipMainLayoutAltComponent.prototype.uFloating$;
    /** @type {?} */
    PipMainLayoutAltComponent.prototype.small$;
    /** @type {?} */
    PipMainLayoutAltComponent.prototype.activeSidenav$;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutAltComponent.prototype.renderer2;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutAltComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutAltComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutAltComponent.prototype.mainMedia;
    /** @type {?} */
    PipMainLayoutAltComponent.prototype.sidenavService;
    /** @type {?} */
    PipMainLayoutAltComponent.prototype.rightnavService;
    /**
     * @type {?}
     * @private
     */
    PipMainLayoutAltComponent.prototype.media;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQtYWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpcC13ZWJ1aTItbGF5b3V0cy8iLCJzb3VyY2VzIjpbImxpYi9tYWluLWxheW91dC1hbHQvbWFpbi1sYXlvdXQtYWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsU0FBUyxFQUNULGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBR3pFO0lBa0JJLG1DQUNZLFNBQW9CLEVBQ3BCLEtBQWlCLEVBQ2pCLEVBQXFCLEVBQ3JCLFNBQTBCLEVBQzNCLGNBQWlDLEVBQ2pDLGVBQW1DLEVBQ2xDLEtBQW9CO1FBUGhDLGlCQXFCQztRQXBCVyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDM0IsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLG9CQUFlLEdB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QUEyQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7O2dCQS9HSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsbTNCQUE2Qzs7aUJBRWhEOzs7O2dCQXhCRyxTQUFTO2dCQUNULFVBQVU7Z0JBTVYsaUJBQWlCO2dCQVFaLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixrQkFBa0I7Z0JBUmxCLGFBQWE7OzsrQkFpQmpCLEtBQUs7MEJBQ0wsU0FBUyxTQUFDLGtCQUFrQjsyQkFDNUIsU0FBUyxTQUFDLGVBQWU7O0lBd0c5QixnQ0FBQztDQUFBLEFBaEhELElBZ0hDO1NBM0dZLHlCQUF5Qjs7O0lBQ2xDLGlEQUE2Qjs7SUFDN0IsNENBQW1EOztJQUNuRCw2Q0FBaUQ7Ozs7O0lBRWpELDZDQUFzQjs7Ozs7SUFDdEIsNENBQXFCOzs7OztJQUNyQix5Q0FBZ0Q7O0lBRWhELCtDQUFrRjs7SUFDbEYsMkNBQThFOztJQUM5RSxtREFBMkM7Ozs7O0lBR3ZDLDhDQUE0Qjs7Ozs7SUFDNUIsMENBQXlCOzs7OztJQUN6Qix1Q0FBNkI7Ozs7O0lBQzdCLDhDQUFrQzs7SUFDbEMsbURBQXdDOztJQUN4QyxvREFBMEM7Ozs7O0lBQzFDLDBDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBSZW5kZXJlcjIsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkluaXQsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVkaWFPYnNlcnZlciwgTWVkaWFDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uLCBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IGFkZFJlc2l6ZUxpc3RlbmVyIH0gZnJvbSAnLi4vbWVkaWEvcmVzaXplLWxheW91dC5mdW5jdGlvbic7XHJcbmltcG9ydCB7IFBpcE1lZGlhU2VydmljZSB9IGZyb20gJy4uL21lZGlhL3NoYXJlZC9tZWRpYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGlwU2lkZW5hdlNlcnZpY2UgfSBmcm9tICcuLi9zaWRlbmF2L3NoYXJlZC9zaWRlbmF2LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQaXBSaWdodG5hdlNlcnZpY2UgfSBmcm9tICcuLi9yaWdodG5hdi9zaGFyZWQvcmlnaHRuYXYuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lZGlhTWFpbkNoYW5nZSB9IGZyb20gJy4uL21lZGlhL3NoYXJlZC9tZWRpYS1tYWluLWNoYW5nZS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGlwLW1haW4tbGF5b3V0LWFsdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ21haW4tbGF5b3V0LWFsdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9tYWluLWxheW91dC1hbHQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGlwTWFpbkxheW91dEFsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXBDb250YWluZXI7XHJcbiAgICBAVmlld0NoaWxkKCd1bml2ZXJzYWxTaWRlbmF2Jykgc2lkZW5hdjogTWF0U2lkZW5hdjtcclxuICAgIEBWaWV3Q2hpbGQoJ2ZpeGVkUmlnaHRuYXYnKSByaWdodG5hdjogTWF0U2lkZW5hdjtcclxuXHJcbiAgICBwcml2YXRlIGxpc3RlbmVyOiBhbnk7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IGFueTtcclxuICAgIHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICAgIHB1YmxpYyB1RmxvYXRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIHB1YmxpYyBzbWFsbCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgcHVibGljIGFjdGl2ZVNpZGVuYXYkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwcml2YXRlIG1haW5NZWRpYTogUGlwTWVkaWFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaWRlbmF2U2VydmljZTogUGlwU2lkZW5hdlNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHJpZ2h0bmF2U2VydmljZTogUGlwUmlnaHRuYXZTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbWVkaWE6IE1lZGlhT2JzZXJ2ZXJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIyLmFkZENsYXNzKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ3BpcC1tYWluLWxheW91dC1hbHQnKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVyID0gKCkgPT4geyB0aGlzLm9uUmVzaXplKCk7IH07XHJcbiAgICAgICAgdGhpcy5zaWRlbmF2U2VydmljZS5maXhlZFNpZGVuYXYgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2lkZW5hdlNlcnZpY2UuaXNVbml2ZXJzYWwgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2lkZW5hdlNlcnZpY2Uub3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaWRlbmF2U2VydmljZS5tb2RlID0gJ292ZXInO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlU2lkZW5hdiQgPSBjb21iaW5lTGF0ZXN0KHRoaXMuc2lkZW5hdlNlcnZpY2Uub3BlbmVkJCwgdGhpcy5zaWRlbmF2U2VydmljZS5hY3RpdmUkKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgoW29wZW5lZCwgYWN0aXZlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcGVuZWQgJiYgYWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGlwQ29udGFpbmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RTeW0gPSB0aGlzLnBpcENvbnRhaW5lci5zdWJzdHIoMCwgMSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50OiBhbnkgPSBmaXJzdFN5bSA9PT0gJyMnXHJcbiAgICAgICAgICAgICAgICA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGlwQ29udGFpbmVyLnN1YnN0cmluZygxLCB0aGlzLnBpcENvbnRhaW5lci5sZW5ndGgpKVxyXG4gICAgICAgICAgICAgICAgOiBmaXJzdFN5bSA9PT0gJy4nXHJcbiAgICAgICAgICAgICAgICAgICAgPyBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMucGlwQ29udGFpbmVyLnN1YnN0cmluZygxLCB0aGlzLnBpcENvbnRhaW5lci5sZW5ndGgpKVxyXG4gICAgICAgICAgICAgICAgICAgIDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGhpcy5waXBDb250YWluZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBmaXJzdFN5bSA9PT0gJyMnID8gZWxlbWVudCA6IGVsZW1lbnQubGVuZ3RoID4gMCA/IGVsZW1lbnRbMF0gOiB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkUmVzaXplTGlzdGVuZXIodGhpcy5lbGVtZW50LCB0aGlzLmxpc3RlbmVyKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tYWluTWVkaWEudXBkYXRlTWFpbkxheW91dEJyZWFrcG9pbnRzKHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yaWdodG5hdlNlcnZpY2Uub3BlbmVkJC5zdWJzY3JpYmUoKG9wZW5lZDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yaWdodG5hdlNlcnZpY2UuX2ZpeGVkUmlnaHRuYXYpIHsgdGhpcy5vblJlc2l6ZSgpOyB9XHJcbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1lZGlhLm1lZGlhJC5zdWJzY3JpYmUoKGNoYW5nZTogTWVkaWFDaGFuZ2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRuYXZTZXJ2aWNlLm9ubHlGbG9hdGluZyA9PT0gdHJ1ZSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNpZGVuYXZTZXJ2aWNlLmZsb2F0aW5nU2lkZW5hdkFsaWFzZXMuaW5jbHVkZXMoY2hhbmdlLm1xQWxpYXMpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yaWdodG5hdlNlcnZpY2UuZml4ZWRSaWdodG5hdlxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMucmlnaHRuYXZTZXJ2aWNlLmZpeGVkUmlnaHRuYXYub3BlbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5yaWdodG5hdlNlcnZpY2UuZmxvYXRpbmdSaWdodG5hdikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRuYXZTZXJ2aWNlLmNsb3NlRml4ZWRSaWdodG5hdigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRuYXZTZXJ2aWNlLmZsb2F0aW5nUmlnaHRuYXYub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRuYXZTZXJ2aWNlLmZsb2F0aW5nUmlnaHRuYXYgJiYgdGhpcy5yaWdodG5hdlNlcnZpY2UuZmxvYXRpbmdSaWdodG5hdi5vcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yaWdodG5hdlNlcnZpY2UuZml4ZWRSaWdodG5hdikgeyB0aGlzLnJpZ2h0bmF2U2VydmljZS5maXhlZFJpZ2h0bmF2Lm9wZW4oKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRuYXZTZXJ2aWNlLmZsb2F0aW5nUmlnaHRuYXYuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZWxlbWVudCwgdGhpcy5saXN0ZW5lcik7XHJcbiAgICAgICAgdGhpcy5zdWJzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMudUZsb2F0aW5nJC5uZXh0KHRoaXMuc2lkZW5hdlNlcnZpY2UuaXNVbml2ZXJzYWxGbG9hdGluZygpKTtcclxuICAgICAgICB0aGlzLnN1YnMuYWRkKHRoaXMubWFpbk1lZGlhLmFzT2JzZXJ2YWJsZU1haW4oKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChjaGFuZ2U6IE1lZGlhTWFpbkNoYW5nZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmxvYXRpbmcgPSB0aGlzLnNpZGVuYXZTZXJ2aWNlLmlzVW5pdmVyc2FsRmxvYXRpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVGbG9hdGluZyQuZ2V0VmFsdWUoKSAhPT0gZmxvYXRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudUZsb2F0aW5nJC5uZXh0KGZsb2F0aW5nKSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XHJcbiAgICAgICAgdGhpcy5zaWRlbmF2U2VydmljZS51bml2ZXJzYWxTaWRlbmF2ID0gdGhpcy5zaWRlbmF2O1xyXG4gICAgICAgIHRoaXMucmlnaHRuYXZTZXJ2aWNlLmZpeGVkUmlnaHRuYXYgPSB0aGlzLnJpZ2h0bmF2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYWNrZHJvcENsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2lkZW5hdlNlcnZpY2UuY2xvc2VOYXYoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUmVzaXplKCkge1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0bmF2V2lkdGggPSB0aGlzLnJpZ2h0bmF2U2VydmljZS5fZml4ZWRSaWdodG5hdiAmJiB0aGlzLnJpZ2h0bmF2U2VydmljZS5fZml4ZWRSaWdodG5hdi5vcGVuZWRcclxuICAgICAgICAgICAgPyB0aGlzLnJpZ2h0bmF2U2VydmljZS5fZml4ZWRSaWdodG5hdlsnX2VsZW1lbnRSZWYnXS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgICAgIDogMDtcclxuICAgICAgICB0aGlzLm1haW5NZWRpYS51cGRhdGVNYWluTGF5b3V0QnJlYWtwb2ludHModGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoIC0gcmlnaHRuYXZXaWR0aCk7XHJcbiAgICB9XHJcbn1cclxuIl19