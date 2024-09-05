# 🚀 Day 5: Linked Lists - Advanced 🚀

Welcome to **Day 5** of our **30 Days DSA Crash Course!**

Today, we dive into two advanced types of linked lists: **Doubly Linked Lists** and **Circular Linked Lists**. We’ll break them down in a fun, engaging way with visuals and real-life examples. Ready? Let’s go! 🌟

<hr>

## 1️⃣ Doubly Linked List (DLL)

A **Doubly Linked List** is like a normal linked list but with an extra pointer. Instead of just pointing to the next node, each node also points back to the previous one! 🏃‍♂️↔️🏃‍♀️

**Structure of a Doubly Linked List:**

    NULL <- [Prev | Data | Next] <-> [Prev | Data | Next] <-> [Prev | Data | Next] -> NULL

- **Prev:** Points to the previous node 🏠.
- **Data:** Stores the node’s value 💡.
- **Next:** Points to the next node ➡️.

### Key Operations:

#### 🛠 Insertion:

- **At the start :** Add a node, point its `next` to the old head, and make the old head’s `prev` point to the new node.
- **At the end:** Add a node, make the last node's `next` point to the new node, and update the `prev` of the new node.
- **At a position:** Insert a node between two nodes by adjusting the `next` and `prev` pointers.

#### ❌ Deletion:

- **From the start:** Update the head to the second node, and set the new head’s `prev` pointer to `NULL`.
- **From the end:** Update the second-to-last node’s `next` pointer to `NULL`.
- **From a position:** Remove the node and adjust the `next` and `prev` pointers of surrounding nodes.

#### 🎢 Real-Life Example:
Think of a **train** 🚆 where each car is linked to both the car ahead and the car behind. You can move forward and backward along the train, just like in a DLL!

**Advantages of DLLs:**

- **🌐 Bi-Directional Traversal:** Move both ways!
- **🗑 Easy Deletion:** Deleting a node is simpler since you have access to the previous node directly.

**Visualization:**

#### Insertion Example:

    Original List:    NULL <- [1] <-> [2] <-> [3] -> NULL
    Insert 0 at start: NULL <- [0] <-> [1] <-> [2] <-> [3] -> NULL
    Insert 4 at end:   NULL <- [0] <-> [1] <-> [2] <-> [3] <-> [4] -> NULL

#### Deletion Example:

    Original List:     NULL <- [0] <-> [1] <-> [2] <-> [3] -> NULL
    Delete from start: NULL <- [1] <-> [2] <-> [3] -> NULL
    Delete from end:   NULL <- [1] <-> [2] -> NULL


<hr>


## 🔁 Circular Linked List (CLL)

A Circular Linked List has nodes that point in a loop, meaning the last node’s `next` points back to the first node! 🔄 It can either be singly or doubly circular.

### Structure of a Circular Linked List:

- **Singly Circular Linked List:**

    [Data | Next] -> [Data | Next] -> [Data | Next] -> (points back to first node)

- **Doubly Circular Linked List:**

    (points back to last node) <- [Prev | Data | Next] <-> [Prev | Data | Next] <-> [Prev | Data | Next] -> (points back to first node)


### Key Operations:

#### 🛠 Insertion:

- At the start: Add a new node, point its `next` to the old head, and update the last node’s `next` to the new head.
- At the end: Update the last node’s `next` to the new node, and set the new node’s `next` pointer to the head.
- At a position: Insert the node by adjusting the `next` pointers of surrounding nodes.

#### ❌ Deletion:

- From the start: The second node becomes the head, and the last node’s `next` pointer points to the new head.
- From the end: Update the second-to-last node’s `next` pointer to the head.
- From a position: Remove the node and adjust the `next` pointers of surrounding nodes.


#### 🎡 Real-Life Example:
Think of a **roundabout** 🌐 where cars keep moving in a circular direction. They enter and exit, but the road keeps going round, just like in a CLL!

#### Advantages of CLLs:
- **🔁 Continuous Traversal:** You can keep going around without hitting `NULL`.
- **💾 Efficient Memory Use:** There’s no need for extra pointers for previous nodes (in the singly circular case).

#### Visualization:

**Insertion Example:**


    Original List:    [1] -> [2] -> [3] -> (points back to [1])
    Insert 0 at start: [0] -> [1] -> [2] -> [3] -> (points back to [0])
    Insert 4 at end:   [0] -> [1] -> [2] -> [3] -> [4] -> (points back to [0])

#### Deletion Example:

    Original List:     [0] -> [1] -> [2] -> [3] -> (points back to [0])
    Delete from start: [1] -> [2] -> [3] -> (points back to [1])
    Delete from end:   [1] -> [2] -> (points back to [1])

<hr>

### 🆚 DLL vs CLL:

| **Doubly Linked List (DLL)**                    | **Circular Linked List (CLL)**                     |
|--------------------------------------------------|----------------------------------------------------|
| Each node points to both the previous and next node 🔄 | The last node points back to the first node ⭕       |
| Allows bi-directional traversal ↔️              | Allows continuous, circular traversal 🔁           |
| More memory usage due to the `prev` pointer 💾   | More efficient memory usage ⚡                     |
| Useful when you need to traverse both ways 🎯    | Useful for circular operations like buffers 🎵      |


<hr>

### 💡 Applications of DLL and CLL:
- **Doubly Linked List:**
    - **Web Browsers:** For back and forward navigation 🔙🔜.
    - **Media Players:** Moving between previous and next songs 🎵.
- **Circular Linked List:**
    - **Playlists:** Looping through songs without stopping 🔂.
    - **CPU Scheduling:** Round-robin process scheduling 💻.
    - **Game Development:** Circular arrangements like player turns in a game 🎮.

<hr>

### 🔔 Wrapping Up

Today, we explored two advanced linked list types: **Doubly Linked Lists** and **Circular Linked Lists**. Both structures allow for more flexibility and efficiency in handling data, depending on your needs. 💡

Keep these advanced linked lists in mind as you tackle harder data structures problems. They open up many possibilities for data traversal, manipulation, and real-life application.


  <hr>

  ## 📚 What's Next?
Now that we've covered the concepts, try applying them to the following practice problems:


- **Easy:** [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
- **Medium:** [Add Two Numbers (Linked List)](https://leetcode.com/problems/add-two-numbers/)
- **Hard:** [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

*Try to solve these problems. If you find any difficulty while solving these challanges feel free to go to repo and read the explaination.md file where the details of the solution is explained in a proper way*

**Remember:** If these names are new to you, don't worry! We'll discuss everything clearly and in a simplified manner in the upcoming days. This journey is about taking small, steady steps to build a strong foundation. 🚀

## ⭐Star the Repo⭐

Your support will encourage us to provide more details about all the topics.

## 🍴Fork the repo

Feel free to fork the repo to contribute in this course and get all the files in your local system.

*See You in the Next Topic*