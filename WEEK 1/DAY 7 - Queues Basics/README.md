
# 🚀Day 7: Queues - Basics🚀

Today’s topic is all about **Queues** — a fundamental data structure that works on the **FIFO** principle (**First In, First Out**). This is going to be a fun ride as we explore how queues work and where they are used in the real world! 🌍

<hr>

## What is a Queue? 🎯

A Queue is a **linear data structure** that follows the **FIFO** principle. It’s like a line of people waiting to buy tickets for a concert or a movie 🎟️:

- The first person who joins the line gets served first (this is dequeue).
- New people can only join at the end of the line (this is enqueue).

<hr>

## Queue Operations ⚙️
Here are the two most important operations performed in a queue:

1. Enqueue (Add an item) ➕

- Adds an element to the back of the queue.
- Example: People joining the back of the ticket line.

2. Dequeue (Remove an item) ➖

- Removes the element from the front of the queue.
- Example: Serving the first person in the line and then removing them.

<hr>

## Real-Life Example 🌍

**Waiting in Line:**

Imagine you’re at a fast food restaurant 🍔. There’s a line of customers waiting to place their orders. The customer at the front of the line gets served first. Once they’ve been served, they leave, and the next person in line steps up. This is exactly how a **queue** works.

- Person A enters the line (enqueue).
- Person B enters the line (enqueue).
- Person A is served and leaves (dequeue).
- Now, Person B is at the front of the line.

<hr>

## Why Use a Queue? 🤔

Queues are used in numerous real-world scenarios and algorithms. Here are a few reasons why queues are awesome:

1. **Task Scheduling 🗓️:**

    When tasks are scheduled for processing (e.g., printing jobs in a printer), they are queued up and processed in order.

2. **Breadth-First Search (BFS) 🌲:**

    Queues are essential in BFS, where you explore nodes level by level, ensuring nodes are processed in the order they are encountered.

3. **Operating Systems 💻:**

    When multiple processes are waiting for CPU time, they are arranged in a queue. The process that arrived first is executed first!

<hr>

## Types of Queues 🧑‍🏫

1. **Simple Queue**

    A basic queue where insertion happens at the rear and deletion at the front.

2. **Circular Queue 🔄**

    A queue where the end wraps around to the beginning, optimizing space utilization.

3. **Priority Queue 🥇**

    A queue where elements are dequeued based on priority, not just their order in the queue. For example, emergency patients get treated before others, regardless of when they arrived.

<hr>

## Queue Example in Action ⚡

Let’s walk through how items move in and out of a simple queue:


    Initial Queue: []
    Enqueue(10) → [10]
    Enqueue(20) → [10, 20]
    Enqueue(30) → [10, 20, 30]
    Dequeue() → [20, 30] (removed 10)
    Front() → 20 (front element is now 20)

## Real-World Application 🚀

- Customer Service Hotlines ☎️:
    Calls are placed into a queue, and the first person to call gets served first. If the queue is full, new callers wait until a spot opens.

- Ticketing System 🎟️:
    In any ticket-based event (e.g., amusement parks), people are placed in a queue, ensuring that the person who arrives first gets served first.

- Task Queues in Web Servers 🌐:
    When requests hit a web server, they are placed in a queue and processed in the order they arrive, ensuring fairness.

<hr>

## Queue Operations in Code 💻

Here’s a brief look at how common queue operations work behind the scenes:


- **Enqueue:** Adds an element to the rear (or end) of the queue.
- **Dequeue:** Removes an element from the front of the queue.
- **Peek/Front:** Returns the element at the front of the queue without removing it.
- **isEmpty:** Checks if the queue is empty.


### Implementation

- [C++](#cpp)
- [Python](#python)
- [Java](#java)
- [JavaScript](#javascript)

#### C++
```cpp
    #include <iostream>
    #include <queue>

    class Queue {
    private:
        std::vector<int> queue;
    public:
        // Enqueue: Adds element to the rear
        void enqueue(int value) {
            queue.push_back(value);
        }

        // Dequeue: Removes element from the front
        void dequeue() {
            if (!queue.empty()) {
                queue.erase(queue.begin());
            } else {
                std::cout << "Queue is empty\n";
            }
        }

        // Peek: Returns the front element
        int front() {
            if (!queue.empty()) {
                return queue[0];
            } else {
                std::cout << "Queue is empty\n";
                return -1;
            }
        }

        // isEmpty: Checks if the queue is empty
        bool isEmpty() {
            return queue.empty();
        }
    };

    int main() {
        Queue q;
        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);
        std::cout << "Front: " << q.front() << "\n"; // 10
        q.dequeue();
        std::cout << "Front after dequeue: " << q.front() << "\n"; // 20
        std::cout << "Is queue empty? " << (q.isEmpty() ? "Yes" : "No") << "\n"; // No
    }

```
#### Python
```python
    class Queue:
        def __init__(self):
            self.queue = []

        # Enqueue: Adds element to the rear
        def enqueue(self, value):
            self.queue.append(value)

        # Dequeue: Removes element from the front
        def dequeue(self):
            if not self.is_empty():
                return self.queue.pop(0)
            else:
                return "Queue is empty"

        # Peek: Returns the front element
        def front(self):
            if not self.is_empty():
                return self.queue[0]
            else:
                return "Queue is empty"

        # isEmpty: Checks if the queue is empty
        def is_empty(self):
            return len(self.queue) == 0

    # Usage
    q = Queue()
    q.enqueue(10)
    q.enqueue(20)
    q.enqueue(30)
    print(f"Front: {q.front()}") # 10
    q.dequeue()
    print(f"Front after dequeue: {q.front()}") # 20
    print(f"Is queue empty? {q.is_empty()}") # False

```
#### Java
```java
    import java.util.LinkedList;

    class Queue {
        private LinkedList<Integer> queue = new LinkedList<>();

        // Enqueue: Adds element to the rear
        public void enqueue(int value) {
            queue.addLast(value);
        }

        // Dequeue: Removes element from the front
        public void dequeue() {
            if (!queue.isEmpty()) {
                queue.removeFirst();
            } else {
                System.out.println("Queue is empty");
            }
        }

        // Peek: Returns the front element
        public int front() {
            if (!queue.isEmpty()) {
                return queue.getFirst();
            } else {
                System.out.println("Queue is empty");
                return -1;
            }
        }

        // isEmpty: Checks if the queue is empty
        public boolean isEmpty() {
            return queue.isEmpty();
        }

        public static void main(String[] args) {
            Queue q = new Queue();
            q.enqueue(10);
            q.enqueue(20);
            q.enqueue(30);
            System.out.println("Front: " + q.front()); // 10
            q.dequeue();
            System.out.println("Front after dequeue: " + q.front()); // 20
            System.out.println("Is queue empty? " + q.isEmpty()); // false
        }
    }

```
#### JavaScript
```javascript
    class Queue {
        constructor() {
            this.queue = [];
        }

        // Enqueue: Adds element to the rear
        enqueue(value) {
            this.queue.push(value);
        }

        // Dequeue: Removes element from the front
        dequeue() {
            if (!this.isEmpty()) {
                return this.queue.shift();
            } else {
                return "Queue is empty";
            }
        }

        // Peek: Returns the front element
        front() {
            if (!this.isEmpty()) {
                return this.queue[0];
            } else {
                return "Queue is empty";
            }
        }

        // isEmpty: Checks if the queue is empty
        isEmpty() {
            return this.queue.length === 0;
        }
    }

    // Usage
    const q = new Queue();
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    console.log(`Front: ${q.front()}`); // 10
    q.dequeue();
    console.log(`Front after dequeue: ${q.front()}`); // 20
    console.log(`Is queue empty? ${q.isEmpty()}`); // false

```

<hr>

## Summary ✨

- Queues follow the First In, First Out (FIFO) principle, just like real-life lines at ticket counters or amusement parks 🎢.
- Key operations include enqueue (adding to the back) and dequeue (removing from the front).
- Queues are essential for task scheduling, process handling, BFS, and much more in the world of computer science.



<hr>


## 📚 What's Next?
Now that we've covered the concepts, try applying them to the following practice problems:

- **Easy:** [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)
- **Medium:** [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)
- **Hard:** [Simplify Path](https://leetcode.com/problems/simplify-path/)


*Try to solve these problems. If you find any difficulty while solving these challanges feel free to go to repo and read the explaination.md file where the details of the solution is explained in a proper way*

**Remember:** 

If these names are new to you, don't worry! We'll discuss everything clearly and in a simplified manner in the upcoming days. This journey is about taking small, steady steps to build a strong foundation. 🚀

## ⭐Star the Repo⭐

Your support will encourage us to provide more details about all the topics.

## 🍴Fork the repo

Feel free to fork the repo to contribute in this course and get all the files in your local system.

*See You in the Next Topic*
