/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    let components = path.split('/');

    // Process each component in the path
    for (let component of components) {
        if (component === '' || component === '.') {
            // Skip empty or current directory '.'
            continue;
        } else if (component === '..') {
            // Go up to parent directory if stack is not empty
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            // Valid directory or file name, push to stack
            stack.push(component);
        }
    }

    // Join stack components with '/' and add the leading '/'
    return '/' + stack.join('/');
};
