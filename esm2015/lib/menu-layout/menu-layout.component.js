/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Renderer, ElementRef, Input, ChangeDetectorRef } from '@angular/core';
export class PipMenuLayoutComponent {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    PipMenuLayoutComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PipMenuLayoutComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    PipMenuLayoutComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlwLXdlYnVpMi1sYXlvdXRzLyIsInNvdXJjZXMiOlsibGliL21lbnUtbGF5b3V0L21lbnUtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPN0csTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBUS9CLFlBQ1ksUUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsRUFBcUI7UUFGckIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBRTdCLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7OztJQWJELElBQWEsTUFBTSxDQUFDLE1BQWU7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3BGLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUMzQjtJQUNMLENBQUM7Ozs7SUFVTSxRQUFRO0lBRWYsQ0FBQzs7OztJQUVNLFdBQVc7SUFFbEIsQ0FBQzs7O1lBM0JKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUUzQixRQUFRLEVBQUUsMkJBQTJCOzthQUN4Qzs7OztZQU5tQixRQUFRO1lBQUUsVUFBVTtZQUE0QixpQkFBaUI7OztxQkFRaEYsS0FBSzs7Ozs7OztJQVFGLDBDQUEwQjs7Ozs7SUFDMUIsdUNBQXlCOzs7OztJQUN6QixvQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGlwLW1lbnUtbGF5b3V0JyxcclxuICAgIHN0eWxlVXJsczogWycuL21lbnUtbGF5b3V0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaXBNZW51TGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgQElucHV0KCkgc2V0IHNpbmdsZShzaW5nbGU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0W3NpbmdsZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdwaXAtc2luZ2xlLWNvbnRlbnQnKTtcclxuICAgICAgICBpZiAodGhpcykge1xyXG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICAgKSB7XHJcbiAgICAgICAgcmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKGVsUmVmLm5hdGl2ZUVsZW1lbnQsICdwaXAtbWVudS1sYXlvdXQnLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19