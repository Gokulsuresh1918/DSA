class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// Tree implementation class
class treeeimplementation {
    constructor() {
        this.root = null // Initialize the root node as null initially
    }

    // Check if the tree is empty
    isempty() {
        return this.root === null
    }

    // Insert a value into the binary tree
    insert(value) {
        const newnode = new Node(value) // Create a new node
        if (this.isempty()) {
            this.root = newnode // If tree is empty, set new node as root
        } else {
            this.insertnode(this.root, newnode) // Otherwise, insert node recursively
        }
    }

    // Helper function to recursively insert a node into the tree
    insertnode(root, newnode) {
        if (newnode.value < root.value) {
            if (root.left == null) {
                root.left = newnode // If left child is empty, insert node as left child
            } else {
                this.insertnode(root.left, newnode) // Otherwise, continue recursively on left subtree
            }
        } else {
            if (root.right == null) {
                root.right = newnode // If right child is empty, insert node as right child
            } else {
                this.insertnode(root.right, newnode) // Otherwise, continue recursively on right subtree
            }
        }
    }

    // Search for a value in the tree
    search(root, value) {
        if (!root) {
            return false // If root is null, value not found
        } else {
            if (root.value === value) {
                return true // If root value matches search value, return true
            } else if (value < root.value) {
                return this.search(this.left, value) // If search value is less than root value, search in left subtree
            } else {
                return this.search(this.right, value) // If search value is greater than root value, search in right subtree
            }
        }
    }

    // Perform Pre-order traversal of the tree
    PreOrder(root) {
        if (root) {
            console.log("preorder",root.value); // Visit root node
            this.PreOrder(root.left) // Traverse left subtree
            this.PreOrder(root.right) // Traverse right subtree
        }
    }

    // Perform In-order traversal of the tree
    inOrder(root){
        if (root) {
            this.inOrder(root.left) // Traverse left subtree
            console.log(root.value); // Visit root node
            this.inOrder(root.right) // Traverse right subtree
        }
    }

    // Perform Post-order traversal of the tree
    postOrder(root){
        if (root) {
            this.postOrder(root.left) // Traverse left subtree
            this.postOrder(root.right) // Traverse right subtree
            console.log(root.value); // Visit root node
        }
    }
}

// Usage
const call = new treeeimplementation() // Create a new instance of the tree implementation
console.log(call.isempty()); // Check if the tree is empty (should be true)
call.insert(10) // Insert values into the tree
call.insert(5)
call.insert(15)
call.insert(3)
call.insert(7)
console.log(call.search(call.root, 10)); // Search for a value in the tree (should return true)
console.log(call.search(call.root, 40)); // Search for a value not in the tree (should return false)
// call.PreOrder(call.root) // Perform pre-order traversal of the tree
// call.inOrder(call.root) // Perform in-order traversal of the tree
call.postOrder(call.root) // Perform post-order traversal of the tree
