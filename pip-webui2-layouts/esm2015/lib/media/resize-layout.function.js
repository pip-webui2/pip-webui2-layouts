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
export function addResizeListener(element, listener) {
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
export function removeResizeListener(element, listener) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLWxheW91dC5mdW5jdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpcC13ZWJ1aTItbGF5b3V0cy8iLCJzb3VyY2VzIjpbImxpYi9tZWRpYS9yZXNpemUtbGF5b3V0LmZ1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O01BQU0sV0FBVyxHQUFHLENBQUMsbUJBQUssUUFBUSxFQUFBLENBQUMsQ0FBQyxXQUFXOztNQUN6QyxJQUFJLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDOzs7OztBQUVqRCxTQUFTLFlBQVksQ0FBQyxRQUFRO0lBQ25CLFVBQVUsQ0FBQzs7VUFDWixLQUFLLEdBQUcsTUFBTSxDQUFDLHFCQUFxQjtXQUNuQyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsd0JBQXdCO1dBQ3RDLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQywyQkFBMkI7V0FDekMsVUFBVSxFQUFFO1lBQ1gsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBRUwsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0IsQ0FBQzs7OztBQUVELFNBQVMsV0FBVztJQUNULFVBQVUsQ0FBQzs7VUFDWixNQUFNLEdBQUcsTUFBTSxDQUFDLG9CQUFvQjtXQUNuQyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsdUJBQXVCO1dBQ3JDLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQywwQkFBMEI7V0FDeEMsTUFBTSxDQUFDLFlBQVk7SUFFMUIsT0FBTyxVQUFVLEVBQUU7UUFDZixPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUM7QUFDTixDQUFDOzs7OztBQUVELFNBQVMsY0FBYyxDQUFDLEtBQVU7O1VBQ3hCLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVO0lBQzVDLElBQUksR0FBRyxDQUFDLGFBQWEsRUFBRTtRQUFFLFdBQVcsRUFBQyxxQkFBcUIsQ0FBQyxDQUFDO0tBQUU7SUFDOUQsR0FBRyxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7O2NBQ3ZCLE9BQU8sR0FBRyxHQUFHLENBQUMsaUJBQWlCO1FBQ3JDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzVDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDOzs7OztBQUVELFNBQVMsWUFBWSxDQUFDLEtBQVU7SUFDNUIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUM1RSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7S0FDL0U7QUFDTCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFFBQVE7SUFDeEMsVUFBVSxDQUFDO0lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUU7UUFDOUIsT0FBTyxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFJLFdBQVcsRUFBRTtZQUNiLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUM7WUFDcEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDbkQ7YUFBTTs7O2tCQUVHLEdBQUcsR0FBUSxPQUFPLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDN0UsMkNBQTJDO1lBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHNJQUFzSSxDQUFDLENBQUM7WUFDbEssR0FBRyxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztZQUNoQyxHQUFHLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztZQUMxQixHQUFHLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztZQUN2QixJQUFJLElBQUksRUFBRTtnQkFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQUU7WUFDdkMsR0FBRyxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQUU7U0FDM0M7S0FDSjtJQUVELE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0MsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxRQUFRO0lBQzNDLFVBQVUsQ0FBQztJQUNsQixJQUFJLFFBQVEsRUFBRTtRQUFFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUFFO0lBQ3ZHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFO1FBQ3JDLElBQUksV0FBVyxFQUFFO1lBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FBRTthQUFNO1lBQ3ZFLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUNwRyxPQUFPLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQy9FO1NBQ0o7S0FDSjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdHRhY2hFdmVudCA9ICg8YW55PmRvY3VtZW50KS5hdHRhY2hFdmVudDtcclxuY29uc3QgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQvKTtcclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RGcmFtZShjYWxsYmFjayk6IGFueSB7XHJcbiAgICAgICAgICAgJ25nSW5qZWN0JztcclxuICAgIGNvbnN0IGZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICAgIHx8ICg8YW55PndpbmRvdykubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgfHwgKDxhbnk+d2luZG93KS53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAgICB8fCBmdW5jdGlvbiAoY2IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGNiLCAyMCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gZnJhbWUoY2FsbGJhY2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWxGcmFtZSgpOiBhbnkge1xyXG4gICAgICAgICAgICduZ0luamVjdCc7XHJcbiAgICBjb25zdCBjYW5jZWwgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWVcclxuICAgICAgICB8fCAoPGFueT53aW5kb3cpLm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgfHwgKDxhbnk+d2luZG93KS53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZVxyXG4gICAgICAgIHx8IHdpbmRvdy5jbGVhclRpbWVvdXQ7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiBjYW5jZWwoaWQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzaXplTGlzdGVuZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3Qgd2luID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7XHJcbiAgICBpZiAod2luLl9fcmVzaXplUkFGX18pIHsgY2FuY2VsRnJhbWUoLyp3aW4uX19yZXNpemVSQUZfXyovKTsgfVxyXG4gICAgd2luLl9fcmVzaXplUkFGX18gPSByZXF1ZXN0RnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSB3aW4uX19yZXNpemVUcmlnZ2VyX187XHJcbiAgICAgICAgdHJpZ2dlci5fX3Jlc2l6ZUxpc3RlbmVyc19fLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgICAgICAgIGZuLmNhbGwodHJpZ2dlciwgZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRMaXN0ZW5lcihldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jb250ZW50RG9jdW1lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlldy5fX3Jlc2l6ZVRyaWdnZXJfXyA9IHRoaXMuX19yZXNpemVFbGVtZW50X187XHJcbiAgICAgICAgdGhpcy5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXcuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplTGlzdGVuZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUmVzaXplTGlzdGVuZXIoZWxlbWVudCwgbGlzdGVuZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAnbmdJbmplY3QnO1xyXG4gICAgaWYgKCFlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18pIHtcclxuICAgICAgICBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18gPSBbXTtcclxuICAgICAgICBpZiAoYXR0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfXyA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoJ29ucmVzaXplJywgcmVzaXplTGlzdGVuZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09ICdzdGF0aWMnKSBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgICAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcl9fID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgb2JqLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XHJcbiAgICAgICAgICAgIG9iai5fX3Jlc2l6ZUVsZW1lbnRfXyA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG9iai5vbmxvYWQgPSBsb2FkTGlzdGVuZXI7XHJcbiAgICAgICAgICAgIG9iai50eXBlID0gJ3RleHQvaHRtbCc7XHJcbiAgICAgICAgICAgIGlmIChpc0lFKSB7IGVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqKTsgfVxyXG4gICAgICAgICAgICBvYmouZGF0YSA9ICdhYm91dDpibGFuayc7XHJcbiAgICAgICAgICAgIGlmICghaXNJRSkgeyBlbGVtZW50LmFwcGVuZENoaWxkKG9iaik7IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLnB1c2gobGlzdGVuZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUmVzaXplTGlzdGVuZXIoZWxlbWVudCwgbGlzdGVuZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAnbmdJbmplY3QnO1xyXG4gICAgaWYgKGxpc3RlbmVyKSB7IGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXy5zcGxpY2UoZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLmluZGV4T2YobGlzdGVuZXIpLCAxKTsgfVxyXG4gICAgaWYgKCFlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18ubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGF0dGFjaEV2ZW50KSB7IGVsZW1lbnQuZGV0YWNoRXZlbnQoJ29ucmVzaXplJywgcmVzaXplTGlzdGVuZXIpOyB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfXy5jb250ZW50RG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuX19yZXNpemVUcmlnZ2VyX18uY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuX19yZXNpemVUcmlnZ2VyX18gPSAhZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcl9fKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=