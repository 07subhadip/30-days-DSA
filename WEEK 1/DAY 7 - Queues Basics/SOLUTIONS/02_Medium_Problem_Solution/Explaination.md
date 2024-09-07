# Evaluate Reverse Polish Notation

## Problem Explanation

In this problem, we are given a list of strings representing a mathematical expression in **Reverse Polish Notation (RPN)**, which is a postfix notation where the operator follows all of its operands.

We need to evaluate this expression and return the result as an integer. The valid operators are `+`, `-`, `*`, and `/`. 

### Approach

1. **Stack for Evaluation**:
   We use a stack to evaluate the expression. In Reverse Polish Notation, operands are pushed onto the stack, and when an operator is encountered, two operands are popped off the stack, the operation is performed, and the result is pushed back onto the stack.

2. **Steps**:
   - Traverse the input tokens one by one.
   - If the token is a number, push it onto the stack.
   - If the token is an operator (`+`, `-`, `*`, `/`), pop the top two elements from the stack, apply the operator, and push the result back onto the stack.

3. **Division Handling**:
   - Division should be truncated toward zero. This can be achieved in Python by using `int(a / b)`, which truncates the result of division. In JavaScript, we use `Math.trunc(a / b)` to ensure proper truncation.

4. **Final Result**:
   After processing all tokens, the result of the expression will be the only element left in the stack, which we return.
