class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
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
//! DFS implementaion (insert, insertnode, isempty)
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
            console.log("inorder",root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log("postorder",root.value);
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

call.PreOrder(call.root)
call.inOrder(call.root)
call.postOrder(call.root)