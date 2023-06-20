/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(str) {
    if (str === null || str.length === 0) {
        return;
    }
    str.reverse();
    let start = 0;
    let end = 0;
    while (end <= str.length) {
        if (str[end] === " " || end === str.length) {
            let left = start;
            let right = end - 1;
            while (left < right) {
                let temp = str[left];
                str[left] = str[right];
                str[right] = temp;
                left++;
                right--;
            }
            start = end + 1;
        }
        end ++;
    }
    
};