/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BREAKPOINT } from '@angular/flex-layout';
import { PipShowHideDirective } from './media.directives';
import { PipMediaService } from './shared/media.service';
import { PIP_BREAKPOINTS } from './shared/breakpoints';
const ɵ0 = [...PIP_BREAKPOINTS];
/** @type {?} */
const PipBreakPointsProvider = {
    provide: BREAKPOINT,
    useValue: ɵ0
};
export class PipMediaModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: PipMediaModule,
            providers: [
                PipMediaService,
                PipBreakPointsProvider
            ]
        };
    }
}
PipMediaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PipShowHideDirective],
                exports: [PipShowHideDirective]
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlwLXdlYnVpMi1sYXlvdXRzLyIsInNvdXJjZXMiOlsibGliL21lZGlhL21lZGlhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztXQUszQyxDQUFDLEdBQUcsZUFBZSxDQUFDOztNQUYxQixzQkFBc0IsR0FBRztJQUM3QixPQUFPLEVBQUUsVUFBVTtJQUNuQixRQUFRLElBQXNCO0NBQy9CO0FBTUQsTUFBTSxPQUFPLGNBQWM7Ozs7SUFDekIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULGVBQWU7Z0JBQ2Ysc0JBQXNCO2FBQ3ZCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCUkVBS1BPSU5UIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xyXG5cclxuaW1wb3J0IHsgUGlwU2hvd0hpZGVEaXJlY3RpdmUgfSBmcm9tICcuL21lZGlhLmRpcmVjdGl2ZXMnO1xyXG5pbXBvcnQgeyBQaXBNZWRpYVNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9tZWRpYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUElQX0JSRUFLUE9JTlRTIH0gZnJvbSAnLi9zaGFyZWQvYnJlYWtwb2ludHMnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2NvcmUnO1xyXG5cclxuY29uc3QgUGlwQnJlYWtQb2ludHNQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBCUkVBS1BPSU5ULFxyXG4gIHVzZVZhbHVlOiBbLi4uUElQX0JSRUFLUE9JTlRTXVxyXG59O1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtQaXBTaG93SGlkZURpcmVjdGl2ZV0sXHJcbiAgZXhwb3J0czogW1BpcFNob3dIaWRlRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGlwTWVkaWFNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFBpcE1lZGlhTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBQaXBNZWRpYVNlcnZpY2UsXHJcbiAgICAgICAgUGlwQnJlYWtQb2ludHNQcm92aWRlclxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=