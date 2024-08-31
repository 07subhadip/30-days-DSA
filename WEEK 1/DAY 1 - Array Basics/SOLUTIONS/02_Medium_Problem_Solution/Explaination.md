# Maximum Subarray Problem

## Problem Statement

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

## Example

- **Input:** `nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]`
- **Output:** `6`
- **Explanation:** The subarray `[4, -1, 2, 1]` has the largest sum `6`.

## Approach: Kadane's Algorithm

The problem can be efficiently solved using **Kadane's Algorithm**. The algorithm helps in finding the maximum sum of a contiguous subarray in linear time, i.e., O(n).

### Steps

1. **Initialization:**
   - `max_sum`: Initialize this to the first element of the array. This variable will store the maximum sum encountered so far.
   - `current_sum`: Start this at `0`. This variable will store the sum of the current subarray.

2. **Iterate Through the Array:**
   - For each element `num` in the array:
     - Update `current_sum` to be the maximum of:
       - The current element (`num`) itself.
       - The sum of the current element plus the previous `current_sum`.
     - Update `max_sum` to be the maximum of:
       - The previous `max_sum`.
       - The updated `current_sum`.

3. **Return Result:**
   - After iterating through the array, `max_sum` will hold the value of the maximum subarray sum.

## Example Walkthrough

Let's walk through an example using `nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]`:

1. **Initial Values:**
   - `max_sum = -2`
   - `current_sum = 0`

2. **Iteration:**

    | Iteration | `num` | `current_sum`                  | `max_sum`               |
    |-----------|-------|--------------------------------|-------------------------|
    | 1         | -2    | `max(-2, 0 + (-2)) = -2`       | `max(-2, -2) = -2`      |
    | 2         | 1     | `max(1, -2 + 1) = 1`           | `max(-2, 1) = 1`        |
    | 3         | -3    | `max(-3, 1 + (-3)) = -2`       | `max(1, -2) = 1`        |
    | 4         | 4     | `max(4, -2 + 4) = 4`           | `max(1, 4) = 4`         |
    | 5         | -1    | `max(-1, 4 + (-1)) = 3`        | `max(4, 3) = 4`         |
    | 6         | 2     | `max(2, 3 + 2) = 5`            | `max(4, 5) = 5`         |
    | 7         | 1     | `max(1, 5 + 1) = 6`            | `max(5, 6) = 6`         |
    | 8         | -5    | `max(-5, 6 + (-5)) = 1`        | `max(6, 1) = 6`         |
    | 9         | 4     | `max(4, 1 + 4) = 5`            | `max(6, 5) = 6`         |

3. **Final Output:**
   - The maximum subarray sum is `6`.

## Conclusion

Kadane's Algorithm provides an efficient way to solve the Maximum Subarray problem in $O(n)$ time. This approach is optimal for large arrays