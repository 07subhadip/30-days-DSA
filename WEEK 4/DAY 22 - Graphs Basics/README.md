
# 🚀Day 22: Graphs - Basics 🌐

Welcome to **Day 22** of our **30 Days DSA Crash Course!** 

Today, we are diving into the world of **graphs**. **Graphs** are one of the most versatile data structures in computer science, and they’re used to model real-world relationships such as social networks, cities connected by roads, and more! 🚗🌍

<hr>

## 🔍 What is a Graph?

A graph consists of a set of **vertices (or nodes)** and a set of **edges** connecting those vertices. It can represent a network where entities (like cities or people) are connected by relationships (like roads or friendships).

<hr>

## 🧩 Graph Representations

There are two main ways to represent a graph:

1. **Adjacency List 📜**

- An **adjacency list** stores a list of neighbors (connected vertices) for each vertex. It’s memory-efficient and ideal for **sparse graphs** (graphs with fewer edges).

🖥️ Example:

    Graph: 
    1 -- 2
    |    
    3 -- 4

    Adjacency List:
    1 -> [2, 3]
    2 -> [1]
    3 -> [1, 4]
    4 -> [3]


In this example, the list tells you that:

- Vertex 1 is connected to vertices 2 and 3.
- Vertex 3 is connected to vertices 1 and 4.

This is like knowing which cities are directly connected by roads! 🏙️🚗

2. **Adjacency Matrix 📊**

- An **adjacency matrix** is a 2D array (or matrix) where each cell `[i][j]` is `1` if there's an edge between vertex `i` and `j`, and `0` if not. It’s useful for **dense graphs** (where many vertices are connected).

🖥️ Example:

    Graph: 
    1 -- 2
    |    
    3 -- 4

    Adjacency Matrix:
    1  2  3  4
    1 0  1  1  0
    2 1  0  0  0
    3 1  0  0  1
    4 0  0  1  0

This is like having a table that tells you whether two cities have a direct road between them! 🗺️

<hr>


## 🎯 Why Graphs Matter?

Graphs help solve problems related to:

- **Finding shortest paths** (like Google Maps giving you the fastest route 🗺️)
- **Social networks** (finding friends of friends or influencers)
- **Network flows** (like maximizing internet traffic or power grid flows)

<hr>

## 💡 Real-Life Example:

Imagine a map of cities and roads. Each city is a **vertex**, and each road is an **edge**. You can represent this network using graphs to calculate things like the shortest path between two cities or find if all cities are connected.

<hr>

## 🔍 Key Terminology:

- **Vertex (Node):** A point in the graph (like a city 🏙️).
- **Edge (Connection):** A line connecting two vertices (like a road 🚗).
- **Undirected Graph:** A graph where the edges don't have directions (like two-way roads).
- **Directed Graph (Digraph):** A graph where edges have directions (like one-way streets 🚦).
- **Weighted Graph:** A graph where each edge has a weight or cost (like road distances in miles 🛣️).

<hr>

## ⚡ Summary:

- Graphs are a powerful way to represent relationships between entities.
- The two common graph representations are the adjacency list (for sparse graphs) and the adjacency matrix (for dense graphs).
- Understanding how to represent and traverse graphs is key to solving many real-world problems.

Now that you’ve got the basics of graphs, let’s explore them more in upcoming days! 💡

## 📚 What's Next?
Now that we've covered the concepts, try applying them to the following practice problems:


  - **Easy:** [Number of Islands](https://leetcode.com/problems/number-of-islands/)
  - **Medium:** [Clone Graph](https://leetcode.com/problems/clone-graph/)
  - **Hard:** [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)


*Try to solve these problems. If you find any difficulty while solving these challanges feel free to go to repo and read the explaination.md file where the details of the solution is explained in a proper way*

**Remember:** 

If these names are new to you, don't worry! We'll discuss everything clearly and in a simplified manner in the upcoming days. This journey is about taking small, steady steps to build a strong foundation. 🚀

## ⭐Star the Repo⭐

Your support will encourage us to provide more details about all the topics.

## 🍴Fork the Repo

Feel free to fork the repo to contribute in this course and get all the files in your local system.

*See You in the Next Topic*