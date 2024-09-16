# 🚀Day 16: Sorting - Advanced🚀

Welcome to **Day 16** of the **30 Days DSA Crash Course!** 🚀 

Today, we are leveling up our sorting game by exploring two powerful and widely-used algorithms: **Quick Sort** and **Merge Sort**. These algorithms offer better performance for larger datasets and are essential for efficient data manipulation. Let's dive in! 💡

<hr>

## ⚡️ Quick Sort
### Concept: 
**Quick Sort** is a highly efficient and widely-used comparison-based sorting algorithm. It follows the **divide-and-conquer strategy** to sort the array. The algorithm selects a "pivot" element from the array and partitions the other elements into two groups: those less than the pivot and those greater than it. This process is recursively applied to the subarrays.

### How It Works:

1. **Choose a pivot element** (can be the first, last, or a random element).
2. **Partition the array:**
 - Move all elements smaller than the pivot to the left.
 - Move all elements larger than the pivot to the right.
3. **Recursively apply** the same steps to the subarrays (left and right of the pivot).
4. **Base case:** When a subarray has one or zero elements, it is already sorted.

**Visual Example:** 

Imagine sorting a deck of cards by choosing one card as the pivot. All cards smaller than the pivot go to the left and larger ones go to the right. You then sort each side separately.

### Pros:

- Efficient with an average time complexity of $O(n log n)$. 🚀
- Works well in-place (no need for extra storage). 🧠

### Cons:

- Worst-case time complexity is $O(n^2)$, though it can be avoided with good pivot selection. ⚠️

## Here how you can implement Quick sort :

- [C++](cpp)
- [Python](#python)
- [Java](#java)
- [JavaScript](#javascript)

### C++
```cpp
    #include <iostream>
    using namespace std;

    void swap(int* a, int* b) {
        int temp = *a;
        *a = *b;
        *b = temp;
    }

    int partition(int arr[], int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(&arr[i], &arr[j]);
            }
        }
        swap(&arr[i + 1], &arr[high]);
        return (i + 1);
    }

    void quickSort(int arr[], int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);

            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    void printArray(int arr[], int size) {
        for (int i = 0; i < size; i++)
            cout << arr[i] << " ";
        cout << endl;
    }

    int main() {
        int arr[] = {10, 7, 8, 9, 1, 5};
        int n = sizeof(arr) / sizeof(arr[0]);
        quickSort(arr, 0, n - 1);
        cout << "Sorted array: \n";
        printArray(arr, n);
        return 0;
    }

```

### Python
```python
    def partition(arr, low, high):
        pivot = arr[high]
        i = low - 1
        for j in range(low, high):
            if arr[j] < pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1

    def quick_sort(arr, low, high):
        if low < high:
            pi = partition(arr, low, high)
            quick_sort(arr, low, pi - 1)
            quick_sort(arr, pi + 1, high)

    arr = [10, 7, 8, 9, 1, 5]
    n = len(arr)
    quick_sort(arr, 0, n - 1)
    print("Sorted array:", arr)

```

### Java
```java
    public class QuickSort {
        int partition(int arr[], int low, int high) {
            int pivot = arr[high];
            int i = (low - 1);
            for (int j = low; j < high; j++) {
                if (arr[j] < pivot) {
                    i++;
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            int temp = arr[i + 1];
            arr[i + 1] = arr[high];
            arr[high] = temp;

            return i + 1;
        }

        void quickSort(int arr[], int low, int high) {
            if (low < high) {
                int pi = partition(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
        }

        void printArray(int arr[]) {
            for (int i : arr) {
                System.out.print(i + " ");
            }
            System.out.println();
        }

        public static void main(String[] args) {
            QuickSort ob = new QuickSort();
            int arr[] = {10, 7, 8, 9, 1, 5};
            ob.quickSort(arr, 0, arr.length - 1);
            System.out.println("Sorted array:");
            ob.printArray(arr);
        }
    }

```

### JavaScript
```javascript
    function partition(arr, low, high) {
        let pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }

    function quickSort(arr, low, high) {
        if (low < high) {
            let pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    let arr = [10, 7, 8, 9, 1, 5];
    quickSort(arr, 0, arr.length - 1);
    console.log("Sorted array:", arr);

```

<hr>

## 🔥 Merge Sort
### Concept: 
**Merge Sort** is another **divide-and-conquer sorting** algorithm that works by dividing the array into two halves, recursively sorting each half, and finally merging the two sorted halves into a single sorted array.

### How It Works:

1. **Divide** the array into two halves.
2. **Recursively sort** both halves.
3. **Merge** the two sorted halves into a single sorted array.
4. **Base case:** When the array size becomes 1, it's already sorted.

**Visual Example:** 

Think of a book-sorting competition where you split the books into two piles, sort each pile separately, and then combine them back together, making sure the books are ordered.

### Steps:

1. Split the array.
2. Sort each half.
3. Merge the halves in sorted order.

### Pros:

- Always has a time complexity of $O(n log n)$. ⚡️
- Stable sort (preserves the relative order of equal elements). 📚

### Cons:

- Requires additional space for merging, leading to $O(n)$ extra memory usage. 💾


## Here how you can implement Merge sort :

- [C++](cpp)
- [Python](#python)
- [Java](#java)
- [JavaScript](#javascript)

### C++
```cpp
    #include <iostream>
    using namespace std;

    void merge(int arr[], int l, int m, int r) {
        int n1 = m - l + 1;
        int n2 = r - m;

        int L[n1], R[n2];

        for (int i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        int i = 0, j = 0, k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    void mergeSort(int arr[], int l, int r) {
        if (l < r) {
            int m = l + (r - l) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }

    void printArray(int arr[], int size) {
        for (int i = 0; i < size; i++)
            cout << arr[i] << " ";
        cout << endl;
    }

    int main() {
        int arr[] = {12, 11, 13, 5, 6, 7};
        int n = sizeof(arr) / sizeof(arr[0]);

        mergeSort(arr, 0, n - 1);

        cout << "Sorted array: \n";
        printArray(arr, n);
        return 0;
    }

```

### Python
```python
    def merge_sort(arr):
        if len(arr) > 1:
            mid = len(arr) // 2
            L = arr[:mid]
            R = arr[mid:]

            merge_sort(L)
            merge_sort(R)

            i = j = k = 0
            while i < len(L) and j < len(R):
                if L[i] < R[j]:
                    arr[k] = L[i]
                    i += 1
                else:
                    arr[k] = R[j]
                    j += 1
                k += 1

            while i < len(L):
                arr[k] = L[i]
                i += 1
                k += 1

            while j < len(R):
                arr[k] = R[j]
                j += 1
                k += 1

    arr = [12, 11, 13, 5, 6, 7]
    merge_sort(arr)
    print("Sorted array:", arr)

```

### Java
```java
    public class MergeSort {
        void merge(int arr[], int l, int m, int r) {
            int n1 = m - l + 1;
            int n2 = r - m;

            int L[] = new int[n1];
            int R[] = new int[n2];

            for (int i = 0; i < n1; ++i)
                L[i] = arr[l + i];
            for (int j = 0; j < n2; ++j)
                R[j] = arr[m + 1 + j];

            int i = 0, j = 0;
            int k = l;
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    i++;
                } else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            }

            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
            }

            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
            }
        }

        void mergeSort(int arr[], int l, int r) {
            if (l < r) {
                int m = l + (r - l) / 2;

                mergeSort(arr, l, m);
                mergeSort(arr, m + 1, r);

                merge(arr, l, m, r);
            }
        }

        void printArray(int arr[]) {
            for (int i : arr) {
                System.out.print(i + " ");
            }
            System.out.println();
        }

        public static void main(String[] args) {
            MergeSort ob = new MergeSort();
            int arr[] = {12, 11, 13, 5, 6, 7};
            ob.mergeSort(arr, 0, arr.length - 1);
            System.out.println("Sorted array:");
            ob.printArray(arr);
        }
    }

```

### JavaScript
```javascript
    function merge(left, right) {
        let result = [], i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        return result.concat(left.slice(i)).concat(right.slice(j));
    }

    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        return merge(mergeSort(left), mergeSort(right));
    }

    let arr = [12, 11, 13, 5, 6, 7];
    console.log("Sorted array:", mergeSort(arr));

```


## 📚 What's Next?
Now that we've covered the concepts, try applying them to the following practice problems:

  - **Easy:** [Search Insert Position](https://leetcode.com/problems/search-insert-position/)
  - **Medium:** [Find Peak Element](https://leetcode.com/problems/find-peak-element/)
  - **Hard:** [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)


*Try to solve these problems. If you find any difficulty while solving these challanges feel free to go to repo and read the explaination.md file where the details of the solution is explained in a proper way*

**Remember:** 

If these names are new to you, don't worry! We'll discuss everything clearly and in a simplified manner in the upcoming days. This journey is about taking small, steady steps to build a strong foundation. 🚀

## ⭐Star the Repo⭐

Your support will encourage us to provide more details about all the topics.

## 🍴Fork the Repo

Feel free to fork the repo to contribute in this course and get all the files in your local system.

*See You in the Next Topic*