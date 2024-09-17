# 🌟 Day 17: Searching - Basics 🌟


Welcome to **Day 17** of the **30 Days DSA Crash Course!** 🚀

Today, we dive into the world of **searching algorithms** 🧐, essential for efficiently finding elements in arrays or lists. Let's explore **linear search** and the more optimized **binary search**! These two algorithms form the foundation of searching techniques.

<hr>

## 🔍 Linear Search

**Linear search** is the simplest way to find an element in a collection. You go through each element, one by one, until you find what you're looking for 🎯.

### Steps:

1. Start from the first element.
2. Check each element.
3. If it matches, return its index. If not, continue until the end.
4. If the element isn't found, return `-1`.

### Efficiency:

- **🕒 Time complexity:** $O(n)$ — since we may need to search through every element.
- **❌ Drawback:** It's slow for large arrays because it checks every single element.

<hr>

## ⚡ Binary Search

**Binary search** is much faster than linear search, but it requires the array to be sorted 📑.

### Steps:

1. Find the middle element.
2. Compare the target value with the middle element:
    - If the target is equal to the middle, return its index.
    - If the target is smaller, repeat the process on the left half.
    - If the target is larger, repeat the process on the right half.
3. Keep dividing the array until you find the element (or determine it's not present).

### Efficiency:

- **🕒 Time complexity:** $O(log n)$ — we halve the array size with each step, making it very efficient!

### Advantages:

- Super fast for large, sorted arrays.
- Saves a lot of time compared to linear search when dealing with thousands or millions of elements.

<hr>

## 🚀 Key Differences Between Linear Search and Binary Search:
- **🛠️ Linear Search** works on unsorted data but is slower $(O(n))$.
- ⚙️ **Binary Search** requires sorted data but is much faster $(O(log n))$.

## 📚 What's Next?
Now that we've covered the concepts, try applying them to the following practice problems:


  - **Easy:** [Binary Search](https://leetcode.com/problems/binary-search/)
  - **Medium:** [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
  - **Hard:** [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)


*Try to solve these problems. If you find any difficulty while solving these challanges feel free to go to repo and read the explaination.md file where the details of the solution is explained in a proper way*

**Remember:** 

If these names are new to you, don't worry! We'll discuss everything clearly and in a simplified manner in the upcoming days. This journey is about taking small, steady steps to build a strong foundation. 🚀

## ⭐Star the Repo⭐

Your support will encourage us to provide more details about all the topics.

## 🍴Fork the Repo

Feel free to fork the repo to contribute in this course and get all the files in your local system.

*See You in the Next Topic*