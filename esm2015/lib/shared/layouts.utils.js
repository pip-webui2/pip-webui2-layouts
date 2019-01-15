/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} array
 * @param {?} iteratee
 * @return {?}
 */
export function each(array, iteratee) {
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
export function intersection(a, b) {
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
 * @param {?} func
 * @param {?} wait
 * @param {?} immediate
 * @return {?}
 */
export function debounce(func, wait, immediate) {
    /** @type {?} */
    let timeout;
    return function () {
        /** @type {?} */
        const context = this;
        /** @type {?} */
        const args = arguments;
        /** @type {?} */
        const later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        /** @type {?} */
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0cy51dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpcC13ZWJ1aTItbGF5b3V0cy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbGF5b3V0cy51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNLFVBQVUsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFROztRQUM1QixLQUFLLEdBQUcsQ0FBQyxDQUFDOztVQUNSLE1BQU0sR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNO0lBRS9DLE9BQU8sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFO1FBQ3JCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ2hELE1BQU07U0FDVDtLQUNKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7UUFDekIsRUFBRSxHQUFHLENBQUM7O1FBQUUsRUFBRSxHQUFHLENBQUM7O1VBQ1osTUFBTSxHQUFHLEVBQUU7SUFFakIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtRQUNuQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFBRSxFQUFFLEVBQUUsQ0FBQztTQUFFO2FBQU0sSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQUUsRUFBRSxFQUFFLENBQUM7U0FBRTthQUFNLG1CQUFtQixDQUFDO1lBQ3BGLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkIsRUFBRSxFQUFFLENBQUM7WUFDTCxFQUFFLEVBQUUsQ0FBQztTQUNSO0tBQ0o7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVM7O1FBQ3RDLE9BQU87SUFDWCxPQUFPOztjQUNHLE9BQU8sR0FBRyxJQUFJOztjQUFFLElBQUksR0FBRyxTQUFTOztjQUNoQyxLQUFLLEdBQUc7WUFDVixPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2YsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUFFO1FBQ2xELENBQUM7O2NBQ0ssT0FBTyxHQUFHLFNBQVMsSUFBSSxDQUFDLE9BQU87UUFDckMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksT0FBTyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FBRTtJQUMvQyxDQUFDLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XHJcbiAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0aW9uKGEsIGIpIHtcclxuICAgIGxldCBhaSA9IDAsIGJpID0gMDtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cclxuICAgIHdoaWxlIChhaSA8IGEubGVuZ3RoICYmIGJpIDwgYi5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoYVthaV0gPCBiW2JpXSkgeyBhaSsrOyB9IGVsc2UgaWYgKGFbYWldID4gYltiaV0pIHsgYmkrKzsgfSBlbHNlIC8qIHRoZXkncmUgZXF1YWwgKi8ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChhW2FpXSk7XHJcbiAgICAgICAgICAgIGFpKys7XHJcbiAgICAgICAgICAgIGJpKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcclxuICAgIGxldCB0aW1lb3V0O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSB7IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7IH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuICAgICAgICBpZiAoY2FsbE5vdykgeyBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpOyB9XHJcbiAgICB9O1xyXG59XHJcbiJdfQ==