



//! Method to add a new node to the linked list while maintaining the sorted order
class Nod {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListNode {
    constructor() {
        this.head = null;
    }

    addNodeInOrder(value) {
        const newNode = new Nod(value);

        if (!this.head || value < this.head.value) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next && value > current.next.value) {
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
    }

    // Method to print the linked list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage
// const linkedLis = new LinkedListNode();
// linkedLis.addNodeInOrder(4);
// linkedLis.addNodeInOrder(2);
// linkedLis.addNodeInOrder(5);
// linkedLis.addNodeInOrder(1);

// console.log("Sorted linked list:");
// linkedLis.printList();

