
//! construction of  Singly Linked List 

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
// The Node class represents a node in the linked list, with data and a reference to the next node.


class LinkedList {
    constructor() {
        this.head = null;
    }
    // The LinkedList class has a head property, which is the reference to the first node.


    // Add a new node to the end of the list
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

    // The InsertAtLast method adds a new node to the end of the list.

    display() {
        let current = this.head;
        while (current) {
            console.log("singly linked list", current.data);
            current = current.next;
        }
    }
    //The display method prints the elements of the linked list.
}

// const linkedList = new LinkedList();
// linkedList.InsertAtLast(1);
// linkedList.InsertAtLast(2);
// linkedList.InsertAtLast(3);

// linkedList.display();

























