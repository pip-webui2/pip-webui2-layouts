/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Renderer, ElementRef, Input } from '@angular/core';
export class PipDocumentLayoutComponent {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    PipDocumentLayoutComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PipDocumentLayoutComponent.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpcC13ZWJ1aTItbGF5b3V0cy8iLCJzb3VyY2VzIjpbImxpYi9kb2N1bWVudC1sYXlvdXQvZG9jdW1lbnQtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFPMUYsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFLbkMsWUFDWSxRQUFrQixFQUNsQixLQUFpQjtRQURqQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFFekIsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7O0lBVEQsSUFBYSxPQUFPLENBQUMsT0FBeUI7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sS0FBSyxNQUFNLElBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RILENBQUM7Ozs7SUFTTSxRQUFRO0lBRWYsQ0FBQzs7OztJQUVNLFdBQVc7SUFFbEIsQ0FBQzs7O1lBdkJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUUvQiw0U0FBK0M7O2FBQ2xEOzs7O1lBTm1CLFFBQVE7WUFBRSxVQUFVOzs7c0JBUW5DLEtBQUs7Ozs7Ozs7SUFLRiw4Q0FBMEI7Ozs7O0lBQzFCLDJDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BpcC1kb2N1bWVudC1sYXlvdXQnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZG9jdW1lbnQtbGF5b3V0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZG9jdW1lbnQtbGF5b3V0LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGlwRG9jdW1lbnRMYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBASW5wdXQoKSBzZXQgdG9vbGJhcih0b29sYmFyOiBib29sZWFuIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdFt0b29sYmFyID09PSAndHJ1ZScgfHwgdG9vbGJhciA9PT0gdHJ1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdwaXAtd2l0aC10b29sYmFyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZlxyXG4gICAgKSB7XHJcbiAgICAgICAgcmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKGVsUmVmLm5hdGl2ZUVsZW1lbnQsICdwaXAtZG9jdW1lbnQtbGF5b3V0JywgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==