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
    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(this.left, value)
            }else{
                return this.search(this.right, value)

            }
        }
    }
}
const call = new treeeimplementation()
console.log(call.isempty());
call.insert(10)
call.insert(5)
call.insert(15)
console.log(call.search(call.root,10));
console.log(call.search(call.root,40));