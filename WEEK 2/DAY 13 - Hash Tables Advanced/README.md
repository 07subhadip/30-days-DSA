# 🚀 Day 13: Hash Tables - Advanced

Welcome to **Day 13** of our **30-Day DSA Crash Course!**

Today, we’re taking a deeper dive into **advanced hash table operations** and their powerful applications. Hash tables are not just for basic lookups; they can help solve complex problems efficiently! 💡 Let’s break things down step by step with emojis to keep it fun and engaging.

<hr>

## 🔍 Advanced Hash Table Operations

In this session, we'll cover **advanced operations** and **applications** of hash tables, such as solving problems that require quick lookups, counting, or pattern matching in large datasets. These operations can greatly optimize time complexity in certain problems.

<hr>

## 🧠 Key Concepts of Advanced Hash Tables
### 1. Efficient Counting with Hash Tables 📊
One of the most common uses of hash tables is to count occurrences of elements efficiently. Imagine counting the frequency of words in a paragraph or the number of occurrences of a specific number in an array. With hash tables, this can be done in O(n) time, as opposed to O(n²) with brute-force methods.

- **Example:** Counting the frequency of each character in a string.
#### 2. Tracking Prefix or Suffix Sums 🧮
When solving problems like subarrays or continuous sequences, hash tables are helpful in tracking the prefix sum or suffix sum of elements. This can significantly reduce the time complexity, as hash tables allow fast lookups to check if certain sums exist.

- **Example:** Checking if a subarray with a given sum exists.
### 3. Finding Unique Elements 🦸
Hash tables are used to quickly find and store unique elements from a large dataset. In cases where you need to track which elements you've seen before or find distinct elements, hash tables are incredibly efficient.

- **Example:** Find all unique numbers in an array.
### 4. Sliding Window Problems with Hash Maps 🚪
Many sliding window problems (where you need to track a subarray or substring) can be solved more efficiently using hash maps to store elements in the window. This reduces the need to re-process the window every time it moves.

<hr>

## 💡 Real-Life Applications of Advanced Hash Tables
Hash tables are frequently used in real-world applications where speed and efficiency are critical:

### 1. Autocomplete Systems 💬

Hash tables are used to store words for autocomplete systems in search engines or messaging apps. When you start typing a few letters, the hash table can quickly find possible completions.

### 2. Spell Checkers 📚
Hash tables are used to store a dictionary of words for spell-checking programs. They allow quick lookups to see if a word exists or if suggestions need to be made.

### 3. Caching Systems 💾
In web servers and applications, hash tables are used for caching frequently accessed data. This allows quick retrieval of data without having to process or calculate it again.

<hr>

## 🔄 Time Complexity of Advanced Hash Table Operations
- **Insert:** 🚀 O(1) (constant time for insertion)
- **Lookup:** 🔍 O(1) (constant time for lookup)
- **Delete:** 🗑️ O(1) (constant time for deletion)
- **Worst-case scenario:** In rare cases, due to collisions, the time complexity can degrade to O(n), but this is minimized with good hash functions.

<hr>

## 🚀 Why Advanced Hash Tables are Powerful
- **Fast Lookups:** No matter how big the dataset, hash tables keep lookups, inserts, and deletes fast.
- **Flexible:** Hash tables can store any type of data (numbers, strings, objects, etc.).
- **Efficient in Counting and Tracking:** When you're dealing with problems that require counting or pattern recognition, hash tables outperform other methods like arrays or lists.

<hr>

## 💻 Code Implementation of Hash Tables

Here’s a quick comparison of how hash tables (or their equivalents) are implemented in different programming languages:

- **Python:** `dict` (or `defaultdict` for advanced operations)
- **Java:** `HashMap`
- **C++:** `unordered_map`
- **JavaScript:** `Map` or simple `Object`

<hr>

## 🚀 Advanced Applications in Problem Solving
Let’s break down some advanced uses of hash tables:

### 1. Two Sum with Hash Maps 🧮
- **Problem:** Given an array, find two numbers that add up to a specific target.
- Using a hash map allows you to check if the complement of a number (target - current number) exists in O(1) time, reducing the overall complexity to O(n).
### 2. Finding Longest Consecutive Sequence 📏
- **Problem:** Find the length of the longest consecutive sequence of numbers in an unsorted array.
- By using a hash set, you can efficiently track whether a number is the start of a sequence and extend it, reducing time complexity to O(n).

<hr>

## 3. Group Anagrams 🔄
- **Problem:** Group words that are anagrams of each other.
- Hash tables can store a sorted version of each word as the key, and all words that match the key (are anagrams) can be grouped together.

<hr>

## 💻 Practical Code Snippet for Subarray Sum Equals K (Python Example)

- [C++](#cpp)
- [Pyhton](#python)
- [Java](#java)
- [JavaScript](#javascript)


### C++
```cpp
    #include <unordered_map>
    #include <vector>
    using namespace std;

    int subarraySum(vector<int>& nums, int k) {
        unordered_map<int, int> prefix_map;
        prefix_map[0] = 1;  // To handle cases where a subarray itself equals k
        int prefix_sum = 0, count = 0;
        
        for (int num : nums) {
            prefix_sum += num;
            if (prefix_map.find(prefix_sum - k) != prefix_map.end()) {
                count += prefix_map[prefix_sum - k];
            }
            prefix_map[prefix_sum]++;
        }
        
        return count;
    }

```

### Python
```python
    def subarraySum(nums, k):
        count = 0
        prefix_sum = 0
        prefix_map = {0: 1}  # To handle cases where a subarray itself equals k
        
        for num in nums:
            prefix_sum += num
            if prefix_sum - k in prefix_map:
                count += prefix_map[prefix_sum - k]
            prefix_map[prefix_sum] = prefix_map.get(prefix_sum, 0) + 1
        
        return count
```

### Java
```java
    import java.util.HashMap;

    public class Solution {
        public int subarraySum(int[] nums, int k) {
            HashMap<Integer, Integer> prefix_map = new HashMap<>();
            prefix_map.put(0, 1);  // To handle cases where a subarray itself equals k
            int prefix_sum = 0, count = 0;
            
            for (int num : nums) {
                prefix_sum += num;
                if (prefix_map.containsKey(prefix_sum - k)) {
                    count += prefix_map.get(prefix_sum - k);
                }
                prefix_map.put(prefix_sum, prefix_map.getOrDefault(prefix_sum, 0) + 1);
            }
            
            return count;
        }
    }

```

### JavaScript
```javascript
    function subarraySum(nums, k) {
        let prefix_map = new Map();
        prefix_map.set(0, 1);  // To handle cases where a subarray itself equals k
        let prefix_sum = 0, count = 0;
        
        for (let num of nums) {
            prefix_sum += num;
            if (prefix_map.has(prefix_sum - k)) {
                count += prefix_map.get(prefix_sum - k);
            }
            prefix_map.set(prefix_sum, (prefix_map.get(prefix_sum) || 0) + 1);
        }
        
        return count;
    }

```


This code demonstrates how to efficiently solve the subarray sum equals k problem using hash maps to store prefix sums.

<hr>

## 📚 Common Use Cases for Advanced Hash Tables
- **Frequency Count of Elements 🧮**
- **Detecting Duplicates in Data 👀**
- **Finding Unique Elements 🌟**
- **Efficient String Manipulation 🔄**
- **Tracking States in Dynamic Programming 📊**

<hr>

  ## 📚 What's Next?
Now that we've covered the concepts, try applying them to the following practice problems:

  - **Easy:** [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
  - **Medium:** [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
  - **Hard:** [Happy Number](https://leetcode.com/problems/happy-number/)


*Try to solve these problems. If you find any difficulty while solving these challanges feel free to go to repo and read the explaination.md file where the details of the solution is explained in a proper way*

**Remember:** 

If these names are new to you, don't worry! We'll discuss everything clearly and in a simplified manner in the upcoming days. This journey is about taking small, steady steps to build a strong foundation. 🚀

## ⭐Star the Repo⭐

Your support will encourage us to provide more details about all the topics.

## 🍴Fork the repo

Feel free to fork the repo to contribute in this course and get all the files in your local system.

*See You in the Next Topic*