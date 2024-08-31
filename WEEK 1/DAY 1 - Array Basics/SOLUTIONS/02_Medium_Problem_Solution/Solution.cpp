#include <vector>
#include <algorithm>

class Solution {
public:
    int maxSubArray(std::vector<int>& nums) {
        int max_sum = nums[0];
        int current_sum = 0;

        for (int num : nums) {
            current_sum = std::max(num, current_sum + num);
            max_sum = std::max(max_sum, current_sum);
        }

        return max_sum;
    }
};
