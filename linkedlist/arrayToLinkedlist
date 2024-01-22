

//! array to linkedlist

class a {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class b {
    constructor() {
        this.head = null
    }
    addsingl(data) {
        let newNode = new a(data)
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
    display() {
        let current = this.head
        while (current) {
            console.log("converting array to linkedlist", current.data);
            current = current.next
        }
    }

}

function arraytolinkedlist(arr) {
    const linkedList = new b()
    for (const elements of arr) {
        linkedList.addsingl(elements)
    }
    return linkedList
}
const array = [4, 5, 6]
// const linkedlistq = arraytolinkedlist(array)
// linkedlistq.display()

