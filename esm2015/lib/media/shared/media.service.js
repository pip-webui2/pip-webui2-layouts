/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject } from 'rxjs';
export class PipMediaService {
    /**
     * @param {?} media
     */
    constructor(media) {
        this.media = media;
        this.mainLayoutBreakpoints = {};
        this.mainChange$ = new BehaviorSubject({ aliases: [] });
        this.media.media$.subscribe((change) => {
            this.updateBodyLayoutBreakpoints();
        });
        this.updateBodyLayoutBreakpoints();
        this.setMainLayoutBreakpoints();
    }
    // TODO: deprecated
    /**
     * @return {?}
     */
    activate() { }
    /**
     * @private
     * @return {?}
     */
    updateBodyLayoutBreakpoints() {
        /** @type {?} */
        const body = document.body;
        for (const alias of this.media['breakpoints'].aliases) {
            body.classList[this.media.isActive(alias) ? 'add' : 'remove']('pip-' + alias);
        }
    }
    /**
     * @param {?} width
     * @return {?}
     */
    updateMainLayoutBreakpoints(width) {
        /** @type {?} */
        const body = document.body;
        /** @type {?} */
        const aliases = [];
        for (const alias of this.media['breakpoints'].aliases) {
            this.mainLayoutBreakpoints[alias].active = this._isMainInclude(width, alias);
            body.classList[this.mainLayoutBreakpoints[alias].active ? 'add' : 'remove']('pip-main-' + alias);
            if (this.mainLayoutBreakpoints[alias].active) {
                aliases.push(alias);
            }
        }
        this.mainChange$.next({ aliases: aliases });
    }
    /**
     * @private
     * @return {?}
     */
    setMainLayoutBreakpoints() {
        /** @type {?} */
        const regExp = new RegExp(/\([a-z-:' '0-9]+\)/g);
        this.mainLayoutBreakpoints = {};
        for (const item of this.media['breakpoints'].items) {
            /** @type {?} */
            const matches = item.mediaQuery.match(regExp);
            this.mainLayoutBreakpoints[item.alias] = { min: 0, max: 10000, active: false };
            for (const match of matches) {
                /** @type {?} */
                const num = match.match(new RegExp(/[0-9]+/g));
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
    }
    /**
     * @private
     * @param {?} width
     * @param {?} alias
     * @return {?}
     */
    _isMainInclude(width, alias) {
        return this.mainLayoutBreakpoints[alias].max >= width && this.mainLayoutBreakpoints[alias].min <= width;
    }
    /**
     * @return {?}
     */
    asObservableMain() {
        return this.mainChange$;
    }
    /**
     * @param {?} alias
     * @return {?}
     */
    isMainActive(alias) {
        return this.mainLayoutBreakpoints[alias] && this.mainLayoutBreakpoints[alias].active;
    }
}
PipMediaService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PipMediaService.ctorParameters = () => [
    { type: MediaObserver }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpcC13ZWJ1aTItbGF5b3V0cy8iLCJzb3VyY2VzIjpbImxpYi9tZWRpYS9zaGFyZWQvbWVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEUsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUtuRCxNQUFNLE9BQU8sZUFBZTs7OztJQUN4QixZQUNZLEtBQW9CO1FBQXBCLFVBQUssR0FBTCxLQUFLLENBQWU7UUFTeEIsMEJBQXFCLEdBQVEsRUFBRSxDQUFDO1FBQ2hDLGdCQUFXLEdBQXFDLElBQUksZUFBZSxDQUFrQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBUjFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQW1CLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBTU0sUUFBUSxLQUFLLENBQUM7Ozs7O0lBRWIsMkJBQTJCOztjQUN6QixJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUk7UUFDMUIsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1B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Qi9CLGdEQUF3Qzs7Ozs7SUFDeEMsc0NBQThHOzs7OztJQVYxRyxnQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1lZGlhQ2hhbmdlLCBNZWRpYU9ic2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE1lZGlhTWFpbkNoYW5nZSB9IGZyb20gJy4vbWVkaWEtbWFpbi1jaGFuZ2UubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGlwTWVkaWFTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbWVkaWE6IE1lZGlhT2JzZXJ2ZXJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubWVkaWEubWVkaWEkLnN1YnNjcmliZSgoY2hhbmdlOiBNZWRpYUNoYW5nZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJvZHlMYXlvdXRCcmVha3BvaW50cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQm9keUxheW91dEJyZWFrcG9pbnRzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRNYWluTGF5b3V0QnJlYWtwb2ludHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1haW5MYXlvdXRCcmVha3BvaW50czogYW55ID0ge307XHJcbiAgICBwcml2YXRlIG1haW5DaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8TWVkaWFNYWluQ2hhbmdlPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWVkaWFNYWluQ2hhbmdlPih7IGFsaWFzZXM6IFtdIH0pO1xyXG5cclxuICAgIC8vIFRPRE86IGRlcHJlY2F0ZWRcclxuICAgIHB1YmxpYyBhY3RpdmF0ZSgpIHsgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlQm9keUxheW91dEJyZWFrcG9pbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIGZvciAoY29uc3QgYWxpYXMgb2YgdGhpcy5tZWRpYVsnYnJlYWtwb2ludHMnXS5hbGlhc2VzKSB7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0W3RoaXMubWVkaWEuaXNBY3RpdmUoYWxpYXMpID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ3BpcC0nICsgYWxpYXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlTWFpbkxheW91dEJyZWFrcG9pbnRzKHdpZHRoOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICBjb25zdCBhbGlhc2VzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiB0aGlzLm1lZGlhWydicmVha3BvaW50cyddLmFsaWFzZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluTGF5b3V0QnJlYWtwb2ludHNbYWxpYXNdLmFjdGl2ZSA9IHRoaXMuX2lzTWFpbkluY2x1ZGUod2lkdGgsIGFsaWFzKTtcclxuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3RbdGhpcy5tYWluTGF5b3V0QnJlYWtwb2ludHNbYWxpYXNdLmFjdGl2ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdwaXAtbWFpbi0nICsgYWxpYXMpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYWluTGF5b3V0QnJlYWtwb2ludHNbYWxpYXNdLmFjdGl2ZSkgeyBhbGlhc2VzLnB1c2goYWxpYXMpOyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1haW5DaGFuZ2UkLm5leHQoeyBhbGlhc2VzOiBhbGlhc2VzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TWFpbkxheW91dEJyZWFrcG9pbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoL1xcKFthLXotOicgJzAtOV0rXFwpL2cpO1xyXG4gICAgICAgIHRoaXMubWFpbkxheW91dEJyZWFrcG9pbnRzID0ge307XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLm1lZGlhWydicmVha3BvaW50cyddLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBpdGVtLm1lZGlhUXVlcnkubWF0Y2gocmVnRXhwKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluTGF5b3V0QnJlYWtwb2ludHNbaXRlbS5hbGlhc10gPSB7IG1pbjogMCwgbWF4OiAxMDAwMCwgYWN0aXZlOiBmYWxzZSB9O1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBtYXRjaCBvZiBtYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBudW0gPSBtYXRjaC5tYXRjaChuZXcgUmVnRXhwKC9bMC05XSsvZykpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5pbmNsdWRlcygnbWF4LXdpZHRoJykpIHsgdGhpcy5tYWluTGF5b3V0QnJlYWtwb2ludHNbaXRlbS5hbGlhc10ubWF4ID0gTnVtYmVyKG51bSk7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2guaW5jbHVkZXMoJ21pbi13aWR0aCcpKSB7IHRoaXMubWFpbkxheW91dEJyZWFrcG9pbnRzW2l0ZW0uYWxpYXNdLm1pbiA9IE51bWJlcihudW0pOyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNNYWluSW5jbHVkZSh3aWR0aDogbnVtYmVyLCBhbGlhczogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbkxheW91dEJyZWFrcG9pbnRzW2FsaWFzXS5tYXggPj0gd2lkdGggJiYgdGhpcy5tYWluTGF5b3V0QnJlYWtwb2ludHNbYWxpYXNdLm1pbiA8PSB3aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXNPYnNlcnZhYmxlTWFpbigpOiBPYnNlcnZhYmxlPE1lZGlhTWFpbkNoYW5nZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5DaGFuZ2UkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc01haW5BY3RpdmUoYWxpYXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluTGF5b3V0QnJlYWtwb2ludHNbYWxpYXNdICYmIHRoaXMubWFpbkxheW91dEJyZWFrcG9pbnRzW2FsaWFzXS5hY3RpdmU7XHJcbiAgICB9XHJcbn1cclxuIl19