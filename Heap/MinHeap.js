class MinHeap {
    constructor() {
      this.heap = [];
    }
  //! MIN HEAP
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    getLeftChildIndex(index) {
      return index * 2 + 1;
    }
  
    getRightChildIndex(index) {
      return index * 2 + 2;
    }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    heapifyUp(index) {
      if (index <= 0) return;
  
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) { // Changed from < to >
        this.swap(parentIndex, index);
        this.heapifyUp(parentIndex);
      }
    }
    heapifyDown(index) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let smallest = index; // Changed from largest to smallest
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallest] // Changed from > to <
      ) {
        smallest = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallest] // Changed from > to <
      ) {
        smallest = rightChildIndex;
      }
      if (smallest !== index) {
        this.swap(index, smallest);
        this.heapifyDown(smallest);
      }
    }
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
    extractMin() { // Changed from extractMax to extractMin
      if (this.heap.length === 0) return null;
  
      const min = this.heap[0]; // Changed from max to min
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return min; // Changed from max to min
    }
    peek() {
      return this.heap.length === 0 ? null : this.heap[0];
    }
  }
  // Example usage:
  const heap = new MinHeap();
  heap.insert(10);
  heap.insert(5);
  heap.insert(15);
  heap.insert(20);
  heap.insert(8);
  console.log(heap.heap); // Output: [5, 8, 15, 20, 10] - Min heap order
  console.log(heap.extractMin()); // Output: 5
  console.log(heap.heap); // Output: [8, 10, 15, 20] - Min heap order
  