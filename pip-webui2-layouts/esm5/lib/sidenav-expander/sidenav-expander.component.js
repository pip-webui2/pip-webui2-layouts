/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectorRef, Renderer, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PipMediaService } from '../media/shared/media.service';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { intersection } from '../shared/layouts.utils';
var PipSidenavExpanderComponent = /** @class */ (function () {
    function PipSidenavExpanderComponent(media, sidenav, cd, renderer, elRef) {
        this.media = media;
        this.sidenav = sidenav;
        this.cd = cd;
        this.renderer = renderer;
        this.elRef = elRef;
        this._defaultAliases = ['lg'];
        this._aliases = this._defaultAliases;
        this._icon$ = new BehaviorSubject('chevron_left');
    }
    Object.defineProperty(PipSidenavExpanderComponent.prototype, "aliases", {
        set: /**
         * @param {?} aliases
         * @return {?}
         */
        function (aliases) {
            if (typeof aliases === 'string') {
                this._aliases = [aliases];
            }
            else {
                this._aliases = aliases;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipSidenavExpanderComponent.prototype, "icon$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon$;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PipSidenavExpanderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.media.asObservableMain().subscribe(function (change) {
            /** @type {?} */
            var isIntersection = intersection(change.aliases, _this._aliases).length > 0;
            _this.elRef.nativeElement.classList[isIntersection ? 'add' : 'remove']('show');
        });
        this.sidenav.small$.subscribe(function (small) {
            _this._icon$.next(small ? 'chevron_right' : 'chevron_left');
            _this.cd.detectChanges();
        });
    };
    /**
     * @return {?}
     */
    PipSidenavExpanderComponent.prototype.toggleClick = /**
     * @return {?}
     */
    function () {
        this.sidenav.toggleFixedNav();
    };
    PipSidenavExpanderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-sidenav-expander',
                    template: "<mat-nav-list class=\"sidenav-expander\">\r\n    <mat-list-item (click)=\"toggleClick()\">\r\n        <mat-icon>{{ icon$ | async }}</mat-icon>\r\n    </mat-list-item>\r\n</mat-nav-list>",
                    styles: [":host .sidenav-expander{transition:height .35s;height:0;padding-top:0}:host .sidenav-expander .mat-icon{margin-right:24px;margin-left:4px;transition:opacity .35s;opacity:0}:host /deep/ .mat-list-item-content{height:48px!important}:host.show .sidenav-expander{height:48px}:host.show .sidenav-expander .mat-icon{opacity:.56}"]
                }] }
    ];
    /** @nocollapse */
    PipSidenavExpanderComponent.ctorParameters = function () { return [
        { type: PipMediaService },
        { type: PipSidenavService },
        { type: ChangeDetectorRef },
        { type: Renderer },
        { type: ElementRef }
    ]; };
    PipSidenavExpanderComponent.propDecorators = {
        aliases: [{ type: Input }]
    };
    return PipSidenavExpanderComponent;
}());
export { PipSidenavExpanderComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PipSidenavExpanderComponent.prototype._defaultAliases;
    /**
     * @type {?}
     * @private
     */
    PipSidenavExpanderComponent.prototype._aliases;
    /**
     * @type {?}
     * @private
     */
    PipSidenavExpanderComponent.prototype._icon$;
    /** @type {?} */
    PipSidenavExpanderComponent.prototype.media;
    /** @type {?} */
    PipSidenavExpanderComponent.prototype.sidenav;
    /**
     * @type {?}
     * @private
     */
    PipSidenavExpanderComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    PipSidenavExpanderComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PipSidenavExpanderComponent.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1leHBhbmRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waXAtd2VidWkyLWxheW91dHMvIiwic291cmNlcyI6WyJsaWIvc2lkZW5hdi1leHBhbmRlci9zaWRlbmF2LWV4cGFuZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQ7SUFpQkkscUNBQ1csS0FBc0IsRUFDdEIsT0FBMEIsRUFDekIsRUFBcUIsRUFDckIsUUFBa0IsRUFDbEIsS0FBaUI7UUFKbEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDekIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBaEJyQixvQkFBZSxHQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsYUFBUSxHQUFhLElBQUksQ0FBQyxlQUFlLENBQUM7UUFrQjFDLFdBQU0sR0FBNEIsSUFBSSxlQUFlLENBQVMsY0FBYyxDQUFDLENBQUM7SUFGbEYsQ0FBQztJQWRMLHNCQUFhLGdEQUFPOzs7OztRQUFwQixVQUFxQixPQUEwQjtZQUMzQyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQzs7O09BQUE7SUFZRCxzQkFBVyw4Q0FBSzs7OztRQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTs7OztJQUVELDhDQUFROzs7SUFBUjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQXVCOztnQkFDdEQsY0FBYyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUU3RSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xGLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUNoQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDM0QsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFTSxpREFBVzs7O0lBQWxCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkE5Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLHFNQUE4Qzs7aUJBRWpEOzs7O2dCQVRRLGVBQWU7Z0JBRWYsaUJBQWlCO2dCQUxTLGlCQUFpQjtnQkFBRSxRQUFRO2dCQUFFLFVBQVU7OzswQkFpQnJFLEtBQUs7O0lBc0NWLGtDQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0ExQ1ksMkJBQTJCOzs7Ozs7SUFDcEMsc0RBQTJDOzs7OztJQUMzQywrQ0FBa0Q7Ozs7O0lBa0JsRCw2Q0FBc0Y7O0lBUGxGLDRDQUE2Qjs7SUFDN0IsOENBQWlDOzs7OztJQUNqQyx5Q0FBNkI7Ozs7O0lBQzdCLCtDQUEwQjs7Ozs7SUFDMUIsNENBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgUmVuZGVyZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBQaXBNZWRpYVNlcnZpY2UgfSBmcm9tICcuLi9tZWRpYS9zaGFyZWQvbWVkaWEuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lZGlhTWFpbkNoYW5nZSB9IGZyb20gJy4uL21lZGlhL3NoYXJlZC9tZWRpYS1tYWluLWNoYW5nZS5tb2RlbCc7XHJcbmltcG9ydCB7IFBpcFNpZGVuYXZTZXJ2aWNlIH0gZnJvbSAnLi4vc2lkZW5hdi9zaGFyZWQvc2lkZW5hdi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaW50ZXJzZWN0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL2xheW91dHMudXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BpcC1zaWRlbmF2LWV4cGFuZGVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1leHBhbmRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zaWRlbmF2LWV4cGFuZGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBpcFNpZGVuYXZFeHBhbmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIF9kZWZhdWx0QWxpYXNlczogc3RyaW5nW10gPSBbJ2xnJ107XHJcbiAgICBwcml2YXRlIF9hbGlhc2VzOiBzdHJpbmdbXSA9IHRoaXMuX2RlZmF1bHRBbGlhc2VzO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBhbGlhc2VzKGFsaWFzZXM6IHN0cmluZ1tdIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhbGlhc2VzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aGlzLl9hbGlhc2VzID0gW2FsaWFzZXNdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FsaWFzZXMgPSBhbGlhc2VzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgbWVkaWE6IFBpcE1lZGlhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgc2lkZW5hdjogUGlwU2lkZW5hdlNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZlxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwcml2YXRlIF9pY29uJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJ2NoZXZyb25fbGVmdCcpO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgaWNvbiQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWNvbiQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tZWRpYS5hc09ic2VydmFibGVNYWluKCkuc3Vic2NyaWJlKChjaGFuZ2U6IE1lZGlhTWFpbkNoYW5nZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0ludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbihjaGFuZ2UuYWxpYXNlcywgdGhpcy5fYWxpYXNlcykubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3RbaXNJbnRlcnNlY3Rpb24gPyAnYWRkJyA6ICdyZW1vdmUnXSgnc2hvdycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNpZGVuYXYuc21hbGwkLnN1YnNjcmliZSgoc21hbGwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faWNvbiQubmV4dChzbWFsbCA/ICdjaGV2cm9uX3JpZ2h0JyA6ICdjaGV2cm9uX2xlZnQnKTtcclxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZUNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2lkZW5hdi50b2dnbGVGaXhlZE5hdigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==