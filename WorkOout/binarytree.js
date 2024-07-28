class Tree {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class TreeImplementation {
    constructor() {
        this.root = null
    }
    isempty() {
        return this.root == null
    }
    insert(value) {
        newnode = new Tree(value)
        if (this.isempty()) {
            this.root == newnode
        } else {
            this.insertnode(this.root, newnode)
        }
    }
    insertnode(root, newnode) {
        if (newnode.value < root.value) {
            if (root.left == null) {
                root.left == newnode
            } else {
                this.newnode(root.left, newnode)
            }
        } else {
            if (root.right == null) {
                root.right == newnode
            } else {
                this.newnode(root.right, newnode)
            }
        }
    }
    search(root, value) {
        if (!root) {
            return false
        } else {
            if (value == root.value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }

        }
    }
    preorder(root) {
        if (root) {
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    inorder(root) {
        if (root) {
            this.preorder(root.left)
            console.log(root.value);
            this.preorder(root.right)
        }
    }
    preorder(root) {
        if (root) {
            this.preorder(root.left)
            this.preorder(root.right)
            console.log(root.value);
        }
    }
    min(root) {
        if (root.left) {
            return this.min(root.left)
        } else {
            return root.value
        }
    }
    max(root) {
        if (root.right) {
            return this.min(root.right)
        } else {
            return root.value
        }
    }
    levelorder() {
    const queue=[]
    queue.push(this.root)
    while(queue.length){
        const cur=queue.shift()
        console.log(cur.value)
        if(cur.left){
            queue.push(cur.left)
            queue.push(cur.right)
        }
    }
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    
}