class Stack {
    constructor() {
        this.items = [];
    }

    // Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove an element from the top of the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Get the top item from the stack
    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Check if the stack is full
    // In JavaScript, we don't need to check if the stack is full because JavaScript arrays are dynamic and can grow as needed.
    isFull() {
        return false;
    }
}

// Example usage
let stack = new Stack();

console.log(stack.isEmpty()); // true

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30

stack.pop();

console.log(stack.peek()); // 20
