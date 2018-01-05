export function each(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}

export function intersection(a, b) {
    var ai = 0, bi = 0;
    var result = [];

    while (ai < a.length && bi < b.length) {
        if (a[ai] < b[bi]) { ai++; }
        else if (a[ai] > b[bi]) { bi++; }
        else /* they're equal */ {
            result.push(a[ai]);
            ai++;
            bi++;
        }
    }

    return result;
}