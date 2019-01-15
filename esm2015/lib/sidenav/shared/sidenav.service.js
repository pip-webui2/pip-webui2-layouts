/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PipMediaService } from '../../media/shared/media.service';
import { each } from '../../shared/layouts.utils';
export class PipSidenavService {
    /**
     * @param {?} media
     */
    constructor(media) {
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
    /**
     * @param {?} aliases
     * @return {?}
     */
    set floatingSidenavAliases(aliases) {
        this._floatingSidenavAliases = aliases;
    }
    /**
     * @return {?}
     */
    get small() {
        return this._small;
    }
    /**
     * @param {?} sm
     * @return {?}
     */
    set small(sm) {
        this._small$.next(sm);
        this._small = sm;
    }
    /**
     * @return {?}
     */
    get small$() {
        return this._small$;
    }
    /**
     * @return {?}
     */
    get floatingSidenavAliases() {
        return this._floatingSidenavAliases;
    }
    /**
     * @return {?}
     */
    get universalSidenav() {
        return this._universalSidenav;
    }
    /**
     * @param {?} sidenav
     * @return {?}
     */
    set universalSidenav(sidenav) {
        this._universalSidenav = sidenav;
    }
    /**
     * @return {?}
     */
    get universalSidenavAliases() {
        return this._universalSidenavAliases;
    }
    /**
     * @param {?} aliases
     * @return {?}
     */
    set universalSidenavAliases(aliases) {
        this._universalSidenavAliases = aliases;
    }
    /**
     * @return {?}
     */
    get isUniversal() {
        return this._isUniversal$.getValue();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isUniversal(val) {
        this._isUniversal$.next(val);
    }
    /**
     * @return {?}
     */
    get floatingSidenav() {
        return this._floatingSidenav;
    }
    /**
     * @param {?} sidenav
     * @return {?}
     */
    set floatingSidenav(sidenav) {
        this._floatingSidenav = sidenav;
    }
    /**
     * @return {?}
     */
    get fixedSidenav() {
        return this._fixedSidenav;
    }
    /**
     * @param {?} sidenav
     * @return {?}
     */
    set fixedSidenav(sidenav) {
        this._fixedSidenav = sidenav;
    }
    /**
     * @return {?}
     */
    get mode() {
        return this._mode$.getValue();
    }
    /**
     * @return {?}
     */
    get mode$() {
        return this._mode$;
    }
    /**
     * @param {?} s
     * @return {?}
     */
    set mode(s) {
        this._mode$.next(s);
    }
    /**
     * @return {?}
     */
    get opened() {
        return this._opened$.getValue();
    }
    /**
     * @return {?}
     */
    get opened$() {
        return this._opened$;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    set opened(open) {
        this._opened$.next(open);
    }
    /**
     * @return {?}
     */
    get active$() {
        return this._active$;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set active(active) {
        this._active$.next(active);
    }
    /**
     * @return {?}
     */
    isActive() {
        if (this._active$.getValue() === true) {
            return true;
        }
        else {
            console.log('Sidenav is not active');
            return false;
        }
    }
    /**
     * @private
     * @return {?}
     */
    toggleSmall() {
        this._small === true ? this.small = false : this.small = true;
    }
    /**
     * @param {?=} sidenav
     * @return {?}
     */
    toggleNav(sidenav) {
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
    }
    /**
     * @return {?}
     */
    toggleOpened() {
        if (!this.isActive()) {
            return;
        }
        this.opened = !this.opened;
    }
    /**
     * @param {?=} sidenav
     * @return {?}
     */
    openNav(sidenav) {
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
    }
    /**
     * @param {?=} sidenav
     * @return {?}
     */
    closeNav(sidenav) {
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
    }
    /**
     * @return {?}
     */
    toggleFloatingNav() {
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
    }
    /**
     * @return {?}
     */
    openFloatingNav() {
        this._floatingSidenav ? this._floatingSidenav.open() : console.log('Floating sidenav not found');
    }
    /**
     * @return {?}
     */
    closeFloatingNav() {
        this._floatingSidenav ? this._floatingSidenav.close() : console.log('Floating sidenav not found');
    }
    /**
     * @return {?}
     */
    toggleFixedNav() {
        this._fixedSidenav ? this.toggleSmall() : console.log('Fixed sidenav not found');
    }
    /**
     * @return {?}
     */
    openFixedNav() {
        this._fixedSidenav ? this.small = false : console.log('Fixed sidenav not found');
    }
    /**
     * @return {?}
     */
    closeFixedNav() {
        this._fixedSidenav ? this.small = true : console.log('Fixed sidenav not found');
    }
    /**
     * @return {?}
     */
    toggleUniversavNav() {
        this._universalSidenav ? this._universalSidenav.toggle() : console.log('Universal sidenav was not found');
    }
    /**
     * @return {?}
     */
    openUniversavNav() {
        this._universalSidenav ? this._universalSidenav.open() : console.log('Universal sidenav was not found');
    }
    /**
     * @return {?}
     */
    closeUniversavNav() {
        this._universalSidenav ? this._universalSidenav.close() : console.log('Universal sidenav was not found');
    }
    /**
     * @param {?=} sidenav
     * @return {?}
     */
    changeStateNav(sidenav = this._floatingSidenav) {
        if (sidenav) {
        }
        else {
            console.log('Sidenav not found');
        }
    }
    /**
     * @return {?}
     */
    isUniversalFloating() {
        /** @type {?} */
        let is = false;
        for (const alias of this._universalSidenavAliases) {
            if (this.media.isMainActive(alias)) {
                is = true;
                break;
            }
        }
        return is;
    }
    /**
     * @return {?}
     */
    isFloating() {
        /** @type {?} */
        let is = false;
        each(this._floatingSidenavAliases, (alias) => {
            if (this.media.isMainActive(alias)) {
                is = true;
            }
        });
        return is;
    }
}
PipSidenavService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PipSidenavService.ctorParameters = () => [
    { type: PipMediaService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlwLXdlYnVpMi1sYXlvdXRzLyIsInNvdXJjZXMiOlsibGliL3NpZGVuYXYvc2hhcmVkL3NpZGVuYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHbEQsTUFBTSxPQUFPLGlCQUFpQjs7OztJQWExQixZQUNZLEtBQXNCO1FBQXRCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBVjFCLFdBQU0sR0FBNEIsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsYUFBUSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCw0QkFBdUIsR0FBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCw2QkFBd0IsR0FBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRCxhQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELGtCQUFhLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBSXpFLENBQUM7Ozs7O0lBRUwsSUFBVyxzQkFBc0IsQ0FBQyxPQUFpQjtRQUMvQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsT0FBTyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxJQUFXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUFXLEtBQUssQ0FBQyxFQUFXO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUFXLE1BQU07UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELElBQVcsc0JBQXNCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxJQUFXLGdCQUFnQjtRQUN2QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELElBQVcsZ0JBQWdCLENBQUMsT0FBbUI7UUFDM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsSUFBVyx1QkFBdUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxJQUFXLHVCQUF1QixDQUFDLE9BQWlCO1FBQ2hELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxPQUFPLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELElBQVcsV0FBVztRQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxJQUFXLFdBQVcsQ0FBQyxHQUFZO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxJQUFXLGVBQWU7UUFDdEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxJQUFXLGVBQWUsQ0FBQyxPQUFtQjtRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxJQUFXLFlBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsSUFBVyxZQUFZLENBQUMsT0FBbUI7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELElBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsSUFBVyxLQUFLO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsSUFBVyxJQUFJLENBQUMsQ0FBUztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsSUFBVyxNQUFNO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxJQUFXLE9BQU87UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxJQUFXLE1BQU0sQ0FBQyxJQUFhO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxJQUFXLE9BQU87UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxJQUFXLE1BQU0sQ0FBQyxNQUFlO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1NBQUU7YUFBTTtZQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDckMsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDOzs7OztJQUVPLFdBQVc7UUFDZixJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLE9BQW9CO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFakMsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDcEI7YUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDekIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDN0I7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6RTtJQUNMLENBQUM7Ozs7SUFFTSxZQUFZO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDOzs7OztJQUVNLE9BQU8sQ0FBQyxPQUFvQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRWpDLElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNCO2FBQU07WUFDSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3BFO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTSxRQUFRLENBQUMsT0FBb0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUVqQyxJQUFJLE9BQU8sRUFBRTtZQUNULE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNuQjthQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN6QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUM1QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RFO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVNLGlCQUFpQjtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRWpDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztTQUMvQzthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQzs7OztJQUVNLGVBQWU7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUNyRyxDQUFDOzs7O0lBRU0sZ0JBQWdCO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDdEcsQ0FBQzs7OztJQUVNLGNBQWM7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDckYsQ0FBQzs7OztJQUVNLFlBQVk7UUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Ozs7SUFFTSxhQUFhO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDcEYsQ0FBQzs7OztJQUVNLGtCQUFrQjtRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQzlHLENBQUM7Ozs7SUFFTSxnQkFBZ0I7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUM1RyxDQUFDOzs7O0lBRU0saUJBQWlCO1FBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDN0csQ0FBQzs7Ozs7SUFFTSxjQUFjLENBQUMsVUFBc0IsSUFBSSxDQUFDLGdCQUFnQjtRQUM3RCxJQUFJLE9BQU8sRUFBRTtTQUVaO2FBQU07WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDOzs7O0lBRU0sbUJBQW1COztZQUNsQixFQUFFLEdBQUcsS0FBSztRQUVkLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQy9DLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2hDLEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBQ1YsTUFBTTthQUNUO1NBQ0o7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFFTSxVQUFVOztZQUNULEVBQUUsR0FBRyxLQUFLO1FBRWQsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQ2pELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQUUsRUFBRSxHQUFHLElBQUksQ0FBQzthQUFFO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDOzs7WUE3T0osVUFBVTs7OztZQUhGLGVBQWU7Ozs7SUFLcEIsNkNBQW9DOztJQUNwQywwQ0FBaUM7O0lBQ2pDLDhDQUFxQzs7Ozs7SUFDckMsbUNBQXNFOzs7OztJQUN0RSxxQ0FBdUU7Ozs7O0lBQ3ZFLG9EQUF5RDs7Ozs7SUFDekQscURBQTZEOzs7OztJQUM3RCxtQ0FBdUI7Ozs7O0lBQ3ZCLG9DQUF1RTs7Ozs7SUFDdkUscUNBQXVFOzs7OztJQUN2RSwwQ0FBNkU7Ozs7O0lBR3pFLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5pbXBvcnQgeyBQaXBNZWRpYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tZWRpYS9zaGFyZWQvbWVkaWEuc2VydmljZSc7XHJcbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9zaGFyZWQvbGF5b3V0cy51dGlscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQaXBTaWRlbmF2U2VydmljZSB7XHJcbiAgICBwdWJsaWMgX2Zsb2F0aW5nU2lkZW5hdjogTWF0U2lkZW5hdjtcclxuICAgIHB1YmxpYyBfZml4ZWRTaWRlbmF2OiBNYXRTaWRlbmF2O1xyXG4gICAgcHVibGljIF91bml2ZXJzYWxTaWRlbmF2OiBNYXRTaWRlbmF2O1xyXG4gICAgcHJpdmF0ZSBfbW9kZSQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnc2lkZScpO1xyXG4gICAgcHJpdmF0ZSBfb3BlbmVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcclxuICAgIHByaXZhdGUgX2Zsb2F0aW5nU2lkZW5hdkFsaWFzZXM6IHN0cmluZ1tdID0gWyd4cycsICdzbSddO1xyXG4gICAgcHJpdmF0ZSBfdW5pdmVyc2FsU2lkZW5hdkFsaWFzZXM6IHN0cmluZ1tdID0gWydsdC1zbScsICdzbSddO1xyXG4gICAgcHJpdmF0ZSBfc21hbGwgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3NtYWxsJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbiAgICBwcml2YXRlIF9hY3RpdmUkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xyXG4gICAgcHJpdmF0ZSBfaXNVbml2ZXJzYWwkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBtZWRpYTogUGlwTWVkaWFTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZmxvYXRpbmdTaWRlbmF2QWxpYXNlcyhhbGlhc2VzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMuX2Zsb2F0aW5nU2lkZW5hdkFsaWFzZXMgPSBhbGlhc2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc21hbGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NtYWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgc21hbGwoc206IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zbWFsbCQubmV4dChzbSk7XHJcbiAgICAgICAgdGhpcy5fc21hbGwgPSBzbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNtYWxsJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc21hbGwkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZmxvYXRpbmdTaWRlbmF2QWxpYXNlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmxvYXRpbmdTaWRlbmF2QWxpYXNlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVuaXZlcnNhbFNpZGVuYXYoKTogTWF0U2lkZW5hdiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VuaXZlcnNhbFNpZGVuYXY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB1bml2ZXJzYWxTaWRlbmF2KHNpZGVuYXY6IE1hdFNpZGVuYXYpIHtcclxuICAgICAgICB0aGlzLl91bml2ZXJzYWxTaWRlbmF2ID0gc2lkZW5hdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVuaXZlcnNhbFNpZGVuYXZBbGlhc2VzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91bml2ZXJzYWxTaWRlbmF2QWxpYXNlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHVuaXZlcnNhbFNpZGVuYXZBbGlhc2VzKGFsaWFzZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5fdW5pdmVyc2FsU2lkZW5hdkFsaWFzZXMgPSBhbGlhc2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNVbml2ZXJzYWwoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVW5pdmVyc2FsJC5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaXNVbml2ZXJzYWwodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNVbml2ZXJzYWwkLm5leHQodmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGZsb2F0aW5nU2lkZW5hdigpOiBNYXRTaWRlbmF2IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmxvYXRpbmdTaWRlbmF2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZmxvYXRpbmdTaWRlbmF2KHNpZGVuYXY6IE1hdFNpZGVuYXYpIHtcclxuICAgICAgICB0aGlzLl9mbG9hdGluZ1NpZGVuYXYgPSBzaWRlbmF2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZml4ZWRTaWRlbmF2KCk6IE1hdFNpZGVuYXYge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maXhlZFNpZGVuYXY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBmaXhlZFNpZGVuYXYoc2lkZW5hdjogTWF0U2lkZW5hdikge1xyXG4gICAgICAgIHRoaXMuX2ZpeGVkU2lkZW5hdiA9IHNpZGVuYXY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGUkLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtb2RlJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlJDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG1vZGUoczogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZSQubmV4dChzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BlbmVkJC5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgb3BlbmVkJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BlbmVkJDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG9wZW5lZChvcGVuOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fb3BlbmVkJC5uZXh0KG9wZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWN0aXZlJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlJDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGFjdGl2ZShhY3RpdmU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9hY3RpdmUkLm5leHQoYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNBY3RpdmUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZSQuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSkgeyByZXR1cm4gdHJ1ZTsgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NpZGVuYXYgaXMgbm90IGFjdGl2ZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9nZ2xlU21hbGwoKSB7XHJcbiAgICAgICAgdGhpcy5fc21hbGwgPT09IHRydWUgPyB0aGlzLnNtYWxsID0gZmFsc2UgOiB0aGlzLnNtYWxsID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlTmF2KHNpZGVuYXY/OiBNYXRTaWRlbmF2KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGlmIChzaWRlbmF2KSB7XHJcbiAgICAgICAgICAgIHNpZGVuYXYudG9nZ2xlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzVW5pdmVyc2FsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlVW5pdmVyc2F2TmF2KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Zsb2F0aW5nKCkgPyB0aGlzLnRvZ2dsZUZsb2F0aW5nTmF2KCkgOiAgdGhpcy50b2dnbGVGaXhlZE5hdigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlT3BlbmVkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuTmF2KHNpZGVuYXY/OiBNYXRTaWRlbmF2KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGlmIChzaWRlbmF2KSB7XHJcbiAgICAgICAgICAgIHNpZGVuYXYub3BlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1VuaXZlcnNhbCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5Vbml2ZXJzYXZOYXYoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmxvYXRpbmcoKSA/IHRoaXMub3BlbkZsb2F0aW5nTmF2KCkgOiB0aGlzLm9wZW5GaXhlZE5hdigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlTmF2KHNpZGVuYXY/OiBNYXRTaWRlbmF2KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGlmIChzaWRlbmF2KSB7XHJcbiAgICAgICAgICAgIHNpZGVuYXYuY2xvc2UoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNVbml2ZXJzYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVVuaXZlcnNhdk5hdigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGbG9hdGluZygpID8gdGhpcy5jbG9zZUZsb2F0aW5nTmF2KCkgOiB0aGlzLmNsb3NlRml4ZWROYXYoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRmxvYXRpbmdOYXYoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9mbG9hdGluZ1NpZGVuYXYpIHtcclxuICAgICAgICAgICAgdGhpcy5fZmxvYXRpbmdTaWRlbmF2LnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLl9mbG9hdGluZ1NpZGVuYXYub3BlbmVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGbG9hdGluZyBzaWRlbmF2IG5vdCBmb3VuZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlbkZsb2F0aW5nTmF2KCkge1xyXG4gICAgICAgIHRoaXMuX2Zsb2F0aW5nU2lkZW5hdiA/IHRoaXMuX2Zsb2F0aW5nU2lkZW5hdi5vcGVuKCkgOiBjb25zb2xlLmxvZygnRmxvYXRpbmcgc2lkZW5hdiBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VGbG9hdGluZ05hdigpIHtcclxuICAgICAgICB0aGlzLl9mbG9hdGluZ1NpZGVuYXYgPyB0aGlzLl9mbG9hdGluZ1NpZGVuYXYuY2xvc2UoKSA6IGNvbnNvbGUubG9nKCdGbG9hdGluZyBzaWRlbmF2IG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVGaXhlZE5hdigpIHtcclxuICAgICAgICB0aGlzLl9maXhlZFNpZGVuYXYgPyB0aGlzLnRvZ2dsZVNtYWxsKCkgOiBjb25zb2xlLmxvZygnRml4ZWQgc2lkZW5hdiBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlbkZpeGVkTmF2KCkge1xyXG4gICAgICAgIHRoaXMuX2ZpeGVkU2lkZW5hdiA/IHRoaXMuc21hbGwgPSBmYWxzZSA6IGNvbnNvbGUubG9nKCdGaXhlZCBzaWRlbmF2IG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZUZpeGVkTmF2KCkge1xyXG4gICAgICAgIHRoaXMuX2ZpeGVkU2lkZW5hdiA/IHRoaXMuc21hbGwgPSB0cnVlIDogY29uc29sZS5sb2coJ0ZpeGVkIHNpZGVuYXYgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZVVuaXZlcnNhdk5hdigpIHtcclxuICAgICAgICB0aGlzLl91bml2ZXJzYWxTaWRlbmF2ID8gdGhpcy5fdW5pdmVyc2FsU2lkZW5hdi50b2dnbGUoKSA6IGNvbnNvbGUubG9nKCdVbml2ZXJzYWwgc2lkZW5hdiB3YXMgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5Vbml2ZXJzYXZOYXYoKSB7XHJcbiAgICAgICAgdGhpcy5fdW5pdmVyc2FsU2lkZW5hdiA/IHRoaXMuX3VuaXZlcnNhbFNpZGVuYXYub3BlbigpIDogY29uc29sZS5sb2coJ1VuaXZlcnNhbCBzaWRlbmF2IHdhcyBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VVbml2ZXJzYXZOYXYoKSB7XHJcbiAgICAgICAgdGhpcy5fdW5pdmVyc2FsU2lkZW5hdiA/IHRoaXMuX3VuaXZlcnNhbFNpZGVuYXYuY2xvc2UoKSA6IGNvbnNvbGUubG9nKCdVbml2ZXJzYWwgc2lkZW5hdiB3YXMgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZVN0YXRlTmF2KHNpZGVuYXY6IE1hdFNpZGVuYXYgPSB0aGlzLl9mbG9hdGluZ1NpZGVuYXYpIHtcclxuICAgICAgICBpZiAoc2lkZW5hdikge1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2lkZW5hdiBub3QgZm91bmQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVW5pdmVyc2FsRmxvYXRpbmcoKSB7XHJcbiAgICAgICAgbGV0IGlzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYWxpYXMgb2YgdGhpcy5fdW5pdmVyc2FsU2lkZW5hdkFsaWFzZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWEuaXNNYWluQWN0aXZlKGFsaWFzKSkge1xyXG4gICAgICAgICAgICAgICAgaXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNGbG9hdGluZygpIHtcclxuICAgICAgICBsZXQgaXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZWFjaCh0aGlzLl9mbG9hdGluZ1NpZGVuYXZBbGlhc2VzLCAoYWxpYXM6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYS5pc01haW5BY3RpdmUoYWxpYXMpKSB7IGlzID0gdHJ1ZTsgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaXM7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==