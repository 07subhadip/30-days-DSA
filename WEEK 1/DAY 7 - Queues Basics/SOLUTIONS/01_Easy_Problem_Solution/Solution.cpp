class MyQueue {
private:
    stack<int> stack1, stack2;

    // Transfer elements from stack1 to stack2 to reverse the order
    void transferStacks() {
        while (!stack1.empty()) {
            stack2.push(stack1.top());
            stack1.pop();
        }
    }
    
public:
    MyQueue() {
    }
    
    void push(int x) {
        stack1.push(x);
    }
    
    int pop() {
        if (stack2.empty()) {
            transferStacks();
        }
        int topElement = stack2.top();
        stack2.pop();
        return topElement;
    }
    
    int peek() {
        if (stack2.empty()) {
            transferStacks();
        }
        return stack2.top();
    }
    
    bool empty() {
        return stack1.empty() && stack2.empty();
    }
};
