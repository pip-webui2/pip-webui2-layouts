/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject } from 'rxjs';
var PipMediaService = /** @class */ (function () {
    function PipMediaService(media) {
        var _this = this;
        this.media = media;
        this.mainLayoutBreakpoints = {};
        this.mainChange$ = new BehaviorSubject({ aliases: [] });
        this.media.media$.subscribe(function (change) {
            _this.updateBodyLayoutBreakpoints();
        });
        this.updateBodyLayoutBreakpoints();
        this.setMainLayoutBreakpoints();
    }
    // TODO: deprecated
    // TODO: deprecated
    /**
     * @return {?}
     */
    PipMediaService.prototype.activate = 
    // TODO: deprecated
    /**
     * @return {?}
     */
    function () { };
    /**
     * @private
     * @return {?}
     */
    PipMediaService.prototype.updateBodyLayoutBreakpoints = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var body = document.body;
        try {
            for (var _b = tslib_1.__values(this.media['breakpoints'].aliases), _c = _b.next(); !_c.done; _c = _b.next()) {
                var alias = _c.value;
                body.classList[this.media.isActive(alias) ? 'add' : 'remove']('pip-' + alias);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} width
     * @return {?}
     */
    PipMediaService.prototype.updateMainLayoutBreakpoints = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        var e_2, _a;
        /** @type {?} */
        var body = document.body;
        /** @type {?} */
        var aliases = [];
        try {
            for (var _b = tslib_1.__values(this.media['breakpoints'].aliases), _c = _b.next(); !_c.done; _c = _b.next()) {
                var alias = _c.value;
                this.mainLayoutBreakpoints[alias].active = this._isMainInclude(width, alias);
                body.classList[this.mainLayoutBreakpoints[alias].active ? 'add' : 'remove']('pip-main-' + alias);
                if (this.mainLayoutBreakpoints[alias].active) {
                    aliases.push(alias);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.mainChange$.next({ aliases: aliases });
    };
    /**
     * @private
     * @return {?}
     */
    PipMediaService.prototype.setMainLayoutBreakpoints = /**
     * @private
     * @return {?}
     */
    function () {
        var e_3, _a, e_4, _b;
        /** @type {?} */
        var regExp = new RegExp(/\([a-z-:' '0-9]+\)/g);
        this.mainLayoutBreakpoints = {};
        try {
            for (var _c = tslib_1.__values(this.media['breakpoints'].items), _d = _c.next(); !_d.done; _d = _c.next()) {
                var item = _d.value;
                /** @type {?} */
                var matches = item.mediaQuery.match(regExp);
                this.mainLayoutBreakpoints[item.alias] = { min: 0, max: 10000, active: false };
                try {
                    for (var matches_1 = tslib_1.__values(matches), matches_1_1 = matches_1.next(); !matches_1_1.done; matches_1_1 = matches_1.next()) {
                        var match = matches_1_1.value;
                        /** @type {?} */
                        var num = match.match(new RegExp(/[0-9]+/g));
                        if (num) {
                            if (match.includes('max-width')) {
                                this.mainLayoutBreakpoints[item.alias].max = Number(num);
                            }
                            if (match.includes('min-width')) {
                                this.mainLayoutBreakpoints[item.alias].min = Number(num);
                            }
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (matches_1_1 && !matches_1_1.done && (_b = matches_1.return)) _b.call(matches_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    /**
     * @private
     * @param {?} width
     * @param {?} alias
     * @return {?}
     */
    PipMediaService.prototype._isMainInclude = /**
     * @private
     * @param {?} width
     * @param {?} alias
     * @return {?}
     */
    function (width, alias) {
        return this.mainLayoutBreakpoints[alias].max >= width && this.mainLayoutBreakpoints[alias].min <= width;
    };
    /**
     * @return {?}
     */
    PipMediaService.prototype.asObservableMain = /**
     * @return {?}
     */
    function () {
        return this.mainChange$;
    };
    /**
     * @param {?} alias
     * @return {?}
     */
    PipMediaService.prototype.isMainActive = /**
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        return this.mainLayoutBreakpoints[alias] && this.mainLayoutBreakpoints[alias].active;
    };
    PipMediaService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PipMediaService.ctorParameters = function () { return [
        { type: MediaObserver }
    ]; };
    return PipMediaService;
}());
export { PipMediaService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PipMediaService.prototype.mainLayoutBreakpoints;
    /**
     * @type {?}
     * @private
     */
    PipMediaService.prototype.mainChange$;
    /**
     * @type {?}
     * @private
     */
    PipMediaService.prototype.media;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpcC13ZWJ1aTItbGF5b3V0cy8iLCJzb3VyY2VzIjpbImxpYi9tZWRpYS9zaGFyZWQvbWVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFlLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xFLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJbkQ7SUFFSSx5QkFDWSxLQUFvQjtRQURoQyxpQkFRQztRQVBXLFVBQUssR0FBTCxLQUFLLENBQWU7UUFTeEIsMEJBQXFCLEdBQVEsRUFBRSxDQUFDO1FBQ2hDLGdCQUFXLEdBQXFDLElBQUksZUFBZSxDQUFrQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBUjFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQW1CO1lBQzVDLEtBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUtELG1CQUFtQjs7Ozs7SUFDWixrQ0FBUTs7Ozs7SUFBZixjQUFvQixDQUFDOzs7OztJQUViLHFEQUEyQjs7OztJQUFuQzs7O1lBQ1UsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJOztZQUMxQixLQUFvQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQWxELElBQU0sS0FBSyxXQUFBO2dCQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFD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O0lBQzVHLENBQUM7Ozs7SUFFTSwwQ0FBZ0I7OztJQUF2QjtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVNLHNDQUFZOzs7O0lBQW5CLFVBQW9CLEtBQUs7UUFDckIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN6RixDQUFDOztnQkFqRUosVUFBVTs7OztnQkFMVyxhQUFhOztJQXVFbkMsc0JBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQWpFWSxlQUFlOzs7Ozs7SUFXeEIsZ0RBQXdDOzs7OztJQUN4QyxzQ0FBOEc7Ozs7O0lBVjFHLGdDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVkaWFDaGFuZ2UsIE1lZGlhT2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTWVkaWFNYWluQ2hhbmdlIH0gZnJvbSAnLi9tZWRpYS1tYWluLWNoYW5nZS5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQaXBNZWRpYVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBtZWRpYTogTWVkaWFPYnNlcnZlclxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5tZWRpYS5tZWRpYSQuc3Vic2NyaWJlKChjaGFuZ2U6IE1lZGlhQ2hhbmdlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQm9keUxheW91dEJyZWFrcG9pbnRzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCb2R5TGF5b3V0QnJlYWtwb2ludHMoKTtcclxuICAgICAgICB0aGlzLnNldE1haW5MYXlvdXRCcmVha3BvaW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWFpbkxheW91dEJyZWFrcG9pbnRzOiBhbnkgPSB7fTtcclxuICAgIHByaXZhdGUgbWFpbkNoYW5nZSQ6IEJlaGF2aW9yU3ViamVjdDxNZWRpYU1haW5DaGFuZ2U+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNZWRpYU1haW5DaGFuZ2U+KHsgYWxpYXNlczogW10gfSk7XHJcblxyXG4gICAgLy8gVE9ETzogZGVwcmVjYXRlZFxyXG4gICAgcHVibGljIGFjdGl2YXRlKCkgeyB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVCb2R5TGF5b3V0QnJlYWtwb2ludHMoKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiB0aGlzLm1lZGlhWydicmVha3BvaW50cyddLmFsaWFzZXMpIHtcclxuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3RbdGhpcy5tZWRpYS5pc0FjdGl2ZShhbGlhcykgPyAnYWRkJyA6ICdyZW1vdmUnXSgncGlwLScgKyBhbGlhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVNYWluTGF5b3V0QnJlYWtwb2ludHMod2lkdGg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIGNvbnN0IGFsaWFzZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIHRoaXMubWVkaWFbJ2JyZWFrcG9pbnRzJ10uYWxpYXNlcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW5MYXlvdXRCcmVha3BvaW50c1thbGlhc10uYWN0aXZlID0gdGhpcy5faXNNYWluSW5jbHVkZSh3aWR0aCwgYWxpYXMpO1xyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdFt0aGlzLm1haW5MYXlvdXRCcmVha3BvaW50c1thbGlhc10uYWN0aXZlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ3BpcC1tYWluLScgKyBhbGlhcyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1haW5MYXlvdXRCcmVha3BvaW50c1thbGlhc10uYWN0aXZlKSB7IGFsaWFzZXMucHVzaChhbGlhcyk7IH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWFpbkNoYW5nZSQubmV4dCh7IGFsaWFzZXM6IGFsaWFzZXMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRNYWluTGF5b3V0QnJlYWtwb2ludHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cCgvXFwoW2Etei06JyAnMC05XStcXCkvZyk7XHJcbiAgICAgICAgdGhpcy5tYWluTGF5b3V0QnJlYWtwb2ludHMgPSB7fTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMubWVkaWFbJ2JyZWFrcG9pbnRzJ10uaXRlbXMpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGl0ZW0ubWVkaWFRdWVyeS5tYXRjaChyZWdFeHApO1xyXG4gICAgICAgICAgICB0aGlzLm1haW5MYXlvdXRCcmVha3BvaW50c1tpdGVtLmFsaWFzXSA9IHsgbWluOiAwLCBtYXg6IDEwMDAwLCBhY3RpdmU6IGZhbHNlIH07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1hdGNoIG9mIG1hdGNoZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IG1hdGNoLm1hdGNoKG5ldyBSZWdFeHAoL1swLTldKy9nKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLmluY2x1ZGVzKCdtYXgtd2lkdGgnKSkgeyB0aGlzLm1haW5MYXlvdXRCcmVha3BvaW50c1tpdGVtLmFsaWFzXS5tYXggPSBOdW1iZXIobnVtKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5pbmNsdWRlcygnbWluLXdpZHRoJykpIHsgdGhpcy5tYWluTGF5b3V0QnJlYWtwb2ludHNbaXRlbS5hbGlhc10ubWluID0gTnVtYmVyKG51bSk7IH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc01haW5JbmNsdWRlKHdpZHRoOiBudW1iZXIsIGFsaWFzOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluTGF5b3V0QnJlYWtwb2ludHNbYWxpYXNdLm1heCA+PSB3aWR0aCAmJiB0aGlzLm1haW5MYXlvdXRCcmVha3BvaW50c1thbGlhc10ubWluIDw9IHdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc09ic2VydmFibGVNYWluKCk6IE9ic2VydmFibGU8TWVkaWFNYWluQ2hhbmdlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbkNoYW5nZSQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTWFpbkFjdGl2ZShhbGlhcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5MYXlvdXRCcmVha3BvaW50c1thbGlhc10gJiYgdGhpcy5tYWluTGF5b3V0QnJlYWtwb2ludHNbYWxpYXNdLmFjdGl2ZTtcclxuICAgIH1cclxufVxyXG4iXX0=