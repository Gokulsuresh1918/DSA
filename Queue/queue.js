class Queue {
    constructor() {
        this.items = []
    }
    enqueue(elemnet) {
        this.items.push(elemnet)
    }
    dequeue() {
        return this.items.shift()
    }
    isempty() {
        return this.items.length === 0
    }
    peek() {
        if (!this.isempty()) {
            return this.items[0]
        }
        return null
    }
    size() {
        return this.items.length
    }
    print() {
        return this.items.toString()
    }
}
const queue = new Queue()
console.log(queue.isempty());
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.size());
queue.print()
console.log(queue.dequeue());
console.log(queue.peek());









