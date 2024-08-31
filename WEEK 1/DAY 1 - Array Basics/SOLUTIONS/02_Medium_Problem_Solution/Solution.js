/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max_sum = nums[0];
    let current_sum = 0;
    
    for (let num of nums) {
        current_sum = Math.max(num, current_sum + num);
        max_sum = Math.max(max_sum, current_sum);
    }
    
    return max_sum;
};
