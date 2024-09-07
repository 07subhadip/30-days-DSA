var evalRPN = function(tokens) {
    let stack = [];
    for (let token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            let b = stack.pop();
            let a = stack.pop();
            if (token === "+") stack.push(a + b);
            else if (token === "-") stack.push(a - b);
            else if (token === "*") stack.push(a * b);
            else stack.push(Math.trunc(a / b));  // Ensure truncation towards zero
        } else {
            stack.push(parseInt(token));
        }
    }
    return stack[0];
};
