# 🚀 Day 2: Arrays - Advanced Techniques

Hello everyone! 👋

Welcome to **Day 2** of our DSA journey. Today, we're going to explore two powerful techniques that will help you solve array and string problems more efficiently:

- **Two-Pointer Technique**
- **Sliding Window Technique**

These techniques are widely used in competitive programming and technical interviews. Understanding them will greatly enhance your problem-solving skills. Let's dive in! 🌊

<hr>

## 1. 👫 Two-Pointer Technique

### 🔍 What is the Two-Pointer Technique?

In the Two-pointer technique, you work with two pointers (or indices) that traverse a data structure, such as an array or a string. Depending on the problem, these pointers can move towards each other, away from each other, or in the same direction. The main idea is to eliminate the need for nested loops, which can be time-consuming, by using these two pointers to process the data more efficiently.

### 📌 When to Use Two-Pointer Technique?

- **Finding pairs:** When you need to find pairs of elements in an array that satisfy a certain condition (e.g., sum up to a target value).
- **Reversing:** When you need to reverse elements in a sequence.
- **Sorting:** When merging two sorted arrays or other similar operations.
- **Partitioning:** When you need to separate elements in an array based on a condition (e.g., all negatives on one side, positives on the other).

### 🌍 Real-life Example
Imagine you and your friend are trying to find a specific pair of shoes in a large shoe store. The store is so big that it would take forever if both of you started from the entrance and went through every single aisle together. Instead, you decide to split up: you start from the entrance, and your friend starts from the back of the store.

You both walk towards each other, checking the shoe pairs as you go. If your friend finds a shoe that could match one you’re looking at, you meet in the middle and compare. If not, you keep moving until you find the matching pair. This way, you cover the store faster and more efficiently.

### 🛠️ How Does It Work?

**1. Initialize Two Pointers:**

- **Left Pointer ( i ) :**  Starts at the beginning of the array/string.
- **Right Pointer ( j ) :**  Starts at the end of the array/string.

**2. Move Pointers Based on Conditions:**

- Move **left pointer forward** or **right pointer backward** depending on the logic required.
- Sometimes both pointers move towards each other; other times, they move in the same direction.

**3. Process Elements:**

- At each step, perform necessary operations or checks using the elements pointed by the two pointers.

### 🎯 Examples and Illustrations

**Example 1:** Reversing an Array

**Problem Statement:** Reverse the given array in-place.

**Given:**

    [1, 2, 3, 4, 5]

**Approach:**

- Use two pointers:

    - **Left Pointer `(i)` :**  Starts at index 0.
    - **Right Pointer `(j)` :**  Starts at index n-1.

- Process:

    - Swap elements at `i` and `j`.
    - Move `i` forward and `j` backward.
    - Repeat until `i >= j`.

**Visualization:**

<div align="center">

| Step | Array State       | i | j |
|------|-------------------|---|---|
| 1    | [1, 2, 3, 4, 5]   | 0 | 4 |
| Swap | [5, 2, 3, 4, 1]   | 1 | 3 |
| 2    | [5, 2, 3, 4, 1]   | 1 | 3 |
| Swap | [5, 4, 3, 2, 1]   | 2 | 2 |
| End  | [5, 4, 3, 2, 1]   | 2 | 2 |

</div>


**Result:**

    [5, 4, 3, 2, 1]

Here are examples how you can use Two pointer technique for Example 1

- [C++](#cpp)
- [Python](#python)
- [Java](#java)
- [JavaScript](#javascript)

### C++
```cpp
    #include <iostream>
    using namespace std;

    void reverseArray(int arr[], int n) {
        int i = 0, j = n - 1; // Initialize two pointers
        while (i < j) {
            // Swap elements at i and j
            swap(arr[i], arr[j]);
            i++; // Move i forward
            j--; // Move j backward
        }
    }

    int main() {
        int arr[] = {1, 2, 3, 4, 5};
        int n = sizeof(arr) / sizeof(arr[0]);

        reverseArray(arr, n);

        // Output the reversed array
        for (int i = 0; i < n; i++) {
            cout << arr[i] << " "; // Expected output: 5 4 3 2 1
        }

        return 0;
    }

```
### Python
```python
    def reverse_array(arr):
        i = 0
        j = len(arr) - 1 # Initialize two pointers
        while i < j:
            # Swap elements at i and j
            arr[i], arr[j] = arr[j], arr[i]
            i += 1 # Move i forward
            j -= 1 # Move j backward

    arr = [1, 2, 3, 4, 5]
    reverse_array(arr)

    # Output the reversed array
    print(arr) # Expected output: [5, 4, 3, 2, 1]

```
### Java
```java
    public class Main {
        public static void reverseArray(int[] arr) {
            int i = 0, j = arr.length - 1; // Initialize two pointers
            while (i < j) {
                // Swap elements at i and j
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++; // Move i forward
                j--; // Move j backward
            }
        }

        public static void main(String[] args) {
            int[] arr = {1, 2, 3, 4, 5};

            reverseArray(arr);

            // Output the reversed array
            for (int i : arr) {
                System.out.print(i + " "); // Expected output: 5 4 3 2 1
            }
        }
    }

```
### JavaScript
```javascript
    function reverseArray(arr) {
        let i = 0, j = arr.length - 1; // Initialize two pointers
        while (i < j) {
            // Swap elements at i and j
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++; // Move i forward
            j--; // Move j backward
        }
        return arr;
    }

    let arr = [1, 2, 3, 4, 5];
    console.log(reverseArray(arr)); // Expected output: [5, 4, 3, 2, 1]

```

**Example 2:** Finding Two Numbers that Add Up to a Target

**Problem Statement:** Given a sorted array and a target sum, find two numbers that add up to the target.

**Given:**

    Array: [1, 2, 3, 4, 6]
    Target Sum: 6

**Approach:**

- Initialize two pointers:

    - **Left Pointer `(i)` :** Start at index 0.
    - **Right Pointer `(j)` :** Start at index n-1.

- **Process:**

    - Calculate current sum = `arr[i] + arr[j]`.
    - If current sum == target, return `arr[i]` and `arr[j]`.
    - If current sum < target, move `i` forward.
    - If current sum > target, move `j` backward.

**Visualization:**

<div align="center">

| i  | j  | arr[i] | arr[j] | Sum | Action               |
|----|----|--------|--------|-----|----------------------|
| 0  | 4  | 1      | 6      | 7   | Sum > Target -> j--   |
| 0  | 3  | 1      | 4      | 5   | Sum < Target -> i++   |
| 1  | 3  | 2      | 4      | 6   | Sum == Target -> Found |

</div>


**Result:**

    Numbers found: 2 and 4

Here are examples how you can use Two pointer technique for Example 2

- [C++](#cpp)
- [Python](#python)
- [Java](#java)
- [JavaScript](#javascript)

### C++
```cpp
    #include <iostream>
    #include <vector>
    #include <unordered_map>
    using namespace std;

    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map; // To store the difference and its index
        for (int i = 0; i < nums.size(); i++) {
            int diff = target - nums[i]; // Calculate the difference
            if (map.find(diff) != map.end()) {
                return {map[diff], i}; // If the difference is found, return the indices
            }
            map[nums[i]] = i; // Store the current number and its index
        }
        return {}; // Return an empty vector if no solution is found
    }

    int main() {
        vector<int> nums = {2, 7, 11, 15};
        int target = 9;
        vector<int> result = twoSum(nums, target);
        cout << "Indices: " << result[0] << ", " << result[1] << endl; // Output the result
        return 0;
    }

```

### Python
```python
    def two_sum(nums, target):
        num_map = {}  # To store the difference and its index
        for i, num in enumerate(nums):
            diff = target - num  # Calculate the difference
            if diff in num_map:
                return [num_map[diff], i]  # If the difference is found, return the indices
            num_map[num] = i  # Store the current number and its index
        return []  # Return an empty list if no solution is found

    nums = [2, 7, 11, 15]
    target = 9
    result = two_sum(nums, target)
    print("Indices:", result)  # Output the result

```

### Java
```java
    import java.util.HashMap;
    import java.util.Map;

    public class TwoSum {
        public int[] twoSum(int[] nums, int target) {
            Map<Integer, Integer> map = new HashMap<>(); // To store the difference and its index
            for (int i = 0; i < nums.length; i++) {
                int diff = target - nums[i]; // Calculate the difference
                if (map.containsKey(diff)) {
                    return new int[] { map.get(diff), i }; // If the difference is found, return the indices
                }
                map.put(nums[i], i); // Store the current number and its index
            }
            return new int[0]; // Return an empty array if no solution is found
        }

        public static void main(String[] args) {
            TwoSum ts = new TwoSum();
            int[] nums = {2, 7, 11, 15};
            int target = 9;
            int[] result = ts.twoSum(nums, target);
            System.out.println("Indices: " + result[0] + ", " + result[1]); // Output the result
        }
    }

```

### JavaScript
```javascript
    function twoSum(nums, target) {
        const map = new Map(); // To store the difference and its index
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]; // Calculate the difference
            if (map.has(diff)) {
                return [map.get(diff), i]; // If the difference is found, return the indices
            }
            map.set(nums[i], i); // Store the current number and its index
        }
        return []; // Return an empty array if no solution is found
    }

    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    console.log("Indices:", result); // Output the result

```
<hr>

## 2. 🎥 Sliding Window Technique

### 🔍 What is the Sliding Window Technique?
The **Sliding Window Technique** is used to reduce the time complexity in problems involving arrays or strings by creating a window (a subset of the data structure) that slides over the data to inspect different parts of it.

### 📌 When to Use Sliding Window Technique?
- When dealing with subarrays or substrings that satisfy certain conditions (e.g., maximum/minimum sum, specific length, unique characters).
- Problems that require contiguous sequences.
- Optimizing solutions from $O(n²)$ to $O(n)$ time complexity.
### 🛠️ How Does It Work?
**1. Define Window Boundaries:**

- **Start (`left`):** Beginning of the window.
- **End (`right`):** End of the window.

**2. Expand or Shrink Window:**

- **Expand:** Move the `right` pointer to include more elements until a condition is met.
- **Shrink:** Move the `left` pointer to exclude elements and try to optimize or meet certain conditions.

**3. Process and Record Results:**

- At each step, process the current window (e.g., calculate sum, check conditions).
- Update result if current window satisfies the desired condition better than previous ones.

**🎯 Examples and Illustrations**

**Example :** Maximum Sum Subarray of Size K

**Problem Statement:** Given an array of integers and a number `k`, find the maximum sum of any contiguous subarray of size `k`.

**Given:**

    Array: [2, 1, 5, 1, 3, 2]
    k = 3

**Approach:**

- Initialize variables:

    - **Window Sum:** Sum of the current window.
    - **Max Sum:** Maximum sum found so far.

- **Process:**

    - Calculate sum of first `k` elements.
    - Slide the window by one element at a time:
        - Subtract the element going out of the window.
        - Add the new element coming into the window.
        - Update Max Sum if current window sum is greater.

**Visualization:**
<div align="center">

Window	Sum	Max Sum
| Window            | Sum | Max Sum |
|-------------------|-----|---------|
| [2, 1, 5], 1, 3, 2 | 8   | 8       |
| 2, [1, 5, 1], 3, 2 | 7   | 8       |
| 2, 1, [5, 1, 3], 2 | 9   | 9       |
| 2, 1, 5, [1, 3, 2] | 6   | 9       |

</div>

**Result:**

    Maximum sum of subarray of size 3 is 9

**Implementation of Sliding Window Technique Example**

- [C++](#cpp)
- [Python](#python)
- [Java](#java)
- [JavaScript](#javascript)

### C++
```cpp
    #include <iostream>
    #include <vector>
    #include <algorithm> // for max function

    // Function to find the maximum sum of a subarray of size k
    int maxSumSubarray(std::vector<int>& nums, int k) {
        if (nums.size() < k) return -1; // Not enough elements

        int maxSum = 0, windowSum = 0;

        // Calculate the sum of the first window
        for (int i = 0; i < k; ++i) {
            windowSum += nums[i];
        }
        maxSum = windowSum;

        // Slide the window
        for (int i = k; i < nums.size(); ++i) {
            windowSum += nums[i] - nums[i - k];
            maxSum = std::max(maxSum, windowSum);
        }

        return maxSum;
    }

    int main() {
        std::vector<int> nums = {1, 2, 5, 1, 3, 2};
        int k = 3;
        std::cout << "Maximum Sum of Subarray of Size " << k << " is " << maxSumSubarray(nums, k) << std::endl;
        return 0;
    }

```

### Python
```python
    def max_sum_subarray(nums, k):
        if len(nums) < k:
            return -1  # Not enough elements
        
        max_sum = 0
        window_sum = sum(nums[:k])
        max_sum = window_sum
        
        for i in range(k, len(nums)):
            window_sum += nums[i] - nums[i - k]
            max_sum = max(max_sum, window_sum)
        
        return max_sum

    # Example usage
    nums = [1, 2, 5, 1, 3, 2]
    k = 3
    print(f"Maximum Sum of Subarray of Size {k} is {max_sum_subarray(nums, k)}")

```

### Java
```java
public class MaxSumSubarray {

    public static int maxSumSubarray(int[] nums, int k) {
        if (nums.length < k) return -1; // Not enough elements

        int maxSum = 0, windowSum = 0;

        // Calculate the sum of the first window
        for (int i = 0; i < k; i++) {
            windowSum += nums[i];
        }
        maxSum = windowSum;

        // Slide the window
        for (int i = k; i < nums.length; i++) {
            windowSum += nums[i] - nums[i - k];
            maxSum = Math.max(maxSum, windowSum);
        }

        return maxSum;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 5, 1, 3, 2};
        int k = 3;
        System.out.println("Maximum Sum of Subarray of Size " + k + " is " + maxSumSubarray(nums, k));
    }
}

```

### JavaScript
```javascript
    function maxSumSubarray(nums, k) {
        if (nums.length < k) return -1; // Not enough elements
        
        let maxSum = 0;
        let windowSum = 0;
        
        // Calculate the sum of the first window
        for (let i = 0; i < k; i++) {
            windowSum += nums[i];
        }
        maxSum = windowSum;
        
        // Slide the window
        for (let i = k; i < nums.length; i++) {
            windowSum += nums[i] - nums[i - k];
            maxSum = Math.max(maxSum, windowSum);
        }
        
        return maxSum;
    }

    // Example usage
    const nums = [1, 2, 5, 1, 3, 2];
    const k = 3;
    console.log(`Maximum Sum of Subarray of Size ${k} is ${maxSumSubarray(nums, k)}`);

```

## 🌟 Summary
- **Two-Pointer Technique** is great for problems involving pairs in sorted arrays, reversing data structures, and more.
- **Sliding Window Technique** optimizes problems involving contiguous subarrays or substrings by reducing unnecessary computations.

## 📚 What's Next?
Now that we've covered the concepts, try applying them to the following practice problems:

- Easy: [Reverse a String](https://leetcode.com/problems/reverse-string/description/)
- Medium: [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)
- Hard: [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/description/)


*Try to solve these problems. If you find any difficulty while solving these challanges feel free to go to repo and read the explaination.md file where the details of the solution is explained in a proper way*

**Remember:** If these names are new to you, don't worry! We'll discuss everything clearly and in a simplified manner in the upcoming days. This journey is about taking small, steady steps to build a strong foundation. 🚀

## ⭐Star the Repo⭐

Your support will encourage us to provide more details about all the topics.

## 🍴Fork the repo

Feel free to fork the repo to contribute in this course and get all the files in your local system.

*See You in the Next Topic*