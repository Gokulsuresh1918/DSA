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
    min(root) {
        if (!root.left) {
            return root.value
        } else {
         return   this.min(root.left)
        }
    }
    max(root) {
        if (!root.right) {
            return root.value
        } else {
         return   this.min(root.right)
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
// call.levelOrder()
console.log(call.min(call.root));
console.log(call.max(call.root));