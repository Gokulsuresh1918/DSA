function heapify(array, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    // Check if left child is larger than root
    if (left < n && array[left] > array[largest]) {
        largest = left;
    }
    // Check if right child is larger than largest so far
    if (right < n && array[right] > array[largest]) {
        largest = right;
    }
    // If largest is not root
    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]]; // Swap
        // Recursively heapify the affected sub-tree
        heapify(array, n, largest);
    }
}
// Main function to perform heap sort
function heapSort(array) {
    const n = array.length;

    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [array[0], array[i]] = [array[i], array[0]];

        // call max heapify on the reduced heap
        heapify(array, i, 0);
    }
}
// Example usage:
const array = [5,1,4,2,3];
console.log("Original array:", array);

heapSort(array);
console.log("Sorted array:", array);
