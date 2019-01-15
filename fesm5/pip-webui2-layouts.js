import { map } from 'rxjs/operators';
import { __extends, __spread, __values, __read } from 'tslib';
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
var PipDocumentLayoutComponent = /** @class */ (function () {
    function PipDocumentLayoutComponent(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        renderer.setElementClass(elRef.nativeElement, 'pip-document-layout', true);
    }
    Object.defineProperty(PipDocumentLayoutComponent.prototype, "toolbar", {
        set: /**
         * @param {?} toolbar
         * @return {?}
         */
        function (toolbar) {
            this.elRef.nativeElement.classList[toolbar === 'true' || toolbar === true ? 'add' : 'remove']('pip-with-toolbar');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PipDocumentLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    PipDocumentLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    PipDocumentLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-document-layout',
                    template: "<pip-scrollable class=\"pip-document-container\">\r\n    <pip-scrollable-content>\r\n        <ng-content select=\"pip-document-content\">\r\n        </ng-content>\r\n    </pip-scrollable-content>\r\n    <ng-content select=\"pip-document-footer\">\r\n    </ng-content>\r\n</pip-scrollable>",
                    styles: [".bootbarn-cool-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.bootbarn-cool-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.bootbarn-cool-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.bootbarn-mono-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.bootbarn-mono-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.bootbarn-mono-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.bootbarn-warm-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.bootbarn-warm-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.bootbarn-warm-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.pip-amber-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.pip-amber-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.pip-amber-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.pip-black-theme :host.pip-document-layout{color:#fff!important;background:#424242}.pip-black-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(255,255,255,.12)}.pip-black-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(255,255,255,.12)!important;border-right:1px solid rgba(255,255,255,.12)!important;box-sizing:border-box}.pip-blue-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.pip-blue-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.pip-blue-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.candy-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.candy-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.candy-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.pip-dark-theme :host.pip-document-layout{color:#fff!important;background:#424242}.pip-dark-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(255,255,255,.12)}.pip-dark-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(255,255,255,.12)!important;border-right:1px solid rgba(255,255,255,.12)!important;box-sizing:border-box}.pip-green-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.pip-green-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.pip-green-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.pip-grey-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.pip-grey-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.pip-grey-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.pip-navy-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.pip-navy-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.pip-navy-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.pip-orange-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.pip-orange-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.pip-orange-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.pip-pink-theme :host.pip-document-layout{color:rgba(0,0,0,.87)!important;background:#fff}.pip-pink-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(0,0,0,.12)}.pip-pink-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(0,0,0,.12)!important;border-right:1px solid rgba(0,0,0,.12)!important;box-sizing:border-box}.unicorn-dark-theme :host.pip-document-layout{color:#fff!important;background:#424242}.unicorn-dark-theme :host.pip-document-layout /deep/ pip-document-footer{border-top:1px solid rgba(255,255,255,.12)}.unicorn-dark-theme.pip-main-document-lt-lg :host.pip-document-layout{border-left:1px solid rgba(255,255,255,.12)!important;border-right:1px solid rgba(255,255,255,.12)!important;box-sizing:border-box}:host.pip-document-layout{z-index:10;display:flex;box-shadow:0 1px 5px 0 rgba(0,0,0,.26);border-radius:2px;flex:1 0 100%;position:absolute;height:calc(100% - 24px);left:calc(50% - 480px);margin:0 auto;width:960px;max-width:100%}:host.pip-document-layout.pip-with-toolbar{margin-top:-64px}:host.pip-document-layout .pip-document-container{width:100%;font-family:Roboto;overflow:hidden;overflow-y:auto}:host.pip-document-layout .pip-document-container pip-scrollable-content{height:100%}:host.pip-document-layout .pip-document-container /deep/ pip-document-content{padding:16px;display:block}:host.pip-document-layout .pip-document-container /deep/ pip-document-footer{padding:16px;display:block}"]
                }] }
    ];
    /** @nocollapse */
    PipDocumentLayoutComponent.ctorParameters = function () { return [
        { type: Renderer },
        { type: ElementRef }
    ]; };
    PipDocumentLayoutComponent.propDecorators = {
        toolbar: [{ type: Input }]
    };
    return PipDocumentLayoutComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipScrollableContentComponent = /** @class */ (function () {
    function PipScrollableContentComponent() {
    }
    /**
     * @return {?}
     */
    PipScrollableContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    PipScrollableContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-scrollable-content',
                    template: '<ng-content></ng-content>',
                    styles: [":host{overflow-y:auto;overflow-x:hidden}"]
                }] }
    ];
    return PipScrollableContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipScrollableComponent = /** @class */ (function () {
    function PipScrollableComponent() {
    }
    /**
     * @return {?}
     */
    PipScrollableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    PipScrollableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-scrollable',
                    template: '<ng-content></ng-content>',
                    styles: [":host{box-sizing:border-box;display:flex;flex-direction:column}"]
                }] }
    ];
    return PipScrollableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipScrollableModule = /** @class */ (function () {
    function PipScrollableModule() {
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
    return PipScrollableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipDocumentLayoutModule = /** @class */ (function () {
    function PipDocumentLayoutModule() {
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
    return PipDocumentLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var attachEvent = ((/** @type {?} */ (document))).attachEvent;
/** @type {?} */
var isIE = navigator.userAgent.match(/Trident/);
/**
 * @param {?} callback
 * @return {?}
 */
function requestFrame(callback) {
    'ngInject';
    /** @type {?} */
    var frame = window.requestAnimationFrame
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
    var cancel = window.cancelAnimationFrame
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
    var win = event.target || event.srcElement;
    if (win.__resizeRAF__) {
        cancelFrame( /*win.__resizeRAF__*/);
    }
    win.__resizeRAF__ = requestFrame(function () {
        /** @type {?} */
        var trigger = win.__resizeTrigger__;
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
            var obj = element.__resizeTrigger__ = document.createElement('object');
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
            for (var _b = __values(this.media['breakpoints'].aliases), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            for (var _b = __values(this.media['breakpoints'].aliases), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            for (var _c = __values(this.media['breakpoints'].items), _d = _c.next(); !_d.done; _d = _c.next()) {
                var item = _d.value;
                /** @type {?} */
                var matches = item.mediaQuery.match(regExp);
                this.mainLayoutBreakpoints[item.alias] = { min: 0, max: 10000, active: false };
                try {
                    for (var matches_1 = __values(matches), matches_1_1 = matches_1.next(); !matches_1_1.done; matches_1_1 = matches_1.next()) {
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
    var index = -1;
    /** @type {?} */
    var length = array == null ? 0 : array.length;
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
    var ai = 0;
    /** @type {?} */
    var bi = 0;
    /** @type {?} */
    var result = [];
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
        if (sidenav) ;
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
            for (var _b = __values(this._universalSidenavAliases), _c = _b.next(); !_c.done; _c = _b.next()) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        if (rightnav) ;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipMainLayoutComponent = /** @class */ (function () {
    function PipMainLayoutComponent(renderer, elRef, cd, mainMedia, sidenavService, rightnavService, media) {
        var _this = this;
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
        this.listener = function () { _this.onResize(); };
    }
    Object.defineProperty(PipMainLayoutComponent.prototype, "opened$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._opened$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipMainLayoutComponent.prototype, "active$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.sidenavService.active$;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PipMainLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.pipContainer != null) {
            /** @type {?} */
            var firstSym = this.pipContainer.substr(0, 1);
            /** @type {?} */
            var element = firstSym === '#'
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
        setTimeout(function () {
            _this.mainMedia.updateMainLayoutBreakpoints(_this.element.offsetWidth);
        });
        this.rightnavService.opened$.subscribe(function (opened) {
            if (_this.rightnavService._fixedRightnav) {
                _this.onResize();
            }
            _this.cd.detectChanges();
        });
        this.media.media$.subscribe(function (change) {
            if (_this.rightnavService.onlyFloating === true) {
                return;
            }
            if (_this.sidenavService.floatingSidenavAliases.includes(change.mqAlias)) {
                if (_this.rightnavService.fixedRightnav
                    && _this.rightnavService.fixedRightnav.opened
                    && _this.rightnavService.floatingRightnav) {
                    _this.rightnavService.closeFixedRightnav();
                    _this.rightnavService.floatingRightnav.open();
                }
            }
            else {
                if (_this.rightnavService.floatingRightnav && _this.rightnavService.floatingRightnav.opened) {
                    if (_this.rightnavService.fixedRightnav) {
                        _this.rightnavService.fixedRightnav.open();
                    }
                    _this.rightnavService.floatingRightnav.close();
                }
            }
        });
        this.sidenavService.small$.subscribe(function (small) {
            _this.small$.next(small);
            _this.cd.detectChanges();
        });
    };
    /**
     * @return {?}
     */
    PipMainLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        removeEventListener(this.element, this.listener);
    };
    /**
     * @return {?}
     */
    PipMainLayoutComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.sidenavService.fixedSidenav = this.sidenav;
        this.rightnavService.fixedRightnav = this.rightnav;
        this.onResize();
    };
    /**
     * @private
     * @return {?}
     */
    PipMainLayoutComponent.prototype.onResize = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rightnavWidth = this.rightnavService._fixedRightnav && this.rightnavService._fixedRightnav.opened
            ? this.rightnavService._fixedRightnav['_elementRef'].nativeElement.offsetWidth
            : 0;
        this.mainMedia.updateMainLayoutBreakpoints(this.element.offsetWidth - rightnavWidth);
    };
    PipMainLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-main-layout',
                    template: "<mat-sidenav-container class=\"pip-sidenav-container pip-sidenav-fixed-container\" [ngClass]=\"{ 'pip-small': small$ | async }\">\r\n    <mat-sidenav #fixedSidenav class=\"pip-sidenav\" [opened]=\"active$ | async\" mode=\"side\" position=\"start\">\r\n        <ng-content select=\"pip-sidenav-fixed\"></ng-content>\r\n    </mat-sidenav>\r\n    <mat-sidenav #fixedRightnav class=\"pip-rightnav\" opened=\"false\" mode=\"side\" position=\"end\">\r\n        <ng-content select=\"pip-rightnav-fixed\"></ng-content>\r\n    </mat-sidenav>\r\n    <ng-content select=\"pip-main-content\"></ng-content>\r\n</mat-sidenav-container>",
                    styles: [":host{overflow-x:hidden!important}:host /deep/ pip-main-content{flex:1 1 100%;box-sizing:border-box;display:flex;flex-direction:column;max-width:100%}::ng-deep .pip-main-layout{position:absolute;top:64px;bottom:0;left:0;right:0}::ng-deep .pip-sm .pip-main-layout,::ng-deep .pip-xs .pip-main-layout{top:56px}mat-sidenav.pip-sidenav{max-width:250px;width:250px;overflow-x:hidden}:host ::ng-deep mat-sidenav-content{transition:.3s;display:flex;margin-left:250px!important;flex-direction:column}.pip-sidenav-container{display:block;height:100%}:host .mat-drawer.mat-drawer-end{width:250px}::ng-deep .pip-main-lg .pip-main-layout .pip-sidenav-fixed-container.pip-small mat-sidenav.pip-sidenav{max-width:64px;width:64px;min-width:64px}::ng-deep .pip-main-lg .pip-main-layout .pip-sidenav-fixed-container.pip-small ::ng-deep mat-sidenav-content{margin-left:64px!important}::ng-deep .pip-main-md .pip-main-layout .pip-sidenav-fixed-container mat-sidenav.pip-sidenav{max-width:64px;width:64px;min-width:64px}::ng-deep .pip-main-md .pip-main-layout .pip-sidenav-fixed-container mat-sidenav-content{margin-left:64px!important}::ng-deep .pip-main-sm .pip-main-layout .pip-sidenav-fixed-container mat-sidenav.pip-sidenav,::ng-deep .pip-main-xs .pip-main-layout .pip-sidenav-fixed-container mat-sidenav.pip-sidenav{max-width:0;width:0;min-width:0;border-right:none!important}::ng-deep .pip-main-sm .pip-main-layout .pip-sidenav-fixed-container mat-sidenav-content,::ng-deep .pip-main-xs .pip-main-layout .pip-sidenav-fixed-container mat-sidenav-content{margin-left:0!important}:host.pip-sidenav-not-active mat-sidenav.pip-sidenav{max-width:0!important;width:0!important;min-width:0!important}:host.pip-sidenav-not-active .pip-sidenav-fixed-container ::ng-deep mat-sidenav-content{margin-left:0!important}"]
                }] }
    ];
    /** @nocollapse */
    PipMainLayoutComponent.ctorParameters = function () { return [
        { type: Renderer },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: PipMediaService },
        { type: PipSidenavService },
        { type: PipRightnavService },
        { type: MediaObserver }
    ]; };
    PipMainLayoutComponent.propDecorators = {
        pipContainer: [{ type: Input }],
        sidenav: [{ type: ViewChild, args: ['fixedSidenav',] }],
        rightnav: [{ type: ViewChild, args: ['fixedRightnav',] }]
    };
    return PipMainLayoutComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipMainLayoutModule = /** @class */ (function () {
    function PipMainLayoutModule() {
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
    return PipMainLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipMainLayoutAltComponent = /** @class */ (function () {
    function PipMainLayoutAltComponent(renderer2, elRef, cd, mainMedia, sidenavService, rightnavService, media) {
        var _this = this;
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
        this.listener = function () { _this.onResize(); };
        this.sidenavService.fixedSidenav = null;
        this.sidenavService.isUniversal = true;
        this.sidenavService.opened = false;
        this.sidenavService.mode = 'over';
        this.activeSidenav$ = combineLatest(this.sidenavService.opened$, this.sidenavService.active$)
            .pipe(map(function (_a) {
            var _b = __read(_a, 2), opened = _b[0], active = _b[1];
            return opened && active;
        }));
    }
    /**
     * @return {?}
     */
    PipMainLayoutAltComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.pipContainer != null) {
            /** @type {?} */
            var firstSym = this.pipContainer.substr(0, 1);
            /** @type {?} */
            var element = firstSym === '#'
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
        setTimeout(function () {
            _this.mainMedia.updateMainLayoutBreakpoints(_this.element.offsetWidth);
        });
        this.rightnavService.opened$.subscribe(function (opened) {
            if (_this.rightnavService._fixedRightnav) {
                _this.onResize();
            }
            _this.cd.detectChanges();
        });
        this.media.media$.subscribe(function (change) {
            if (_this.rightnavService.onlyFloating === true) {
                return;
            }
            if (_this.sidenavService.floatingSidenavAliases.includes(change.mqAlias)) {
                if (_this.rightnavService.fixedRightnav
                    && _this.rightnavService.fixedRightnav.opened
                    && _this.rightnavService.floatingRightnav) {
                    _this.rightnavService.closeFixedRightnav();
                    _this.rightnavService.floatingRightnav.open();
                }
            }
            else {
                if (_this.rightnavService.floatingRightnav && _this.rightnavService.floatingRightnav.opened) {
                    if (_this.rightnavService.fixedRightnav) {
                        _this.rightnavService.fixedRightnav.open();
                    }
                    _this.rightnavService.floatingRightnav.close();
                }
            }
        });
    };
    /**
     * @return {?}
     */
    PipMainLayoutAltComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        removeEventListener(this.element, this.listener);
        this.subs.unsubscribe();
    };
    /**
     * @return {?}
     */
    PipMainLayoutAltComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.uFloating$.next(this.sidenavService.isUniversalFloating());
        this.subs.add(this.mainMedia.asObservableMain()
            .subscribe(function (change) {
            /** @type {?} */
            var floating = _this.sidenavService.isUniversalFloating();
            if (_this.uFloating$.getValue() !== floating) {
                setTimeout(function () { return _this.uFloating$.next(floating); }, 0);
            }
        }));
        this.onResize();
        this.sidenavService.universalSidenav = this.sidenav;
        this.rightnavService.fixedRightnav = this.rightnav;
    };
    /**
     * @return {?}
     */
    PipMainLayoutAltComponent.prototype.backdropClick = /**
     * @return {?}
     */
    function () {
        this.sidenavService.closeNav();
    };
    /**
     * @private
     * @return {?}
     */
    PipMainLayoutAltComponent.prototype.onResize = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rightnavWidth = this.rightnavService._fixedRightnav && this.rightnavService._fixedRightnav.opened
            ? this.rightnavService._fixedRightnav['_elementRef'].nativeElement.offsetWidth
            : 0;
        this.mainMedia.updateMainLayoutBreakpoints(this.element.offsetWidth - rightnavWidth);
    };
    PipMainLayoutAltComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-main-layout-alt',
                    template: "<mat-sidenav-container class=\"pip-sidenav-container pip-sidenav-fixed-container\"\r\n                       [style.zIndex]=\"(uFloating$.asObservable() | async) ? 0 : 'inherit'\" (backdropClick)=\"backdropClick()\">\r\n    <mat-sidenav #universalSidenav class=\"pip-sidenav\" [opened]=\"activeSidenav$ | async\" mode=\"sidenavService.mode$ | async\"\r\n                 [fixedInViewport]=\"uFloating$.asObservable() | async\" fixedTopGap=\"0\" position=\"start\">\r\n        <ng-content select=\"pip-sidenav\"></ng-content>\r\n    </mat-sidenav>\r\n    <mat-sidenav #fixedRightnav class=\"pip-rightnav\" opened=\"false\" [mode]=\"rightnavService.fixedRightnavMode$ | async\" position=\"end\">\r\n        <ng-content select=\"pip-rightnav-fixed\"></ng-content>\r\n    </mat-sidenav>\r\n    <ng-content select=\"pip-main-content\"></ng-content>\r\n</mat-sidenav-container>",
                    styles: [":host{overflow-x:hidden!important}:host /deep/ pip-main-content{flex:1 1 100%;box-sizing:border-box;display:flex;flex-direction:column;max-width:100%}::ng-deep .pip-main-layout-alt{position:absolute;top:64px;bottom:0;left:0;right:0}::ng-deep .pip-sm .pip-main-layout-alt,::ng-deep .pip-xs .pip-main-layout-alt{top:56px}mat-sidenav.pip-sidenav{max-width:250px;width:250px;overflow-x:hidden}:host ::ng-deep mat-sidenav-content{transition:.3s;display:flex;overflow-x:hidden;flex-direction:column}.pip-sidenav-container{display:block;height:100%}/deep/ .pip-main-gt-sm .pip-sidenav-container .mat-drawer-backdrop{background-color:transparent}:host .mat-drawer.mat-drawer-end{width:250px}"]
                }] }
    ];
    /** @nocollapse */
    PipMainLayoutAltComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: PipMediaService },
        { type: PipSidenavService },
        { type: PipRightnavService },
        { type: MediaObserver }
    ]; };
    PipMainLayoutAltComponent.propDecorators = {
        pipContainer: [{ type: Input }],
        sidenav: [{ type: ViewChild, args: ['universalSidenav',] }],
        rightnav: [{ type: ViewChild, args: ['fixedRightnav',] }]
    };
    return PipMainLayoutAltComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipMainLayoutAltModule = /** @class */ (function () {
    function PipMainLayoutAltModule() {
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
    return PipMainLayoutAltModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var masonry = require('masonry-layout');
var PipTilesLayoutComponent = /** @class */ (function () {
    function PipTilesLayoutComponent(renderer, elRef, cd) {
        var _this = this;
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
        this.listener = function () { _this.onResize(true); };
    }
    /**
     * @return {?}
     */
    PipTilesLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.columnWidth = this.columnWidth != null ? Math.floor(Number(this.columnWidth)) : 440;
        this.container = this.elRef.nativeElement.querySelector('.pip-tiles-content');
        addResizeListener(this.elRef.nativeElement, this.listener);
        this.sizer = document.createElement('div');
        this.container
            .appendChild(this.sizer)
            .className = 'pip-tile-sizer';
        setTimeout(function () {
            _this.masonry = new masonry(_this.container, _this.tilesOptions);
            _this.onResize(true);
        });
        if (this.animation === true) {
            setTimeout(function () {
                _this.elRef.nativeElement.classList.add('animation');
            }, 1000);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PipTilesLayoutComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['animation']) {
            if (changes['animation'].currentValue === true) {
                this.elRef.nativeElement.classList.add('animation');
            }
            else {
                this.elRef.nativeElement.classList.remove('animation');
            }
        }
    };
    /**
     * @return {?}
     */
    PipTilesLayoutComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                _this.masonry = new masonry(_this.container, _this.tilesOptions);
                _this.onResize(true);
            });
        });
        /** @type {?} */
        var config = { childList: true, characterData: true };
        this.observer.observe(this.elRef.nativeElement.getElementsByClassName('pip-tiles-content')[0], config);
    };
    /**
     * @return {?}
     */
    PipTilesLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.masonry) {
            this.masonry.destroy();
        }
        removeResizeListener(this.elRef.nativeElement, this.listener);
    };
    /**
     * @private
     * @param {?=} force
     * @return {?}
     */
    PipTilesLayoutComponent.prototype.onResize = /**
     * @private
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        /** @type {?} */
        var width = this.elRef.nativeElement.parentElement.offsetWidth;
        /** @type {?} */
        var containerWidth;
        if (!this.stretch && (width - 32) > this.columnWidth) {
            width = width - 24 * 2;
            /** @type {?} */
            var columns = Math.floor(width / Number(this.columnWidth));
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
            setTimeout(function () {
                _this.masonry.layout();
            }, 400);
        }
    };
    PipTilesLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-tiles-layout',
                    template: "<div class=\"pip-tiles-content\">\r\n  <ng-content></ng-content>\r\n</div>",
                    styles: [":host{display:block;position:relative;width:calc(100% - 16px)!important;padding:8px}:host.animation /deep/.pip-tile{transition:.35s!important}:host .pip-tiles-content{margin-left:auto;margin-right:auto;transition:width .35s;max-width:100%;display:flex;align-items:stretch}"]
                }] }
    ];
    /** @nocollapse */
    PipTilesLayoutComponent.ctorParameters = function () { return [
        { type: Renderer },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    PipTilesLayoutComponent.propDecorators = {
        columnWidth: [{ type: Input }],
        stretch: [{ type: Input }],
        animation: [{ type: Input }],
        resized: [{ type: Output }]
    };
    return PipTilesLayoutComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipTilesLayoutModule = /** @class */ (function () {
    function PipTilesLayoutModule() {
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
    return PipTilesLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipMenuLayoutComponent = /** @class */ (function () {
    function PipMenuLayoutComponent(renderer, elRef, cd) {
        this.renderer = renderer;
        this.elRef = elRef;
        this.cd = cd;
        renderer.setElementClass(elRef.nativeElement, 'pip-menu-layout', true);
    }
    Object.defineProperty(PipMenuLayoutComponent.prototype, "single", {
        set: /**
         * @param {?} single
         * @return {?}
         */
        function (single) {
            this.elRef.nativeElement.classList[single ? 'add' : 'remove']('pip-single-content');
            if (this) {
                this.cd.detectChanges();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PipMenuLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    PipMenuLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    PipMenuLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-menu-layout',
                    template: '<ng-content></ng-content>',
                    styles: [":host.pip-menu-layout{z-index:50;position:relative;width:100%;height:100%;display:flex;flex-direction:row;align-items:initial}:host.pip-menu-layout /deep/.pip-menu{position:absolute;transition:.35s;border-right:none;width:320px;opacity:1;overflow-y:auto;overflow-x:hidden;max-height:100%;min-height:100%;max-height:100%}:host.pip-menu-layout /deep/.pip-menu .pip-list-container{overflow-y:auto;position:inherit;left:inherit;right:inherit;top:inherit;bottom:inherit;height:100%;width:100%}:host.pip-menu-layout /deep/.pip-menu-container{margin:0;transition:.35s;position:absolute;left:320px;height:100%;width:calc(100% - 320px);overflow:hidden}:host.pip-menu-layout /deep/.pip-menu-container .pip-scrolled-block{overflow-y:auto;overflow-x:hidden;width:100%;height:100%}:host.pip-menu-layout /deep/.pip-menu-container>div{display:flex;height:100%;transition:.35s}:host.pip-menu-layout /deep/.pip-menu-container>div.ng-enter,:host.pip-menu-layout /deep/.pip-menu-container>div.ng-leave.ng-leave-active{opacity:0}:host.pip-menu-layout /deep/.pip-menu-container>div.ng-enter.ng-enter-active,:host.pip-menu-layout /deep/.pip-menu-container>div.ng-leave{opacity:1}:host.pip-menu-layout.pip-single-content /deep/.pip-menu{opacity:0;z-index:-100}:host.pip-menu-layout.pip-single-content /deep/.pip-menu-container{width:100%!important;left:0!important}::ng-deep .pip-main-lt-md .pip-menu-layout .pip-menu{width:100%;left:0}::ng-deep .pip-main-lt-md .pip-menu-layout .pip-menu-container{left:100%;width:100%;height:100%}::ng-deep .pip-main-lt-md .pip-menu-layout.pip-single-content .pip-menu{left:-100%;opacity:1;z-index:100}::ng-deep .pip-main-lt-md .pip-menu-layout.pip-single-content.pip-document-list .pip-menu{z-index:-100}::ng-deep .pip-main-lt-md .pip-menu-layout.pip-single-content .pip-menu-container{left:0}::ng-deep .pip-main-gt-lg .pip-menu-layout .pip-menu{width:480px}::ng-deep .pip-main-gt-lg .pip-menu-layout .pip-menu-container{left:480px;width:calc(100% - 480px)}::ng-deep .pip-main-gt-lg .pip-menu-layout.pip-single-content .pip-menu-container{left:0}"]
                }] }
    ];
    /** @nocollapse */
    PipMenuLayoutComponent.ctorParameters = function () { return [
        { type: Renderer },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    PipMenuLayoutComponent.propDecorators = {
        single: [{ type: Input }]
    };
    return PipMenuLayoutComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipMenuLayoutModule = /** @class */ (function () {
    function PipMenuLayoutModule() {
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
    return PipMenuLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var selector = "[fxShow.document-lt-lg], [fxHide.document-lt-lg]";
/** @type {?} */
var inputs = ['fxShow.document-lt-lg', 'fxHide.document-lt-lg'];
// tslint:disable-next-line:use-input-property-decorator
var PipShowHideDirective = /** @class */ (function (_super) {
    __extends(PipShowHideDirective, _super);
    function PipShowHideDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs;
        return _this;
    }
    PipShowHideDirective.decorators = [
        { type: Directive, args: [{ selector: selector, inputs: inputs },] }
    ];
    return PipShowHideDirective;
}(ShowHideDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PIP_BREAKPOINTS = [
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
var ɵ0 = __spread(PIP_BREAKPOINTS);
/** @type {?} */
var PipBreakPointsProvider = {
    provide: BREAKPOINT,
    useValue: ɵ0
};
var PipMediaModule = /** @class */ (function () {
    function PipMediaModule() {
    }
    /**
     * @return {?}
     */
    PipMediaModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PipMediaModule,
            providers: [
                PipMediaService,
                PipBreakPointsProvider
            ]
        };
    };
    PipMediaModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [PipShowHideDirective],
                    exports: [PipShowHideDirective]
                },] }
    ];
    return PipMediaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MediaMainChange = /** @class */ (function () {
    function MediaMainChange() {
    }
    return MediaMainChange;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipAppbarComponent = /** @class */ (function () {
    function PipAppbarComponent() {
    }
    /**
     * @return {?}
     */
    PipAppbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PipAppbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-appbar',
                    template: "<mat-toolbar color=\"primary\">\r\n    <ng-content></ng-content>\r\n</mat-toolbar>",
                    styles: ["::ng-deep .pip-sm pip-appbar .mat-toolbar,::ng-deep .pip-xs pip-appbar .mat-toolbar{min-height:56px;height:56px}::ng-deep .pip-sm pip-appbar .mat-toolbar .mat-toolbar-row,::ng-deep .pip-xs pip-appbar .mat-toolbar .mat-toolbar-row{height:56px}"]
                }] }
    ];
    /** @nocollapse */
    PipAppbarComponent.ctorParameters = function () { return []; };
    return PipAppbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipAppbarModule = /** @class */ (function () {
    function PipAppbarModule() {
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
    return PipAppbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShadowAttachmentSide = /** @class */ (function () {
    function ShadowAttachmentSide() {
    }
    ShadowAttachmentSide.top = 'top';
    ShadowAttachmentSide.bottom = 'bottom';
    ShadowAttachmentSide.left = 'left';
    ShadowAttachmentSide.right = 'right';
    ShadowAttachmentSide.all = ['top', 'bottom', 'left', 'right'];
    return ShadowAttachmentSide;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipShadowComponent = /** @class */ (function () {
    function PipShadowComponent(el) {
        this.el = el;
        this._attachmentSide = null;
        this._acttacnmentSideClasses = {
            top: 'pip-top-shadow',
            left: 'pip-left-shadow',
            right: 'pip-right-shadow',
            bottom: 'pip-bottom-shadow'
        };
    }
    Object.defineProperty(PipShadowComponent.prototype, "visible", {
        set: /**
         * @param {?} isVisible
         * @return {?}
         */
        function (isVisible) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PipShadowComponent.prototype, "attachmentSide", {
        set: /**
         * @param {?} side
         * @return {?}
         */
        function (side) {
            /** @type {?} */
            var index = ShadowAttachmentSide.all.indexOf(side);
            this._attachmentSide = index > -1 ? side : ShadowAttachmentSide.top;
            this.el.nativeElement.classList.add([this._acttacnmentSideClasses[this._attachmentSide]]);
        },
        enumerable: true,
        configurable: true
    });
    PipShadowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-shadow',
                    template: '',
                    styles: [":host{position:absolute;z-index:10}:host.pip-top-shadow{height:2px;width:100%;top:-2px;box-shadow:0 3px 5px 0 rgba(0,0,0,.26);transition:top .35s}:host.pip-bottom-shadow{height:2px;width:100%;bottom:-2px;box-shadow:0 3px 5px 0 rgba(0,0,0,.26);transition:bottom .35s}:host.pip-left-shadow{width:2px;height:100%;left:-2px;box-shadow:1px 3px 5px 0 rgba(0,0,0,.26);transition:left .35s}:host.pip-right-shadow{width:2px;height:100%;right:-2px;box-shadow:-1px 3px 5px 0 rgba(0,0,0,.26);transition:right .35s}"]
                }] }
    ];
    /** @nocollapse */
    PipShadowComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    PipShadowComponent.propDecorators = {
        visible: [{ type: Input }],
        attachmentSide: [{ type: Input }]
    };
    return PipShadowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipShadowModule = /** @class */ (function () {
    function PipShadowModule() {
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
    return PipShadowModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipSidenavModule = /** @class */ (function () {
    function PipSidenavModule() {
    }
    /**
     * @return {?}
     */
    PipSidenavModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PipSidenavModule,
            providers: [
                PipSidenavService
            ]
        };
    };
    PipSidenavModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatSidenavModule
                    ]
                },] }
    ];
    return PipSidenavModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipRightnavModule = /** @class */ (function () {
    function PipRightnavModule() {
    }
    /**
     * @return {?}
     */
    PipRightnavModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PipRightnavModule,
            providers: [
                PipRightnavService
            ]
        };
    };
    PipRightnavModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatSidenavModule
                    ]
                },] }
    ];
    return PipRightnavModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipCardLayoutComponent = /** @class */ (function () {
    function PipCardLayoutComponent(elRef) {
        this.elRef = elRef;
    }
    Object.defineProperty(PipCardLayoutComponent.prototype, "transparent", {
        set: /**
         * @param {?} transparent
         * @return {?}
         */
        function (transparent) {
            this.elRef.nativeElement.classList[transparent === 'true' || transparent === true ? 'add' : 'remove']('pip-transparent-card');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PipCardLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    PipCardLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-card-layout',
                    template: '<div class="card-container"><ng-content></ng-content></div>',
                    styles: [":host{box-sizing:border-box;flex:1 1 100%;display:flex;flex-direction:row;justify-content:center;max-width:100%;overflow-y:auto;place-content:center;align-items:center}:host .card-container{flex:1 1 100%;max-height:100%;position:relative}:host /deep/ .mat-card{min-width:300px;width:300px;left:0;right:0;margin:24px auto}:host /deep/ .mat-card .mat-input-container{width:100%}:host.pip-transparent-card /deep/ .mat-card{background-color:transparent;box-shadow:none}::ng-deep .pip-main-sm pip-card-layout .card-container,::ng-deep .pip-main-xs pip-card-layout .card-container{height:100%}::ng-deep .pip-main-sm pip-card-layout .mat-card,::ng-deep .pip-main-xs pip-card-layout .mat-card{width:100%;min-width:100%;box-sizing:border-box;margin:0;box-shadow:none;min-height:100%}"]
                }] }
    ];
    /** @nocollapse */
    PipCardLayoutComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    PipCardLayoutComponent.propDecorators = {
        transparent: [{ type: Input }]
    };
    return PipCardLayoutComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipCardLayoutModule = /** @class */ (function () {
    function PipCardLayoutModule() {
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
    return PipCardLayoutModule;
}());

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipSidenavExpanderModule = /** @class */ (function () {
    function PipSidenavExpanderModule() {
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
    return PipSidenavExpanderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipRootLayoutComponent = /** @class */ (function () {
    function PipRootLayoutComponent(sidenavService, rightnavService, renderer, elRef, media, cd) {
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
    PipRootLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sidenavService.opened$.subscribe(function (opened) {
            _this.cd.detectChanges();
        });
        this.rightnavService.opened$.subscribe(function () {
            _this.cd.detectChanges();
        });
        this.media.media$.subscribe(function (change) {
            _this.mode$.next(_this.rightnavService.floatingRightnavAliases.includes(change.mqAlias) ? null : 'side');
            _this.cd.detectChanges();
        });
        this.initMode();
    };
    /**
     * @return {?}
     */
    PipRootLayoutComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.sidenavService.floatingSidenav = this.sidenav;
        this.rightnavService.floatingRightnav = this.rightnav;
    };
    /**
     * @private
     * @return {?}
     */
    PipRootLayoutComponent.prototype.initMode = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var mode = 'side';
        each(this.rightnavService.floatingRightnavAliases, function (alias) {
            if (_this.media.isActive(alias)) {
                mode = null;
            }
        });
        this.mode$.next(mode);
    };
    PipRootLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pip-root-layout',
                    template: "<mat-sidenav-container class=\"pip-sidenav-floating-container\">\r\n    <mat-sidenav #floatingSidenav opened=\"false\" class=\"pip-sidenav-floating\" position=\"start\">\r\n        <ng-content select=\"pip-sidenav-floating\"></ng-content>\r\n    </mat-sidenav>\r\n    <mat-sidenav #floatingRightnav opened=\"false\" [mode]=\"mode$ | async\" class=\"pip-rightnav\" position=\"end\">\r\n        <ng-content select=\"pip-rightnav-floating\"></ng-content>\r\n    </mat-sidenav>\r\n    <ng-content select=\"pip-root-content\"></ng-content>\r\n</mat-sidenav-container>",
                    styles: ["mat-sidenav{max-width:250px;width:250px;background-color:#eee}.pip-sidenav-floating-container{display:block;height:100%}:host{position:absolute;left:0;top:0;bottom:0;right:0}:host /deep/ pip-root-content{margin:0;width:100%;height:100%;min-width:100%;min-height:100%;display:flex;box-sizing:border-box;flex-direction:column!important}"]
                }] }
    ];
    /** @nocollapse */
    PipRootLayoutComponent.ctorParameters = function () { return [
        { type: PipSidenavService },
        { type: PipRightnavService },
        { type: Renderer },
        { type: ElementRef },
        { type: MediaObserver },
        { type: ChangeDetectorRef }
    ]; };
    PipRootLayoutComponent.propDecorators = {
        sidenav: [{ type: ViewChild, args: ['floatingSidenav',] }],
        rightnav: [{ type: ViewChild, args: ['floatingRightnav',] }]
    };
    return PipRootLayoutComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipRootLayoutModule = /** @class */ (function () {
    function PipRootLayoutModule() {
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
    return PipRootLayoutModule;
}());

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