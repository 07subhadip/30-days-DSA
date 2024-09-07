class Solution {
    public String simplifyPath(String path) {
        // Split the path by slashes and initialize a stack
        String[] components = path.split("/");
        Stack<String> stack = new Stack<>();

        // Process each component in the path
        for (String component : components) {
            if (component.equals("") || component.equals(".")) {
                // Skip empty or current directory '.'
                continue;
            } else if (component.equals("..")) {
                // Go up to parent directory if stack is not empty
                if (!stack.isEmpty()) {
                    stack.pop();
                }
            } else {
                // Valid directory or file name, push to stack
                stack.push(component);
            }
        }

        // Build the simplified path
        StringBuilder simplifiedPath = new StringBuilder();
        for (String dir : stack) {
            simplifiedPath.append("/").append(dir);
        }

        // Return root "/" if stack is empty
        return simplifiedPath.length() > 0 ? simplifiedPath.toString() : "/";
    }
}
