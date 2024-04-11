class MaxHeap {
    constructor() {
      this.heap = [];
    }
    // Function to get the parent index of a given node
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
    // Function to get the left child index of a given node
    getLeftChildIndex(index) {
      return index * 2 + 1;
    }
    // Function to get the right child index of a given node
    getRightChildIndex(index) {
      return index * 2 + 2;
    }
    // Function to swap two elements in the heap
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    // Function to restore the heap property upward
    heapifyUp(index) {
      if (index <= 0) return;
  
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] < this.heap[index]) {
        this.swap(parentIndex, index);
        this.heapifyUp(parentIndex);
      }
    }
    // Function to restore the heap property downward
    heapifyDown(index) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let largest = index;
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] > this.heap[largest]
      ) {
        largest = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[largest]
      ) {
        largest = rightChildIndex;
      }
      if (largest !== index) {
        this.swap(index, largest);
        this.heapifyDown(largest);
      }
    }
    // Function to insert a new element into the heap
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
    // Function to remove and return the maximum element from the heap
    extractMax() {
      if (this.heap.length === 0) return null;
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return max;
    }
  
    // Function to get the maximum element from the heap without removing it
    peek() {
      return this.heap.length === 0 ? null : this.heap[0];
    }
  }
  
  // Example usage:
  const heap = new MaxHeap();
  heap.insert(10);
  heap.insert(5);
  heap.insert(15);
  heap.insert(20);
  heap.insert(8);
  
  console.log(heap.heap); // Output: [20, 10, 15, 5, 8]
  
  console.log(heap.extractMax()); // Output: 20
  console.log(heap.heap); // Output: [15, 10, 8, 5]
  