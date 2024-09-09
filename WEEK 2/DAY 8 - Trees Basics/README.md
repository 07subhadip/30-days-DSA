# 🚀Day 8: Trees - Basics 🌳

Today, we're diving into the world of **Trees**, one of the most fundamental and widely used data structures in computer science! 🌟 Trees are everywhere, from file systems 📂 to machine learning models 🤖. Let's explore the beauty of **Binary Trees** and **Binary Search Trees** along with different tree traversal techniques.

<hr>

## What is a Tree? 🌲

A Tree is a **hierarchical data structure** that consists of nodes connected by edges. It starts with a **root node** and branches out to child nodes. Every tree follows these rules:

- The top node is called the root 🌱.
- Every node can have 0 or more child nodes.
- Each node, except the root, has exactly one parent node.
- Nodes with no children are called leaf nodes 🍂.

<hr>

## Types of Trees 🧑‍🏫

### 1. Binary Tree 🌳

- A **Binary Tree** is a tree where each node can have at most two children: a left child and a right child.
- **Example:** Think of it like a family tree where each parent can have at most two children.

### 2. Binary Search Tree (BST) 🔍

- A **Binary Search Tree (BST)** is a special type of binary tree where:
    - The left child is always smaller than the parent.
    - The right child is always greater than the parent.
- **Example:** Imagine organizing books 📚 in a library by their unique ID, where books with smaller IDs are placed to the left and larger ones to the right.


## Why Use Trees? 🤔

Trees are used to represent **hierarchical structures**. They are efficient for:

- **Searching 🔍:** Binary Search Trees allow for fast lookups, insertions, and deletions in $O(log n)$ time.
- **Hierarchical Data** 🗂️: File systems, databases, and organizational charts use trees to represent data in a structured way.
- **Efficient Traversal 🚶:** Trees allow efficient navigation and manipulation of data.

<hr>

## Tree Traversal Techniques 🚶‍♂️

To work with trees, we need to traverse (or visit) all the nodes. Here are the most common ways to traverse a tree:

#### 1. Preorder Traversal (Root, Left, Right) 🥇

- You visit the root first, then recursively visit the left subtree, followed by the right subtree.
- **Example:** Visiting a CEO first and then going down to the department heads and team members.
#### 2. Inorder Traversal (Left, Root, Right) 🥈

- You visit the left subtree first, then the root, and finally the right subtree.
- **Example:** It's like going through a bookshelf from left to right, one book at a time.
#### 3. Postorder Traversal (Left, Right, Root) 🥉

- You visit the left subtree first, then the right subtree, and finally the root.
- **Example:** Think of finishing all the sub-tasks of a project before moving to the main task.

#### 4. Level Order Traversal (Breadth-First Search) 🔄

- You visit each level of the tree, from top to bottom, and from left to right.
- **Example:** Like exploring an organization chart level by level, from top executives to interns.


<hr>

## Easy way to remember

- **Inorder Traversal:** Left, Root, Right
- **Preorder Traversal:** Root, Left, Right
- **Postorder Traversal:** Left, Right, Root
- **Level Order Traversal:** Traversing level by level starting from the root
<hr>

## Real-Life Example 🌍

Imagine you're in a company 🏢 where the CEO is at the top, and there are several departments. Each department head has a team, and some team members may also manage smaller teams. If you want to contact someone in the company, you start at the top (root), then go down each level of the hierarchy to find the right person.

- **Preorder**: You start with the CEO and work your way down.
- **Inorder:** You first check the leftmost department, then the CEO, and finally the rightmost department.
- **Postorder:** You check all the teams and department heads before getting to the CEO.

<hr>

## Binary Search Tree (BST) 🔍

 **A Binary Search Tree (BST)**
 is a type of binary tree that makes searching incredibly efficient. The rules are simple:

1. The **left subtree** of a node contains only nodes with values **less than** the node's value.
2. The **right subtree** of a node contains only nodes with values **greater than** the node's value.
3. Each subtree must also be a BST.

**Why use a BST?**

 It allows for **fast lookup** operations, making it easy to search, insert, or delete data in logarithmic time $O(log n)$. Imagine a phone book 📖, where names are arranged alphabetically, and you can quickly narrow down to the right name based on whether it's alphabetically smaller or larger than the one you're currently looking at.

<hr>

## Visualizing a Tree 🌳

Let’s visualize how a tree looks:

```markdown
       10
      /  \
     5    20
    / \   / \
   3   7 15 30
```
- The root is 10.
- The left subtree has 5 as its root, with 3 and 7 as children.
- The right subtree has 20 as its root, with 15 and 30 as children.

Now, let's apply different traversals:

- **Preorder**: `10 → 5 → 3 → 7 → 20 → 15 → 30`
- **Inorder:** `3 → 5 → 7 → 10 → 15 → 20 → 30`
- **Postorder:** `3 → 7 → 5 → 15 → 30 → 20 → 10`
- **Level Order:** `10 → 5 → 20 → 3 → 7 → 15 → 30`

<hr>

## Here's how you can implement your own BST 


- [C++](#cpp)
- [Python](#python)
- [Java](#java)
- [JavaScript](#javascript)

### C++
```cpp
    #include <iostream>
    #include <queue>
    using namespace std;

    struct Node {
        int data;
        Node* left;
        Node* right;

        Node(int value) {
            data = value;
            left = right = nullptr;
        }
    };

    void inorder(Node* root) {
        if (root == nullptr) return;
        inorder(root->left);
        cout << root->data << " ";
        inorder(root->right);
    }

    void preorder(Node* root) {
        if (root == nullptr) return;
        cout << root->data << " ";
        preorder(root->left);
        preorder(root->right);
    }

    void postorder(Node* root) {
        if (root == nullptr) return;
        postorder(root->left);
        postorder(root->right);
        cout << root->data << " ";
    }

    void levelOrder(Node* root) {
        if (root == nullptr) return;
        queue<Node*> q;
        q.push(root);
        while (!q.empty()) {
            Node* current = q.front();
            q.pop();
            cout << current->data << " ";
            if (current->left != nullptr) q.push(current->left);
            if (current->right != nullptr) q.push(current->right);
        }
    }

    int main() {
        // Creating the binary tree:
        Node* root = new Node(10);
        root->left = new Node(5);
        root->right = new Node(20);
        root->left->left = new Node(3);
        root->left->right = new Node(7);
        root->right->left = new Node(15);
        root->right->right = new Node(30);

        cout << "Inorder Traversal: "; inorder(root); cout << endl;
        cout << "Preorder Traversal: "; preorder(root); cout << endl;
        cout << "Postorder Traversal: "; postorder(root); cout << endl;
        cout << "Level Order Traversal: "; levelOrder(root); cout << endl;

        return 0;
    }

```

### Python
```python
    class Node:
        def __init__(self, value):
            self.data = value
            self.left = None
            self.right = None

    def inorder(root):
        if root:
            inorder(root.left)
            print(root.data, end=" ")
            inorder(root.right)

    def preorder(root):
        if root:
            print(root.data, end=" ")
            preorder(root.left)
            preorder(root.right)

    def postorder(root):
        if root:
            postorder(root.left)
            postorder(root.right)
            print(root.data, end=" ")

    def level_order(root):
        if not root:
            return
        queue = [root]
        while queue:
            current = queue.pop(0)
            print(current.data, end=" ")
            if current.left:
                queue.append(current.left)
            if current.right:
                queue.append(current.right)

    # Creating the binary tree:
    root = Node(10)
    root.left = Node(5)
    root.right = Node(20)
    root.left.left = Node(3)
    root.left.right = Node(7)
    root.right.left = Node(15)
    root.right.right = Node(30)

    print("Inorder Traversal:", end=" ")
    inorder(root)
    print("\nPreorder Traversal:", end=" ")
    preorder(root)
    print("\nPostorder Traversal:", end=" ")
    postorder(root)
    print("\nLevel Order Traversal:", end=" ")
    level_order(root)

```

### Java
```java
    import java.util.LinkedList;
    import java.util.Queue;

    class Node {
        int data;
        Node left, right;

        public Node(int value) {
            data = value;
            left = right = null;
        }
    }

    public class BinaryTree {
        static void inorder(Node root) {
            if (root != null) {
                inorder(root.left);
                System.out.print(root.data + " ");
                inorder(root.right);
            }
        }

        static void preorder(Node root) {
            if (root != null) {
                System.out.print(root.data + " ");
                preorder(root.left);
                preorder(root.right);
            }
        }

        static void postorder(Node root) {
            if (root != null) {
                postorder(root.left);
                postorder(root.right);
                System.out.print(root.data + " ");
            }
        }

        static void levelOrder(Node root) {
            if (root == null) return;
            Queue<Node> queue = new LinkedList<>();
            queue.add(root);
            while (!queue.isEmpty()) {
                Node current = queue.poll();
                System.out.print(current.data + " ");
                if (current.left != null) queue.add(current.left);
                if (current.right != null) queue.add(current.right);
            }
        }

        public static void main(String[] args) {
            // Creating the binary tree:
            Node root = new Node(10);
            root.left = new Node(5);
            root.right = new Node(20);
            root.left.left = new Node(3);
            root.left.right = new Node(7);
            root.right.left = new Node(15);
            root.right.right = new Node(30);

            System.out.print("Inorder Traversal: ");
            inorder(root);
            System.out.println();
            System.out.print("Preorder Traversal: ");
            preorder(root);
            System.out.println();
            System.out.print("Postorder Traversal: ");
            postorder(root);
            System.out.println();
            System.out.print("Level Order Traversal: ");
            levelOrder(root);
            System.out.println();
        }
    }

```

### JavaScript
```javascript
    class Node {
        constructor(value) {
            this.data = value;
            this.left = null;
            this.right = null;
        }
    }

    function inorder(root) {
        if (root !== null) {
            inorder(root.left);
            process.stdout.write(root.data + " ");
            inorder(root.right);
        }
    }

    function preorder(root) {
        if (root !== null) {
            process.stdout.write(root.data + " ");
            preorder(root.left);
            preorder(root.right);
        }
    }

    function postorder(root) {
        if (root !== null) {
            postorder(root.left);
            postorder(root.right);
            process.stdout.write(root.data + " ");
        }
    }

    function levelOrder(root) {
        if (!root) return;
        let queue = [];
        queue.push(root);
        while (queue.length > 0) {
            let current = queue.shift();
            process.stdout.write(current.data + " ");
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }

    // Creating the binary tree:
    const root = new Node(10);
    root.left = new Node(5);
    root.right = new Node(20);
    root.left.left = new Node(3);
    root.left.right = new Node(7);
    root.right.left = new Node(15);
    root.right.right = new Node(30);

    process.stdout.write("Inorder Traversal: ");
    inorder(root);
    console.log();
    process.stdout.write("Preorder Traversal: ");
    preorder(root);
    console.log();
    process.stdout.write("Postorder Traversal: ");
    postorder(root);
    console.log();
    process.stdout.write("Level Order Traversal: ");
    levelOrder(root);
    console.log();

```

<hr>

## Summary ✨
- A **Binary Tree** is a tree where each node can have up to two children.
- A **Binary Search Tree (BST)** ensures that the left child is smaller and the right child is larger, making searches efficient.
- **Tree traversal** helps us visit nodes in different orders, each useful for various tasks.
    - **Preorder**, **Inorder**, **Postorder**, and **Level Order** are key traversal methods.



<hr>

 

  
## 📚 What's Next?
Now that we've covered the concepts, try applying them to the following practice problems:

 - **Easy:** [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
  - **Medium:** [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
  - **Hard:** [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)


*Try to solve these problems. If you find any difficulty while solving these challanges feel free to go to repo and read the explaination.md file where the details of the solution is explained in a proper way*

**Remember:** 

If these names are new to you, don't worry! We'll discuss everything clearly and in a simplified manner in the upcoming days. This journey is about taking small, steady steps to build a strong foundation. 🚀

## ⭐Star the Repo⭐

Your support will encourage us to provide more details about all the topics.

## 🍴Fork the repo

Feel free to fork the repo to contribute in this course and get all the files in your local system.

*See You in the Next Topic*