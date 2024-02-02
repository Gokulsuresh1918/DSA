class circularqueue {
    constructor(capacity) {
        this.item = new Array(capacity)
        this.capacity = capacity
        this.currentlength = 0
        this.rear = -1
        this.front = -1
    }
    isfull() {
        return this.currentlength === this.capacity
    }
    isempty() {
        return this.currentlength === 0
    }
    enqueue(element) {
        if (!this.isfull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.item[this.rear] = element
            this.currentlength += 1
            if (this.front == -1) {
                this.front = this.rear
            }
        }
    }
    dequeue() {
        if (this.isempty()) {
            return null
        }
        const item = this.item[this.front]
        this.item[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentlength -= 1
        if (this.isempty()) {
            this.front = -1
            this.rear = -1
        }
        return item
    }
    peek() {
        if (!this.isempty()) {
            return this.item[this.front]
        }
        return null
    }
    print() {
        if (this.isempty()) {
            console.log('empty');
        } else {
            let str = ''
            for (let i = this.front; i != this.rear; i=(i + 1)% this.capacity) {
                const element = this.item[i];
                str += this.item[i] + ' '
            }
            str += this.item[this.rear]
            console.log(str);
        }
    }
}
const queue = new circularqueue(5)
console.log(queue.isempty());
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

console.log(queue.isfull());
queue.print()
console.log(queue.dequeue());
console.log(queue.peek());
queue.enqueue(6)