/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Renderer, ElementRef, Input, ChangeDetectorRef } from '@angular/core';
var PipMenuLayoutComponent = /** @class */ (function () {
    function PipMenuLayoutComponent(renderer, elRef, cd) {
        this.renderer = renderer;
        this.elRef = elRef;
        this.cd = cd;
        renderer.setElementClass(elRef.nativeElement, 'pip-menu-layout', true);
    }
    Object.defineProperty(PipMenuLayoutComponent.prototype, "single", {
        set: /**
         * @param {?} single
         * @return {?}
         */
        function (single) {
            this.elRef.nativeElement.classList[single ? 'add' : 'remove']('pip-single-content');
            if (this) {
                this.cd.detectChanges();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PipMenuLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    PipMenuLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    PipMenuLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-menu-layout',
                    template: '<ng-content></ng-content>',
                    styles: [":host.pip-menu-layout{z-index:50;position:relative;width:100%;height:100%;display:flex;flex-direction:row;align-items:initial}:host.pip-menu-layout /deep/.pip-menu{position:absolute;transition:.35s;border-right:none;width:320px;opacity:1;overflow-y:auto;overflow-x:hidden;max-height:100%;min-height:100%;max-height:100%}:host.pip-menu-layout /deep/.pip-menu .pip-list-container{overflow-y:auto;position:inherit;left:inherit;right:inherit;top:inherit;bottom:inherit;height:100%;width:100%}:host.pip-menu-layout /deep/.pip-menu-container{margin:0;transition:.35s;position:absolute;left:320px;height:100%;width:calc(100% - 320px);overflow:hidden}:host.pip-menu-layout /deep/.pip-menu-container .pip-scrolled-block{overflow-y:auto;overflow-x:hidden;width:100%;height:100%}:host.pip-menu-layout /deep/.pip-menu-container>div{display:flex;height:100%;transition:.35s}:host.pip-menu-layout /deep/.pip-menu-container>div.ng-enter,:host.pip-menu-layout /deep/.pip-menu-container>div.ng-leave.ng-leave-active{opacity:0}:host.pip-menu-layout /deep/.pip-menu-container>div.ng-enter.ng-enter-active,:host.pip-menu-layout /deep/.pip-menu-container>div.ng-leave{opacity:1}:host.pip-menu-layout.pip-single-content /deep/.pip-menu{opacity:0;z-index:-100}:host.pip-menu-layout.pip-single-content /deep/.pip-menu-container{width:100%!important;left:0!important}::ng-deep .pip-main-lt-md .pip-menu-layout .pip-menu{width:100%;left:0}::ng-deep .pip-main-lt-md .pip-menu-layout .pip-menu-container{left:100%;width:100%;height:100%}::ng-deep .pip-main-lt-md .pip-menu-layout.pip-single-content .pip-menu{left:-100%;opacity:1;z-index:100}::ng-deep .pip-main-lt-md .pip-menu-layout.pip-single-content.pip-document-list .pip-menu{z-index:-100}::ng-deep .pip-main-lt-md .pip-menu-layout.pip-single-content .pip-menu-container{left:0}::ng-deep .pip-main-gt-lg .pip-menu-layout .pip-menu{width:480px}::ng-deep .pip-main-gt-lg .pip-menu-layout .pip-menu-container{left:480px;width:calc(100% - 480px)}::ng-deep .pip-main-gt-lg .pip-menu-layout.pip-single-content .pip-menu-container{left:0}"]
                }] }
    ];
    /** @nocollapse */
    PipMenuLayoutComponent.ctorParameters = function () { return [
        { type: Renderer },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    PipMenuLayoutComponent.propDecorators = {
        single: [{ type: Input }]
    };
    return PipMenuLayoutComponent;
}());
export { PipMenuLayoutComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PipMenuLayoutComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PipMenuLayoutComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    PipMenuLayoutComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlwLXdlYnVpMi1sYXlvdXRzLyIsInNvdXJjZXMiOlsibGliL21lbnUtbGF5b3V0L21lbnUtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0c7SUFhSSxnQ0FDWSxRQUFrQixFQUNsQixLQUFpQixFQUNqQixFQUFxQjtRQUZyQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFFN0IsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFiRCxzQkFBYSwwQ0FBTTs7Ozs7UUFBbkIsVUFBb0IsTUFBZTtZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDcEYsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUMzQjtRQUNMLENBQUM7OztPQUFBOzs7O0lBVU0seUNBQVE7OztJQUFmO0lBRUEsQ0FBQzs7OztJQUVNLDRDQUFXOzs7SUFBbEI7SUFFQSxDQUFDOztnQkEzQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBRTNCLFFBQVEsRUFBRSwyQkFBMkI7O2lCQUN4Qzs7OztnQkFObUIsUUFBUTtnQkFBRSxVQUFVO2dCQUE0QixpQkFBaUI7Ozt5QkFRaEYsS0FBSzs7SUFzQlYsNkJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQXZCWSxzQkFBc0I7Ozs7OztJQVMzQiwwQ0FBMEI7Ozs7O0lBQzFCLHVDQUF5Qjs7Ozs7SUFDekIsb0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlciwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BpcC1tZW51LWxheW91dCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9tZW51LWxheW91dC5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGlwTWVudUxheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIHNldCBzaW5nbGUoc2luZ2xlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdFtzaW5nbGUgPyAnYWRkJyA6ICdyZW1vdmUnXSgncGlwLXNpbmdsZS1jb250ZW50Jyk7XHJcbiAgICAgICAgaWYgKHRoaXMpIHtcclxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICAgICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICAgICkge1xyXG4gICAgICAgIHJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhlbFJlZi5uYXRpdmVFbGVtZW50LCAncGlwLW1lbnUtbGF5b3V0JywgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==