/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    let first = 0
    let second = 1
    
    while (second < nums.length) {
        const isEven = first === 0 || (first % 2) === 0
        if (isEven && nums[first] > nums[second]) {
            [nums[first], nums[second]] = [nums[second], nums[first]]
        } else if (!isEven && nums[first] < nums[second]) {
            [nums[first], nums[second]] = [nums[second], nums[first]]
        }
        first += 1, second += 1
    }
};