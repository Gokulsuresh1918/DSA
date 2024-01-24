
//! Recursive Binary Search
function RecursiveBinary(arr, target) {
    return searchBinary(arr, target, 0, arr.length - 1)
}
function searchBinary(arr, target, leftindex, rightindex) {
    if (leftindex > rightindex) {
        return -1
    }
    let middleindex = Math.floor((leftindex + rightindex) / 2)
    if (target == arr[middleindex]) {
        return middleindex
    }
    if (target < arr[middleindex]) {
        return searchBinary(arr, target, leftindex, middleindex - 1)
    } else {
        return searchBinary(arr, target, middleindex + 1, rightindex)

    }
}
// console.log(RecursiveBinary([-5, 2, 4, 6, 10],20));

