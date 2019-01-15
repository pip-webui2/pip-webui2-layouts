/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
export class PipCardLayoutComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
    }
    /**
     * @param {?} transparent
     * @return {?}
     */
    set transparent(transparent) {
        this.elRef.nativeElement.classList[transparent === 'true' || transparent === true ? 'add' : 'remove']('pip-transparent-card');
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
PipCardLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-card-layout',
                template: '<div class="card-container"><ng-content></ng-content></div>',
                styles: [":host{box-sizing:border-box;flex:1 1 100%;display:flex;flex-direction:row;justify-content:center;max-width:100%;overflow-y:auto;place-content:center;align-items:center}:host .card-container{flex:1 1 100%;max-height:100%;position:relative}:host /deep/ .mat-card{min-width:300px;width:300px;left:0;right:0;margin:24px auto}:host /deep/ .mat-card .mat-input-container{width:100%}:host.pip-transparent-card /deep/ .mat-card{background-color:transparent;box-shadow:none}::ng-deep .pip-main-sm pip-card-layout .card-container,::ng-deep .pip-main-xs pip-card-layout .card-container{height:100%}::ng-deep .pip-main-sm pip-card-layout .mat-card,::ng-deep .pip-main-xs pip-card-layout .mat-card{width:100%;min-width:100%;box-sizing:border-box;margin:0;box-shadow:none;min-height:100%}"]
            }] }
];
/** @nocollapse */
PipCardLayoutComponent.ctorParameters = () => [
    { type: ElementRef }
];
PipCardLayoutComponent.propDecorators = {
    transparent: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    PipCardLayoutComponent.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlwLXdlYnVpMi1sYXlvdXRzLyIsInNvdXJjZXMiOlsibGliL2NhcmQtbGF5b3V0L2NhcmQtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXJFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFLL0IsWUFDWSxLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQ3pCLENBQUM7Ozs7O0lBTkwsSUFBYSxXQUFXLENBQUMsV0FBNkI7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFdBQVcsS0FBSyxNQUFNLElBQUksV0FBVyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2xJLENBQUM7Ozs7SUFNRCxRQUFRLEtBQUssQ0FBQzs7O1lBZmpCLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsNkRBQTZEOzthQUUxRTs7OztZQU4yQixVQUFVOzs7MEJBU2pDLEtBQUs7Ozs7Ozs7SUFLRix1Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwaXAtY2FyZC1sYXlvdXQnLFxyXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+JyxcclxuICAgIHN0eWxlVXJsczogWycuL2NhcmQtbGF5b3V0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQaXBDYXJkTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHNldCB0cmFuc3BhcmVudCh0cmFuc3BhcmVudDogYm9vbGVhbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3RbdHJhbnNwYXJlbnQgPT09ICd0cnVlJyB8fCB0cmFuc3BhcmVudCA9PT0gdHJ1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdwaXAtdHJhbnNwYXJlbnQtY2FyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWZcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxufVxyXG4iXX0=