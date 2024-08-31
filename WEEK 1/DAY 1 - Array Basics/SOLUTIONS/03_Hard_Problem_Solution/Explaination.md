## Solution Approach

The approach to solve this problem uses the two-pointer technique:

### 1. Initialize Pointers and Variables:
- Start with two pointers, `left` and `right`, at the beginning and end of the array, respectively.
- Initialize two variables, `leftMax` and `rightMax`, to keep track of the maximum height encountered so far from the left and right sides.

### 2. Traverse the Array:
- Use a loop to move the `left` and `right` pointers towards each other until they meet.
- At each step, compare the heights at the `left` and `right` pointers.

### 3. Calculate Water Trapped:
- If `height[left] < height[right]`:
  - If `height[left]` is greater than or equal to `leftMax`, update `leftMax`.
  - Otherwise, calculate the trapped water at `left` by subtracting `height[left]` from `leftMax`.
  - Move the `left` pointer to the right.
- If `height[left] >= height[right]`:
  - If `height[right]` is greater than or equal to `rightMax`, update `rightMax`.
  - Otherwise, calculate the trapped water at `right` by subtracting `height[right]` from `rightMax`.
  - Move the `right` pointer to the left.

### 4. Continue Until Pointers Meet:
- Repeat the above steps until the `left` and `right` pointers meet.

### 5. Sum Up the Trapped Water:
- The sum of the trapped water calculated at each step gives the total amount of water trapped.

## Complexity Analysis
- **Time Complexity:** $O(n)$ – The algorithm traverses the array only once.
- **Space Complexity:** $O(1)$ – The solution uses a constant amount of extra space.

This approach efficiently calculates the amount of trapped water by taking advantage of the two-pointer technique, ensuring that each element in the array is processed only once.
