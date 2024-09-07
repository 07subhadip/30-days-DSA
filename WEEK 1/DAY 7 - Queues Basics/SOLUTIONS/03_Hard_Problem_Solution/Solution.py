class Solution(object):
    def simplifyPath(self, path):
        """
        :type path: str
        :rtype: str
        """
        stack = []
        parts = path.split("/")

        for part in parts:
            if part == "..":
                if stack:
                    stack.pop()  # Go back to the parent directory
            elif part == "." or part == "":
                continue  # Skip the current directory and empty parts
            else:
                stack.append(part)  # Add the valid directory name

        return "/" + "/".join(stack)
