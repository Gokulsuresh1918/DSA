class Node {
  constructor(value) {
    this.value = value;
    this.child = null;
    this.next = null;
  }
}

// Creating nodes
let root = new Node("Root");
let child = new Node("Child");
let child2 = new Node("Child");
let grandchild = new Node("Grand Child");

// Building the tree structure
root.child = child;
child.child = grandchild;
root.next = child2;

// Function to traverse the tree and print node values
function traverse(node) {
  let curr = node;
  while (curr !== null) {
    console.log(curr.value);
    if (curr.child !== null) {
      // Recursively traverse child nodes
      traverse(curr.child);
    }
    curr = curr.next;
  }
}

// Starting the traversal from the root
traverse(root);
