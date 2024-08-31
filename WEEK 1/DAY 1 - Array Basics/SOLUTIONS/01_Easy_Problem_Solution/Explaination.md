# Explanation: Solving the "Two Sum" Problem
### Problem Overview
The "Two Sum" problem requires finding two distinct indices in an array of integers such that the numbers at these indices sum up to a given target value.

### Approach
To solve the problem efficiently, we can use a hash map (or dictionary) to track the indices of the numbers we have seen so far. This approach has a time complexity of $O(n)$, where
$n$ is the number of elements in the array. Here's a step-by-step explanation:

1. **Initialize a Hash Map:**

* Create an empty hash map (or dictionary) to store the value-to-index mappings.

2. **Iterate Through the Array:**

* For each number in the array, calculate its complement by subtracting the number from the target.
* Check if this complement exists in the hash map:
    * If it exists, it means we have previously seen a number that, when added to the current number, equals the target. Therefore, we can return the indices of these two numbers.
    * If it does not exist, store the current number and its index in the hash map for future reference.
3. **Return the Result:**

* Once a valid pair is found, return their indices.

**Detailed Steps**
1. **Initialization:**

* Create an empty hash map, `num_to_index`.

2. **Processing Each Element:**

* Loop through each element in the array.
* For each element `num`, compute the `complement` as `target - num`.
* Check if the `complement` is already in the hash map:
    * If it is, return the index of the `complement` and the current index.
    * If it is not, add the current number along with its index to the hash map.
3. **Time Complexity:**

* The algorithm runs in
$O(n)$ time because it involves a single pass through the array and constant-time operations for hash map access.

**Example Walkthrough**

Consider the array `nums = [2, 7, 11, 15]` and `target = 9`:

* Initialize an empty hash map.
* Iterate through `nums`:
    * For `num = 2`, the `complement` is `9 - 2 = 7`. The hash map does not contain `7`, so add `2` with index `0` to the hash map.
    * For `num = 7`, the `complement` is `9 - 7 = 2`. The hash map contains `2` with index `0`, so return the indices `[0, 1]`.

This approach ensures that we find the solution in linear time, making it efficient even for larger arrays.