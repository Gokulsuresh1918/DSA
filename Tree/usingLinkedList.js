class Node {
    constructor(value) {
      this.value = value;
      this.child = null;
      this.next = null;
    }
  }
  
  let root = new Node("Root");
  let child = new Node("Child");
  let child2 = new Node("Child");
  let grandchild = new Node("Grand Child");
  
  root.child = child;
  child.child = grandchild;
  root.next = child2;
  
  function traverse(node) {
    let curr = node;
    while (curr !== null) {
      console.log(curr.value);
      if (curr.child !== null) {
        traverse(curr.child);
      }
      curr = curr.next;
    }
  }
  
  traverse(root);