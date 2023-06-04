/**
 * @param {number} n
 * @return {boolean}
 */
function confusingNumber(n) {
    let k = n;
    const map = new Map([[0,0], [1,1], [6,9], [8,8], [9,6]]);
    let rotated = 0;
    while (k) {
        const num = k % 10;
        if (!map.has(num)) return false;
        rotated = rotated * 10 + map.get(num);
        k = Math.floor(k / 10);
    }
    return rotated !== n;
    
}