/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectorRef, Renderer, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PipMediaService } from '../media/shared/media.service';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { intersection } from '../shared/layouts.utils';
export class PipSidenavExpanderComponent {
    /**
     * @param {?} media
     * @param {?} sidenav
     * @param {?} cd
     * @param {?} renderer
     * @param {?} elRef
     */
    constructor(media, sidenav, cd, renderer, elRef) {
        this.media = media;
        this.sidenav = sidenav;
        this.cd = cd;
        this.renderer = renderer;
        this.elRef = elRef;
        this._defaultAliases = ['lg'];
        this._aliases = this._defaultAliases;
        this._icon$ = new BehaviorSubject('chevron_left');
    }
    /**
     * @param {?} aliases
     * @return {?}
     */
    set aliases(aliases) {
        if (typeof aliases === 'string') {
            this._aliases = [aliases];
        }
        else {
            this._aliases = aliases;
        }
    }
    /**
     * @return {?}
     */
    get icon$() {
        return this._icon$;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.media.asObservableMain().subscribe((change) => {
            /** @type {?} */
            const isIntersection = intersection(change.aliases, this._aliases).length > 0;
            this.elRef.nativeElement.classList[isIntersection ? 'add' : 'remove']('show');
        });
        this.sidenav.small$.subscribe((small) => {
            this._icon$.next(small ? 'chevron_right' : 'chevron_left');
            this.cd.detectChanges();
        });
    }
    /**
     * @return {?}
     */
    toggleClick() {
        this.sidenav.toggleFixedNav();
    }
}
PipSidenavExpanderComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-sidenav-expander',
                template: "<mat-nav-list class=\"sidenav-expander\">\r\n    <mat-list-item (click)=\"toggleClick()\">\r\n        <mat-icon>{{ icon$ | async }}</mat-icon>\r\n    </mat-list-item>\r\n</mat-nav-list>",
                styles: [":host .sidenav-expander{transition:height .35s;height:0;padding-top:0}:host .sidenav-expander .mat-icon{margin-right:24px;margin-left:4px;transition:opacity .35s;opacity:0}:host /deep/ .mat-list-item-content{height:48px!important}:host.show .sidenav-expander{height:48px}:host.show .sidenav-expander .mat-icon{opacity:.56}"]
            }] }
];
/** @nocollapse */
PipSidenavExpanderComponent.ctorParameters = () => [
    { type: PipMediaService },
    { type: PipSidenavService },
    { type: ChangeDetectorRef },
    { type: Renderer },
    { type: ElementRef }
];
PipSidenavExpanderComponent.propDecorators = {
    aliases: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1leHBhbmRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waXAtd2VidWkyLWxheW91dHMvIiwic291cmNlcyI6WyJsaWIvc2lkZW5hdi1leHBhbmRlci9zaWRlbmF2LWV4cGFuZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFPdkQsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7Ozs7SUFZcEMsWUFDVyxLQUFzQixFQUN0QixPQUEwQixFQUN6QixFQUFxQixFQUNyQixRQUFrQixFQUNsQixLQUFpQjtRQUpsQixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUN6QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFoQnJCLG9CQUFlLEdBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxhQUFRLEdBQWEsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQWtCMUMsV0FBTSxHQUE0QixJQUFJLGVBQWUsQ0FBUyxjQUFjLENBQUMsQ0FBQztJQUZsRixDQUFDOzs7OztJQWRMLElBQWEsT0FBTyxDQUFDLE9BQTBCO1FBQzNDLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7U0FDM0I7SUFDTCxDQUFDOzs7O0lBWUQsSUFBVyxLQUFLO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQXVCLEVBQUUsRUFBRTs7a0JBQzFELGNBQWMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7WUFFN0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OztZQTlDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMscU1BQThDOzthQUVqRDs7OztZQVRRLGVBQWU7WUFFZixpQkFBaUI7WUFMUyxpQkFBaUI7WUFBRSxRQUFRO1lBQUUsVUFBVTs7O3NCQWlCckUsS0FBSzs7Ozs7OztJQUhOLHNEQUEyQzs7Ozs7SUFDM0MsK0NBQWtEOzs7OztJQWtCbEQsNkNBQXNGOztJQVBsRiw0Q0FBNkI7O0lBQzdCLDhDQUFpQzs7Ozs7SUFDakMseUNBQTZCOzs7OztJQUM3QiwrQ0FBMEI7Ozs7O0lBQzFCLDRDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFJlbmRlcmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUGlwTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi4vbWVkaWEvc2hhcmVkL21lZGlhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNZWRpYU1haW5DaGFuZ2UgfSBmcm9tICcuLi9tZWRpYS9zaGFyZWQvbWVkaWEtbWFpbi1jaGFuZ2UubW9kZWwnO1xyXG5pbXBvcnQgeyBQaXBTaWRlbmF2U2VydmljZSB9IGZyb20gJy4uL3NpZGVuYXYvc2hhcmVkL3NpZGVuYXYuc2VydmljZSc7XHJcbmltcG9ydCB7IGludGVyc2VjdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9sYXlvdXRzLnV0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwaXAtc2lkZW5hdi1leHBhbmRlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtZXhwYW5kZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vc2lkZW5hdi1leHBhbmRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaXBTaWRlbmF2RXhwYW5kZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdEFsaWFzZXM6IHN0cmluZ1tdID0gWydsZyddO1xyXG4gICAgcHJpdmF0ZSBfYWxpYXNlczogc3RyaW5nW10gPSB0aGlzLl9kZWZhdWx0QWxpYXNlcztcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgYWxpYXNlcyhhbGlhc2VzOiBzdHJpbmdbXSB8IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYWxpYXNlcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWxpYXNlcyA9IFthbGlhc2VzXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9hbGlhc2VzID0gYWxpYXNlcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIG1lZGlhOiBQaXBNZWRpYVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNpZGVuYXY6IFBpcFNpZGVuYXZTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICAgICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWZcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaWNvbiQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCdjaGV2cm9uX2xlZnQnKTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGljb24kKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ljb24kO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubWVkaWEuYXNPYnNlcnZhYmxlTWFpbigpLnN1YnNjcmliZSgoY2hhbmdlOiBNZWRpYU1haW5DaGFuZ2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNJbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb24oY2hhbmdlLmFsaWFzZXMsIHRoaXMuX2FsaWFzZXMpLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0W2lzSW50ZXJzZWN0aW9uID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ3Nob3cnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zaWRlbmF2LnNtYWxsJC5zdWJzY3JpYmUoKHNtYWxsKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ljb24kLm5leHQoc21hbGwgPyAnY2hldnJvbl9yaWdodCcgOiAnY2hldnJvbl9sZWZ0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVDbGljaygpIHtcclxuICAgICAgICB0aGlzLnNpZGVuYXYudG9nZ2xlRml4ZWROYXYoKTtcclxuICAgIH1cclxufVxyXG4iXX0=