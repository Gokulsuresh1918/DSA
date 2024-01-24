


//! Optimised methoud

class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        let item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isempty() {
        return this.rear - this.front === 0;
    }

    peek() {
        return this.items[this.front];
    }

    size() {
        return this.rear - this.front;
    }

    print() {
       console.log(this.items); 
    }
}

const queue = new Queue();
console.log(queue.isempty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size());
queue.print()
console.log(queue.dequeue());
console.log(queue.peek());