# 🚀Day 11 : Heaps Advanced🚀

Welcome to **Day 11** of our **30-Days DSA Crash Course!**

Today, we’re diving deeper into **heaps** and learning **advanced operations** that make heaps an extremely powerful data structure for a variety of complex problems. Let’s make this journey as fun and engaging as possible! 😄

<hr>

## 📚 What are Heap Operations?
Heaps are not just about storing elements in a specific order. They also come with a set of important **operations** that make them super useful in various scenarios like finding minimum/maximum, sorting, and more. Today, we’ll focus on three essential heap operations:

- Insert 🛠️
- Delete 🚮
- Extract-Min/Max 🏆

<hr>


## 🔧 Heap Operations Explained

### Max-Heap Insertion Example


Given a max-heap like this:

```
      20
     /  \
    15   10
   / \   /
  8  12 5
```
Now, we want to insert a new element, say `18`. Let's go step by step:

#### Step 1: Add the element at the end of the heap
We first add 18 at the end of the heap. Here's how the heap looks after adding the new element:

```
      20
     /  \
    15   10
   / \   / \
  8  12 5  18
```
At this point, the new element is just placed at the end, and the heap might not satisfy the **max-heap property**.

#### Step 2: Heapify up
Now, we perform heapify up (also known as bubble up). This means we compare the newly added element (18) with its parent and swap if necessary to maintain the heap property.

Compare 18 with its parent (10):
Since 18 > 10, we swap 18 and 10.
After swapping:

```
      20
     /  \
    15   18
   / \   / \
  8  12 5  10
```
#### Step 3: Check the heap property
At this point, 18 is now the child of 20, and there’s no further need to swap because 18 < 20. The max-heap property is now restored.

#### Final Heap after Insertion
```
      20
     /  \
    15   18
   / \   / \
  8  12 5  10
```
The insertion is complete! The heap is still a valid max-heap because every parent node is greater than its children.

**N.B :** The same process is applicable for the min heap also but instead of doing the max thing top it would be the min thing top.


### Max-Heap Deletion Example
Given the following max-heap:

```
      20
     /  \
    15   18
   / \   / \
  8  12 5  10
```
We want to delete the root element `20` (the maximum element in a max-heap).

#### Step 1: Swap the root with the last element
In a heap, to delete the root, we swap it with the last element of the heap. In this case, the last element is 10.

After swapping 20 and 10:

```
      10
     /  \
    15   18
   / \   /
  8  12 5 
```
Now, 20 is removed from the heap since it's at the last position.

#### Step 2: Remove the last element
After the swap, we remove the last element (20), which is no longer part of the heap.

The heap now looks like this:

```
      10
     /  \
    15   18
   / \   /
  8  12 5 
```
#### Step 3: Heapify down
Now, the heap might violate the max-heap property since 10 (the new root) is smaller than its children. We need to heapify down to restore the max-heap property.

Compare 10 with its children (15 and 18):
The larger child is 18, and since 18 > 10, we swap 10 and 18.
After swapping:
```
      18
     /  \
    15   10
   / \   /
  8  12 5
```
Now, 10 is in the position of a leaf node, and no further swaps are necessary since the heap property is restored.
#### Final Heap after Deletion
```
      18
     /  \
    15   10
   / \   /
  8  12 5
```
The deletion is complete, and the heap is a valid max-heap again, as every parent node is greater than its children.


### Extract-Min/Max 🏆

The extract-min (for min-heaps) or extract-max (for max-heaps) operation removes and returns the smallest or largest element in the heap (which is the root).

- **Steps:**

  1. This operation is the same as deleting the root.
  2. Replace the root with the last element and heapify down to restore the heap property.
- Time Complexity: O(log n) due to heapify.

Use Case:

- Extract-Min is commonly used in priority queues where you need to keep track of the smallest or highest priority element efficiently.

<hr>

## ⚙️ Advanced Use Cases of Heaps

Now that we know how these operations work, let's look at where we can apply them.

🔹 Median of a Data Stream
- If you continuously receive numbers and want to get the median efficiently, you can use two heaps:
  - A max-heap to store the smaller half of the numbers.
  - A min-heap to store the larger half.
This allows you to maintain a balanced stream of numbers and find the median in O(log n) time.

🔹 Merge K Sorted Lists
- Imagine you have multiple sorted lists, and you want to merge them into a single sorted list. A min-heap can help you efficiently find the smallest element across the lists and merge them in O(n log k) time, where k is the number of lists and n is the total number of elements.

🔹 Minimum Cost to Connect Sticks
- You’re given sticks of different lengths, and you need to connect them into one. Every time you connect two sticks, the cost is the sum of their lengths. Using a min-heap allows you to always connect the two smallest sticks first, minimizing the total cost. This problem can be solved in O(n log n) time.


<hr>

## 🛠️ Heapify Process in Detail
- **Heapify-Up:** This happens during the insertion process to maintain the heap property by moving the newly inserted element upward if necessary.

- **Heapify-Down:** This occurs during deletion or extract-min/max to restore the heap property by moving elements downward.

Both processes ensure the heap is balanced and efficient.

<hr>

## 🎯 Conclusion
Heaps are an incredibly versatile and efficient data structure. Whether it’s building priority queues, maintaining medians, or merging lists, heap operations like insert, delete, and extract-min/max allow you to solve complex problems with efficiency and grace. 💡

Keep practicing, and you’ll be a heap master in no time! 🌟

  ## 📚 What's Next?
Now that we've covered the concepts, try applying them to the following practice problems:

- **Easy:** [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)
- **Medium:** [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- **Hard:** [Minimum Cost to Connect Sticks](https://leetcode.com/problems/minimum-cost-to-connect-sticks/)


*Try to solve these problems. If you find any difficulty while solving these challanges feel free to go to repo and read the explaination.md file where the details of the solution is explained in a proper way*

**Remember:** 

If these names are new to you, don't worry! We'll discuss everything clearly and in a simplified manner in the upcoming days. This journey is about taking small, steady steps to build a strong foundation. 🚀

## ⭐Star the Repo⭐

Your support will encourage us to provide more details about all the topics.

## 🍴Fork the repo

Feel free to fork the repo to contribute in this course and get all the files in your local system.

*See You in the Next Topic*