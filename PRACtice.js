class node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class linkedlist {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    prepend(element) {
        const newnode = new node(element)
        if (this.isEmpty()) {
            this.head = newnode
        } else {
            newnode.next = this.head
            this.head = newnode
        }
        this.size++
    }
    print() {

        if (this.isEmpty()) {
            console.log('empty ');
        } else {
            let cur = this.head
            let a = ''
            while (cur) {
                a+=`${cur.value}`
                cur = cur.next
            }
            console.log(a);
        }

    }
}
const list=new linkedlist()
console.log(list.isEmpty());    
console.log(list.getSize());    
list.prepend(4)
console.log(list.isEmpty());    
console.log(list.getSize());  
