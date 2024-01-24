

//! Circular Linked LIst

class Sdoubly {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class Doubly {
    constructor() {
        this.head = null
    }
    insertdataatDoubly(data) {
        let newNode = new Sdoubly(data)
        if (!this.head) {
            this.head = newNode
            newNode.next = this.head
        } else {
            let current = this.head
            while (current.next != this.head) {
                current = current.next
            }
            current.next = newNode
            newNode.next = this.head
        }

    }
    display() {
        if (!this.head) {
            console.log("empty");
            return
        } else {
            let current = this.head
            do {
                console.log("Singlly Doubly Linked list", current.data);
                current = current.next
            } while (current != this.head);
        }
    }
}
// const circularkin = new Doubly()
// circularkin.insertdataatDoubly(1)
// circularkin.insertdataatDoubly(2)
// circularkin.insertdataatDoubly(3)
// circularkin.display()


