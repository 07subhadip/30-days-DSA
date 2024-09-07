## Daily Temperatures Problem

### Problem:
We are given an array `temperatures` where each element represents the temperature on a given day. We need to return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`-th day to get a warmer temperature. If there is no future day with a warmer temperature, set `answer[i] = 0`.

### Example:
#### Input:
    temperatures = [73,74,75,71,69,72,76,73]
#### Output:
    answer = [1,1,4,2,1,1,0,0]

### Approach:

We can solve this problem efficiently using a **monotonic stack**. The stack will help us keep track of the indices of temperatures in decreasing order of temperature. As we go through the array:

1. **For each temperature**, we check the stack to see if the current temperature is warmer than the temperature of the day at the index stored at the top of the stack.
2. If it is warmer, we pop the index from the stack and compute the difference in days. This difference is stored in the result array.
3. If it is not warmer, we push the current index onto the stack and move to the next day.

This process ensures that each element is pushed and popped from the stack only once, making it an efficient **O(n)** solution.

### Algorithm Steps:
1. **Initialize** an empty stack and an array `answer` filled with zeros.
2. **Iterate** through the temperature array:
   - For each temperature, check if the current temperature is higher than the temperature at the index stored at the top of the stack.
   - If it is higher, pop the index and calculate the difference in days between the current day and that index.
   - Push the current index onto the stack.
3. **Return** the `answer` array.

### Time Complexity:
- **O(n)**, where `n` is the number of temperatures. Each temperature is pushed and popped from the stack once.

### Space Complexity:
- **O(n)**, due to the space required for the stack and the result array.
