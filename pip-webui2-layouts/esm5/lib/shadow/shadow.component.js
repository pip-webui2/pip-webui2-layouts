/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { ShadowAttachmentSide } from './shared/ShadowAttachmentSide.model';
var PipShadowComponent = /** @class */ (function () {
    function PipShadowComponent(el) {
        this.el = el;
        this._attachmentSide = null;
        this._acttacnmentSideClasses = {
            top: 'pip-top-shadow',
            left: 'pip-left-shadow',
            right: 'pip-right-shadow',
            bottom: 'pip-bottom-shadow'
        };
    }
    Object.defineProperty(PipShadowComponent.prototype, "visible", {
        set: /**
         * @param {?} isVisible
         * @return {?}
         */
        function (isVisible) {
            switch (this._attachmentSide) {
                case ShadowAttachmentSide.top: {
                    this.el.nativeElement.style.cssText = isVisible ? 'top: -2px' : 'top: -30px';
                    break;
                }
                case ShadowAttachmentSide.left: {
                    this.el.nativeElement.style.cssText = isVisible ? 'left: -2px' : 'left: -30px';
                    break;
                }
                case ShadowAttachmentSide.right: {
                    this.el.nativeElement.style.cssText = isVisible ? 'right: -2px' : 'right: -30px';
                    break;
                }
                case ShadowAttachmentSide.bottom: {
                    this.el.nativeElement.style.cssText = isVisible ? 'bottom: -2px' : 'bottom: -30px';
                    break;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipShadowComponent.prototype, "attachmentSide", {
        set: /**
         * @param {?} side
         * @return {?}
         */
        function (side) {
            /** @type {?} */
            var index = ShadowAttachmentSide.all.indexOf(side);
            this._attachmentSide = index > -1 ? side : ShadowAttachmentSide.top;
            this.el.nativeElement.classList.add([this._acttacnmentSideClasses[this._attachmentSide]]);
        },
        enumerable: true,
        configurable: true
    });
    PipShadowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-shadow',
                    template: '',
                    styles: [":host{position:absolute;z-index:10}:host.pip-top-shadow{height:2px;width:100%;top:-2px;box-shadow:0 3px 5px 0 rgba(0,0,0,.26);transition:top .35s}:host.pip-bottom-shadow{height:2px;width:100%;bottom:-2px;box-shadow:0 3px 5px 0 rgba(0,0,0,.26);transition:bottom .35s}:host.pip-left-shadow{width:2px;height:100%;left:-2px;box-shadow:1px 3px 5px 0 rgba(0,0,0,.26);transition:left .35s}:host.pip-right-shadow{width:2px;height:100%;right:-2px;box-shadow:-1px 3px 5px 0 rgba(0,0,0,.26);transition:right .35s}"]
                }] }
    ];
    /** @nocollapse */
    PipShadowComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    PipShadowComponent.propDecorators = {
        visible: [{ type: Input }],
        attachmentSide: [{ type: Input }]
    };
    return PipShadowComponent;
}());
export { PipShadowComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PipShadowComponent.prototype._attachmentSide;
    /**
     * @type {?}
     * @private
     */
    PipShadowComponent.prototype._acttacnmentSideClasses;
    /**
     * @type {?}
     * @private
     */
    PipShadowComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpcC13ZWJ1aTItbGF5b3V0cy8iLCJzb3VyY2VzIjpbImxpYi9zaGFkb3cvc2hhZG93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTNFO0lBNENJLDRCQUNZLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBVGxCLG9CQUFlLEdBQVcsSUFBSSxDQUFDO1FBQy9CLDRCQUF1QixHQUFRO1lBQ25DLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsSUFBSSxFQUFFLGlCQUFpQjtZQUN2QixLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLE1BQU0sRUFBRSxtQkFBbUI7U0FDOUIsQ0FBQztJQUlFLENBQUM7SUF4Q0wsc0JBQWEsdUNBQU87Ozs7O1FBQXBCLFVBQXFCLFNBQWtCO1lBQ25DLFFBQVEsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDMUIsS0FBSyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUM3RSxNQUFNO2lCQUNUO2dCQUVELEtBQUssb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztvQkFDL0UsTUFBTTtpQkFDVDtnQkFFRCxLQUFLLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7b0JBQ2pGLE1BQU07aUJBQ1Q7Z0JBRUQsS0FBSyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO29CQUNuRixNQUFNO2lCQUNUO2FBQ0o7UUFDTCxDQUFDOzs7T0FBQTtJQUVELHNCQUFhLDhDQUFjOzs7OztRQUEzQixVQUE0QixJQUFZOztnQkFDOUIsS0FBSyxHQUFHLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztZQUNwRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUYsQ0FBQzs7O09BQUE7O2dCQWxDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxFQUFFOztpQkFFZjs7OztnQkFSbUIsVUFBVTs7OzBCQVV6QixLQUFLO2lDQXdCTCxLQUFLOztJQWtCVix5QkFBQztDQUFBLEFBaERELElBZ0RDO1NBM0NZLGtCQUFrQjs7Ozs7O0lBK0IzQiw2Q0FBdUM7Ozs7O0lBQ3ZDLHFEQUtFOzs7OztJQUdFLGdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFNoYWRvd0F0dGFjaG1lbnRTaWRlIH0gZnJvbSAnLi9zaGFyZWQvU2hhZG93QXR0YWNobWVudFNpZGUubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BpcC1zaGFkb3cnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vc2hhZG93LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBpcFNoYWRvd0NvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBzZXQgdmlzaWJsZShpc1Zpc2libGU6IGJvb2xlYW4pIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2F0dGFjaG1lbnRTaWRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2hhZG93QXR0YWNobWVudFNpZGUudG9wOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGlzVmlzaWJsZSA/ICd0b3A6IC0ycHgnIDogJ3RvcDogLTMwcHgnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgU2hhZG93QXR0YWNobWVudFNpZGUubGVmdDoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBpc1Zpc2libGUgPyAnbGVmdDogLTJweCcgOiAnbGVmdDogLTMwcHgnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgU2hhZG93QXR0YWNobWVudFNpZGUucmlnaHQ6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gaXNWaXNpYmxlID8gJ3JpZ2h0OiAtMnB4JyA6ICdyaWdodDogLTMwcHgnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgU2hhZG93QXR0YWNobWVudFNpZGUuYm90dG9tOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGlzVmlzaWJsZSA/ICdib3R0b206IC0ycHgnIDogJ2JvdHRvbTogLTMwcHgnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGF0dGFjaG1lbnRTaWRlKHNpZGU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gU2hhZG93QXR0YWNobWVudFNpZGUuYWxsLmluZGV4T2Yoc2lkZSk7XHJcbiAgICAgICAgdGhpcy5fYXR0YWNobWVudFNpZGUgPSBpbmRleCA+IC0xID8gc2lkZSA6IFNoYWRvd0F0dGFjaG1lbnRTaWRlLnRvcDtcclxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChbdGhpcy5fYWN0dGFjbm1lbnRTaWRlQ2xhc3Nlc1t0aGlzLl9hdHRhY2htZW50U2lkZV1dKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hdHRhY2htZW50U2lkZTogc3RyaW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2FjdHRhY25tZW50U2lkZUNsYXNzZXM6IGFueSA9IHtcclxuICAgICAgICB0b3A6ICdwaXAtdG9wLXNoYWRvdycsXHJcbiAgICAgICAgbGVmdDogJ3BpcC1sZWZ0LXNoYWRvdycsXHJcbiAgICAgICAgcmlnaHQ6ICdwaXAtcmlnaHQtc2hhZG93JyxcclxuICAgICAgICBib3R0b206ICdwaXAtYm90dG9tLXNoYWRvdydcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxyXG4gICAgKSB7IH1cclxuXHJcbn1cclxuIl19