# 🚀 Day 12: Hash Tables - Basics 🚀

Welcome to **Day 12** of our **30-Day DSA Crash Course!** 

Today, we'll dive into **Hash Tables**, one of the most powerful and commonly used data structures in programming. The goal is to make this as interesting and easy to understand as possible, so let's break down the concepts with some real-world analogies, examples, and emojis to keep things fun! 😄

## 🌟 What is a Hash Table?

A **Hash Table** (or **Hash Map**) is a data structure that stores key-value pairs. It is used for fast lookup, insert, and delete operations. Imagine a **library catalog** 🏛️ where you can look up a book 📖 by its title (the key) and get its location (the value) in the library.

- **Key:** The unique identifier you want to store and look up.
- **Value:** The data or information associated with the key.

## 🔍 How does Hashing Work?

When you use a hash table, it uses something called a **hash function** to convert the key into an index (an address in the memory) where the corresponding value is stored.

Think of it like a **magic sorting hat** 🎩 that decides where each item goes by converting the key into a unique memory address.

## 🔑 Hash Function

The **hash function** is responsible for converting the key into a number (index). For example, let's say you have the key "apple" 🍎, and the hash function gives you the index 7. So, the value associated with "apple" will be stored in the 7th position of the table.

A good hash function has these properties:

- **Deterministic:** It gives the same output (index) every time for the same key.
- **Efficient:** It should compute quickly.
- **Uniform Distribution:** It spreads the keys evenly across the hash table to avoid overcrowding.

## ⚔️ Collision Resolution

Sometimes, two keys might get the same hash value. This is called a collision. 😨

Imagine two people trying to put their coats 🧥 on the same hook 🪝 in a cloakroom! Hash tables need to resolve this collision to make sure both coats get stored safely.

There are two main ways to handle collisions:

### 1. Chaining 🧵
- Each index holds a linked list of values.
- If a collision occurs, the new key-value pair is added to the list at that index.
- **Example:** Both "apple" 🍎 and "orange" 🍊 hash to index 7. You store both values in a linked list at that index.
### 2. Open Addressing 🚪
- Instead of a list, the table tries to find another empty spot in the table.
- If the first spot is taken, it checks the next available one (linear probing) or follows a pattern (quadratic probing).
- **Example:** If "apple" hashes to 7 but is occupied, the table checks 8, 9, and so on until an empty spot is found.

## ⚡️ Hash Table Operations
### 1. Insert (Key, Value) ➡️
You give the hash table a key and value, and it stores them efficiently.

- **Example:** You insert the key "banana" 🍌 with value "yellow" into the table.
### 2. Search (Key) 🔍
Given a key, the hash table quickly finds its associated value.

- **Example:** You search for the key "banana" 🍌, and it gives you "yellow."

### 3. Delete (Key) 🗑️
You can remove the key and its associated value from the hash table.

- **Example:** You delete the key "banana" 🍌, so the table no longer stores "yellow."

## 💡 Real-World Analogy: Library Books 🏛️

A library uses a hash table to store books 📚. Each book has a unique ISBN (like a key), and the value is the location where the book is stored. If you need to find a book, you provide the ISBN, and the library catalog (hash table) quickly tells you the shelf number!

## 🔄 Time Complexity Cheat Sheet
- **Search, Insert, Delete:** 🚀 O(1) (in the best case, with a good hash function)
- **Worst-case Time Complexity:** ⏳ O(n) (if all keys hash to the same index and cause collisions)

## 🚀 Why Use Hash Tables?
- **Fast Lookups:** Quickly find and access elements.
- **Flexible:** Can store any type of data (numbers, strings, etc.).
- **Efficient:** With a good hash function, operations take constant time!

## 📚 Common Use Cases
- **Dictionaries** (word and meaning) 📖
- **Caching** (storing temporary data) 💾
- **Counting frequencies** (how many times each item appears) 📊
- **Tracking seen elements**👁️

## 💻 Hash Tables in Different Programming Languages
- **Python:** `dict`
- **Java:** `HashMap`
- **C++:** `unordered_map`
- **JavaScript:** `Object` or `Map`

## 📚 What's Next?
Now that we've covered the concepts, try applying them to the following practice problems:


  - **Easy:** [Two Sum (using hash map)](https://leetcode.com/problems/two-sum/)
  - **Medium:** [Group Anagrams](https://leetcode.com/problems/group-anagrams/)
  - **Hard:** [Most Frequent Subtree Sum](https://leetcode.com/problems/most-frequent-subtree-sum/)



*Try to solve these problems. If you find any difficulty while solving these challanges feel free to go to repo and read the explaination.md file where the details of the solution is explained in a proper way*

**Remember:** 

If these names are new to you, don't worry! We'll discuss everything clearly and in a simplified manner in the upcoming days. This journey is about taking small, steady steps to build a strong foundation. 🚀

## ⭐Star the Repo⭐

Your support will encourage us to provide more details about all the topics.

## 🍴Fork the repo

Feel free to fork the repo to contribute in this course and get all the files in your local system.

*See You in the Next Topic*