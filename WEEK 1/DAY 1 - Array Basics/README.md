# 🚀 Day 1: Introduction to Arrays - The Basics 🚀
### 🌟 What is an Array? 🌟

Imagine you have a shelf with several compartments, and each compartment can hold one item. If you want to store multiple items in an organized way, you’d place one item in each compartment. This shelf is like an array in programming.

**An array is a collection of items (known as elements) stored in a specific order**. Think of it as a row of boxes where you can store different pieces of data, like numbers, names, or even more complex information.

**For example:**


    [ 🧃 , 🍎 , 🍕 , 🍪 , 🍇 ]

Here, you have an array with different food items. Each item in the array is stored at a specific position, known as its index.

### 🧠 Key Concepts to Grasp: 🧠

#### Array Basics:

**Structure:** An array is like a list where each element is stored in a specific order. The first element is at index 0, the second at 1, and so on. The index is like the address of the item in the array.

**Example:** Imagine you have an array of numbers `[2, 4, 6, 8]`. 

Here:

- `2` is at index `0`
- `4` is at index `1`
- `6` is at index `2`
- `8` is at index `3`

**Visualize it like this:**


    [2, 4, 6, 8]
     0  1  2  3  <- These are the indices

**Basic Operations on Arrays:** Arrays are powerful because they allow you to perform several key operations easily:

**Insertion (Adding an item):**

You can add items to your array, either at the *beginning*, in the *middle*, or at the *end*.

**Example:** Adding `10` to the end of `[2, 4, 6, 8]` gives you `[2, 4, 6, 8, 10]`.

**Visual Example:**

    Before: [2, 4, 6, 8]
    Add: 10
    After:  [2, 4, 6, 8, 10]

**Example of how to perform Insertion in Array**

- [C++](#c++)
- [Python](#python)
- [Java](#java)
- [JavaScript](#javascript)

### C++
```cpp
    #include <iostream>
    #include <vector>
    using namespace std;

    int main(){
        // Creating an Array
        vector<int> arr = {2,4,6,8};

        // inserting element at the end
        arr.push_back[10]; // [2, 4, 6, 8, 10]

        // Insert at the beginning
        arr.insert(arr.begin(), 0); // [0, 2, 4, 6, 8, 10]

        // Insert at any position (e.g., at index 2)
        arr.insert(arr.begin() + 2, 20); // [0, 2, 20, 4, 6, 8, 10]

        // Display the array
        for(auto num : arr) {
            cout << num << " ";
        }

        return 0;
    }
```

### Python
```python
    arr = [2, 4, 6, 8]

    # Insertion (at the end)
    arr.append(10)  # [2, 4, 6, 8, 10]

    # Insert at the beginning
    arr.insert(0, 0)  # [0, 2, 4, 6, 8, 10]

    # Insert at any position (e.g., at index 2)
    arr.insert(2, 20)  # [0, 2, 20, 4, 6, 8, 10]

    # Display the array
    print(arr)
```

### Java
```java
    import java.util.ArrayList;

    public class Main {
        public static void main(String[] args) {
            ArrayList<Integer> arr = new ArrayList<>();
            arr.add(1);
            arr.add(2);
            arr.add(3);
            arr.add(4);
            arr.add(5);

            // Insert at the beginning
            arr.add(0, 0);  // [0, 1, 2, 3, 4, 5]

            // Insert at the end
            arr.add(6);  // [0, 1, 2, 3, 4, 5, 6]

            // Insert at any position (e.g., at index 2)
            arr.add(2, 10);  // [0, 1, 10, 2, 3, 4, 5, 6]

            // Print the array
            for (int i : arr) {
                System.out.print(i + " ");
            }
        }
    }

```

### JavaScript
```javascript
    let arr = [1,2,3,4]
    
    // Insert at the Beginning
    arr.unshift(0)  // [0, 1, 2, 3, 4]

    // Insert at the end
    arr.push(10)  // [0, 1, 2, 3, 4, 10]

    // Insert at any position (e.g., at index 2)
    arr.splice(2, 0, 20);  // [0, 1, 20, 2, 3, 4, 10]

    // Print the array
    console.log(arr)
```



**Deletion (Removing an item):**

You can remove an item from your array. 

For example, if you remove `4` from `[2, 4, 6, 8]`, you get `[2, 6, 8]`.

**Visual Example:**

    Before: [2, 4, 6, 8]
    Remove: 4 
    After:  [2, 6, 8]

**Example of how to perform Deletion from Array**

- [C++](#c++)
- [Python](#python)
- [Java](#java)
- [JavaScript](#javascript)

### C++
```cpp
    #include <iostream>
    #include <vector>
    using namespace std;

    int main(){
        // Creating an Array
        std::vector<int> arr = {1, 2, 3, 4, 5};

        // Delete from the beginning
        arr.erase(arr.begin());  // [2, 3, 4, 5]

        // Delete from the end
        arr.pop_back();   // [2, 3, 4]

        // Delete from any position (e.g., at index 1)
        arr.erase(arr.begin() + 1);  // [2, 4]

        // Print the array
        for(int i : arr) {
            std::cout << i << " ";
        }

        return 0;
    }
```

### Python
```python
    arr = [1, 2, 3, 4, 5]

    # Delete from the beginning
    del arr[0]  # [2, 3, 4, 5]

    # Delete from the end
    arr.pop()   # [2, 3, 4]

    # Delete from any position (e.g., at index 1)
    del arr[1]  # [2, 4]

    # Print the array
    print(arr)
```

### Java
```java
    import java.util.ArrayList;

    public class Main {
        public static void main(String[] args) {
            ArrayList<Integer> arr = new ArrayList<>();
            arr.add(1);
            arr.add(2);
            arr.add(3);
            arr.add(4);
            arr.add(5);

            // Delete from the beginning
            arr.remove(0); // [2, 3, 4, 5]

            // Delete from the end
            arr.remove(arr.size() - 1); // [2, 3, 4]

            // Delete from any position (e.g., at index 1)
            arr.remove(1);  // [2, 4]

            // Print the array
            for (int i : arr) {
                System.out.print(i + " ");
            }
        }
    }

```

### JavaScript
```javascript
    let arr = [1,2,3,4,5]
    
    // Delete from the Beginning
    arr.shift()  // [2, 3, 4, 5]

    // Delete from the end
    arr.pop()  // [2, 3, 4]

    // Delete from any position (e.g., at index 1)
    arr.splice(1,1);  // [2, 4]

    // Print the array
    console.log(arr)
```


**Searching (Finding an item):**

Searching helps you find whether a specific item is in the array and at what index. 

For example, if you want to find `6` in `[2, 4, 6, 8]`, you search through the array and find it at index **2**.

**Visual Example:**


    Array: [2, 4, 6, 8]
    Search: Where is 6?
    Answer: At index 2!

**Example of how to Search Element in Array**

- [C++](#c++)
- [Python](#python)
- [Java](#java)
- [JavaScript](#javascript)

### C++
```cpp
    #include<iostream>
    using namespace std;

    int main() {
        int arr[] = {1, 2, 3, 4, 5};
        int size = sizeof(arr)/sizeof(arr[0]);
        int target = 3;
        bool found = false;

        for (int i = 0; i < size; i++) {
            if (arr[i] == target) {
                found = true;
                break;
            }
        }

        if (found) {
            cout << "Element found." << endl;
        } else {
            cout << "Element not found." << endl;
        }

        return 0;
    }
```
### Python
```python
    arr = [1, 2, 3, 4, 5]
    target = 3

    if target in arr:
        print("Element found.")
    else:
        print("Element not found.")
```
### Java
```java
    public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int target = 3;
        boolean found = false;

        for (int num : arr) {
            if (num == target) {
                found = true;
                break;
            }
        }

        if (found) {
            System.out.println("Element found.");
        } else {
            System.out.println("Element not found.");
        }
    }
}
```
### JavaScript
```javascript
    const arr = [1, 2, 3, 4, 5];
    const target = 3;

    if (arr.includes(target)) {
        console.log("Element found.");
    } else {
        console.log("Element not found.");
    }
```
**Why Are Arrays Important?**

Arrays are everywhere! They are one of the simplest yet most powerful tools in programming. Whether you're sorting data, managing lists, or performing complex calculations, arrays will often be your go-to structure.
Mastering arrays is like learning the ABCs of programming—it's the foundation upon which many other concepts are built.

**📚 Fun Fact:**
Did you know that in some programming languages, arrays can store items of different types, like numbers and words mixed together? However, in most languages, all items in an array are usually of the same type.

**🎯 Conclusion:**
Today, you're diving into the world of arrays! By the end of the day, you'll know how to create an array, add or remove items, and search for specific values. These skills will be your stepping stones as you progress further into Data Structures and Algorithms (DSA).

**Task For Today**
- **Easy -** [Two Sum](https://leetcode.com/problems/two-sum/description/)
- **Medium -** [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)
- **Hard -** [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description/)

Try to solve these problems. If you find any difficulty while solving these challanges feel free to go to repo and read the `explaination.md` file where the details of the solution is explained in a proper way

**Remember:** 

If these names are new to you, don't worry! We'll discuss everything clearly and in a simplified manner in the upcoming days. This journey is about taking small, steady steps to build a strong foundation. 🚀

**⭐Star the Repo⭐**

Your support will encourage us to provide more details about all the topics.

**🍴Fork the repo**

Feel free to fork the repo to contribute in this course and get all the files in your local system.

*See You in the Next Topic*
