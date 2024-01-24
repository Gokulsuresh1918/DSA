


//! printing in order and in reversive order
class Nodenodew {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListnoded {
    constructor() {
        this.head = null;
    }

    // Method to add a new node to the end of the list
    addNode(value) {
        const newNode = new Nodenodew(value);
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



    // Method to print all elements in order
    printInOrder() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    // Method to print all elements in reverse order
    printInReverseOrder() {
        this.printInReverseOrderHelper(this.head);
    }
    // Helper method for printing in reverse order using recursion
    printInReverseOrderHelper(node) {
        if (node === null) {
            return;
        }

        this.printInReverseOrderHelper(node.next);
        console.log(node.value);
    }
}

// Example usage
// const linkedListap = new LinkedListnoded();
// linkedListap.addNode(1);
// linkedListap.addNode(2);
// linkedListap.addNode(3);

// console.log("Order Printing");
// linkedListap.printInOrder();


// console.log("\nReverese Printing");
// linkedListap.printInReverseOrder();
