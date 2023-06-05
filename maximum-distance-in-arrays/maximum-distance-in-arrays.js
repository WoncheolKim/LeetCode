/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    const maxes = [-Infinity, -Infinity];
    for (let arr of arrays) {
        maxes.push(arr[arr.length - 1]);
        maxes.sort((a, b) => a - b).shift();
    }
    
    let res = -Infinity;
    for (let arr of arrays) {
        let max = arr[arr.length - 1];
        if (max === maxes[0]) {
            res = Math.max(res, maxes[1] - arr[0]);
        } else if (max === maxes[1]) {
            res = Math.max(res, maxes[0] - arr[0]);
        } else {
            res = Math.max(res, maxes[0] - arr[0], maxes[1] - arr[0]);
        }
    }
    
    return res;
};