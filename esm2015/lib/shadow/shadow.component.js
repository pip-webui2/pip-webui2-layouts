/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { ShadowAttachmentSide } from './shared/ShadowAttachmentSide.model';
export class PipShadowComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this._attachmentSide = null;
        this._acttacnmentSideClasses = {
            top: 'pip-top-shadow',
            left: 'pip-left-shadow',
            right: 'pip-right-shadow',
            bottom: 'pip-bottom-shadow'
        };
    }
    /**
     * @param {?} isVisible
     * @return {?}
     */
    set visible(isVisible) {
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
    }
    /**
     * @param {?} side
     * @return {?}
     */
    set attachmentSide(side) {
        /** @type {?} */
        const index = ShadowAttachmentSide.all.indexOf(side);
        this._attachmentSide = index > -1 ? side : ShadowAttachmentSide.top;
        this.el.nativeElement.classList.add([this._acttacnmentSideClasses[this._attachmentSide]]);
    }
}
PipShadowComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-shadow',
                template: '',
                styles: [":host{position:absolute;z-index:10}:host.pip-top-shadow{height:2px;width:100%;top:-2px;box-shadow:0 3px 5px 0 rgba(0,0,0,.26);transition:top .35s}:host.pip-bottom-shadow{height:2px;width:100%;bottom:-2px;box-shadow:0 3px 5px 0 rgba(0,0,0,.26);transition:bottom .35s}:host.pip-left-shadow{width:2px;height:100%;left:-2px;box-shadow:1px 3px 5px 0 rgba(0,0,0,.26);transition:left .35s}:host.pip-right-shadow{width:2px;height:100%;right:-2px;box-shadow:-1px 3px 5px 0 rgba(0,0,0,.26);transition:right .35s}"]
            }] }
];
/** @nocollapse */
PipShadowComponent.ctorParameters = () => [
    { type: ElementRef }
];
PipShadowComponent.propDecorators = {
    visible: [{ type: Input }],
    attachmentSide: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpcC13ZWJ1aTItbGF5b3V0cy8iLCJzb3VyY2VzIjpbImxpYi9zaGFkb3cvc2hhZG93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBTzNFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUF1QzNCLFlBQ1ksRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFUbEIsb0JBQWUsR0FBVyxJQUFJLENBQUM7UUFDL0IsNEJBQXVCLEdBQVE7WUFDbkMsR0FBRyxFQUFFLGdCQUFnQjtZQUNyQixJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsTUFBTSxFQUFFLG1CQUFtQjtTQUM5QixDQUFDO0lBSUUsQ0FBQzs7Ozs7SUF4Q0wsSUFBYSxPQUFPLENBQUMsU0FBa0I7UUFDbkMsUUFBUSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzFCLEtBQUssb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztnQkFDN0UsTUFBTTthQUNUO1lBRUQsS0FBSyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO2dCQUMvRSxNQUFNO2FBQ1Q7WUFFRCxLQUFLLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7Z0JBQ2pGLE1BQU07YUFDVDtZQUVELEtBQUssb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztnQkFDbkYsTUFBTTthQUNUO1NBQ0o7SUFDTCxDQUFDOzs7OztJQUVELElBQWEsY0FBYyxDQUFDLElBQVk7O2NBQzlCLEtBQUssR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7UUFDcEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7OztZQWxDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxFQUFFOzthQUVmOzs7O1lBUm1CLFVBQVU7OztzQkFVekIsS0FBSzs2QkF3QkwsS0FBSzs7Ozs7OztJQU1OLDZDQUF1Qzs7Ozs7SUFDdkMscURBS0U7Ozs7O0lBR0UsZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU2hhZG93QXR0YWNobWVudFNpZGUgfSBmcm9tICcuL3NoYXJlZC9TaGFkb3dBdHRhY2htZW50U2lkZS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGlwLXNoYWRvdycsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zaGFkb3cuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGlwU2hhZG93Q29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHNldCB2aXNpYmxlKGlzVmlzaWJsZTogYm9vbGVhbikge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fYXR0YWNobWVudFNpZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBTaGFkb3dBdHRhY2htZW50U2lkZS50b3A6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gaXNWaXNpYmxlID8gJ3RvcDogLTJweCcgOiAndG9wOiAtMzBweCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBTaGFkb3dBdHRhY2htZW50U2lkZS5sZWZ0OiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGlzVmlzaWJsZSA/ICdsZWZ0OiAtMnB4JyA6ICdsZWZ0OiAtMzBweCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBTaGFkb3dBdHRhY2htZW50U2lkZS5yaWdodDoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBpc1Zpc2libGUgPyAncmlnaHQ6IC0ycHgnIDogJ3JpZ2h0OiAtMzBweCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBTaGFkb3dBdHRhY2htZW50U2lkZS5ib3R0b206IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gaXNWaXNpYmxlID8gJ2JvdHRvbTogLTJweCcgOiAnYm90dG9tOiAtMzBweCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgYXR0YWNobWVudFNpZGUoc2lkZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBTaGFkb3dBdHRhY2htZW50U2lkZS5hbGwuaW5kZXhPZihzaWRlKTtcclxuICAgICAgICB0aGlzLl9hdHRhY2htZW50U2lkZSA9IGluZGV4ID4gLTEgPyBzaWRlIDogU2hhZG93QXR0YWNobWVudFNpZGUudG9wO1xyXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFt0aGlzLl9hY3R0YWNubWVudFNpZGVDbGFzc2VzW3RoaXMuX2F0dGFjaG1lbnRTaWRlXV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2F0dGFjaG1lbnRTaWRlOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYWN0dGFjbm1lbnRTaWRlQ2xhc3NlczogYW55ID0ge1xyXG4gICAgICAgIHRvcDogJ3BpcC10b3Atc2hhZG93JyxcclxuICAgICAgICBsZWZ0OiAncGlwLWxlZnQtc2hhZG93JyxcclxuICAgICAgICByaWdodDogJ3BpcC1yaWdodC1zaGFkb3cnLFxyXG4gICAgICAgIGJvdHRvbTogJ3BpcC1ib3R0b20tc2hhZG93J1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXHJcbiAgICApIHsgfVxyXG5cclxufVxyXG4iXX0=