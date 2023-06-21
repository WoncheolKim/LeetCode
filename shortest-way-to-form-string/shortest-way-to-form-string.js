/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
   let subs = []
   let t = 0
   while (t < target.length) {
      let sub = ''
      for (let i=0; i<source.length; i++) {
         let targetLetter = target[t]
         let letter = source[i]
         if (targetLetter === letter) {
            sub +=letter
            t++
         }
      }
      if (!sub) return -1
      subs.push(sub)
   }

   return subs.length
};