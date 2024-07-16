class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack";
        }
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
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
