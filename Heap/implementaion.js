class Heap {
    constructor() {
        this.heap = [];
    }
    // We pass in child index to get its parent
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    // Returns the value of parent.
    getParent(childIndex) {
        // We Call above function to get the index of parent. 
        return this.heap[this.getParentIndex(childIndex)];
    }

    hasParent(childIndex) { //Checking if a parent exists or not
        return this.getParentIndex(childIndex) >= 0;
    }

    getLeftChildIndex(parentIndex) {
        return (parentIndex * 2) + 1;
    }

    getLeftChild(parentIndex) {
        return this.heap[this.getLeftChildIndex(parentIndex)];
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heap.length;
    }

    getRightChildIndex(parentIndex) {
        return (parentIndex * 2) + 2;
    }

    getRightChild(parentIndex) {
        return this.heap[this.getRightChildIndex(parentIndex)];
    }

    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heap.length;
    }

    // Swaping values of two elements when their index is given. 
    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // Returning the root element
    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    // Now we need a function to heapifyup the last
    // element to its correct position. This function maintains the heap
    // structure of a heap tree.
    heapifyUp() {
        // For heapifying up we start with last element
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.getParent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    addNewElement(value) {
        this.heap.push(value);
        this.heapifyUp(); // This will re arrange the heap in its structure.
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();

        return item;
    }
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.getRightChild(index) < this.getLefthild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex
        }
    }
}