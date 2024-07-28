// Define a Node class to represent each node in the binary tree
class Node {
    constructor(value) {
        this.value = value; // The value stored in the node
        this.left = null; // Pointer to the left child node
        this.right = null; // Pointer to the right child node
    }
}

// Tree implementation class
class TreeImplementation {
    constructor() {
        this.root = null; // Initialize the root node as null initially
    }

    // Check if the tree is empty
    isEmpty() {
        return this.root === null; // Return true if root is null, indicating the tree is empty
    }

    // Insert a value into the binary tree
    insert(value) {
        const newNode = new Node(value); // Create a new node with the given value
        if (this.isEmpty()) {
            this.root = newNode; // If tree is empty, set the new node as root
        } else {
            this.insertNode(this.root, newNode); // Otherwise, insert node recursively
        }
    }

    // Helper function to recursively insert a node into the tree
    insertNode(root, newNode) {
        if (newNode.value < root.value) { // If the value of the new node is less than the root's value
            if (root.left === null) {
                root.left = newNode; // If left child is null, insert node as left child
            } else {
                this.insertNode(root.left, newNode); // Otherwise, continue recursively on left subtree
            }
        } else { // If the value of the new node is greater than or equal to the root's value
            if (root.right === null) {
                root.right = newNode; // If right child is null, insert node as right child
            } else {
                this.insertNode(root.right, newNode); // Otherwise, continue recursively on right subtree
            }
        }
    }

    // Search for a value in the tree
    search(root, value) {
        if (!root) { // If root is null
            return false; // Return false, value not found
        } else {
            if (root.value === value) { // If root's value matches the search value
                return true; // Return true, value found
            } else if (value < root.value) { // If search value is less than root's value
                return this.search(root.left, value); // Recursively search in left subtree
            } else { // If search value is greater than root's value
                return this.search(root.right, value); // Recursively search in right subtree
            }
        }
    }

    // Perform Pre-order traversal of the tree
    preOrder(root) {
        if (root) {
            console.log("PreOrder:", root.value); // Visit root node
            this.preOrder(root.left); // Traverse left subtree
            this.preOrder(root.right); // Traverse right subtree
        }
    }

    // Perform In-order traversal of the tree
    inOrder(root) {
        if (root) {
            this.inOrder(root.left); // Traverse left subtree
            console.log("InOrder:", root.value); // Visit root node
            this.inOrder(root.right); // Traverse right subtree
        }
    }

    // Perform Post-order traversal of the tree
    postOrder(root) {
        if (root) {
            this.postOrder(root.left); // Traverse left subtree
            this.postOrder(root.right); // Traverse right subtree
            console.log("PostOrder:", root.value); // Visit root node
        }
    }

    // Find the minimum value in a subtree
    min(root) {
        if (!root.left) { // If there is no left child
            return root.value; // Return the root's value
        } else {
            return this.min(root.left); // Otherwise, continue to the left subtree
        }
    }

    // Find the maximum value in a subtree
    max(root) {
        if (!root.right) { // If there is no right child
            return root.value; // Return the root's value
        } else {
            return this.max(root.right); // Otherwise, continue to the right subtree
        }
    }

    // Perform level order traversal on the binary search tree
    levelOrder() {
        const queue = [];
        queue.push(this.root); // Start with the root
        while (queue.length) {
            let cur = queue.shift(); // Remove the first node in the queue
            console.log(cur.value); // Visit the current node
            if (cur.left) {
                queue.push(cur.left); // Add left child to the queue
            }
            if (cur.right) {
                queue.push(cur.right); // Add right child to the queue
            }
        }
    }

    // Delete a node with a given value from the binary search tree
    delete(value) {
        this.root = this.deleteNode(this.root, value); // Start the deletion process from the root
    }

    // Helper function to recursively delete a node with a given value from the binary search tree
    deleteNode(root, value) {
        if (root === null) {
            return root; // Base case: If the root is null, return null
        }
        if (value < root.value) {
            // If the value is less than the root's value, go to the left subtree
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            // If the value is greater than the root's value, go to the right subtree
            root.right = this.deleteNode(root.right, value);
        } else {
            // If the value is equal to the root's value, delete the node
            if (!root.left && !root.right) {
                return null; // Case 1: Node with no child
            }
            // Case 2: Node with one child or no child
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            // Case 3: Node with two children
            // Find the inorder successor (smallest node in the right subtree)
            root.value = this.min(root.right);
            // Delete the inorder successor
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
}

// Usage
const call = new TreeImplementation(); // Create a new instance of the tree implementation
console.log("Is the tree empty?", call.isEmpty()); // Check if the tree is empty (should be true)
call.insert(10); // Insert values into the tree
call.insert(5);
call.insert(15);
call.insert(3);
call.insert(7);
console.log("Search for 10:", call.search(call.root, 10)); // Search for a value in the tree (should return true)
console.log("Search for 40:", call.search(call.root, 40)); // Search for a value not in the tree (should return false)
// call.preOrder(call.root); // Perform pre-order traversal of the tree (uncomment to use)
// call.inOrder(call.root); // Perform in-order traversal of the tree (uncomment to use)
call.postOrder(call.root); // Perform post-order traversal of the tree
