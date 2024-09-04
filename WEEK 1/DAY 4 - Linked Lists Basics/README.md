# 🚀Day 4: Linked Lists - Basics🚀

Hello everyone! 👋

Welcome to **Day 4** of our 30 Days **DSA Crash Course!**

Today, we're venturing into the world of **Linked Lists**— one of the most fundamental data structures in computer science. Linked lists are powerful, flexible, and a must-know for any aspiring developer. By the end of today’s lesson, you'll understand what linked lists are, how to perform key operations, and why they are essential.

<hr>

### 🙄 What is a Linked List?
A Linked List is a linear data structure, similar to an array, but with a unique twist. Instead of being stored in contiguous memory locations like an array, each element (known as a node) in a linked list is stored separately in memory. Each node contains:

- **Data:** The value stored in the node.
- **Pointer (Next):** A reference to the next node in the sequence.

**Visual Representation:**


      [Data | Next] -> [Data | Next] -> [Data | Next] -> NULL

Imagine linked lists as a chain of train cars:

- **Each car** (node) holds some cargo (data).
- **The connector** (pointer) links to the next car in the train.

Unlike arrays, where elements are placed sequentially, linked lists allow for flexible memory use, as nodes can be scattered in memory but still be logically connected.

<hr>

### 🤔 Why Use Linked Lists?
Linked lists are particularly useful when:

- **Dynamic Size:** The number of elements isn't known in advance. Linked lists can easily grow or shrink in size without needing to reallocate memory.
- **Frequent Insertions/Deletions:** Operations like inserting or deleting elements are more efficient in linked lists compared to arrays, especially for operations near the beginning or middle.

**Real-Life Example:** Consider a line of people waiting to board a bus. If someone leaves the line or joins the line, you don't need to reshuffle the entire line—you simply adjust the connections between people. That's how linked lists work!

<hr>

### 🦖 Types of Linked Lists

**1. Singly Linked List:**

- **Definition:** Each node points to the next node and the last node points to NULL.
- **Use Case:** Ideal for scenarios where you need to traverse data in a single direction.

**2. Doubly Linked List:**

- **Definition:** Each node points to both the next and the previous node.
- **Use Case:** Useful when you need to traverse data in both directions.

**3. Circular Linked List:**

- **Definition:** The last node points back to the first node, forming a circle.
- **Use Case:** Good for scenarios like implementing a circular buffer or a round-robin scheduler.

_Today, we'll focus on the **Singly Linked List**._

<hr>

### Here is how you can create your own Linked List

- [C++](#cpp)
- [Python](#python)
- [Java](#java)
- [JavaScript](#javascript)

### C++
```cpp
    #include <iostream>
    using namespace std;

    // Node class represents each element in the linked list
    class Node {
    public:
        int data;      // Data stored in the node
        Node* next;    // Pointer to the next node in the list

        // Constructor to initialize a new node
        Node(int data) {
            this->data = data;
            this->next = nullptr;
        }
    };

    // LinkedList class manages the linked list
    class LinkedList {
    public:
        Node* head;    // Pointer to the first node in the list

        // Constructor to initialize an empty linked list
        LinkedList() {
            head = nullptr;
        }
    };


```

### Python
```python
    # Node class represents each element in the linked list
    class Node:
        def __init__(self, data):
            self.data = data      # Data stored in the node
            self.next = None      # Pointer to the next node in the list

    # LinkedList class manages the linked list
    class LinkedList:
        def __init__(self):
            self.head = None      # Pointer to the first node in the list

```

### Java
```java
    // Node class represents each element in the linked list
    class Node {
        int data;      // Data stored in the node
        Node next;     // Reference to the next node in the list

        // Constructor to initialize a new node
        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    // LinkedList class manages the linked list
    class LinkedList {
        Node head;     // Reference to the first node in the list

        // Constructor to initialize an empty linked list
        public LinkedList() {
            this.head = null;
        }
    }

```

### JavaScript
```javascript
    // Node class represents each element in the linked list
    class Node {
        constructor(data) {
            this.data = data;      // Data stored in the node
            this.next = null;      // Reference to the next node in the list
        }
    }

    // LinkedList class manages the linked list
    class LinkedList {
        constructor() {
            this.head = null;      // Reference to the first node in the list
        }
    }

```

<hr>

### 🔑 Key Operations in a Singly Linked List
- **1. Insertion**

        Original List:       [1] -> [2] -> [3] -> NULL
        Insert 0 at start:   [0] -> [1] -> [2] -> [3] -> NULL
        Insert 4 at end:     [0] -> [1] -> [2] -> [3] -> [4] -> NULL
        Insert 1.5 at pos 2: [0] -> [1] -> [1.5] -> [2] -> [3] -> [4] -> NULL

    - **At the Beginning :**

        - **Description :** A new node is added at the start, and its pointer is set to the current head of the list.
        - **Visual :** Imagine adding a new link at the very beginning of a chain.

    - [C++](#cpp)
    - [Python](#python)
    - [Java](#java)
    - [JavaScript](#javascript)

    #### C++
    ```cpp
        void insertAtBeginning(int data) {
            Node* newNode = new Node(data);  // Create a new node
            newNode->next = head;            // Link the new node to the current head
            head = newNode;                  // Update the head to the new node
        }

    ```
    #### Python
    ```python
        def insert_at_beginning(self, data):
            new_node = Node(data)           # Create a new node
            new_node.next = self.head       # Link the new node to the current head
            self.head = new_node            # Update the head to the new node

    ```
    #### Java
    ```java
        public void insertAtBeginning(int data) {
            Node newNode = new Node(data);   // Create a new node
            newNode.next = head;             // Link the new node to the current head
            head = newNode;                  // Update the head to the new node
        }

    ```
    #### JavaScript
    ```javascript
        insertAtBeginning(data) {
            const newNode = new Node(data);     // Create a new node
            newNode.next = this.head;           // Link the new node to the current head
            this.head = newNode;                // Update the head to the new node
        }

    ```

    - **At the End:**

        - **Description:** A new node is added after the last node, and the pointer of the current last node is set to this new node.
        - **Visual:** Think of attaching a new train car at the end of a train.

    - [C++](#cpp)
    - [Python](#python)
    - [Java](#java)
    - [JavaScript](#javascript)

    #### C++
    ```cpp
        void insertAtEnd(int data) {
            Node* newNode = new Node(data);  // Create a new node
            if (head == nullptr) {           // If list is empty, new node becomes the head
                head = newNode;
                return;
            }
            Node* temp = head;               // Traverse to the end of the list
            while (temp->next != nullptr) {
                temp = temp->next;
            }
            temp->next = newNode;            // Link the last node to the new node
        }

    ```
    #### Python
    ```python
        def insert_at_end(self, data):
            new_node = Node(data)           # Create a new node
            if not self.head:               # If list is empty, new node becomes the head
                self.head = new_node
                return
            temp = self.head                # Traverse to the end of the list
            while temp.next:
                temp = temp.next
            temp.next = new_node            # Link the last node to the new node

    ```
    #### Java
    ```java
        public void insertAtEnd(int data) {
            Node newNode = new Node(data);   // Create a new node
            if (head == null) {              // If list is empty, new node becomes the head
                head = newNode;
                return;
            }
            Node temp = head;                // Traverse to the end of the list
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;             // Link the last node to the new node
        }

    ```
    #### JavaScript
    ```javascript
        insertAtEnd(data) {
            const newNode = new Node(data);     // Create a new node
            if (!this.head) {                   // If list is empty, new node becomes the head
                this.head = newNode;
                return;
            }
            let temp = this.head;               // Traverse to the end of the list
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = newNode;                // Link the last node to the new node
        }

    ```

    - **At a Given Position:**

        - **Description:** A new node is inserted between two existing nodes. The pointer of the previous node is set to this new node, and the new node’s pointer is set to the next node.
        - **Visual:** It’s like adding a new person in the middle of a line of people.

    - [C++](#cpp)
    - [Python](#python)
    - [Java](#java)
    - [JavaScript](#javascript)

    #### C++
    ```cpp
        void insertAtPosition(int data, int position) {
            Node* newNode = new Node(data);  // Create a new node
            if (position == 1) {             // If position is 1, insert at the beginning
                newNode->next = head;
                head = newNode;
                return;
            }
            Node* temp = head;
            for (int i = 1; i < position - 1 && temp != nullptr; i++) {
                temp = temp->next;           // Traverse to the node before the desired position
            }
            if (temp == nullptr) return;     // If the position is beyond the list length
            newNode->next = temp->next;      // Link the new node to the next node
            temp->next = newNode;            // Link the previous node to the new node
        }

    ```
    #### Python
    ```python
        def insert_at_position(self, data, position):
            new_node = Node(data)           # Create a new node
            if position == 1:               # If position is 1, insert at the beginning
                new_node.next = self.head
                self.head = new_node
                return
            temp = self.head
            for _ in range(position - 2):
                if not temp:
                    return                  # If position is beyond the list length
                temp = temp.next            # Traverse to the node before the desired position
            if not temp:
                return
            new_node.next = temp.next       # Link the new node to the next node
            temp.next = new_node            # Link the previous node to the new node

    ```
    #### Java
    ```java
        public void insertAtPosition(int data, int position) {
            Node newNode = new Node(data);   // Create a new node
            if (position == 1) {             // If position is 1, insert at the beginning
                newNode.next = head;
                head = newNode;
                return;
            }
            Node temp = head;
            for (int i = 1; i < position - 1 && temp != null; i++) {
                temp = temp.next;            // Traverse to the node before the desired position
            }
            if (temp == null) return;        // If position is beyond the list length
            newNode.next = temp.next;        // Link the new node to the next node
            temp.next = newNode;             // Link the previous node to the new node
        }

    ```
    #### JavaScript
    ```javascript
        insertAtPosition(data, position) {
            const newNode = new Node(data);     // Create a new node
            if (position === 1) {               // If position is 1, insert at the beginning
                newNode.next = this.head;
                this.head = newNode;
                return;
            }
            let temp = this.head;
            for (let i = 1; i < position - 1; i++) {
                if (!temp) return;              // If position is beyond the list length
                temp = temp.next;               // Traverse to the node before the desired position
            }
            if (!temp) return;
            newNode.next = temp.next;           // Link the new node to the next node
            temp.next = newNode;                // Link the previous node to the new node
        }

    ```
    
- **2. Deletion**

        Original List:        [0] -> [1] -> [1.5] -> [2] -> [3] -> [4] -> NULL
        Delete from start:    [1] -> [1.5] -> [2] -> [3] -> [4] -> NULL
        Delete from end:      [1] -> [1.5] -> [2] -> [3] -> NULL
        Delete 1.5 (pos 2):   [1] -> [2] -> [3] -> NULL

    - **From the Beginning :**

        - **Description:** The first node is removed, and the head is updated to point to the next node.
        - **Visual:** Removing the first link in a chain.

    - [C++](#cpp)
    - [Python](#python)
    - [Java](#java)
    - [JavaScript](#javascript)

    #### C++
    ```cpp
        void deleteFromBeginning() {
            if (head == nullptr) return;      // If list is empty, nothing to delete
            Node* temp = head;                // Store the current head in a temporary node
            head = head->next;                // Move the head to the next node
            delete temp;                      // Delete the old head node
        }
    ```

    #### Python
    ```python
        def delete_from_beginning(self):
            if not self.head:                 # If list is empty, nothing to delete
                return
            temp = self.head                  # Store the current head in a temporary node
            self.head = self.head.next        # Move the head to the next node
            del temp                          # Delete the old head node

    ```
    #### Java
    ```java
        public void deleteFromBeginning() {
            if (head == null) return;          // If list is empty, nothing to delete
            head = head.next;                  // Move the head to the next node
        }

    ```

    #### JavaScript
    ```javascript
        deleteFromBeginning() {
            if (!this.head) return;            // If list is empty, nothing to delete
            this.head = this.head.next;        // Move the head to the next node
        }

    ```

    - **From the End:**

        - **Description:** The last node is removed, and the second-to-last node’s pointer is set to NULL.
        - **Visual:** Detaching the last car of a train.

    - [C++](#cpp)
    - [Python](#python)
    - [Java](#java)
    - [JavaScript](#javascript)

    #### C++
    ```cpp
        void deleteFromEnd() {
            if (head == nullptr) return;      // If list is empty, nothing to delete
            if (head->next == nullptr) {      // If there's only one node in the list
                delete head;
                head = nullptr;
                return;
            }
            Node* temp = head;
            while (temp->next->next != nullptr) { // Traverse to the second last node
                temp = temp->next;
            }
            delete temp->next;                // Delete the last node
            temp->next = nullptr;             // Set the second last node's next to nullptr
        }

    ```
    #### Python
    ```python
        def delete_from_end(self):
            if not self.head:                 # If list is empty, nothing to delete
                return
            if not self.head.next:            # If there's only one node in the list
                self.head = None
                return
            temp = self.head
            while temp.next.next:             # Traverse to the second last node
                temp = temp.next
            temp.next = None                  # Delete the last node by setting next to None

    ```

    #### Java
    ```java
        public void deleteFromEnd() {
            if (head == null) return;          // If list is empty, nothing to delete
            if (head.next == null) {           // If there's only one node in the list
                head = null;
                return;
            }
            Node temp = head;
            while (temp.next.next != null) {   // Traverse to the second last node
                temp = temp.next;
            }
            temp.next = null;                  // Delete the last node
        }

    ```
    #### JavaScript
    ```javascript
        deleteFromEnd() {
            if (!this.head) return;            // If list is empty, nothing to delete
            if (!this.head.next) {             // If there's only one node in the list
                this.head = null;
                return;
            }
            let temp = this.head;
            while (temp.next.next) {           // Traverse to the second last node
                temp = temp.next;
            }
            temp.next = null;                  // Delete the last node
        }

    ```
    - **From a Given Position:**

        - **Description:** A node between two nodes is removed, and the previous node’s pointer is updated to point to the next node.
        - **Visual:** Think of someone stepping out of a line, and the line closes the gap.

    - [C++](#cpp)
    - [Python](#python)
    - [Java](#java)
    - [JavaScript](#javascript)

    #### C++
    ```cpp
        void deleteFromPosition(int position) {
            if (head == nullptr) return;      // If list is empty, nothing to delete
            if (position == 1) {              // If the position is the first node
                Node* temp = head;
                head = head->next;
                delete temp;
                return;
            }
            Node* temp = head;
            for (int i = 1; i < position - 1 && temp->next != nullptr; i++) {
                temp = temp->next;            // Traverse to the node before the desired position
            }
            if (temp->next == nullptr) return; // If position is beyond list length
            Node* toDelete = temp->next;
            temp->next = toDelete->next;      // Link the previous node to the next node
            delete toDelete;                  // Delete the node at the desired position
        }

    ```
    #### Python
    ```python
        def delete_from_position(self, position):
            if not self.head:                 # If list is empty, nothing to delete
                return
            if position == 1:                 # If the position is the first node
                temp = self.head
                self.head = self.head.next
                del temp
                return
            temp = self.head
            for _ in range(position - 2):
                if not temp.next:
                    return                    # If position is beyond list length
                temp = temp.next              # Traverse to the node before the desired position
            if not temp.next:
                return
            to_delete = temp.next
            temp.next = to_delete.next        # Link the previous node to the next node
            del to_delete                     # Delete the node at the desired position

    ```
    #### Java
    ```java
        public void deleteFromPosition(int position) {
            if (head == null) return;          // If list is empty, nothing to delete
            if (position == 1) {               // If the position is the first node
                head = head.next;
                return;
            }
            Node temp = head;
            for (int i = 1; i < position - 1 && temp.next != null; i++) {
                temp = temp.next;              // Traverse to the node before the desired position
            }
            if (temp.next == null) return;     // If position is beyond list length
            temp.next = temp.next.next;        // Link the previous node to the next node
        }

    ```
    #### JavaScript
    ```javascript
        deleteFromPosition(position) {
            if (!this.head) return;            // If list is empty, nothing to delete
            if (position === 1) {              // If the position is the first node
                this.head = this.head.next;
                return;
            }
            let temp = this.head;
            for (let i = 1; i < position - 1; i++) {
                if (!temp.next) return;        // If position is beyond list length
                temp = temp.next;              // Traverse to the node before the desired position
            }
            if (!temp.next) return;
            temp.next = temp.next.next;        // Link the previous node to the next node
        }

    ```

- **3. Reversal**

        Original List:    [1] -> [2] -> [3] -> NULL
        Reversed List:    [3] -> [2] -> [1] -> NULL

    - **Description:** The direction of the pointers is reversed, making the last node the new head and the first node the new tail.
    - **Visual:** Imagine flipping a line of people so that the first person becomes the last, and the last becomes the first.

    - [C++](#cpp)
    - [Python](#python)
    - [Java](#java)
    - [JavaScript](#javascript)

    #### C++
    ```cpp
        void reverse() {
            Node* prev = nullptr;             // Previous node, initially set to null
            Node* current = head;             // Current node starts at the head
            Node* next = nullptr;             // Next node, initially set to null

            while (current != nullptr) {      // Iterate through the list until the end
                next = current->next;         // Store the next node
                current->next = prev;         // Reverse the current node's pointer
                prev = current;               // Move the prev pointer to the current node
                current = next;               // Move to the next node in the list
            }
            head = prev;                      // Update the head to the last non-null node
        }

    ```
    #### Python
    ```python
        def reverse(self):
            prev = None                       # Previous node, initially set to None
            current = self.head               # Current node starts at the head
            while current:                    # Iterate through the list until the end
                next_node = current.next      # Store the next node
                current.next = prev           # Reverse the current node's pointer
                prev = current                # Move the prev pointer to the current node
                current = next_node           # Move to the next node in the list
            self.head = prev                  # Update the head to the last non-null node

    ```
    #### Java
    ```java
        public void reverse() {
            Node prev = null;                 // Previous node, initially set to null
            Node current = head;              // Current node starts at the head
            Node next = null;                 // Next node, initially set to null

            while (current != null) {         // Iterate through the list until the end
                next = current.next;          // Store the next node
                current.next = prev;          // Reverse the current node's pointer
                prev = current;               // Move the prev pointer to the current node
                current = next;               // Move to the next node in the list
            }
            head = prev;                      // Update the head to the last non-null node
        }

    ```
    #### JavaScript
    ```javascript
        reverse() {
            let prev = null;                  // Previous node, initially set to null
            let current = this.head;          // Current node starts at the head
            let next = null;                  // Next node, initially set to null

            while (current !== null) {        // Iterate through the list until the end
                next = current.next;          // Store the next node
                current.next = prev;          // Reverse the current node's pointer
                prev = current;               // Move the prev pointer to the current node
                current = next;               // Move to the next node in the list
            }
            this.head = prev;                 // Update the head to the last non-null node
        }

    ```

    **Real-Life Example:** Consider reversing a playlist of songs. The song that was supposed to play last now plays first, and so on. Reversing a linked list works similarly by reversing the sequence in which nodes are connected.

<hr>

### 😶‍🌫️ Why Linked Lists?

Linked lists provide dynamic memory management and efficient insertion/deletion operations. They form the backbone of many complex data structures like stacks, queues, and more. Understanding linked lists is key to mastering other advanced data structures.

**Remember:** Like learning to ride a bike, mastering linked lists takes practice. Once you get the hang of it, you'll see just how flexible and powerful they are!

<hr>

### 🎁 Wrapping Up

Today’s focus on linked lists has given you insight into a data structure that’s both simple and powerful. By learning how to efficiently manage and manipulate linked lists, you’re building a strong foundation that will help you tackle more complex data structures and algorithms in the future.

<hr>

## 📚 What's Next?
Now that we've covered the concepts, try applying them to the following practice problems:

- **Easy:** [Reverse a Linked List](https://leetcode.com/problems/reverse-linked-list/)
- **Medium:** [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- **Hard:** [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)


*Try to solve these problems. If you find any difficulty while solving these challanges feel free to go to repo and read the explaination.md file where the details of the solution is explained in a proper way*

**Remember:** If these names are new to you, don't worry! We'll discuss everything clearly and in a simplified manner in the upcoming days. This journey is about taking small, steady steps to build a strong foundation. 🚀

## ⭐Star the Repo⭐

Your support will encourage us to provide more details about all the topics.

## 🍴Fork the repo

Feel free to fork the repo to contribute in this course and get all the files in your local system.

*See You in the Next Topic*