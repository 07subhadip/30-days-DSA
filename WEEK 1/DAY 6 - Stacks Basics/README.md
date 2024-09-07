# 🚀Day 6: Stacks - Basics🚀

Welcome to **Day 6** of the **30 Day DSA Course!** 

Today we’ll explore the magical world of **Stacks** – a powerful and foundational data structure that follows the **Last In, First Out (LIFO)** principle. 🌟 Let's make it super interesting! 

<hr>

## 🙄 What is a Stack? 🥞

A stack is a *linear data structure* that follows the **LIFO** principle, which means the last element added is the first one to be removed. Imagine it like stacking dishes in your kitchen! 🍽️ The dish placed last is the first one you take off.

### Real-Life Analogy:

- Think of stacking books on a shelf 📚.
- When you add a book, it goes on top of the pile.
- To remove a book, you can only remove the top one.


### ⚙️ Stack Operations 

Here are the essential operations you can perform with stacks:

**1. Push (Add an item) ⬆️**

- Adds an item to the top of the stack.
- Example: Adding plates to a pile.

**2. Pop (Remove an item) ⬇️**

- Removes the top item from the stack.
- Example: Taking the top plate off the pile.

**3. Top/Peek (View the top item without removing it) 👀**

- Looks at the item at the top of the stack without changing anything.
- Example: Checking the top dish in a pile without removing it.

<hr>

### Real-Life Example 🌍

#### Web Browsing History:
Imagine you’re browsing the internet. Each time you visit a new page, your previous pages get stacked up. You can pop the most recent page by clicking the back button ⏪:

- Visit Page A

    Stack: [A]
- Visit Page B

    Stack: [A, B]
- Visit Page C

    Stack: [A, B, C]

Now, when you hit back, the browser pops Page C, taking you back to Page B! 🚀

<hr>

### Why Use a Stack? 🤔

Stacks are everywhere in computer science! Here’s why they’re so useful:

- **Backtracking 🧭:**

    You can retrace steps (like in a maze) using a stack. Every time you make a move, it’s pushed onto the stack. If you hit a dead-end, you pop back to try a different route!

- **Undo Button ↩️:**

    In text editors, when you hit Ctrl+Z to undo something, it uses a stack to revert the last change.

- **Function Calls 📞:**
    
    Every time a function is called, it’s stacked on top of the previous one, ensuring they return in the correct order.


#### Stack Example 🔍

**Let’s reverse a string using a stack!**

1. Push all characters into the stack:

    Original string: HELLO
    Stack: [H, E, L, L, O]

2. Pop characters one by one to get the reversed string:

    Reversed string: OLLEH 🔄


### Key Applications 🔑

1. Balanced Parentheses Problem 🧩:

    - You can use a stack to check whether parentheses in an expression are balanced.
    - Push every opening bracket, and pop when you find a matching closing bracket.

2. Expression Evaluation 🧮:

    - In mathematical expressions, stacks help evaluate operators and operands in the correct order.


<hr>

### Example of Stack Operations in Action ⚡

Let’s go step by step through some stack operations:


    Initial Stack: []
    Push(3) → [3]
    Push(7) → [3, 7]
    Push(9) → [3, 7, 9]
    Pop() → [3, 7] (removed 9)
    Top() → 7 (stack remains [3, 7])


<hr>

### 🎁 Here how you can create your own stack 🎁

- [C++](#cpp)
- [Python](#python)
- [Java](#java)
- [JavaScript](#javascript)


#### C++
```cpp
    #include <iostream>
    #include <vector>
    using namespace std;

    class Stack {
    private:
        vector<int> stack; // Vector to store stack elements

    public:
        // Pushes an element to the top of the stack
        void push(int value) {
            stack.push_back(value);
        }

        // Pops the top element from the stack
        void pop() {
            if (stack.empty()) {
                cout << "Stack underflow" << endl;
            } else {
                stack.pop_back();
            }
        }

        // Returns the top element of the stack
        int top() {
            if (stack.empty()) {
                cout << "Stack is empty" << endl;
                return -1;
            }
            return stack.back();
        }

        // Returns true if the stack is empty
        bool isEmpty() {
            return stack.empty();
        }

        // Returns the size of the stack
        int size() {
            return stack.size();
        }
    };

    int main() {
        Stack s;
        s.push(10);
        s.push(20);
        cout << s.top() << endl; // Outputs: 20
        s.pop();
        cout << s.top() << endl; // Outputs: 10
        return 0;
    }

```

#### Python
```python
    class Stack:
        def __init__(self):
            self.stack = []  # List to store stack elements

        # Push an element onto the stack
        def push(self, value):
            self.stack.append(value)

        # Remove the top element from the stack
        def pop(self):
            if self.is_empty():
                print("Stack underflow")
            else:
                self.stack.pop()

        # Return the top element of the stack
        def top(self):
            if self.is_empty():
                print("Stack is empty")
                return None
            return self.stack[-1]

        # Return true if the stack is empty
        def is_empty(self):
            return len(self.stack) == 0

        # Return the size of the stack
        def size(self):
            return len(self.stack)

    # Usage example
    s = Stack()
    s.push(10)
    s.push(20)
    print(s.top())  # Outputs: 20
    s.pop()
    print(s.top())  # Outputs: 10

```

#### Java
```java
    import java.util.ArrayList;

    class Stack {
        private ArrayList<Integer> stack = new ArrayList<>(); // ArrayList to store stack elements

        // Pushes an element onto the stack
        public void push(int value) {
            stack.add(value);
        }

        // Removes the top element from the stack
        public void pop() {
            if (stack.isEmpty()) {
                System.out.println("Stack underflow");
            } else {
                stack.remove(stack.size() - 1);
            }
        }

        // Returns the top element of the stack
        public int top() {
            if (stack.isEmpty()) {
                System.out.println("Stack is empty");
                return -1;
            }
            return stack.get(stack.size() - 1);
        }

        // Returns true if the stack is empty
        public boolean isEmpty() {
            return stack.isEmpty();
        }

        // Returns the size of the stack
        public int size() {
            return stack.size();
        }
        
        public static void main(String[] args) {
            Stack s = new Stack();
            s.push(10);
            s.push(20);
            System.out.println(s.top()); // Outputs: 20
            s.pop();
            System.out.println(s.top()); // Outputs: 10
        }
    }

```

#### JavaScript
```javascript
    class Stack {
        constructor() {
            this.stack = []; // Array to store stack elements
        }

        // Pushes an element onto the stack
        push(value) {
            this.stack.push(value);
        }

        // Removes the top element from the stack
        pop() {
            if (this.isEmpty()) {
                console.log("Stack underflow");
            } else {
                this.stack.pop();
            }
        }

        // Returns the top element of the stack
        top() {
            if (this.isEmpty()) {
                console.log("Stack is empty");
                return null;
            }
            return this.stack[this.stack.length - 1];
        }

        // Returns true if the stack is empty
        isEmpty() {
            return this.stack.length === 0;
        }

        // Returns the size of the stack
        size() {
            return this.stack.length;
        }
    }

    // Usage example
    const s = new Stack();
    s.push(10);
    s.push(20);
    console.log(s.top()); // Outputs: 20
    s.pop();
    console.log(s.top()); // Outputs: 10

```

<hr>

### Summary ✨
- Stacks are a powerful data structure that works on the Last In, First Out (LIFO) principle.
- They are used in algorithms, solving problems, and in everyday applications like undo buttons, web browsers, and recursive functions.
- **Push**, **Pop**, and **Top** are the core operations, and they make stacks both simple and versatile.


  

  <hr>

## 📚 What's Next?
Now that we've covered the concepts, try applying them to the following practice problems:


- **Easy:** [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
- **Medium:** [Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)
- **Hard:** [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)

*Try to solve these problems. If you find any difficulty while solving these challanges feel free to go to repo and read the explaination.md file where the details of the solution is explained in a proper way*

**Remember:** 

If these names are new to you, don't worry! We'll discuss everything clearly and in a simplified manner in the upcoming days. This journey is about taking small, steady steps to build a strong foundation. 🚀

## ⭐Star the Repo⭐

Your support will encourage us to provide more details about all the topics.

## 🍴Fork the repo

Feel free to fork the repo to contribute in this course and get all the files in your local system.

*See You in the Next Topic*
