

// ! Delete Node Specified and delete at begging
class Nodenode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListnode {
    constructor() {
        this.head = null;
    }

    // Method to add a new node to the end of the list
    addNode(value) {
        const newNode = new Nodenode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    deleteNode(value) {
        if (!this.head) {
            return;
        }
        //deleting from begging
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        //according to the value 
        let current = this.head;
        let prev = null;

        while (current && current.value !== value) {
            prev = current;
            current = current.next;
        }
        // Node with the specified value not found
        if (!current) {
            console.log("value not found");
            return;
        }

        prev.next = current.next;
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

// // Example usage
// const linkedLista = new LinkedListnode();
// linkedLista.addNode(1);
// linkedLista.addNode(2);
// linkedLista.addNode(3);
// linkedLista.addNode(4);

// console.log("Original linked list:");
// linkedLista.printList();

// linkedLista.deleteNode(2);

// console.log("\nLinked list after deleting node with value 2:");
// linkedLista.printList();


