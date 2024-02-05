class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
//! TREE IMPLEMENTATION
class treeeimplementation {
    constructor() {
        this.root = null
    }
    isempty() {
        return this.root === null
    }
    insert(value) {
        const newnode = new Node(value)
        if (this.isempty()) {
            this.root = newnode
        } else {
            this.insertnode(this.root, newnode)
        }
    }
    insertnode(root, newnode) {
        if (newnode.value < root.value) {
            if (root.left == null) {
                root.left = newnode
            } else {
                this.insertnode(root.left, newnode)
            }
        } else {
            if (root.right == null) {
                root.right = newnode
            } else {
                this.insertnode(root.right, newnode)
            }
        }
    }
    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(this.left, value)
            } else {
                return this.search(this.right, value)

            }
        }
    }
    PreOrder(root) {
        if (root) {
            console.log("preorder",root.value);
            this.PreOrder(root.left)
            this.PreOrder(root.right)
        }
    }
    inOrder(root){
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
}
const call = new treeeimplementation()
console.log(call.isempty());
call.insert(10)
call.insert(5)
call.insert(15)
call.insert(3)
call.insert(7)
console.log(call.search(call.root, 10));
console.log(call.search(call.root, 40));
// call.PreOrder(call.root)
// call.inOrder(call.root)
call.postOrder(call.root)