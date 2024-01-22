


//! Insert a node after & before a node with x data
// Node class to represent elements in the linked list
class Nodeafter {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Linked List class with methods to insert nodes after and before a specified value
class LinkedListaf {
    constructor() {
        this.head = null;
    }

    // Method to insert a new node after a node with a specific data value
    insertAfter(target, newv) {
        // Create a new node with the specified value
        let newnodeafter = new Nodeafter(newv);

        // Start from the head of the linked list
        let current = this.head;

        // Iterate through the linked list to find the target value
        while (current) {
            // If the target value is found, insert the new node after it
            if (current.value === target) {
                newnodeafter.next = current.next;
                current.next = newnodeafter;
                return; // Exit the function after insertion
            }
            current = current.next;
        }

        console.log(`Node with value ${target} not found.`);
    }

    // Method to insert a new node before a node with a specific data value
    insertBefore(target, newv) {
        // Create a new node with the specified value
        let newnode = new Nodeafter(newv);

        // Check if the linked list is empty
        if (!this.head) {
            console.log("Empty");
            return;
        }

        // If the target value is at the head, insert the new node before it
        if (this.head.value === target) {
            newnode.next = this.head;
            this.head = newnode;
            return; // Exit the function after insertion
        }

        // Start from the head of the linked list
        let current = this.head;

        // Iterate through the linked list to find the target value
        while (current.next) {
            // If the target value is found, insert the new node before it
            if (current.next.value === target) {
                newnode.next = current.next;
                current.next = newnode;
                return; // Exit the function after insertion
            }
            current = current.next;
        }

        console.log(`Node with value ${target} not found.`);
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
// const linkedListaf = new LinkedListaf();
// linkedListaf.insertAfter(2, 3);  // Insert 3 after node with value 2
// linkedListaf.insertBefore(3, 1); // Insert 1 before node with value 3
// linkedListaf.insertAfter(4, 5);  // Try to insert 5 after node with value 4 (not found)

// console.log("Linked list after insertion:");
// linkedListaf.printList();


