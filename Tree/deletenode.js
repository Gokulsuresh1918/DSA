class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class TreeImplementation {
    constructor() {
        this.root = null;
    }
    //! DELETE A NODE=
    // Check if the tree is empty
    isEmpty() {
        return this.root === null;
    }
    // Insert a value into the binary search tree
    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            // If the tree is empty, set the new node as the root
            this.root = newNode;
        } else {
            // If the tree is not empty, insert the node recursively
            this.insertNode(this.root, newNode);
        }
    }
    // Helper function to insert a node into the binary search tree recursively
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            // If the value is less than the root's value, go to the left subtree
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            // If the value is greater than or equal to the root's value, go to the right subtree
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    // Find the minimum value in a subtree
    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }
    // Find the maximum value in a subtree
    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }
    // Perform level order traversal on the binary search tree
    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let cur = queue.shift();
            console.log(cur.value);
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
        }
    }
    // Delete a node with a given value from the binary search tree
    delete(value) {
        this.root = this.deleteNode(this.root, value);
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
const call = new TreeImplementation();
call.insert(10);
call.insert(5);
call.insert(15);
call.insert(3);
call.levelOrder();
call.delete(5);
console.log("---------------------------");
call.levelOrder();
