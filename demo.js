class MaxHeep {
    constructor() {
        this.heap = []
    }
    getparentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    leftChild(index) {
        return index * 2 + 1
    }
    rightChild(index) {
        return index * 2 + 2
    }
    heapifpy(index) {
        if (index < 0) {
            return
        }
        const parentIndex = this.getparentIndex(index)
        if (this.heap[parentIndex] < this.heap[index]) {
            this.swap(parentIndex, index)
            this.heapifpy(parentIndex)
        }
    }
    heapifpydown(index) {
        const leftChildIndex = this.leftChild(index)
        const rightChildIndex = this.rightChild(index)
        let largest = index
        if (leftChildIndex < this.heap.length &&
            this.heap[leftChildIndex] > this.heap[largest]) {
            largest = leftChildIndex
        }
        if (rightChildIndex < this.heap.length &&
            this.heap[rightChildIndex] > this.heap[largest]) {
            largest = rightChildIndex
        }
        if (largest!=index) {
            this.swap(index,largest)
            this.heapifpydown(largest)
        }
    }
    insert(value) {
        this.heap.push(value)
        this.heapifpy(this.heap.length - 1)
    }
    remove() {
        if (this.heap.length === 0) {
            return null
        }
        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifpydown(0)
        return max

    }
    peek(){
        return this.heap.length===0?null:this.heap[0]
    }
}
const heap = new MaxHeep();
heap.insert(10);
heap.insert(5);
heap.insert(15);
heap.insert(20);
heap.insert(8);

console.log(heap.heap); // Output: [20, 10, 15, 5, 8]

console.log(heap.remove()); // Output: 20
console.log(heap.heap); // Output: [15, 10, 8, 5]