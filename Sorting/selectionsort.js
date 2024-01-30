function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowestIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowestIndex]) {
                lowestIndex = j;
            }
        }
        swap(arr, i, lowestIndex);
    }
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
let nums = [1,4,2,3];
selectionSort(nums);
console.log("Sorted array: ", nums);
