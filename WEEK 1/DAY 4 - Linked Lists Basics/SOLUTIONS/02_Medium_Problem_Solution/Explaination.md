## Solution : Recursion

First, we judge whether the linked lists $l_1$ and $l_2$ are empty. If one of them is empty, we return the other linked list. Otherwise, we compare the head nodes of $l_1$ and $l_2$:

-   If the value of the head node of $l_1$ is less than or equal to the value of the head node of $l_2$, we recursively call the function $mergeTwoLists(l_1.next, l_2)$, and connect the head node of $l_1$ with the returned linked list head node, and return the head node of $l_1$.
-   Otherwise, we recursively call the function $mergeTwoLists(l_1, l_2.next)$, and connect the head node of $l_2$ with the returned linked list head node, and return the head node of $l_2$.

The time complexity is $O(m + n)$, and the space complexity is $O(m + n)$. Here, $m$ and $n$ are the lengths of the two linked lists respectively.

<!-- tabs:start -->