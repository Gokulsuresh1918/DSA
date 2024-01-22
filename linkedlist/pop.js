

//! pop methoud
class Nodepop {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class linkedListpop {
    constructor() {
        this.head = null
        this.length = 0
    }
    appendpop(data) {
        let newNode = new Nodepop(data)
        if (!this.head) {
            this.head = newNode
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }
    pop() {
        if (!this.head) {
            console.log("array is empty");
            return
        }
        if (this.head.next === null) {
            let temp = this.head
            this.head = null
            this.length--
            return temp.value
        } 
        let sl = this.head
        let prev = this.head
        while (sl&&sl.next) {
            prev=sl
            sl = sl.next
        }
        let last = sl.value
        prev.next = null
        this.length--
        return last
    }
    display() {
        let current = this.head
        while (current) {
            console.log(current.value);
            current = current.next
        }
    }
}
let myLinkedList = new linkedListpop();
myLinkedList.appendpop(1)
myLinkedList.appendpop(2)
myLinkedList.appendpop(3)
myLinkedList.display(); 
let poppedValue = myLinkedList.pop();
console.log("poppedValue",poppedValue);
myLinkedList.display(); 
