/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
var PipCardLayoutComponent = /** @class */ (function () {
    function PipCardLayoutComponent(elRef) {
        this.elRef = elRef;
    }
    Object.defineProperty(PipCardLayoutComponent.prototype, "transparent", {
        set: /**
         * @param {?} transparent
         * @return {?}
         */
        function (transparent) {
            this.elRef.nativeElement.classList[transparent === 'true' || transparent === true ? 'add' : 'remove']('pip-transparent-card');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PipCardLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    PipCardLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-card-layout',
                    template: '<div class="card-container"><ng-content></ng-content></div>',
                    styles: [":host{box-sizing:border-box;flex:1 1 100%;display:flex;flex-direction:row;justify-content:center;max-width:100%;overflow-y:auto;place-content:center;align-items:center}:host .card-container{flex:1 1 100%;max-height:100%;position:relative}:host /deep/ .mat-card{min-width:300px;width:300px;left:0;right:0;margin:24px auto}:host /deep/ .mat-card .mat-input-container{width:100%}:host.pip-transparent-card /deep/ .mat-card{background-color:transparent;box-shadow:none}::ng-deep .pip-main-sm pip-card-layout .card-container,::ng-deep .pip-main-xs pip-card-layout .card-container{height:100%}::ng-deep .pip-main-sm pip-card-layout .mat-card,::ng-deep .pip-main-xs pip-card-layout .mat-card{width:100%;min-width:100%;box-sizing:border-box;margin:0;box-shadow:none;min-height:100%}"]
                }] }
    ];
    /** @nocollapse */
    PipCardLayoutComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    PipCardLayoutComponent.propDecorators = {
        transparent: [{ type: Input }]
    };
    return PipCardLayoutComponent;
}());
export { PipCardLayoutComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PipCardLayoutComponent.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlwLXdlYnVpMi1sYXlvdXRzLyIsInNvdXJjZXMiOlsibGliL2NhcmQtbGF5b3V0L2NhcmQtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFO0lBV0ksZ0NBQ1ksS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUN6QixDQUFDO0lBTkwsc0JBQWEsK0NBQVc7Ozs7O1FBQXhCLFVBQXlCLFdBQTZCO1lBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLFdBQVcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNsSSxDQUFDOzs7T0FBQTs7OztJQU1ELHlDQUFROzs7SUFBUixjQUFhLENBQUM7O2dCQWZqQixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLDZEQUE2RDs7aUJBRTFFOzs7O2dCQU4yQixVQUFVOzs7OEJBU2pDLEtBQUs7O0lBU1YsNkJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVZZLHNCQUFzQjs7Ozs7O0lBTTNCLHVDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BpcC1jYXJkLWxheW91dCcsXHJcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2FyZC1sYXlvdXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBpcENhcmRMYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgc2V0IHRyYW5zcGFyZW50KHRyYW5zcGFyZW50OiBib29sZWFuIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdFt0cmFuc3BhcmVudCA9PT0gJ3RydWUnIHx8IHRyYW5zcGFyZW50ID09PSB0cnVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ3BpcC10cmFuc3BhcmVudC1jYXJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZlxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG59XHJcbiJdfQ==