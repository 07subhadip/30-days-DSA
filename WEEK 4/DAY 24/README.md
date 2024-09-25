# 🚀Day 24: Dynamic Programming - Basics🚀

Welcome to **Day 24** of the **30 Days DSA Crash Course!** 🎉 

Today, we’re diving into one of the most powerful concepts in problem-solving: **Dynamic Programming (DP)**. It’s a technique that will allow you to break down complex problems into simpler subproblems and solve them efficiently. Let’s get started! 🚀

<hr>

## 🧠 What is Dynamic Programming?

**Dynamic Programming (DP)** is an optimization technique used to solve problems by breaking them down into overlapping subproblems. Instead of solving the same problem repeatedly, DP saves the results of solved subproblems and reuses them. Think of it as solving a puzzle where each small piece helps complete the bigger picture faster.

There are two main ways to implement DP:

- **Memoization** (Top-Down Approach)
- **Tabulation** (Bottom-Up Approach)

<hr>

## 🛠️ 1. Memoization (Top-Down Approach) 📝

**Memoization** is the **recursive** way of solving problems. In this approach, you start solving the main problem by breaking it down into subproblems. As you solve each subproblem, you store the result in a data structure (like an array or a hash map) so you don’t have to recalculate it later.

### 🔧 How it Works:

- Start by solving the main problem.
- Break it into subproblems.
- If a subproblem has already been solved, reuse the result from the memory (memo).
- Otherwise, solve it and store the result.


### 🖥️ Example:

Imagine you're a baker, and you’re making a layered cake 🍰. You bake one layer at a time and save each layer in the fridge. When you need to stack the layers, instead of baking the same layer again, you simply take it from the fridge!


### 💡 Real-Life Use Case:

Memoization is used in **caching**. For example, your web browser uses caching to store data (like website images) so it doesn’t need to download them again when you revisit the page, making the process faster! 🌐

<hr>

## 📊 2. Tabulation (Bottom-Up Approach) 📋

**Tabulation** is the iterative way of solving problems. Instead of solving the main problem first, you solve the **smallest subproblems** and work your way up to the main problem. You usually use a table to store solutions to subproblems and build the final solution step by step.

### 🔧 How it Works:

- Start by solving the smallest subproblem.
- Use the results of the smaller subproblems to solve larger subproblems.
- Continue until you solve the main problem.


### 🖥️ Example:

Imagine you're climbing a staircase. 🏔️ To figure out how many ways there are to reach the top, you start by calculating how many ways there are to climb one step, then two steps, and so on, until you reach the top!

### 💡 Real-Life Use Case:

Tabulation is used in financial planning. You start by saving small amounts of money 💰 and slowly build it into larger savings over time, eventually reaching your goal!

<hr>


## ⚔️ When to Use Memoization vs. Tabulation?

- **Memoization:** Use this when you're more comfortable with recursion and when the problem involves solving overlapping subproblems.
- **Tabulation:** Use this when you want to avoid recursion and when solving subproblems iteratively works best.

<hr>

## 🚶‍♂️ Real-Life Example of Dynamic Programming:
Imagine you're a traveler trying to find the cheapest way to travel across different cities. Each route has a certain cost, and some cities are connected to others. You need to calculate the minimum cost to travel from one city to another.

In this case:

- **Memoization:** You start from your destination and look back at the possible cities you could’ve come from, saving the cost to get to each city.
- **Tabulation:** You start from your starting city and calculate the minimum cost to reach every other city, step by step.

<hr>

## 🔑 Key Takeaways:

- **Memoization** is a **top-down approach** that uses recursion and caching to save results.
- **Tabulation** is a **bottom-up approach** that builds the solution iteratively using a table.
- **Dynamic Programming** helps solve problems that have **overlapping subproblems** and can be broken down into simpler, smaller problems.
- You can tackle real-world issues such as **travel planning, financial savings,** or even **spell-checking** with DP!

<hr>

## 🏆 Final Thoughts:

Mastering Dynamic Programming is like gaining a superpower in competitive coding and real-world problem-solving. It may seem tricky at first, but once you understand it, you’ll find it popping up everywhere! Keep practicing, and soon, you'll start recognizing DP problems and solve them like a pro! 💪


## 📚 What's Next?
Now that we've covered the concepts, try applying them to the following practice problems:


  - **Easy:** [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
  - **Medium:** [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
  - **Hard:** [Edit Distance](https://leetcode.com/problems/edit-distance/)

*Try to solve these problems. If you find any difficulty while solving these challanges feel free to go to repo and read the explaination.md file where the details of the solution is explained in a proper way*

**Remember:** 

If these names are new to you, don't worry! We'll discuss everything clearly and in a simplified manner in the upcoming days. This journey is about taking small, steady steps to build a strong foundation. 🚀

## ⭐Star the Repo⭐

Your support will encourage us to provide more details about all the topics.

## 🍴Fork the Repo

Feel free to fork the repo to contribute in this course and get all the files in your local system.

*See You in the Next Topic*