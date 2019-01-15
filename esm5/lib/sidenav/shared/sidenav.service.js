/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PipMediaService } from '../../media/shared/media.service';
import { each } from '../../shared/layouts.utils';
var PipSidenavService = /** @class */ (function () {
    function PipSidenavService(media) {
        this.media = media;
        this._mode$ = new BehaviorSubject('side');
        this._opened$ = new BehaviorSubject(true);
        this._floatingSidenavAliases = ['xs', 'sm'];
        this._universalSidenavAliases = ['lt-sm', 'sm'];
        this._small = false;
        this._small$ = new BehaviorSubject(false);
        this._active$ = new BehaviorSubject(true);
        this._isUniversal$ = new BehaviorSubject(false);
    }
    Object.defineProperty(PipSidenavService.prototype, "floatingSidenavAliases", {
        get: /**
         * @return {?}
         */
        function () {
            return this._floatingSidenavAliases;
        },
        set: /**
         * @param {?} aliases
         * @return {?}
         */
        function (aliases) {
            this._floatingSidenavAliases = aliases;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipSidenavService.prototype, "small", {
        get: /**
         * @return {?}
         */
        function () {
            return this._small;
        },
        set: /**
         * @param {?} sm
         * @return {?}
         */
        function (sm) {
            this._small$.next(sm);
            this._small = sm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipSidenavService.prototype, "small$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._small$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipSidenavService.prototype, "universalSidenav", {
        get: /**
         * @return {?}
         */
        function () {
            return this._universalSidenav;
        },
        set: /**
         * @param {?} sidenav
         * @return {?}
         */
        function (sidenav) {
            this._universalSidenav = sidenav;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipSidenavService.prototype, "universalSidenavAliases", {
        get: /**
         * @return {?}
         */
        function () {
            return this._universalSidenavAliases;
        },
        set: /**
         * @param {?} aliases
         * @return {?}
         */
        function (aliases) {
            this._universalSidenavAliases = aliases;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipSidenavService.prototype, "isUniversal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isUniversal$.getValue();
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isUniversal$.next(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipSidenavService.prototype, "floatingSidenav", {
        get: /**
         * @return {?}
         */
        function () {
            return this._floatingSidenav;
        },
        set: /**
         * @param {?} sidenav
         * @return {?}
         */
        function (sidenav) {
            this._floatingSidenav = sidenav;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipSidenavService.prototype, "fixedSidenav", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fixedSidenav;
        },
        set: /**
         * @param {?} sidenav
         * @return {?}
         */
        function (sidenav) {
            this._fixedSidenav = sidenav;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipSidenavService.prototype, "mode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mode$.getValue();
        },
        set: /**
         * @param {?} s
         * @return {?}
         */
        function (s) {
            this._mode$.next(s);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipSidenavService.prototype, "mode$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mode$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipSidenavService.prototype, "opened", {
        get: /**
         * @return {?}
         */
        function () {
            return this._opened$.getValue();
        },
        set: /**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            this._opened$.next(open);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipSidenavService.prototype, "opened$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._opened$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipSidenavService.prototype, "active$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipSidenavService.prototype, "active", {
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            this._active$.next(active);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PipSidenavService.prototype.isActive = /**
     * @return {?}
     */
    function () {
        if (this._active$.getValue() === true) {
            return true;
        }
        else {
            console.log('Sidenav is not active');
            return false;
        }
    };
    /**
     * @private
     * @return {?}
     */
    PipSidenavService.prototype.toggleSmall = /**
     * @private
     * @return {?}
     */
    function () {
        this._small === true ? this.small = false : this.small = true;
    };
    /**
     * @param {?=} sidenav
     * @return {?}
     */
    PipSidenavService.prototype.toggleNav = /**
     * @param {?=} sidenav
     * @return {?}
     */
    function (sidenav) {
        if (!this.isActive()) {
            return;
        }
        if (sidenav) {
            sidenav.toggle();
        }
        else if (this.isUniversal) {
            this.toggleUniversavNav();
        }
        else {
            this.isFloating() ? this.toggleFloatingNav() : this.toggleFixedNav();
        }
    };
    /**
     * @return {?}
     */
    PipSidenavService.prototype.toggleOpened = /**
     * @return {?}
     */
    function () {
        if (!this.isActive()) {
            return;
        }
        this.opened = !this.opened;
    };
    /**
     * @param {?=} sidenav
     * @return {?}
     */
    PipSidenavService.prototype.openNav = /**
     * @param {?=} sidenav
     * @return {?}
     */
    function (sidenav) {
        if (!this.isActive()) {
            return;
        }
        if (sidenav) {
            sidenav.open();
        }
        else if (this.isUniversal) {
            this.openUniversavNav();
        }
        else {
            this.isFloating() ? this.openFloatingNav() : this.openFixedNav();
        }
        this.opened = true;
    };
    /**
     * @param {?=} sidenav
     * @return {?}
     */
    PipSidenavService.prototype.closeNav = /**
     * @param {?=} sidenav
     * @return {?}
     */
    function (sidenav) {
        if (!this.isActive()) {
            return;
        }
        if (sidenav) {
            sidenav.close();
        }
        else if (this.isUniversal) {
            this.closeUniversavNav();
        }
        else {
            this.isFloating() ? this.closeFloatingNav() : this.closeFixedNav();
        }
        this.opened = false;
    };
    /**
     * @return {?}
     */
    PipSidenavService.prototype.toggleFloatingNav = /**
     * @return {?}
     */
    function () {
        if (!this.isActive()) {
            return;
        }
        if (this._floatingSidenav) {
            this._floatingSidenav.toggle();
            this.opened = !this._floatingSidenav.opened;
        }
        else {
            console.log('Floating sidenav not found');
        }
    };
    /**
     * @return {?}
     */
    PipSidenavService.prototype.openFloatingNav = /**
     * @return {?}
     */
    function () {
        this._floatingSidenav ? this._floatingSidenav.open() : console.log('Floating sidenav not found');
    };
    /**
     * @return {?}
     */
    PipSidenavService.prototype.closeFloatingNav = /**
     * @return {?}
     */
    function () {
        this._floatingSidenav ? this._floatingSidenav.close() : console.log('Floating sidenav not found');
    };
    /**
     * @return {?}
     */
    PipSidenavService.prototype.toggleFixedNav = /**
     * @return {?}
     */
    function () {
        this._fixedSidenav ? this.toggleSmall() : console.log('Fixed sidenav not found');
    };
    /**
     * @return {?}
     */
    PipSidenavService.prototype.openFixedNav = /**
     * @return {?}
     */
    function () {
        this._fixedSidenav ? this.small = false : console.log('Fixed sidenav not found');
    };
    /**
     * @return {?}
     */
    PipSidenavService.prototype.closeFixedNav = /**
     * @return {?}
     */
    function () {
        this._fixedSidenav ? this.small = true : console.log('Fixed sidenav not found');
    };
    /**
     * @return {?}
     */
    PipSidenavService.prototype.toggleUniversavNav = /**
     * @return {?}
     */
    function () {
        this._universalSidenav ? this._universalSidenav.toggle() : console.log('Universal sidenav was not found');
    };
    /**
     * @return {?}
     */
    PipSidenavService.prototype.openUniversavNav = /**
     * @return {?}
     */
    function () {
        this._universalSidenav ? this._universalSidenav.open() : console.log('Universal sidenav was not found');
    };
    /**
     * @return {?}
     */
    PipSidenavService.prototype.closeUniversavNav = /**
     * @return {?}
     */
    function () {
        this._universalSidenav ? this._universalSidenav.close() : console.log('Universal sidenav was not found');
    };
    /**
     * @param {?=} sidenav
     * @return {?}
     */
    PipSidenavService.prototype.changeStateNav = /**
     * @param {?=} sidenav
     * @return {?}
     */
    function (sidenav) {
        if (sidenav === void 0) { sidenav = this._floatingSidenav; }
        if (sidenav) {
        }
        else {
            console.log('Sidenav not found');
        }
    };
    /**
     * @return {?}
     */
    PipSidenavService.prototype.isUniversalFloating = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var is = false;
        try {
            for (var _b = tslib_1.__values(this._universalSidenavAliases), _c = _b.next(); !_c.done; _c = _b.next()) {
                var alias = _c.value;
                if (this.media.isMainActive(alias)) {
                    is = true;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return is;
    };
    /**
     * @return {?}
     */
    PipSidenavService.prototype.isFloating = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var is = false;
        each(this._floatingSidenavAliases, function (alias) {
            if (_this.media.isMainActive(alias)) {
                is = true;
            }
        });
        return is;
    };
    PipSidenavService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PipSidenavService.ctorParameters = function () { return [
        { type: PipMediaService }
    ]; };
    return PipSidenavService;
}());
export { PipSidenavService };
if (false) {
    /** @type {?} */
    PipSidenavService.prototype._floatingSidenav;
    /** @type {?} */
    PipSidenavService.prototype._fixedSidenav;
    /** @type {?} */
    PipSidenavService.prototype._universalSidenav;
    /**
     * @type {?}
     * @private
     */
    PipSidenavService.prototype._mode$;
    /**
     * @type {?}
     * @private
     */
    PipSidenavService.prototype._opened$;
    /**
     * @type {?}
     * @private
     */
    PipSidenavService.prototype._floatingSidenavAliases;
    /**
     * @type {?}
     * @private
     */
    PipSidenavService.prototype._universalSidenavAliases;
    /**
     * @type {?}
     * @private
     */
    PipSidenavService.prototype._small;
    /**
     * @type {?}
     * @private
     */
    PipSidenavService.prototype._small$;
    /**
     * @type {?}
     * @private
     */
    PipSidenavService.prototype._active$;
    /**
     * @type {?}
     * @private
     */
    PipSidenavService.prototype._isUniversal$;
    /**
     * @type {?}
     * @private
     */
    PipSidenavService.prototype.media;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlwLXdlYnVpMi1sYXlvdXRzLyIsInNvdXJjZXMiOlsibGliL3NpZGVuYXYvc2hhcmVkL3NpZGVuYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUduRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWxEO0lBY0ksMkJBQ1ksS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFWMUIsV0FBTSxHQUE0QixJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxhQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELDRCQUF1QixHQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELDZCQUF3QixHQUFhLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JELFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9ELGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0Qsa0JBQWEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFJekUsQ0FBQztJQUVMLHNCQUFXLHFEQUFzQjs7OztRQWlCakM7WUFDSSxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztRQUN4QyxDQUFDOzs7OztRQW5CRCxVQUFrQyxPQUFpQjtZQUMvQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsT0FBTyxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBRUQs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Q0FBQztJQUNkLENBQUM7O2dCQTdPSixVQUFVOzs7O2dCQUhGLGVBQWU7O0lBa1B4Qix3QkFBQztDQUFBLEFBL09ELElBK09DO1NBOU9ZLGlCQUFpQjs7O0lBQzFCLDZDQUFvQzs7SUFDcEMsMENBQWlDOztJQUNqQyw4Q0FBcUM7Ozs7O0lBQ3JDLG1DQUFzRTs7Ozs7SUFDdEUscUNBQXVFOzs7OztJQUN2RSxvREFBeUQ7Ozs7O0lBQ3pELHFEQUE2RDs7Ozs7SUFDN0QsbUNBQXVCOzs7OztJQUN2QixvQ0FBdUU7Ozs7O0lBQ3ZFLHFDQUF1RTs7Ozs7SUFDdkUsMENBQTZFOzs7OztJQUd6RSxrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNYXRTaWRlbmF2IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuaW1wb3J0IHsgUGlwTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbWVkaWEvc2hhcmVkL21lZGlhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2xheW91dHMudXRpbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGlwU2lkZW5hdlNlcnZpY2Uge1xyXG4gICAgcHVibGljIF9mbG9hdGluZ1NpZGVuYXY6IE1hdFNpZGVuYXY7XHJcbiAgICBwdWJsaWMgX2ZpeGVkU2lkZW5hdjogTWF0U2lkZW5hdjtcclxuICAgIHB1YmxpYyBfdW5pdmVyc2FsU2lkZW5hdjogTWF0U2lkZW5hdjtcclxuICAgIHByaXZhdGUgX21vZGUkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJ3NpZGUnKTtcclxuICAgIHByaXZhdGUgX29wZW5lZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XHJcbiAgICBwcml2YXRlIF9mbG9hdGluZ1NpZGVuYXZBbGlhc2VzOiBzdHJpbmdbXSA9IFsneHMnLCAnc20nXTtcclxuICAgIHByaXZhdGUgX3VuaXZlcnNhbFNpZGVuYXZBbGlhc2VzOiBzdHJpbmdbXSA9IFsnbHQtc20nLCAnc20nXTtcclxuICAgIHByaXZhdGUgX3NtYWxsID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9zbWFsbCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG4gICAgcHJpdmF0ZSBfYWN0aXZlJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcclxuICAgIHByaXZhdGUgX2lzVW5pdmVyc2FsJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbWVkaWE6IFBpcE1lZGlhU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGZsb2F0aW5nU2lkZW5hdkFsaWFzZXMoYWxpYXNlczogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLl9mbG9hdGluZ1NpZGVuYXZBbGlhc2VzID0gYWxpYXNlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNtYWxsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zbWFsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHNtYWxsKHNtOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc21hbGwkLm5leHQoc20pO1xyXG4gICAgICAgIHRoaXMuX3NtYWxsID0gc207XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzbWFsbCQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NtYWxsJDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGZsb2F0aW5nU2lkZW5hdkFsaWFzZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zsb2F0aW5nU2lkZW5hdkFsaWFzZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB1bml2ZXJzYWxTaWRlbmF2KCk6IE1hdFNpZGVuYXYge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91bml2ZXJzYWxTaWRlbmF2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdW5pdmVyc2FsU2lkZW5hdihzaWRlbmF2OiBNYXRTaWRlbmF2KSB7XHJcbiAgICAgICAgdGhpcy5fdW5pdmVyc2FsU2lkZW5hdiA9IHNpZGVuYXY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB1bml2ZXJzYWxTaWRlbmF2QWxpYXNlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdW5pdmVyc2FsU2lkZW5hdkFsaWFzZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB1bml2ZXJzYWxTaWRlbmF2QWxpYXNlcyhhbGlhc2VzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMuX3VuaXZlcnNhbFNpZGVuYXZBbGlhc2VzID0gYWxpYXNlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGlzVW5pdmVyc2FsKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1VuaXZlcnNhbCQuZ2V0VmFsdWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGlzVW5pdmVyc2FsKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2lzVW5pdmVyc2FsJC5uZXh0KHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBmbG9hdGluZ1NpZGVuYXYoKTogTWF0U2lkZW5hdiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zsb2F0aW5nU2lkZW5hdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGZsb2F0aW5nU2lkZW5hdihzaWRlbmF2OiBNYXRTaWRlbmF2KSB7XHJcbiAgICAgICAgdGhpcy5fZmxvYXRpbmdTaWRlbmF2ID0gc2lkZW5hdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGZpeGVkU2lkZW5hdigpOiBNYXRTaWRlbmF2IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZml4ZWRTaWRlbmF2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZml4ZWRTaWRlbmF2KHNpZGVuYXY6IE1hdFNpZGVuYXYpIHtcclxuICAgICAgICB0aGlzLl9maXhlZFNpZGVuYXYgPSBzaWRlbmF2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlJC5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbW9kZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZSQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBtb2RlKHM6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX21vZGUkLm5leHQocyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBvcGVuZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wZW5lZCQuZ2V0VmFsdWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG9wZW5lZCQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wZW5lZCQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBvcGVuZWQob3BlbjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX29wZW5lZCQubmV4dChvcGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZSQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZSQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBhY3RpdmUoYWN0aXZlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlJC5uZXh0KGFjdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmUkLmdldFZhbHVlKCkgPT09IHRydWUpIHsgcmV0dXJuIHRydWU7IH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaWRlbmF2IGlzIG5vdCBhY3RpdmUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvZ2dsZVNtYWxsKCkge1xyXG4gICAgICAgIHRoaXMuX3NtYWxsID09PSB0cnVlID8gdGhpcy5zbWFsbCA9IGZhbHNlIDogdGhpcy5zbWFsbCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZU5hdihzaWRlbmF2PzogTWF0U2lkZW5hdikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBpZiAoc2lkZW5hdikge1xyXG4gICAgICAgICAgICBzaWRlbmF2LnRvZ2dsZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1VuaXZlcnNhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVVuaXZlcnNhdk5hdigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGbG9hdGluZygpID8gdGhpcy50b2dnbGVGbG9hdGluZ05hdigpIDogIHRoaXMudG9nZ2xlRml4ZWROYXYoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZU9wZW5lZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgeyByZXR1cm47IH1cclxuICAgICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3Blbk5hdihzaWRlbmF2PzogTWF0U2lkZW5hdikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBpZiAoc2lkZW5hdikge1xyXG4gICAgICAgICAgICBzaWRlbmF2Lm9wZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNVbml2ZXJzYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuVW5pdmVyc2F2TmF2KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Zsb2F0aW5nKCkgPyB0aGlzLm9wZW5GbG9hdGluZ05hdigpIDogdGhpcy5vcGVuRml4ZWROYXYoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZU5hdihzaWRlbmF2PzogTWF0U2lkZW5hdikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBpZiAoc2lkZW5hdikge1xyXG4gICAgICAgICAgICBzaWRlbmF2LmNsb3NlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzVW5pdmVyc2FsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VVbml2ZXJzYXZOYXYoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmxvYXRpbmcoKSA/IHRoaXMuY2xvc2VGbG9hdGluZ05hdigpIDogdGhpcy5jbG9zZUZpeGVkTmF2KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZUZsb2F0aW5nTmF2KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fZmxvYXRpbmdTaWRlbmF2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Zsb2F0aW5nU2lkZW5hdi50b2dnbGUoKTtcclxuICAgICAgICAgICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5fZmxvYXRpbmdTaWRlbmF2Lm9wZW5lZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRmxvYXRpbmcgc2lkZW5hdiBub3QgZm91bmQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5GbG9hdGluZ05hdigpIHtcclxuICAgICAgICB0aGlzLl9mbG9hdGluZ1NpZGVuYXYgPyB0aGlzLl9mbG9hdGluZ1NpZGVuYXYub3BlbigpIDogY29uc29sZS5sb2coJ0Zsb2F0aW5nIHNpZGVuYXYgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlRmxvYXRpbmdOYXYoKSB7XHJcbiAgICAgICAgdGhpcy5fZmxvYXRpbmdTaWRlbmF2ID8gdGhpcy5fZmxvYXRpbmdTaWRlbmF2LmNsb3NlKCkgOiBjb25zb2xlLmxvZygnRmxvYXRpbmcgc2lkZW5hdiBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRml4ZWROYXYoKSB7XHJcbiAgICAgICAgdGhpcy5fZml4ZWRTaWRlbmF2ID8gdGhpcy50b2dnbGVTbWFsbCgpIDogY29uc29sZS5sb2coJ0ZpeGVkIHNpZGVuYXYgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5GaXhlZE5hdigpIHtcclxuICAgICAgICB0aGlzLl9maXhlZFNpZGVuYXYgPyB0aGlzLnNtYWxsID0gZmFsc2UgOiBjb25zb2xlLmxvZygnRml4ZWQgc2lkZW5hdiBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VGaXhlZE5hdigpIHtcclxuICAgICAgICB0aGlzLl9maXhlZFNpZGVuYXYgPyB0aGlzLnNtYWxsID0gdHJ1ZSA6IGNvbnNvbGUubG9nKCdGaXhlZCBzaWRlbmF2IG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVVbml2ZXJzYXZOYXYoKSB7XHJcbiAgICAgICAgdGhpcy5fdW5pdmVyc2FsU2lkZW5hdiA/IHRoaXMuX3VuaXZlcnNhbFNpZGVuYXYudG9nZ2xlKCkgOiBjb25zb2xlLmxvZygnVW5pdmVyc2FsIHNpZGVuYXYgd2FzIG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuVW5pdmVyc2F2TmF2KCkge1xyXG4gICAgICAgIHRoaXMuX3VuaXZlcnNhbFNpZGVuYXYgPyB0aGlzLl91bml2ZXJzYWxTaWRlbmF2Lm9wZW4oKSA6IGNvbnNvbGUubG9nKCdVbml2ZXJzYWwgc2lkZW5hdiB3YXMgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlVW5pdmVyc2F2TmF2KCkge1xyXG4gICAgICAgIHRoaXMuX3VuaXZlcnNhbFNpZGVuYXYgPyB0aGlzLl91bml2ZXJzYWxTaWRlbmF2LmNsb3NlKCkgOiBjb25zb2xlLmxvZygnVW5pdmVyc2FsIHNpZGVuYXYgd2FzIG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VTdGF0ZU5hdihzaWRlbmF2OiBNYXRTaWRlbmF2ID0gdGhpcy5fZmxvYXRpbmdTaWRlbmF2KSB7XHJcbiAgICAgICAgaWYgKHNpZGVuYXYpIHtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NpZGVuYXYgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1VuaXZlcnNhbEZsb2F0aW5nKCkge1xyXG4gICAgICAgIGxldCBpcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIHRoaXMuX3VuaXZlcnNhbFNpZGVuYXZBbGlhc2VzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1lZGlhLmlzTWFpbkFjdGl2ZShhbGlhcykpIHtcclxuICAgICAgICAgICAgICAgIGlzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRmxvYXRpbmcoKSB7XHJcbiAgICAgICAgbGV0IGlzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGVhY2godGhpcy5fZmxvYXRpbmdTaWRlbmF2QWxpYXNlcywgKGFsaWFzOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWEuaXNNYWluQWN0aXZlKGFsaWFzKSkgeyBpcyA9IHRydWU7IH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=