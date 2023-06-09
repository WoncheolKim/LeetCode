/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    const longer = s.length > t.length ? s : t;
    const shorter = s.length > t.length ? t : s;
    
    if (longer.length - shorter.length > 1) {
        return false;
    }
    
    let count = 0, i = 0, j = 0;
    
    while (i < longer.length) {
        if (longer[i] !== shorter[j]) {
            count++;

            if (longer.length > shorter.length) {
            	i++;
            	continue;
            }
        }
        
        i++;
        j++;
    }
    
    return count === 1;
};