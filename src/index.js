
exports.min = function min (array) {
    if(array === undefined)
        return 0;
    let ArMin = array[0];
    for(let i = 1;i<array.length;i++) {
        if(array[i] <ArMin)
            ArMin = array[i];
    }
    return ArMin;
}

exports.max = function max (array) {
    if(array === undefined)
        return 0;
    let ArMax = array[0];
    for(let i = 1;i<array.length;i++) {
        if(array[i] >ArMax)
            ArMax = array[i];
    }
    return ArMax;
}

exports.avg = function avg (array) {
    if(array === undefined)
        return 0;
    let Avg = 0;
    for(let i = 0;i<array.length;i++) {
        Avg+=array[i];
    }
    Avg = Avg/array.length;
    return Avg;
}
