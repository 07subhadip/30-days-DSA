class Solution {
public:
    string simplifyPath(string path) {
        vector<string> stack;
        stringstream ss(path);
        string component;
        
        // Process each component in the path
        while (getline(ss, component, '/')) {
            if (component == "" || component == ".") {
                // Skip empty or current directory '.'
                continue;
            } else if (component == "..") {
                // Go up to parent directory if stack is not empty
                if (!stack.empty()) {
                    stack.pop_back();
                }
            } else {
                // Valid directory or file name, push to stack
                stack.push_back(component);
            }
        }

        // Build the simplified path
        string result = "/";
        for (int i = 0; i < stack.size(); i++) {
            if (i > 0) result += "/";
            result += stack[i];
        }
        return result;
    }
};
