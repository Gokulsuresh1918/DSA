


//! Remove Duplicate from this
class dNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SortedLinkedListd {
    constructor() {
        this.head = null;
    }

    // Method to add a new node to the linked list while maintaining the sorted order
    addNode(value) {
        const newNode = new dNode(value);

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

    // Method to remove duplicates from the sorted linked list
    removeDuplicates() {
        let current = this.head;

        while (current && current.next) {
            if (current.value === current.next.value) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
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
//   const sortedListd = new SortedLinkedListd();
//   sortedListd.addNode(2);
//   sortedListd.addNode(1);
//   sortedListd.addNode(2);
//   sortedListd.addNode(3);
//   sortedListd.addNode(4);
//   sortedListd.addNode(4);
//   sortedListd.addNode(5);

//   console.log("Original sorted list:");
//   sortedListd.printList();

//   sortedListd.removeDuplicates();

//   console.log("Sorted list after removing duplicates:");
//   sortedListd.printList();



