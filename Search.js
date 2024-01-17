
//! Linear Serach
function linearsearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == target){
        return i
        }
    }
    return -1
}
console.log(linearsearch([-5,2,6,4,10],4));






//! Binary search
function binarysearch(arr, target) {
    let leftindex = 0
    let rightindex = arr.length - 1
    while (leftindex <= rightindex){
        let middleindex = Math.floor((leftindex + rightindex) / 2)
        if (target === arr[middleindex]) {
            return middleindex
        }
        if (target < arr[middleindex]) {
            rightindex = middleindex - 1
        } else {
            leftindex = middleindex + 1
        }
    }
    return -1
}
// console.log(binarysearch([-5, 2, 4, 6, 10], 10));
// console.log(binarysearch([-5, 2, 4, 6, 10], 6));
// console.log(binarysearch([-5, 2, 4, 6, 10], 20));






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




