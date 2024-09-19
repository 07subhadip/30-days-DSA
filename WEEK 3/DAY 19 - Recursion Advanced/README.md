# 🌟 Day 19: Recursion - Advanced 🌟

Welcome to **Day 19** of our **30 Days DSA Crash Course!**

Today, we dive deep into **advanced recursion** with a focus on **Backtracking**, a powerful technique used for solving problems where we explore all possible solutions and backtrack when we hit a dead end.

<hr>

## 🔍 Topics to Cover:

- Backtracking (N-Queens, Sudoku Solver)

### 🧠 What is Backtracking?

Backtracking is an algorithmic technique used for solving recursive problems by building a solution incrementally. It tries out different solutions, and if one solution fails to meet the problem’s requirements, it "backtracks" by removing the last step and tries another one. This method is widely used in problems where we need to explore all possible outcomes, such as:

- **Generating all permutations of a set**
- **Solving puzzles like Sudoku**
- **Finding paths in a maze**
- **N-Queens problem**

### ✨ Backtracking in Action: Real-Life Example
Imagine you are solving a maze:

- You start at the entrance and walk down a path.
- If you hit a dead end, you backtrack to the previous position and try a different path.
- You continue this process until you either find the exit or have tried all paths.

In backtracking, we explore all paths (solutions) and backtrack whenever we reach a dead end, exactly like solving a maze.

<hr>

## 🏰 Example 1: N-Queens Problem 👑
The **N-Queens problem** is a classic example of **backtracking**. The objective is to place **N queens** on an **N×N chessboard** such that no two queens threaten each other (no two queens can be in the same row, column, or diagonal).

### Steps to Solve:
- Start placing the queens row by row.
- For each queen, check if placing it in a particular column is safe.
- If it is safe, move to the next row and repeat the process.
- If placing the queen leads to a conflict later, backtrack by removing the queen and trying a different position.

### Real-Life Analogy:

Think of this like arranging friends at a dinner table. You have to ensure no two friends with a rivalry sit next to each other. You try placing them in different seats, and if someone is unhappy, you rearrange the seating.

<hr>

## 🧩 Example 2: Sudoku Solver 🧮

The **Sudoku Solver** problem is another example where backtracking shines. The goal is to fill a 9×9 grid such that each row, each column, and each 3×3 sub-grid contains digits from 1 to 9 without repeating.

### Steps to Solve:

- Start by placing numbers in the first empty cell.
- For each number, check if it is valid (it doesn’t repeat in the row, column, or 3×3 grid).
- If valid, move to the next empty cell and repeat.
- If the number causes conflicts, backtrack by removing the number and trying a different one.

### Real-Life Analogy:

Imagine you are filling out a crossword puzzle, but with numbers instead of letters. You start filling in numbers, and if a number doesn't fit, you erase it and try again until the entire grid is complete.

<hr>

## ✍️ Key Points About Backtracking:

- Backtracking is a **depth-first search (DFS)** approach.
- It is useful for problems that require exploring all possible solutions.
- The key idea is to incrementally build a solution and backtrack when a solution doesn't meet the problem's requirements.
- Backtracking algorithms are often used in combinatorial problems like subset generation, permutations, and puzzle solving.

## Example: Backtracking in a Word Search 🧑‍🏫

In the **Word Search** problem, you are given a grid of letters and a word. You need to check if the word exists in the grid by tracing it through adjacent cells. You can move up, down, left, or right.

Let’s say you have the following grid:

```
A B C E
S F C S
A D E E
```
The word is "**ABCCED**":

- Start from **A** at **(0,0)**.
- Move right to **B**, then to **C**, then to **C**, and continue tracing the word.
- If you get stuck, backtrack to the previous letter and try a different path.


## 🎯 Why is Backtracking Important?

Backtracking provides a systematic way of trying out different possibilities and is particularly useful when the problem has too many possible solutions to check exhaustively. It ensures that all **potential solutions** are explored efficiently by **pruning the search space** when a partial solution cannot possibly lead to a valid answer.












## 📚 What's Next?
Now that we've covered the concepts, try applying them to the following practice problems:

  - **Easy:** [Subsets](https://leetcode.com/problems/subsets/)
  - **Medium:** [Word Search](https://leetcode.com/problems/word-search/)
  - **Hard:** [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)


*Try to solve these problems. If you find any difficulty while solving these challanges feel free to go to repo and read the explaination.md file where the details of the solution is explained in a proper way*

**Remember:** 

If these names are new to you, don't worry! We'll discuss everything clearly and in a simplified manner in the upcoming days. This journey is about taking small, steady steps to build a strong foundation. 🚀

## ⭐Star the Repo⭐

Your support will encourage us to provide more details about all the topics.

## 🍴Fork the Repo

Feel free to fork the repo to contribute in this course and get all the files in your local system.

*See You in the Next Topic*