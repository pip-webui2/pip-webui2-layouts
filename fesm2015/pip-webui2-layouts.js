import { map } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, Subscription, combineLatest } from 'rxjs';
import { Component, Renderer, ElementRef, Input, NgModule, Injectable, ViewChild, ChangeDetectorRef, Renderer2, EventEmitter, Output, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaObserver, FlexLayoutModule, ShowHideDirective, BREAKPOINT } from '@angular/flex-layout';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipDocumentLayoutComponent {
    /**
     * @param {?} renderer
     * @param {?} elRef
     */
    constructor(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        renderer.setElementClass(elRef.nativeElement, 'pip-document-layout', true);
    }
    /**
     * @param {?} toolbar
     * @return {?}
     */
    set toolbar(toolbar) {
        this.elRef.nativeElement.classList[toolbar === 'true' || toolbar === true ? 'add' : 'remove']('pip-with-toolbar');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
PipDocumentLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-document-layout',
                template: "<pip-scrollable class=\"pip-document-container\">\r\n    <pip-scrollable-content>\r\n        <ng-content select=\"pip-document-content\">\r\n        </ng-content>\r\n    </pip-scrollable-content>\r\n    <ng-content select=\"pip-document-footer\">\r\n    </ng-content>\r\n</pip-scrollable>",
                styles: [".bootbarn-cool-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.bootbarn-cool-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.bootbarn-cool-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.bootbarn-mono-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.bootbarn-mono-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.bootbarn-mono-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.bootbarn-warm-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.bootbarn-warm-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.bootbarn-warm-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.pip-amber-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.pip-amber-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.pip-amber-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.pip-black-theme :host.pip-document-layout{color:#fff!important;background:#424242}.pip-black-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(255,255,255,.12)}.pip-black-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(255,255,255,.12)!important;border-right:1px solid rgba(255,255,255,.12)!important;box-sizing:border-box}.pip-blue-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.pip-blue-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.pip-blue-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.candy-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.candy-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.candy-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.pip-dark-theme :host.pip-document-layout{color:#fff!important;background:#424242}.pip-dark-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(255,255,255,.12)}.pip-dark-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(255,255,255,.12)!important;border-right:1px solid rgba(255,255,255,.12)!important;box-sizing:border-box}.pip-green-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.pip-green-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.pip-green-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.pip-grey-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.pip-grey-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.pip-grey-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.pip-navy-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.pip-navy-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.pip-navy-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.pip-orange-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.pip-orange-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.pip-orange-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.pip-pink-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.pip-pink-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.pip-pink-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.unicorn-dark-theme :host.pip-document-layout{color:#fff!important;background:#424242}.unicorn-dark-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(255,255,255,.12)}.unicorn-dark-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(255,255,255,.12)!important;border-right:1px solid rgba(255,255,255,.12)!important;box-sizing:border-box}:host.pip-document-layout{z-index:10;display:flex;box-shadow:0 1px 5px 0 rgba(0,0,0,.26);border-radius:2px;flex:1 0 100%;position:absolute;height:calc(100% - 24px);left:calc(50% - 480px);margin:0 auto;width:960px;max-width:100%}:host.pip-document-layout.pip-with-toolbar{margin-top:-64px}:host.pip-document-layout .pip-document-container{width:100%;font-family:Roboto;overflow:hidden;overflow-y:auto}:host.pip-document-layout .pip-document-container pip-scrollable-content{height:100%}:host.pip-document-layout .pip-document-container /deep/ pip-document-content{padding:16px;display:block}:host.pip-document-layout .pip-document-container /deep/ pip-document-footer{padding:16px;display:block}"]
            }] }
];
/** @nocollapse */
PipDocumentLayoutComponent.ctorParameters = () => [
    { type: Renderer },
    { type: ElementRef }
];
PipDocumentLayoutComponent.propDecorators = {
    toolbar: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipScrollableContentComponent {
    /**
     * @return {?}
     */
    ngOnInit() { }
}
PipScrollableContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-scrollable-content',
                template: '<ng-content></ng-content>',
                styles: [":host{overflow-y:auto;overflow-x:hidden}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipScrollableComponent {
    /**
     * @return {?}
     */
    ngOnInit() { }
}
PipScrollableComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-scrollable',
                template: '<ng-content></ng-content>',
                styles: [":host{box-sizing:border-box;display:flex;flex-direction:column}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipScrollableModule {
}
PipScrollableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PipScrollableContentComponent,
                    PipScrollableComponent
                ],
                imports: [],
                exports: [
                    PipScrollableContentComponent,
                    PipScrollableComponent
                ],
                providers: [
                    PipScrollableContentComponent,
                    PipScrollableComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipDocumentLayoutModule {
}
PipDocumentLayoutModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PipDocumentLayoutComponent
                ],
                imports: [
                    PipScrollableModule
                ],
                exports: [
                    PipDocumentLayoutComponent
                ],
                providers: [
                    PipDocumentLayoutComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const attachEvent = ((/** @type {?} */ (document))).attachEvent;
/** @type {?} */
const isIE = navigator.userAgent.match(/Trident/);
/**
 * @param {?} callback
 * @return {?}
 */
function requestFrame(callback) {
    'ngInject';
    /** @type {?} */
    const frame = window.requestAnimationFrame
        || ((/** @type {?} */ (window))).mozRequestAnimationFrame
        || ((/** @type {?} */ (window))).webkitRequestAnimationFrame
        || function (cb) {
            return window.setTimeout(cb, 20);
        };
    return frame(callback);
}
/**
 * @return {?}
 */
function cancelFrame() {
    'ngInject';
    /** @type {?} */
    const cancel = window.cancelAnimationFrame
        || ((/** @type {?} */ (window))).mozCancelAnimationFrame
        || ((/** @type {?} */ (window))).webkitCancelAnimationFrame
        || window.clearTimeout;
    return function (id) {
        return cancel(id);
    };
}
/**
 * @param {?} event
 * @return {?}
 */
function resizeListener(event) {
    /** @type {?} */
    const win = event.target || event.srcElement;
    if (win.__resizeRAF__) {
        cancelFrame( /*win.__resizeRAF__*/);
    }
    win.__resizeRAF__ = requestFrame(function () {
        /** @type {?} */
        const trigger = win.__resizeTrigger__;
        trigger.__resizeListeners__.forEach(function (fn) {
            fn.call(trigger, event);
        });
    });
}
/**
 * @param {?} event
 * @return {?}
 */
function loadListener(event) {
    if (this.contentDocument) {
        this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__;
        this.contentDocument.defaultView.addEventListener('resize', resizeListener);
    }
}
/**
 * @param {?} element
 * @param {?} listener
 * @return {?}
 */
function addResizeListener(element, listener) {
    'ngInject';
    if (!element.__resizeListeners__) {
        element.__resizeListeners__ = [];
        if (attachEvent) {
            element.__resizeTrigger__ = element;
            element.attachEvent('onresize', resizeListener);
        }
        else {
            // if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
            /** @type {?} */
            const obj = element.__resizeTrigger__ = document.createElement('object');
            // tslint:disable-next-line:max-line-length
            obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
            obj.__resizeElement__ = element;
            obj.onload = loadListener;
            obj.type = 'text/html';
            if (isIE) {
                element.appendChild(obj);
            }
            obj.data = 'about:blank';
            if (!isIE) {
                element.appendChild(obj);
            }
        }
    }
    element.__resizeListeners__.push(listener);
}
/**
 * @param {?} element
 * @param {?} listener
 * @return {?}
 */
function removeResizeListener(element, listener) {
    'ngInject';
    if (listener) {
        element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(listener), 1);
    }
    if (!element.__resizeListeners__.length) {
        if (attachEvent) {
            element.detachEvent('onresize', resizeListener);
        }
        else {
            if (element.__resizeTrigger__.contentDocument) {
                element.__resizeTrigger__.contentDocument.defaultView.removeEventListener('resize', resizeListener);
                element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
            }
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipMediaService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} array
 * @param {?} iteratee
 * @return {?}
 */
function each(array, iteratee) {
    /** @type {?} */
    let index = -1;
    /** @type {?} */
    const length = array == null ? 0 : array.length;
    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function intersection(a, b) {
    /** @type {?} */
    let ai = 0;
    /** @type {?} */
    let bi = 0;
    /** @type {?} */
    const result = [];
    while (ai < a.length && bi < b.length) {
        if (a[ai] < b[bi]) {
            ai++;
        }
        else if (a[ai] > b[bi]) {
            bi++;
        }
        else /* they're equal */ {
            result.push(a[ai]);
            ai++;
            bi++;
        }
    }
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipSidenavService {
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
        if (sidenav) ;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipRightnavService {
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
        if (rightnav) ;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipMainLayoutComponent {
    /**
     * @param {?} renderer
     * @param {?} elRef
     * @param {?} cd
     * @param {?} mainMedia
     * @param {?} sidenavService
     * @param {?} rightnavService
     * @param {?} media
     */
    constructor(renderer, elRef, cd, mainMedia, sidenavService, rightnavService, media) {
        this.renderer = renderer;
        this.elRef = elRef;
        this.cd = cd;
        this.mainMedia = mainMedia;
        this.sidenavService = sidenavService;
        this.rightnavService = rightnavService;
        this.media = media;
        this._opened$ = new BehaviorSubject(false);
        this.small$ = new BehaviorSubject(false);
        renderer.setElementClass(elRef.nativeElement, 'pip-main-layout', true);
        this.listener = () => { this.onResize(); };
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
    get active$() {
        return this.sidenavService.active$;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.pipContainer != null) {
            /** @type {?} */
            const firstSym = this.pipContainer.substr(0, 1);
            /** @type {?} */
            const element = firstSym === '#'
                ? document.getElementById(this.pipContainer.substring(1, this.pipContainer.length))
                : firstSym === '.'
                    ? document.getElementsByClassName(this.pipContainer.substring(1, this.pipContainer.length))
                    : document.getElementsByTagName(this.pipContainer);
            this.element = firstSym === '#' ? element : element.length > 0 ? element[0] : this.elRef.nativeElement;
        }
        else {
            this.element = this.elRef.nativeElement;
        }
        addResizeListener(this.element, this.listener);
        setTimeout(() => {
            this.mainMedia.updateMainLayoutBreakpoints(this.element.offsetWidth);
        });
        this.rightnavService.opened$.subscribe((opened) => {
            if (this.rightnavService._fixedRightnav) {
                this.onResize();
            }
            this.cd.detectChanges();
        });
        this.media.media$.subscribe((change) => {
            if (this.rightnavService.onlyFloating === true) {
                return;
            }
            if (this.sidenavService.floatingSidenavAliases.includes(change.mqAlias)) {
                if (this.rightnavService.fixedRightnav
                    && this.rightnavService.fixedRightnav.opened
                    && this.rightnavService.floatingRightnav) {
                    this.rightnavService.closeFixedRightnav();
                    this.rightnavService.floatingRightnav.open();
                }
            }
            else {
                if (this.rightnavService.floatingRightnav && this.rightnavService.floatingRightnav.opened) {
                    if (this.rightnavService.fixedRightnav) {
                        this.rightnavService.fixedRightnav.open();
                    }
                    this.rightnavService.floatingRightnav.close();
                }
            }
        });
        this.sidenavService.small$.subscribe((small) => {
            this.small$.next(small);
            this.cd.detectChanges();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        removeEventListener(this.element, this.listener);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.sidenavService.fixedSidenav = this.sidenav;
        this.rightnavService.fixedRightnav = this.rightnav;
        this.onResize();
    }
    /**
     * @private
     * @return {?}
     */
    onResize() {
        /** @type {?} */
        const rightnavWidth = this.rightnavService._fixedRightnav && this.rightnavService._fixedRightnav.opened
            ? this.rightnavService._fixedRightnav['_elementRef'].nativeElement.offsetWidth
            : 0;
        this.mainMedia.updateMainLayoutBreakpoints(this.element.offsetWidth - rightnavWidth);
    }
}
PipMainLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-main-layout',
                template: "<mat-sidenav-container class=\"pip-sidenav-container pip-sidenav-fixed-container\" [ngClass]=\"{ 'pip-small': small$ | async }\">\r\n    <mat-sidenav #fixedSidenav class=\"pip-sidenav\" [opened]=\"active$ | async\" mode=\"side\" position=\"start\">\r\n        <ng-content select=\"pip-sidenav-fixed\"></ng-content>\r\n    </mat-sidenav>\r\n    <mat-sidenav #fixedRightnav class=\"pip-rightnav\" opened=\"false\" mode=\"side\" position=\"end\">\r\n        <ng-content select=\"pip-rightnav-fixed\"></ng-content>\r\n    </mat-sidenav>\r\n    <ng-content select=\"pip-main-content\"></ng-content>\r\n</mat-sidenav-container>",
                styles: [":host{overflow-x:hidden!important}:host /deep/ pip-main-content{flex:1 1 100%;box-sizing:border-box;display:flex;flex-direction:column;max-width:100%}::ng-deep .pip-main-layout{position:absolute;top:64px;bottom:0;left:0;right:0}::ng-deep .pip-sm .pip-main-layout,::ng-deep .pip-xs .pip-main-layout{top:56px}mat-sidenav.pip-sidenav{max-width:250px;width:250px;overflow-x:hidden}:host ::ng-deep mat-sidenav-content{transition:.3s;display:flex;margin-left:250px!important;flex-direction:column}.pip-sidenav-container{display:block;height:100%}:host .mat-drawer.mat-drawer-end{width:250px}::ng-deep .pip-main-lg .pip-main-layout .pip-sidenav-fixed-container.pip-small mat-sidenav.pip-sidenav{max-width:64px;width:64px;min-width:64px}::ng-deep .pip-main-lg .pip-main-layout .pip-sidenav-fixed-container.pip-small ::ng-deep mat-sidenav-content{margin-left:64px!important}::ng-deep .pip-main-md .pip-main-layout .pip-sidenav-fixed-container mat-sidenav.pip-sidenav{max-width:64px;width:64px;min-width:64px}::ng-deep .pip-main-md .pip-main-layout .pip-sidenav-fixed-container mat-sidenav-content{margin-left:64px!important}::ng-deep .pip-main-sm .pip-main-layout .pip-sidenav-fixed-container mat-sidenav.pip-sidenav,::ng-deep .pip-main-xs .pip-main-layout .pip-sidenav-fixed-container mat-sidenav.pip-sidenav{max-width:0;width:0;min-width:0;border-right:none!important}::ng-deep .pip-main-sm .pip-main-layout .pip-sidenav-fixed-container mat-sidenav-content,::ng-deep .pip-main-xs .pip-main-layout .pip-sidenav-fixed-container mat-sidenav-content{margin-left:0!important}:host.pip-sidenav-not-active mat-sidenav.pip-sidenav{max-width:0!important;width:0!important;min-width:0!important}:host.pip-sidenav-not-active .pip-sidenav-fixed-container ::ng-deep mat-sidenav-content{margin-left:0!important}"]
            }] }
];
/** @nocollapse */
PipMainLayoutComponent.ctorParameters = () => [
    { type: Renderer },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: PipMediaService },
    { type: PipSidenavService },
    { type: PipRightnavService },
    { type: MediaObserver }
];
PipMainLayoutComponent.propDecorators = {
    pipContainer: [{ type: Input }],
    sidenav: [{ type: ViewChild, args: ['fixedSidenav',] }],
    rightnav: [{ type: ViewChild, args: ['fixedRightnav',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipMainLayoutModule {
}
PipMainLayoutModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PipMainLayoutComponent
                ],
                imports: [
                    CommonModule,
                    FlexLayoutModule,
                    MatSidenavModule
                ],
                exports: [
                    PipMainLayoutComponent
                ],
                providers: [
                    PipMainLayoutComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipMainLayoutAltComponent {
    /**
     * @param {?} renderer2
     * @param {?} elRef
     * @param {?} cd
     * @param {?} mainMedia
     * @param {?} sidenavService
     * @param {?} rightnavService
     * @param {?} media
     */
    constructor(renderer2, elRef, cd, mainMedia, sidenavService, rightnavService, media) {
        this.renderer2 = renderer2;
        this.elRef = elRef;
        this.cd = cd;
        this.mainMedia = mainMedia;
        this.sidenavService = sidenavService;
        this.rightnavService = rightnavService;
        this.media = media;
        this.subs = new Subscription();
        this.uFloating$ = new BehaviorSubject(false);
        this.small$ = new BehaviorSubject(false);
        this.renderer2.addClass(this.elRef.nativeElement, 'pip-main-layout-alt');
        this.listener = () => { this.onResize(); };
        this.sidenavService.fixedSidenav = null;
        this.sidenavService.isUniversal = true;
        this.sidenavService.opened = false;
        this.sidenavService.mode = 'over';
        this.activeSidenav$ = combineLatest(this.sidenavService.opened$, this.sidenavService.active$)
            .pipe(map(([opened, active]) => {
            return opened && active;
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.pipContainer != null) {
            /** @type {?} */
            const firstSym = this.pipContainer.substr(0, 1);
            /** @type {?} */
            const element = firstSym === '#'
                ? document.getElementById(this.pipContainer.substring(1, this.pipContainer.length))
                : firstSym === '.'
                    ? document.getElementsByClassName(this.pipContainer.substring(1, this.pipContainer.length))
                    : document.getElementsByTagName(this.pipContainer);
            this.element = firstSym === '#' ? element : element.length > 0 ? element[0] : this.elRef.nativeElement;
        }
        else {
            this.element = this.elRef.nativeElement;
        }
        addResizeListener(this.element, this.listener);
        setTimeout(() => {
            this.mainMedia.updateMainLayoutBreakpoints(this.element.offsetWidth);
        });
        this.rightnavService.opened$.subscribe((opened) => {
            if (this.rightnavService._fixedRightnav) {
                this.onResize();
            }
            this.cd.detectChanges();
        });
        this.media.media$.subscribe((change) => {
            if (this.rightnavService.onlyFloating === true) {
                return;
            }
            if (this.sidenavService.floatingSidenavAliases.includes(change.mqAlias)) {
                if (this.rightnavService.fixedRightnav
                    && this.rightnavService.fixedRightnav.opened
                    && this.rightnavService.floatingRightnav) {
                    this.rightnavService.closeFixedRightnav();
                    this.rightnavService.floatingRightnav.open();
                }
            }
            else {
                if (this.rightnavService.floatingRightnav && this.rightnavService.floatingRightnav.opened) {
                    if (this.rightnavService.fixedRightnav) {
                        this.rightnavService.fixedRightnav.open();
                    }
                    this.rightnavService.floatingRightnav.close();
                }
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        removeEventListener(this.element, this.listener);
        this.subs.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.uFloating$.next(this.sidenavService.isUniversalFloating());
        this.subs.add(this.mainMedia.asObservableMain()
            .subscribe((change) => {
            /** @type {?} */
            const floating = this.sidenavService.isUniversalFloating();
            if (this.uFloating$.getValue() !== floating) {
                setTimeout(() => this.uFloating$.next(floating), 0);
            }
        }));
        this.onResize();
        this.sidenavService.universalSidenav = this.sidenav;
        this.rightnavService.fixedRightnav = this.rightnav;
    }
    /**
     * @return {?}
     */
    backdropClick() {
        this.sidenavService.closeNav();
    }
    /**
     * @private
     * @return {?}
     */
    onResize() {
        /** @type {?} */
        const rightnavWidth = this.rightnavService._fixedRightnav && this.rightnavService._fixedRightnav.opened
            ? this.rightnavService._fixedRightnav['_elementRef'].nativeElement.offsetWidth
            : 0;
        this.mainMedia.updateMainLayoutBreakpoints(this.element.offsetWidth - rightnavWidth);
    }
}
PipMainLayoutAltComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-main-layout-alt',
                template: "<mat-sidenav-container class=\"pip-sidenav-container pip-sidenav-fixed-container\"\r\n                       [style.zIndex]=\"(uFloating$.asObservable() | async) ? 0 : 'inherit'\" (backdropClick)=\"backdropClick()\">\r\n    <mat-sidenav #universalSidenav class=\"pip-sidenav\" [opened]=\"activeSidenav$ | async\" mode=\"sidenavService.mode$ | async\"\r\n                 [fixedInViewport]=\"uFloating$.asObservable() | async\" fixedTopGap=\"0\" position=\"start\">\r\n        <ng-content select=\"pip-sidenav\"></ng-content>\r\n    </mat-sidenav>\r\n    <mat-sidenav #fixedRightnav class=\"pip-rightnav\" opened=\"false\" [mode]=\"rightnavService.fixedRightnavMode$ | async\" position=\"end\">\r\n        <ng-content select=\"pip-rightnav-fixed\"></ng-content>\r\n    </mat-sidenav>\r\n    <ng-content select=\"pip-main-content\"></ng-content>\r\n</mat-sidenav-container>",
                styles: [":host{overflow-x:hidden!important}:host /deep/ pip-main-content{flex:1 1 100%;box-sizing:border-box;display:flex;flex-direction:column;max-width:100%}::ng-deep .pip-main-layout-alt{position:absolute;top:64px;bottom:0;left:0;right:0}::ng-deep .pip-sm .pip-main-layout-alt,::ng-deep .pip-xs .pip-main-layout-alt{top:56px}mat-sidenav.pip-sidenav{max-width:250px;width:250px;overflow-x:hidden}:host ::ng-deep mat-sidenav-content{transition:.3s;display:flex;overflow-x:hidden;flex-direction:column}.pip-sidenav-container{display:block;height:100%}/deep/ .pip-main-gt-sm .pip-sidenav-container .mat-drawer-backdrop{background-color:transparent}:host .mat-drawer.mat-drawer-end{width:250px}"]
            }] }
];
/** @nocollapse */
PipMainLayoutAltComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: PipMediaService },
    { type: PipSidenavService },
    { type: PipRightnavService },
    { type: MediaObserver }
];
PipMainLayoutAltComponent.propDecorators = {
    pipContainer: [{ type: Input }],
    sidenav: [{ type: ViewChild, args: ['universalSidenav',] }],
    rightnav: [{ type: ViewChild, args: ['fixedRightnav',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipMainLayoutAltModule {
}
PipMainLayoutAltModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PipMainLayoutAltComponent
                ],
                imports: [
                    CommonModule,
                    FlexLayoutModule,
                    MatSidenavModule
                ],
                exports: [
                    PipMainLayoutAltComponent
                ],
                providers: [
                    PipMainLayoutAltComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const masonry = require('masonry-layout');
class PipTilesLayoutComponent {
    /**
     * @param {?} renderer
     * @param {?} elRef
     * @param {?} cd
     */
    constructor(renderer, elRef, cd) {
        this.renderer = renderer;
        this.elRef = elRef;
        this.cd = cd;
        this.animation = true;
        this.resized = new EventEmitter();
        this.prevContainerWidth = null;
        this.tilesOptions = {
            gutter: 16,
            columnWidth: '.pip-tile-sizer',
            itemSelector: '.pip-tile',
            transitionDuration: '0s',
            fitWidth: false
        };
        renderer.setElementClass(elRef.nativeElement, 'pip-tiles-layout', true);
        this.listener = () => { this.onResize(true); };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.columnWidth = this.columnWidth != null ? Math.floor(Number(this.columnWidth)) : 440;
        this.container = this.elRef.nativeElement.querySelector('.pip-tiles-content');
        addResizeListener(this.elRef.nativeElement, this.listener);
        this.sizer = document.createElement('div');
        this.container
            .appendChild(this.sizer)
            .className = 'pip-tile-sizer';
        setTimeout(() => {
            this.masonry = new masonry(this.container, this.tilesOptions);
            this.onResize(true);
        });
        if (this.animation === true) {
            setTimeout(() => {
                this.elRef.nativeElement.classList.add('animation');
            }, 1000);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['animation']) {
            if (changes['animation'].currentValue === true) {
                this.elRef.nativeElement.classList.add('animation');
            }
            else {
                this.elRef.nativeElement.classList.remove('animation');
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.observer = new MutationObserver(mutations => {
            mutations.forEach((mutation) => {
                this.masonry = new masonry(this.container, this.tilesOptions);
                this.onResize(true);
            });
        });
        /** @type {?} */
        const config = { childList: true, characterData: true };
        this.observer.observe(this.elRef.nativeElement.getElementsByClassName('pip-tiles-content')[0], config);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.masonry) {
            this.masonry.destroy();
        }
        removeResizeListener(this.elRef.nativeElement, this.listener);
    }
    /**
     * @private
     * @param {?=} force
     * @return {?}
     */
    onResize(force = false) {
        /** @type {?} */
        let width = this.elRef.nativeElement.parentElement.offsetWidth;
        /** @type {?} */
        let containerWidth;
        if (!this.stretch && (width - 32) > this.columnWidth) {
            width = width - 24 * 2;
            /** @type {?} */
            let columns = Math.floor(width / Number(this.columnWidth));
            containerWidth = (Number(this.columnWidth) + 16) * columns - 16;
            if (containerWidth > width) {
                columns--;
                containerWidth = (Number(this.columnWidth) + 16) * columns - 16;
            }
            if (columns < 1) {
                containerWidth = width;
                this.sizer.style['width'] = containerWidth + 'px';
            }
            else {
                this.sizer.style['width'] = Number(this.columnWidth) + 'px';
            }
            this.container.style['width'] = (containerWidth + 10) + 'px';
            this.container.classList.remove('pip-stretch');
        }
        else {
            this.container.style['width'] = '100%';
            this.container.classList.add('pip-stretch');
        }
        if (this.prevContainerWidth !== containerWidth || force) {
            this.prevContainerWidth = containerWidth;
            this.resized.emit(containerWidth);
            setTimeout(() => {
                this.masonry.layout();
            }, 400);
        }
    }
}
PipTilesLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-tiles-layout',
                template: "<div class=\"pip-tiles-content\">\r\n  <ng-content></ng-content>\r\n</div>",
                styles: [":host{display:block;position:relative;width:calc(100% - 16px)!important;padding:8px}:host.animation /deep/.pip-tile{transition:.35s!important}:host .pip-tiles-content{margin-left:auto;margin-right:auto;transition:width .35s;max-width:100%;display:flex;align-items:stretch}"]
            }] }
];
/** @nocollapse */
PipTilesLayoutComponent.ctorParameters = () => [
    { type: Renderer },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
PipTilesLayoutComponent.propDecorators = {
    columnWidth: [{ type: Input }],
    stretch: [{ type: Input }],
    animation: [{ type: Input }],
    resized: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipTilesLayoutModule {
}
PipTilesLayoutModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PipTilesLayoutComponent
                ],
                exports: [
                    PipTilesLayoutComponent
                ],
                providers: [
                    PipTilesLayoutComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipMenuLayoutComponent {
    /**
     * @param {?} renderer
     * @param {?} elRef
     * @param {?} cd
     */
    constructor(renderer, elRef, cd) {
        this.renderer = renderer;
        this.elRef = elRef;
        this.cd = cd;
        renderer.setElementClass(elRef.nativeElement, 'pip-menu-layout', true);
    }
    /**
     * @param {?} single
     * @return {?}
     */
    set single(single) {
        this.elRef.nativeElement.classList[single ? 'add' : 'remove']('pip-single-content');
        if (this) {
            this.cd.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
PipMenuLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-menu-layout',
                template: '<ng-content></ng-content>',
                styles: [":host.pip-menu-layout{z-index:50;position:relative;width:100%;height:100%;display:flex;flex-direction:row;align-items:initial}:host.pip-menu-layout /deep/.pip-menu{position:absolute;transition:.35s;border-right:none;width:320px;opacity:1;overflow-y:auto;overflow-x:hidden;max-height:100%;min-height:100%;max-height:100%}:host.pip-menu-layout /deep/.pip-menu .pip-list-container{overflow-y:auto;position:inherit;left:inherit;right:inherit;top:inherit;bottom:inherit;height:100%;width:100%}:host.pip-menu-layout /deep/.pip-menu-container{margin:0;transition:.35s;position:absolute;left:320px;height:100%;width:calc(100% - 320px);overflow:hidden}:host.pip-menu-layout /deep/.pip-menu-container .pip-scrolled-block{overflow-y:auto;overflow-x:hidden;width:100%;height:100%}:host.pip-menu-layout /deep/.pip-menu-container>div{display:flex;height:100%;transition:.35s}:host.pip-menu-layout /deep/.pip-menu-container>div.ng-enter,:host.pip-menu-layout /deep/.pip-menu-container>div.ng-leave.ng-leave-active{opacity:0}:host.pip-menu-layout /deep/.pip-menu-container>div.ng-enter.ng-enter-active,:host.pip-menu-layout /deep/.pip-menu-container>div.ng-leave{opacity:1}:host.pip-menu-layout.pip-single-content /deep/.pip-menu{opacity:0;z-index:-100}:host.pip-menu-layout.pip-single-content /deep/.pip-menu-container{width:100%!important;left:0!important}::ng-deep .pip-main-lt-md .pip-menu-layout .pip-menu{width:100%;left:0}::ng-deep .pip-main-lt-md .pip-menu-layout .pip-menu-container{left:100%;width:100%;height:100%}::ng-deep .pip-main-lt-md .pip-menu-layout.pip-single-content .pip-menu{left:-100%;opacity:1;z-index:100}::ng-deep .pip-main-lt-md .pip-menu-layout.pip-single-content.pip-document-list .pip-menu{z-index:-100}::ng-deep .pip-main-lt-md .pip-menu-layout.pip-single-content .pip-menu-container{left:0}::ng-deep .pip-main-gt-lg .pip-menu-layout .pip-menu{width:480px}::ng-deep .pip-main-gt-lg .pip-menu-layout .pip-menu-container{left:480px;width:calc(100% - 480px)}::ng-deep .pip-main-gt-lg .pip-menu-layout.pip-single-content .pip-menu-container{left:0}"]
            }] }
];
/** @nocollapse */
PipMenuLayoutComponent.ctorParameters = () => [
    { type: Renderer },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
PipMenuLayoutComponent.propDecorators = {
    single: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipMenuLayoutModule {
}
PipMenuLayoutModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PipMenuLayoutComponent
                ],
                imports: [],
                exports: [
                    PipMenuLayoutComponent
                ],
                providers: [
                    PipMenuLayoutComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const selector = `[fxShow.document-lt-lg], [fxHide.document-lt-lg]`;
/** @type {?} */
const inputs = ['fxShow.document-lt-lg', 'fxHide.document-lt-lg'];
// tslint:disable-next-line:use-input-property-decorator
class PipShowHideDirective extends ShowHideDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs;
    }
}
PipShowHideDirective.decorators = [
    { type: Directive, args: [{ selector, inputs },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PIP_BREAKPOINTS = [
    {
        alias: 'xs',
        mediaQuery: '(min-width: 0px) and (max-width: 639px)',
        overlapping: false,
    },
    {
        alias: 'gt-xs',
        mediaQuery: '(min-width: 640px)',
        overlapping: true,
    },
    {
        alias: 'lt-sm',
        mediaQuery: '(max-width: 639px)',
        overlapping: true,
    },
    {
        alias: 'sm',
        mediaQuery: '(min-width: 640px) and (max-width: 715px)',
        overlapping: false,
    },
    {
        alias: 'gt-sm',
        mediaQuery: '(min-width: 716px)',
        overlapping: true,
    },
    {
        alias: 'lt-md',
        mediaQuery: '(max-width: 715px)',
        overlapping: true,
    },
    {
        alias: 'md',
        mediaQuery: '(min-width: 716px) and (max-width: 1024px)',
        overlapping: false,
    },
    {
        alias: 'gt-md',
        mediaQuery: '(min-width: 1025px)',
        overlapping: true,
    },
    {
        alias: 'lt-lg',
        mediaQuery: '(max-width: 1024px)',
        overlapping: true,
    },
    {
        alias: 'lg',
        mediaQuery: '(min-width: 1025px) and (max-width: 1439px)',
        overlapping: false,
    },
    {
        alias: 'gt-lg',
        mediaQuery: '(min-width: 1440px)',
        overlapping: true,
    },
    {
        alias: 'lt-xl',
        mediaQuery: '(max-width: 1439px)',
        overlapping: true,
    },
    {
        alias: 'xl',
        mediaQuery: '(min-width: 1440px) and (max-width: 5000px)',
        overlapping: false,
    },
    {
        alias: 'document-lt-lg',
        mediaQuery: '(max-width: 1250px)',
        overlapping: true,
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = [...PIP_BREAKPOINTS];
/** @type {?} */
const PipBreakPointsProvider = {
    provide: BREAKPOINT,
    useValue: ɵ0
};
class PipMediaModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MediaMainChange {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipAppbarComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PipAppbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-appbar',
                template: "<mat-toolbar color=\"primary\">\r\n    <ng-content></ng-content>\r\n</mat-toolbar>",
                styles: ["::ng-deep .pip-sm pip-appbar .mat-toolbar,::ng-deep .pip-xs pip-appbar .mat-toolbar{min-height:56px;height:56px}::ng-deep .pip-sm pip-appbar .mat-toolbar .mat-toolbar-row,::ng-deep .pip-xs pip-appbar .mat-toolbar .mat-toolbar-row{height:56px}"]
            }] }
];
/** @nocollapse */
PipAppbarComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipAppbarModule {
}
PipAppbarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PipAppbarComponent
                ],
                imports: [
                    CommonModule,
                    MatToolbarModule
                ],
                exports: [
                    PipAppbarComponent
                ],
                providers: [],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShadowAttachmentSide {
}
ShadowAttachmentSide.top = 'top';
ShadowAttachmentSide.bottom = 'bottom';
ShadowAttachmentSide.left = 'left';
ShadowAttachmentSide.right = 'right';
ShadowAttachmentSide.all = ['top', 'bottom', 'left', 'right'];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipShadowComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this._attachmentSide = null;
        this._acttacnmentSideClasses = {
            top: 'pip-top-shadow',
            left: 'pip-left-shadow',
            right: 'pip-right-shadow',
            bottom: 'pip-bottom-shadow'
        };
    }
    /**
     * @param {?} isVisible
     * @return {?}
     */
    set visible(isVisible) {
        switch (this._attachmentSide) {
            case ShadowAttachmentSide.top: {
                this.el.nativeElement.style.cssText = isVisible ? 'top: -2px' : 'top: -30px';
                break;
            }
            case ShadowAttachmentSide.left: {
                this.el.nativeElement.style.cssText = isVisible ? 'left: -2px' : 'left: -30px';
                break;
            }
            case ShadowAttachmentSide.right: {
                this.el.nativeElement.style.cssText = isVisible ? 'right: -2px' : 'right: -30px';
                break;
            }
            case ShadowAttachmentSide.bottom: {
                this.el.nativeElement.style.cssText = isVisible ? 'bottom: -2px' : 'bottom: -30px';
                break;
            }
        }
    }
    /**
     * @param {?} side
     * @return {?}
     */
    set attachmentSide(side) {
        /** @type {?} */
        const index = ShadowAttachmentSide.all.indexOf(side);
        this._attachmentSide = index > -1 ? side : ShadowAttachmentSide.top;
        this.el.nativeElement.classList.add([this._acttacnmentSideClasses[this._attachmentSide]]);
    }
}
PipShadowComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-shadow',
                template: '',
                styles: [":host{position:absolute;z-index:10}:host.pip-top-shadow{height:2px;width:100%;top:-2px;box-shadow:0 3px 5px 0 rgba(0,0,0,.26);transition:top .35s}:host.pip-bottom-shadow{height:2px;width:100%;bottom:-2px;box-shadow:0 3px 5px 0 rgba(0,0,0,.26);transition:bottom .35s}:host.pip-left-shadow{width:2px;height:100%;left:-2px;box-shadow:1px 3px 5px 0 rgba(0,0,0,.26);transition:left .35s}:host.pip-right-shadow{width:2px;height:100%;right:-2px;box-shadow:-1px 3px 5px 0 rgba(0,0,0,.26);transition:right .35s}"]
            }] }
];
/** @nocollapse */
PipShadowComponent.ctorParameters = () => [
    { type: ElementRef }
];
PipShadowComponent.propDecorators = {
    visible: [{ type: Input }],
    attachmentSide: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipShadowModule {
}
PipShadowModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PipShadowComponent
                ],
                exports: [
                    PipShadowComponent
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipSidenavModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: PipSidenavModule,
            providers: [
                PipSidenavService
            ]
        };
    }
}
PipSidenavModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatSidenavModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipRightnavModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: PipRightnavModule,
            providers: [
                PipRightnavService
            ]
        };
    }
}
PipRightnavModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatSidenavModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipCardLayoutComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
    }
    /**
     * @param {?} transparent
     * @return {?}
     */
    set transparent(transparent) {
        this.elRef.nativeElement.classList[transparent === 'true' || transparent === true ? 'add' : 'remove']('pip-transparent-card');
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
PipCardLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-card-layout',
                template: '<div class="card-container"><ng-content></ng-content></div>',
                styles: [":host{box-sizing:border-box;flex:1 1 100%;display:flex;flex-direction:row;justify-content:center;max-width:100%;overflow-y:auto;place-content:center;align-items:center}:host .card-container{flex:1 1 100%;max-height:100%;position:relative}:host /deep/ .mat-card{min-width:300px;width:300px;left:0;right:0;margin:24px auto}:host /deep/ .mat-card .mat-input-container{width:100%}:host.pip-transparent-card /deep/ .mat-card{background-color:transparent;box-shadow:none}::ng-deep .pip-main-sm pip-card-layout .card-container,::ng-deep .pip-main-xs pip-card-layout .card-container{height:100%}::ng-deep .pip-main-sm pip-card-layout .mat-card,::ng-deep .pip-main-xs pip-card-layout .mat-card{width:100%;min-width:100%;box-sizing:border-box;margin:0;box-shadow:none;min-height:100%}"]
            }] }
];
/** @nocollapse */
PipCardLayoutComponent.ctorParameters = () => [
    { type: ElementRef }
];
PipCardLayoutComponent.propDecorators = {
    transparent: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipCardLayoutModule {
}
PipCardLayoutModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PipCardLayoutComponent
                ],
                imports: [],
                exports: [
                    PipCardLayoutComponent
                ],
                providers: [
                    PipCardLayoutComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipSidenavExpanderComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipSidenavExpanderModule {
}
PipSidenavExpanderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PipSidenavExpanderComponent
                ],
                imports: [
                    CommonModule,
                    FlexLayoutModule,
                    RouterModule,
                    MatListModule,
                    MatIconModule
                ],
                exports: [
                    PipSidenavExpanderComponent
                ],
                providers: [],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipRootLayoutComponent {
    /**
     * @param {?} sidenavService
     * @param {?} rightnavService
     * @param {?} renderer
     * @param {?} elRef
     * @param {?} media
     * @param {?} cd
     */
    constructor(sidenavService, rightnavService, renderer, elRef, media, cd) {
        this.sidenavService = sidenavService;
        this.rightnavService = rightnavService;
        this.renderer = renderer;
        this.elRef = elRef;
        this.media = media;
        this.cd = cd;
        this.mode$ = new BehaviorSubject(null);
        renderer.setElementClass(elRef.nativeElement, 'pip-root-layout', true);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sidenavService.opened$.subscribe((opened) => {
            this.cd.detectChanges();
        });
        this.rightnavService.opened$.subscribe(() => {
            this.cd.detectChanges();
        });
        this.media.media$.subscribe((change) => {
            this.mode$.next(this.rightnavService.floatingRightnavAliases.includes(change.mqAlias) ? null : 'side');
            this.cd.detectChanges();
        });
        this.initMode();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.sidenavService.floatingSidenav = this.sidenav;
        this.rightnavService.floatingRightnav = this.rightnav;
    }
    /**
     * @private
     * @return {?}
     */
    initMode() {
        /** @type {?} */
        let mode = 'side';
        each(this.rightnavService.floatingRightnavAliases, (alias) => {
            if (this.media.isActive(alias)) {
                mode = null;
            }
        });
        this.mode$.next(mode);
    }
}
PipRootLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'pip-root-layout',
                template: "<mat-sidenav-container class=\"pip-sidenav-floating-container\">\r\n    <mat-sidenav #floatingSidenav opened=\"false\" class=\"pip-sidenav-floating\" position=\"start\">\r\n        <ng-content select=\"pip-sidenav-floating\"></ng-content>\r\n    </mat-sidenav>\r\n    <mat-sidenav #floatingRightnav opened=\"false\" [mode]=\"mode$ | async\" class=\"pip-rightnav\" position=\"end\">\r\n        <ng-content select=\"pip-rightnav-floating\"></ng-content>\r\n    </mat-sidenav>\r\n    <ng-content select=\"pip-root-content\"></ng-content>\r\n</mat-sidenav-container>",
                styles: ["mat-sidenav{max-width:250px;width:250px;background-color:#eee}.pip-sidenav-floating-container{display:block;height:100%}:host{position:absolute;left:0;top:0;bottom:0;right:0}:host /deep/ pip-root-content{margin:0;width:100%;height:100%;min-width:100%;min-height:100%;display:flex;box-sizing:border-box;flex-direction:column!important}"]
            }] }
];
/** @nocollapse */
PipRootLayoutComponent.ctorParameters = () => [
    { type: PipSidenavService },
    { type: PipRightnavService },
    { type: Renderer },
    { type: ElementRef },
    { type: MediaObserver },
    { type: ChangeDetectorRef }
];
PipRootLayoutComponent.propDecorators = {
    sidenav: [{ type: ViewChild, args: ['floatingSidenav',] }],
    rightnav: [{ type: ViewChild, args: ['floatingRightnav',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipRootLayoutModule {
}
PipRootLayoutModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PipRootLayoutComponent
                ],
                imports: [
                    CommonModule,
                    FlexLayoutModule,
                    MatSidenavModule
                ],
                exports: [
                    PipRootLayoutComponent
                ],
                providers: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PipDocumentLayoutComponent, PipDocumentLayoutModule, PipMainLayoutComponent, PipMainLayoutModule, PipMainLayoutAltComponent, PipMainLayoutAltModule, PipTilesLayoutComponent, PipTilesLayoutModule, PipMenuLayoutComponent, PipMenuLayoutModule, PipMediaModule, PipMediaService, MediaMainChange, PIP_BREAKPOINTS, addResizeListener, removeResizeListener, PipAppbarComponent, PipAppbarModule, PipShadowComponent, PipShadowModule, PipSidenavModule, PipSidenavService, PipRightnavModule, PipRightnavService, PipCardLayoutComponent, PipCardLayoutModule, PipScrollableComponent, PipScrollableContentComponent, PipScrollableModule, PipSidenavExpanderComponent, PipSidenavExpanderModule, PipRootLayoutComponent, PipRootLayoutModule, PipShowHideDirective as ɵa };

//# sourceMappingURL=pip-webui2-layouts.js.map