class node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class Treeimplementation {
    constructor() {
        this.root = null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value) {
        const newnode = new node()
        if(this.isEmpty()){
            this.root=newnode
        }else{
            this.insertone(this.root,newnode)
        }
    }
    insertone(root,newnode){
        if (newnode.value<root.value) {
            if (root.left==null) {
                root.left=newnode
            }else{
                this.insertone(root.right,newnode)
            }
        }else{
            if (root.right===null) {
                root.right=newnode
            }else{
                this.insertone(root.right,newnode)
            }
        }
    }
    check(node){
        let a = this.root
        if (this.left<a) {
            return true
        }
        if (this.right>a) {
            return true
        }
        return false
    }
}
const call=new Treeimplementation()
call.insert(2)