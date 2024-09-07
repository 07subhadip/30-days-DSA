#include <vector>
#include <stack>

class Solution {
public:
    std::vector<int> dailyTemperatures(std::vector<int>& temperatures) {
        int n = temperatures.size();
        std::vector<int> answer(n, 0); // Initialize answer array with 0s
        std::stack<int> s; // Stack to store indices
        
        for (int i = 0; i < n; ++i) {
            while (!s.empty() && temperatures[i] > temperatures[s.top()]) {
                int idx = s.top();
                s.pop();
                answer[idx] = i - idx; // Calculate the number of days
            }
            s.push(i); // Push current day index to stack
        }
        
        return answer;
    }
};
