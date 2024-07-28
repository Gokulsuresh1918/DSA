
//! construction of  Singly Linked List 

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    InsertAtLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    display() {
        let current = this.head;
        while (current) {
            console.log("singly linked list", current.data);
            current = current.next;
        }
    }
}
const linkedList = new LinkedList();
linkedList.InsertAtLast(1);
linkedList.InsertAtLast(2);
linkedList.InsertAtLast(3);

linkedList.display();

























