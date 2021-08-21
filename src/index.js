
exports.min = function min(array) {
    return array == '' || array == undefined ? 0 : Math.min(...array);
}

exports.max = function max(array) {
    return array == '' || array == undefined ? 0 : Math.max(...array);
}

exports.avg = function avg(array) {
    if (array == '' || array == undefined) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
