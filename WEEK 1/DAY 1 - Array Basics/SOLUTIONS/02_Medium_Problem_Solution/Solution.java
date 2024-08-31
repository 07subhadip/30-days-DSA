class Solution {
    public int maxSubArray(int[] nums) {
        int max_sum = nums[0];
        int current_sum = 0;
        
        for (int num : nums) {
            current_sum = Math.max(num, current_sum + num);
            max_sum = Math.max(max_sum, current_sum);
        }
        
        return max_sum;
    }
}
