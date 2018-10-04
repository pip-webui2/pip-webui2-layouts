const attachEvent = (<any>document).attachEvent;
const isIE = navigator.userAgent.match(/Trident/);

function requestFrame(callback): any {
           'ngInject';
    const frame = window.requestAnimationFrame
        || (<any>window).mozRequestAnimationFrame
        || (<any>window).webkitRequestAnimationFrame
        || function (cb) {
            return window.setTimeout(cb, 20);
        };

    return frame(callback);
}

function cancelFrame(): any {
           'ngInject';
    const cancel = window.cancelAnimationFrame
        || (<any>window).mozCancelAnimationFrame
        || (<any>window).webkitCancelAnimationFrame
        || window.clearTimeout;

    return function (id) {
        return cancel(id);
    };
}

function resizeListener(event: any): void {
    const win = event.target || event.srcElement;
    if (win.__resizeRAF__) { cancelFrame(/*win.__resizeRAF__*/); }
    win.__resizeRAF__ = requestFrame(function () {
        const trigger = win.__resizeTrigger__;
        trigger.__resizeListeners__.forEach(function (fn) {
            fn.call(trigger, event);
        });
    });
}

function loadListener(event: any): void {
    if (this.contentDocument) {
        this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__;
        this.contentDocument.defaultView.addEventListener('resize', resizeListener);
    }
}

export function addResizeListener(element, listener): void {
           'ngInject';
    if (!element.__resizeListeners__) {
        element.__resizeListeners__ = [];
        if (attachEvent) {
            element.__resizeTrigger__ = element;
            element.attachEvent('onresize', resizeListener);
        } else {
            // if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
            const obj: any = element.__resizeTrigger__ = document.createElement('object');
            // tslint:disable-next-line:max-line-length
            obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
            obj.__resizeElement__ = element;
            obj.onload = loadListener;
            obj.type = 'text/html';
            if (isIE) { element.appendChild(obj); }
            obj.data = 'about:blank';
            if (!isIE) { element.appendChild(obj); }
        }
    }

    element.__resizeListeners__.push(listener);
}

export function removeResizeListener(element, listener): void {
           'ngInject';
    if (listener) { element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(listener), 1); }
    if (!element.__resizeListeners__.length) {
        if (attachEvent) { element.detachEvent('onresize', resizeListener); } else {
            if (element.__resizeTrigger__.contentDocument) {
                element.__resizeTrigger__.contentDocument.defaultView.removeEventListener('resize', resizeListener);
                element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
            }
        }
    }
}
