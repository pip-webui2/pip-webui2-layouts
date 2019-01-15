/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject } from 'rxjs';
import { each } from '../../shared/layouts.utils';
export class PipRightnavService {
    /**
     * @param {?} media
     */
    constructor(media) {
        this.media = media;
        this._onlyFloating = true;
        this._opened$ = new BehaviorSubject(true);
        this._floatingRightnavAliases = ['xs', 'sm'];
        this._fixedRightnavMode$ = new BehaviorSubject('side');
    }
    /**
     * @param {?} aliases
     * @return {?}
     */
    set floatingRightnavAliases(aliases) {
        this._floatingRightnavAliases = aliases;
    }
    /**
     * @return {?}
     */
    get floatingRightnavAliases() {
        return this._floatingRightnavAliases;
    }
    /**
     * @param {?} only
     * @return {?}
     */
    set onlyFloating(only) {
        this._onlyFloating = only;
    }
    /**
     * @return {?}
     */
    get onlyFloating() {
        return this._onlyFloating;
    }
    /**
     * @return {?}
     */
    get floatingRightnav() {
        return this._floatingRightnav;
    }
    /**
     * @param {?} rightnav
     * @return {?}
     */
    set floatingRightnav(rightnav) {
        this._floatingRightnav = rightnav;
    }
    /**
     * @param {?} rightnav
     * @return {?}
     */
    set fixedRightnav(rightnav) {
        this._fixedRightnav = rightnav;
    }
    /**
     * @return {?}
     */
    get fixedRightnav() {
        return this._fixedRightnav;
    }
    /**
     * @return {?}
     */
    get fixedRightnavMode$() {
        return this._fixedRightnavMode$.asObservable();
    }
    /**
     * @return {?}
     */
    get fixedRightnavMode() {
        return this._fixedRightnavMode$.getValue();
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    set fixedRightnavMode(mode) {
        this._fixedRightnavMode$.next(mode);
    }
    /**
     * @return {?}
     */
    get opened$() {
        return this._opened$;
    }
    /**
     * @return {?}
     */
    get opened() {
        return this._opened$.getValue();
    }
    /**
     * @param {?} open
     * @return {?}
     */
    set opened(open) {
        this._opened$.next(open);
    }
    /**
     * @param {?=} rightnav
     * @return {?}
     */
    toggleRightnav(rightnav) {
        if (rightnav) {
            rightnav.toggle();
        }
        else {
            this.isFloating() ? this.toggleFloatingRightnav() : this.toggleFixedRightnav();
        }
    }
    /**
     * @param {?=} rightnav
     * @return {?}
     */
    openRightnav(rightnav) {
        if (rightnav) {
            rightnav.open();
        }
        else {
            this.isFloating() ? this.openFloatingRightnav() : this.openFixedRightnav();
        }
    }
    /**
     * @param {?=} rightnav
     * @return {?}
     */
    closeRightnav(rightnav) {
        if (rightnav) {
            rightnav.close();
        }
        else {
            this.isFloating() ? this.closeFloatingRightnav() : this.closeFixedRightnav();
        }
    }
    /**
     * @return {?}
     */
    toggleFloatingRightnav() {
        if (this._floatingRightnav) {
            this._floatingRightnav.toggle();
            this.opened = this._floatingRightnav.opened;
        }
        else {
            console.log('rightnav not found');
        }
    }
    /**
     * @return {?}
     */
    toggleFixedRightnav() {
        if (this._fixedRightnav) {
            this._fixedRightnav.toggle();
            this.opened = this._fixedRightnav.opened;
        }
        else {
            console.log('rightnav not found');
        }
    }
    /**
     * @return {?}
     */
    openFloatingRightnav() {
        this._floatingRightnav ? this._floatingRightnav.open() : console.log('rightnav not found');
        this.opened = true;
    }
    /**
     * @return {?}
     */
    closeFloatingRightnav() {
        this._floatingRightnav ? this._floatingRightnav.close() : console.log('rightnav not found');
        this.opened = false;
    }
    /**
     * @return {?}
     */
    openFixedRightnav() {
        this._fixedRightnav ? this._fixedRightnav.open() : console.log('rightnav not found');
        this.opened = true;
    }
    /**
     * @return {?}
     */
    closeFixedRightnav() {
        this._fixedRightnav ? this._fixedRightnav.close() : console.log('rightnav not found');
        this.opened = false;
    }
    /**
     * @param {?=} rightnav
     * @return {?}
     */
    changeStateRightnav(rightnav = this._floatingRightnav) {
        if (rightnav) {
        }
        else {
            console.log('rightnav not found');
        }
    }
    /**
     * @private
     * @return {?}
     */
    isFloating() {
        if (this._onlyFloating === true) {
            return true;
        }
        /** @type {?} */
        let is = false;
        each(this._floatingRightnavAliases, (alias) => {
            if (this.media.isActive(alias)) {
                is = true;
            }
        });
        return is;
    }
}
PipRightnavService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PipRightnavService.ctorParameters = () => [
    { type: MediaObserver }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlnaHRuYXYuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpcC13ZWJ1aTItbGF5b3V0cy8iLCJzb3VyY2VzIjpbImxpYi9yaWdodG5hdi9zaGFyZWQvcmlnaHRuYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFckQsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHbEQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQVEzQixZQUNZLEtBQW9CO1FBQXBCLFVBQUssR0FBTCxLQUFLLENBQWU7UUFOeEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsYUFBUSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCw2QkFBd0IsR0FBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCx3QkFBbUIsR0FBRyxJQUFJLGVBQWUsQ0FBUyxNQUFNLENBQUMsQ0FBQztJQUk5RCxDQUFDOzs7OztJQUVMLElBQVcsdUJBQXVCLENBQUMsT0FBaUI7UUFDaEQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE9BQU8sQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsSUFBVyx1QkFBdUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxJQUFXLFlBQVksQ0FBQyxJQUFhO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxJQUFXLFlBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxJQUFXLGdCQUFnQjtRQUN2QixPQUFPLElBQUksQ0FB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LENBQUM7U0FBRTs7WUFFN0MsRUFBRSxHQUFHLEtBQUs7UUFFZCxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDbEQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDO2FBQUU7UUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7OztZQXJKSixVQUFVOzs7O1lBTkYsYUFBYTs7OztJQVFsQiwrQ0FBcUM7O0lBQ3JDLDRDQUFrQzs7Ozs7SUFDbEMsMkNBQTZCOzs7OztJQUM3QixzQ0FBdUU7Ozs7O0lBQ3ZFLHNEQUEwRDs7Ozs7SUFDMUQsaURBQWtFOzs7OztJQUc5RCxtQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1lZGlhT2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uLy4uL3NoYXJlZC9sYXlvdXRzLnV0aWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBpcFJpZ2h0bmF2U2VydmljZSB7XHJcbiAgICBwdWJsaWMgX2Zsb2F0aW5nUmlnaHRuYXY6IE1hdFNpZGVuYXY7XHJcbiAgICBwdWJsaWMgX2ZpeGVkUmlnaHRuYXY6IE1hdFNpZGVuYXY7XHJcbiAgICBwcml2YXRlIF9vbmx5RmxvYXRpbmcgPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfb3BlbmVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcclxuICAgIHByaXZhdGUgX2Zsb2F0aW5nUmlnaHRuYXZBbGlhc2VzOiBzdHJpbmdbXSA9IFsneHMnLCAnc20nXTtcclxuICAgIHByaXZhdGUgX2ZpeGVkUmlnaHRuYXZNb2RlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignc2lkZScpO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG1lZGlhOiBNZWRpYU9ic2VydmVyXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZmxvYXRpbmdSaWdodG5hdkFsaWFzZXMoYWxpYXNlczogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLl9mbG9hdGluZ1JpZ2h0bmF2QWxpYXNlcyA9IGFsaWFzZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBmbG9hdGluZ1JpZ2h0bmF2QWxpYXNlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmxvYXRpbmdSaWdodG5hdkFsaWFzZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBvbmx5RmxvYXRpbmcob25seTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX29ubHlGbG9hdGluZyA9IG9ubHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBvbmx5RmxvYXRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29ubHlGbG9hdGluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGZsb2F0aW5nUmlnaHRuYXYoKTogTWF0U2lkZW5hdiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zsb2F0aW5nUmlnaHRuYXY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBmbG9hdGluZ1JpZ2h0bmF2KHJpZ2h0bmF2OiBNYXRTaWRlbmF2KSB7XHJcbiAgICAgICAgdGhpcy5fZmxvYXRpbmdSaWdodG5hdiA9IHJpZ2h0bmF2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZml4ZWRSaWdodG5hdihyaWdodG5hdjogTWF0U2lkZW5hdikge1xyXG4gICAgICAgIHRoaXMuX2ZpeGVkUmlnaHRuYXYgPSByaWdodG5hdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGZpeGVkUmlnaHRuYXYoKTogTWF0U2lkZW5hdiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpeGVkUmlnaHRuYXY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBmaXhlZFJpZ2h0bmF2TW9kZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZml4ZWRSaWdodG5hdk1vZGUkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZml4ZWRSaWdodG5hdk1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZml4ZWRSaWdodG5hdk1vZGUkLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBmaXhlZFJpZ2h0bmF2TW9kZShtb2RlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9maXhlZFJpZ2h0bmF2TW9kZSQubmV4dChtb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG9wZW5lZCQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wZW5lZCQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBvcGVuZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wZW5lZCQuZ2V0VmFsdWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG9wZW5lZChvcGVuOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fb3BlbmVkJC5uZXh0KG9wZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVSaWdodG5hdihyaWdodG5hdj86IE1hdFNpZGVuYXYpIHtcclxuICAgICAgICBpZiAocmlnaHRuYXYpIHtcclxuICAgICAgICAgICAgcmlnaHRuYXYudG9nZ2xlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Zsb2F0aW5nKCkgPyB0aGlzLnRvZ2dsZUZsb2F0aW5nUmlnaHRuYXYoKSA6IHRoaXMudG9nZ2xlRml4ZWRSaWdodG5hdigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlblJpZ2h0bmF2KHJpZ2h0bmF2PzogTWF0U2lkZW5hdikge1xyXG4gICAgICAgIGlmIChyaWdodG5hdikge1xyXG4gICAgICAgICAgICByaWdodG5hdi5vcGVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Zsb2F0aW5nKCkgPyB0aGlzLm9wZW5GbG9hdGluZ1JpZ2h0bmF2KCkgOiB0aGlzLm9wZW5GaXhlZFJpZ2h0bmF2KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZVJpZ2h0bmF2KHJpZ2h0bmF2PzogTWF0U2lkZW5hdikge1xyXG4gICAgICAgIGlmIChyaWdodG5hdikge1xyXG4gICAgICAgICAgICByaWdodG5hdi5jbG9zZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGbG9hdGluZygpID8gdGhpcy5jbG9zZUZsb2F0aW5nUmlnaHRuYXYoKSA6IHRoaXMuY2xvc2VGaXhlZFJpZ2h0bmF2KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVGbG9hdGluZ1JpZ2h0bmF2KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9mbG9hdGluZ1JpZ2h0bmF2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Zsb2F0aW5nUmlnaHRuYXYudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbmVkID0gdGhpcy5fZmxvYXRpbmdSaWdodG5hdi5vcGVuZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JpZ2h0bmF2IG5vdCBmb3VuZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRml4ZWRSaWdodG5hdigpIHtcclxuICAgICAgICBpZiAodGhpcy5fZml4ZWRSaWdodG5hdikge1xyXG4gICAgICAgICAgICB0aGlzLl9maXhlZFJpZ2h0bmF2LnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5lZCA9IHRoaXMuX2ZpeGVkUmlnaHRuYXYub3BlbmVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyaWdodG5hdiBub3QgZm91bmQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5GbG9hdGluZ1JpZ2h0bmF2KCkge1xyXG4gICAgICAgIHRoaXMuX2Zsb2F0aW5nUmlnaHRuYXYgPyB0aGlzLl9mbG9hdGluZ1JpZ2h0bmF2Lm9wZW4oKSA6IGNvbnNvbGUubG9nKCdyaWdodG5hdiBub3QgZm91bmQnKTtcclxuICAgICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlRmxvYXRpbmdSaWdodG5hdigpIHtcclxuICAgICAgICB0aGlzLl9mbG9hdGluZ1JpZ2h0bmF2ID8gdGhpcy5fZmxvYXRpbmdSaWdodG5hdi5jbG9zZSgpIDogY29uc29sZS5sb2coJ3JpZ2h0bmF2IG5vdCBmb3VuZCcpO1xyXG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5GaXhlZFJpZ2h0bmF2KCkge1xyXG4gICAgICAgIHRoaXMuX2ZpeGVkUmlnaHRuYXYgPyB0aGlzLl9maXhlZFJpZ2h0bmF2Lm9wZW4oKSA6IGNvbnNvbGUubG9nKCdyaWdodG5hdiBub3QgZm91bmQnKTtcclxuICAgICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlRml4ZWRSaWdodG5hdigpIHtcclxuICAgICAgICB0aGlzLl9maXhlZFJpZ2h0bmF2ID8gdGhpcy5fZml4ZWRSaWdodG5hdi5jbG9zZSgpIDogY29uc29sZS5sb2coJ3JpZ2h0bmF2IG5vdCBmb3VuZCcpO1xyXG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZVN0YXRlUmlnaHRuYXYocmlnaHRuYXY6IE1hdFNpZGVuYXYgPSB0aGlzLl9mbG9hdGluZ1JpZ2h0bmF2KSB7XHJcbiAgICAgICAgaWYgKHJpZ2h0bmF2KSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyaWdodG5hdiBub3QgZm91bmQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0Zsb2F0aW5nKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbmx5RmxvYXRpbmcgPT09IHRydWUpIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcbiAgICAgICAgbGV0IGlzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGVhY2godGhpcy5fZmxvYXRpbmdSaWdodG5hdkFsaWFzZXMsIChhbGlhczogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1lZGlhLmlzQWN0aXZlKGFsaWFzKSkgeyBpcyA9IHRydWU7IH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=