/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
 var canAttendMeetings = function(intervals) {
   return intervals
    .sort((a, b) => a[0] - b[0])
    .every((interval, index) => {
      const [start, end] = interval;
      if (index < intervals.length -1) {
        const [nextStart, nextEnd] = intervals[index+1];
        return end <= nextStart;
      }
      return true;
    });
 }