/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject } from 'rxjs';
import { each } from '../../shared/layouts.utils';
var PipRightnavService = /** @class */ (function () {
    function PipRightnavService(media) {
        this.media = media;
        this._onlyFloating = true;
        this._opened$ = new BehaviorSubject(true);
        this._floatingRightnavAliases = ['xs', 'sm'];
        this._fixedRightnavMode$ = new BehaviorSubject('side');
    }
    Object.defineProperty(PipRightnavService.prototype, "floatingRightnavAliases", {
        get: /**
         * @return {?}
         */
        function () {
            return this._floatingRightnavAliases;
        },
        set: /**
         * @param {?} aliases
         * @return {?}
         */
        function (aliases) {
            this._floatingRightnavAliases = aliases;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipRightnavService.prototype, "onlyFloating", {
        get: /**
         * @return {?}
         */
        function () {
            return this._onlyFloating;
        },
        set: /**
         * @param {?} only
         * @return {?}
         */
        function (only) {
            this._onlyFloating = only;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipRightnavService.prototype, "floatingRightnav", {
        get: /**
         * @return {?}
         */
        function () {
            return this._floatingRightnav;
        },
        set: /**
         * @param {?} rightnav
         * @return {?}
         */
        function (rightnav) {
            this._floatingRightnav = rightnav;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipRightnavService.prototype, "fixedRightnav", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fixedRightnav;
        },
        set: /**
         * @param {?} rightnav
         * @return {?}
         */
        function (rightnav) {
            this._fixedRightnav = rightnav;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipRightnavService.prototype, "fixedRightnavMode$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fixedRightnavMode$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipRightnavService.prototype, "fixedRightnavMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fixedRightnavMode$.getValue();
        },
        set: /**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            this._fixedRightnavMode$.next(mode);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipRightnavService.prototype, "opened$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._opened$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipRightnavService.prototype, "opened", {
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
    /**
     * @param {?=} rightnav
     * @return {?}
     */
    PipRightnavService.prototype.toggleRightnav = /**
     * @param {?=} rightnav
     * @return {?}
     */
    function (rightnav) {
        if (rightnav) {
            rightnav.toggle();
        }
        else {
            this.isFloating() ? this.toggleFloatingRightnav() : this.toggleFixedRightnav();
        }
    };
    /**
     * @param {?=} rightnav
     * @return {?}
     */
    PipRightnavService.prototype.openRightnav = /**
     * @param {?=} rightnav
     * @return {?}
     */
    function (rightnav) {
        if (rightnav) {
            rightnav.open();
        }
        else {
            this.isFloating() ? this.openFloatingRightnav() : this.openFixedRightnav();
        }
    };
    /**
     * @param {?=} rightnav
     * @return {?}
     */
    PipRightnavService.prototype.closeRightnav = /**
     * @param {?=} rightnav
     * @return {?}
     */
    function (rightnav) {
        if (rightnav) {
            rightnav.close();
        }
        else {
            this.isFloating() ? this.closeFloatingRightnav() : this.closeFixedRightnav();
        }
    };
    /**
     * @return {?}
     */
    PipRightnavService.prototype.toggleFloatingRightnav = /**
     * @return {?}
     */
    function () {
        if (this._floatingRightnav) {
            this._floatingRightnav.toggle();
            this.opened = this._floatingRightnav.opened;
        }
        else {
            console.log('rightnav not found');
        }
    };
    /**
     * @return {?}
     */
    PipRightnavService.prototype.toggleFixedRightnav = /**
     * @return {?}
     */
    function () {
        if (this._fixedRightnav) {
            this._fixedRightnav.toggle();
            this.opened = this._fixedRightnav.opened;
        }
        else {
            console.log('rightnav not found');
        }
    };
    /**
     * @return {?}
     */
    PipRightnavService.prototype.openFloatingRightnav = /**
     * @return {?}
     */
    function () {
        this._floatingRightnav ? this._floatingRightnav.open() : console.log('rightnav not found');
        this.opened = true;
    };
    /**
     * @return {?}
     */
    PipRightnavService.prototype.closeFloatingRightnav = /**
     * @return {?}
     */
    function () {
        this._floatingRightnav ? this._floatingRightnav.close() : console.log('rightnav not found');
        this.opened = false;
    };
    /**
     * @return {?}
     */
    PipRightnavService.prototype.openFixedRightnav = /**
     * @return {?}
     */
    function () {
        this._fixedRightnav ? this._fixedRightnav.open() : console.log('rightnav not found');
        this.opened = true;
    };
    /**
     * @return {?}
     */
    PipRightnavService.prototype.closeFixedRightnav = /**
     * @return {?}
     */
    function () {
        this._fixedRightnav ? this._fixedRightnav.close() : console.log('rightnav not found');
        this.opened = false;
    };
    /**
     * @param {?=} rightnav
     * @return {?}
     */
    PipRightnavService.prototype.changeStateRightnav = /**
     * @param {?=} rightnav
     * @return {?}
     */
    function (rightnav) {
        if (rightnav === void 0) { rightnav = this._floatingRightnav; }
        if (rightnav) {
        }
        else {
            console.log('rightnav not found');
        }
    };
    /**
     * @private
     * @return {?}
     */
    PipRightnavService.prototype.isFloating = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._onlyFloating === true) {
            return true;
        }
        /** @type {?} */
        var is = false;
        each(this._floatingRightnavAliases, function (alias) {
            if (_this.media.isActive(alias)) {
                is = true;
            }
        });
        return is;
    };
    PipRightnavService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PipRightnavService.ctorParameters = function () { return [
        { type: MediaObserver }
    ]; };
    return PipRightnavService;
}());
export { PipRightnavService };
if (false) {
    /** @type {?} */
    PipRightnavService.prototype._floatingRightnav;
    /** @type {?} */
    PipRightnavService.prototype._fixedRightnav;
    /**
     * @type {?}
     * @private
     */
    PipRightnavService.prototype._onlyFloating;
    /**
     * @type {?}
     * @private
     */
    PipRightnavService.prototype._opened$;
    /**
     * @type {?}
     * @private
     */
    PipRightnavService.prototype._floatingRightnavAliases;
    /**
     * @type {?}
     * @private
     */
    PipRightnavService.prototype._fixedRightnavMode$;
    /**
     * @type {?}
     * @private
     */
    PipRightnavService.prototype.media;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlnaHRuYXYuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpcC13ZWJ1aTItbGF5b3V0cy8iLCJzb3VyY2VzIjpbImxpYi9yaWdodG5hdi9zaGFyZWQvcmlnaHRuYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFckQsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbEQ7SUFTSSw0QkFDWSxLQUFvQjtRQUFwQixVQUFLLEdBQUwsS0FBSyxDQUFlO1FBTnhCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsNkJBQXdCLEdBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQVMsTUFBTSxDQUFDLENBQUM7SUFJOUQsQ0FBQztJQUVMLHNCQUFXLHVEQUF1Qjs7OztRQUlsQztZQUNJLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO1FBQ3pDLENBQUM7Ozs7O1FBTkQsVUFBbUMsT0FBaUI7WUFDaEQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE9BQU8sQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQU1ELHNCQUFXLDRDQUFZOzs7O1FBSXZCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7Ozs7O1FBTkQsVUFBd0IsSUFBYTtZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQU1ELHNCQUFXLGdEQUFnQjs7OztRQUEzQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGlCQUFp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RTtTQUViO2FBQU07WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDOzs7OztJQUVPLHVDQUFVOzs7O0lBQWxCO1FBQUEsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7U0FBRTs7WUFFN0MsRUFBRSxHQUFHLEtBQUs7UUFFZCxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLFVBQUMsS0FBYTtZQUM5QyxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7YUFBRTtRQUNsRCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBckpKLFVBQVU7Ozs7Z0JBTkYsYUFBYTs7SUE2SnRCLHlCQUFDO0NBQUEsQUF2SkQsSUF1SkM7U0F0Slksa0JBQWtCOzs7SUFDM0IsK0NBQXFDOztJQUNyQyw0Q0FBa0M7Ozs7O0lBQ2xDLDJDQUE2Qjs7Ozs7SUFDN0Isc0NBQXVFOzs7OztJQUN2RSxzREFBMEQ7Ozs7O0lBQzFELGlEQUFrRTs7Ozs7SUFHOUQsbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNZWRpYU9ic2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNYXRTaWRlbmF2IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9zaGFyZWQvbGF5b3V0cy51dGlscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQaXBSaWdodG5hdlNlcnZpY2Uge1xyXG4gICAgcHVibGljIF9mbG9hdGluZ1JpZ2h0bmF2OiBNYXRTaWRlbmF2O1xyXG4gICAgcHVibGljIF9maXhlZFJpZ2h0bmF2OiBNYXRTaWRlbmF2O1xyXG4gICAgcHJpdmF0ZSBfb25seUZsb2F0aW5nID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX29wZW5lZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XHJcbiAgICBwcml2YXRlIF9mbG9hdGluZ1JpZ2h0bmF2QWxpYXNlczogc3RyaW5nW10gPSBbJ3hzJywgJ3NtJ107XHJcbiAgICBwcml2YXRlIF9maXhlZFJpZ2h0bmF2TW9kZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJ3NpZGUnKTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBtZWRpYTogTWVkaWFPYnNlcnZlclxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGZsb2F0aW5nUmlnaHRuYXZBbGlhc2VzKGFsaWFzZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5fZmxvYXRpbmdSaWdodG5hdkFsaWFzZXMgPSBhbGlhc2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZmxvYXRpbmdSaWdodG5hdkFsaWFzZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zsb2F0aW5nUmlnaHRuYXZBbGlhc2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgb25seUZsb2F0aW5nKG9ubHk6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9vbmx5RmxvYXRpbmcgPSBvbmx5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgb25seUZsb2F0aW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vbmx5RmxvYXRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBmbG9hdGluZ1JpZ2h0bmF2KCk6IE1hdFNpZGVuYXYge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mbG9hdGluZ1JpZ2h0bmF2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZmxvYXRpbmdSaWdodG5hdihyaWdodG5hdjogTWF0U2lkZW5hdikge1xyXG4gICAgICAgIHRoaXMuX2Zsb2F0aW5nUmlnaHRuYXYgPSByaWdodG5hdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGZpeGVkUmlnaHRuYXYocmlnaHRuYXY6IE1hdFNpZGVuYXYpIHtcclxuICAgICAgICB0aGlzLl9maXhlZFJpZ2h0bmF2ID0gcmlnaHRuYXY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBmaXhlZFJpZ2h0bmF2KCk6IE1hdFNpZGVuYXYge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maXhlZFJpZ2h0bmF2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZml4ZWRSaWdodG5hdk1vZGUkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpeGVkUmlnaHRuYXZNb2RlJC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGZpeGVkUmlnaHRuYXZNb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpeGVkUmlnaHRuYXZNb2RlJC5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZml4ZWRSaWdodG5hdk1vZGUobW9kZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZml4ZWRSaWdodG5hdk1vZGUkLm5leHQobW9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBvcGVuZWQkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcGVuZWQkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgb3BlbmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcGVuZWQkLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBvcGVuZWQob3BlbjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX29wZW5lZCQubmV4dChvcGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlUmlnaHRuYXYocmlnaHRuYXY/OiBNYXRTaWRlbmF2KSB7XHJcbiAgICAgICAgaWYgKHJpZ2h0bmF2KSB7XHJcbiAgICAgICAgICAgIHJpZ2h0bmF2LnRvZ2dsZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGbG9hdGluZygpID8gdGhpcy50b2dnbGVGbG9hdGluZ1JpZ2h0bmF2KCkgOiB0aGlzLnRvZ2dsZUZpeGVkUmlnaHRuYXYoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5SaWdodG5hdihyaWdodG5hdj86IE1hdFNpZGVuYXYpIHtcclxuICAgICAgICBpZiAocmlnaHRuYXYpIHtcclxuICAgICAgICAgICAgcmlnaHRuYXYub3BlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGbG9hdGluZygpID8gdGhpcy5vcGVuRmxvYXRpbmdSaWdodG5hdigpIDogdGhpcy5vcGVuRml4ZWRSaWdodG5hdigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VSaWdodG5hdihyaWdodG5hdj86IE1hdFNpZGVuYXYpIHtcclxuICAgICAgICBpZiAocmlnaHRuYXYpIHtcclxuICAgICAgICAgICAgcmlnaHRuYXYuY2xvc2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmxvYXRpbmcoKSA/IHRoaXMuY2xvc2VGbG9hdGluZ1JpZ2h0bmF2KCkgOiB0aGlzLmNsb3NlRml4ZWRSaWdodG5hdigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRmxvYXRpbmdSaWdodG5hdigpIHtcclxuICAgICAgICBpZiAodGhpcy5fZmxvYXRpbmdSaWdodG5hdikge1xyXG4gICAgICAgICAgICB0aGlzLl9mbG9hdGluZ1JpZ2h0bmF2LnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5lZCA9IHRoaXMuX2Zsb2F0aW5nUmlnaHRuYXYub3BlbmVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyaWdodG5hdiBub3QgZm91bmQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZUZpeGVkUmlnaHRuYXYoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZpeGVkUmlnaHRuYXYpIHtcclxuICAgICAgICAgICAgdGhpcy5fZml4ZWRSaWdodG5hdi50b2dnbGUoKTtcclxuICAgICAgICAgICAgdGhpcy5vcGVuZWQgPSB0aGlzLl9maXhlZFJpZ2h0bmF2Lm9wZW5lZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmlnaHRuYXYgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuRmxvYXRpbmdSaWdodG5hdigpIHtcclxuICAgICAgICB0aGlzLl9mbG9hdGluZ1JpZ2h0bmF2ID8gdGhpcy5fZmxvYXRpbmdSaWdodG5hdi5vcGVuKCkgOiBjb25zb2xlLmxvZygncmlnaHRuYXYgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZUZsb2F0aW5nUmlnaHRuYXYoKSB7XHJcbiAgICAgICAgdGhpcy5fZmxvYXRpbmdSaWdodG5hdiA/IHRoaXMuX2Zsb2F0aW5nUmlnaHRuYXYuY2xvc2UoKSA6IGNvbnNvbGUubG9nKCdyaWdodG5hdiBub3QgZm91bmQnKTtcclxuICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuRml4ZWRSaWdodG5hdigpIHtcclxuICAgICAgICB0aGlzLl9maXhlZFJpZ2h0bmF2ID8gdGhpcy5fZml4ZWRSaWdodG5hdi5vcGVuKCkgOiBjb25zb2xlLmxvZygncmlnaHRuYXYgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZUZpeGVkUmlnaHRuYXYoKSB7XHJcbiAgICAgICAgdGhpcy5fZml4ZWRSaWdodG5hdiA/IHRoaXMuX2ZpeGVkUmlnaHRuYXYuY2xvc2UoKSA6IGNvbnNvbGUubG9nKCdyaWdodG5hdiBub3QgZm91bmQnKTtcclxuICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VTdGF0ZVJpZ2h0bmF2KHJpZ2h0bmF2OiBNYXRTaWRlbmF2ID0gdGhpcy5fZmxvYXRpbmdSaWdodG5hdikge1xyXG4gICAgICAgIGlmIChyaWdodG5hdikge1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmlnaHRuYXYgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNGbG9hdGluZygpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25seUZsb2F0aW5nID09PSB0cnVlKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG4gICAgICAgIGxldCBpcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBlYWNoKHRoaXMuX2Zsb2F0aW5nUmlnaHRuYXZBbGlhc2VzLCAoYWxpYXM6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYS5pc0FjdGl2ZShhbGlhcykpIHsgaXMgPSB0cnVlOyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpcztcclxuICAgIH1cclxuXHJcbn1cclxuIl19