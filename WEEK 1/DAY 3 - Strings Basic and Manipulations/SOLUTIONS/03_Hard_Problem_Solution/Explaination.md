# Solution : Memoization Search

We design a function $dfs(i, j)$, which indicates whether the $i$-th character of $s$ matches the $j$-th character of $p$. The answer is $dfs(0, 0)$.

The calculation process of the function $dfs(i, j)$ is as follows:

-   If $j$ has reached the end of $p$, then if $i$ has also reached the end of $s$, the match is successful, otherwise, the match fails.
-   If the next character of $j$ is `'*'`, we can choose to match $0$ $s[i]$ characters, which is $dfs(i, j + 2)$. If $i \lt m$ and $s[i]$ matches $p[j]$, we can choose to match $1$ $s[i]$ character, which is $dfs(i + 1, j)$.
-   If the next character of $j$ is not `'*'`, then if $i \lt m$ and $s[i]$ matches $p[j]$, it is $dfs(i + 1, j + 1)$. Otherwise, the match fails.

During the process, we can use memoization search to avoid repeated calculations.

The time complexity is $O(m \times n)$, and the space complexity is $O(m \times n)$. Here, $m$ and $n$ are the lengths of $s$ and $p$ respectively.

<!-- tabs:start -->