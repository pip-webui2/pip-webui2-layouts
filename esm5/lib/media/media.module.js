/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BREAKPOINT } from '@angular/flex-layout';
import { PipShowHideDirective } from './media.directives';
import { PipMediaService } from './shared/media.service';
import { PIP_BREAKPOINTS } from './shared/breakpoints';
var ɵ0 = tslib_1.__spread(PIP_BREAKPOINTS);
/** @type {?} */
var PipBreakPointsProvider = {
    provide: BREAKPOINT,
    useValue: ɵ0
};
var PipMediaModule = /** @class */ (function () {
    function PipMediaModule() {
    }
    /**
     * @return {?}
     */
    PipMediaModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PipMediaModule,
            providers: [
                PipMediaService,
                PipBreakPointsProvider
            ]
        };
    };
    PipMediaModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [PipShowHideDirective],
                    exports: [PipShowHideDirective]
                },] }
    ];
    return PipMediaModule;
}());
export { PipMediaModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlwLXdlYnVpMi1sYXlvdXRzLyIsInNvdXJjZXMiOlsibGliL21lZGlhL21lZGlhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7MEJBS3ZDLGVBQWU7O0lBRnpCLHNCQUFzQixHQUFHO0lBQzdCLE9BQU8sRUFBRSxVQUFVO0lBQ25CLFFBQVEsSUFBc0I7Q0FDL0I7QUFFRDtJQUFBO0lBY0EsQ0FBQzs7OztJQVRRLHNCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsZUFBZTtnQkFDZixzQkFBc0I7YUFDdkI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBYkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDaEM7O0lBV0QscUJBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQlJFQUtQT0lOVCB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcclxuXHJcbmltcG9ydCB7IFBpcFNob3dIaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi9tZWRpYS5kaXJlY3RpdmVzJztcclxuaW1wb3J0IHsgUGlwTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvbWVkaWEuc2VydmljZSc7XHJcbmltcG9ydCB7IFBJUF9CUkVBS1BPSU5UUyB9IGZyb20gJy4vc2hhcmVkL2JyZWFrcG9pbnRzJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9jb3JlJztcclxuXHJcbmNvbnN0IFBpcEJyZWFrUG9pbnRzUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogQlJFQUtQT0lOVCxcclxuICB1c2VWYWx1ZTogWy4uLlBJUF9CUkVBS1BPSU5UU11cclxufTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbUGlwU2hvd0hpZGVEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtQaXBTaG93SGlkZURpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBpcE1lZGlhTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBQaXBNZWRpYU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgUGlwTWVkaWFTZXJ2aWNlLFxyXG4gICAgICAgIFBpcEJyZWFrUG9pbnRzUHJvdmlkZXJcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19