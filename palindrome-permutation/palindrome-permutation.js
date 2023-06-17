/**
 * @param {string} s
 * @return {boolean}
 */

var canPermutePalindrome = function (s) {
    const charset = {};

    for (var c of s) {
        if (charset[c]) delete charset[c];
        else charset[c] = 1;
    }
    return Object.keys(charset).length <= 1 ? true : false;
}