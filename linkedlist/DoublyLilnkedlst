

//! Construction of Doubly Linked List

class DoublyNode {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    Inssertingdata(data) {
        let newNode = new DoublyNode(data)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
    }
    display() {
        let current = this.head
        while (current) {
            console.log("Doubly linked list", current.data);
            current = current.next
        }
    }
}
// let linkedListt = new DoublyLinkedList()
// linkedListt.Inssertingdata(1)
// linkedListt.Inssertingdata(2)
// linkedListt.Inssertingdata(3)

// linkedListt.display()

