function binarysearch(arr, target) {
    let startindex = 0
    let rightindex = arr.length - 1
    while (startindex <= rightindex) {
        let middleindex = Math.floor((startindex + rightindex) / 2)
        if (target == arr[middleindex]) {
            return middleindex
        }
        if (target > arr[middleindex]) {
            startindex = middleindex + 1
        } else {
            rightindex = middleindex - 1
        }
    }

}
let arr=[1,2,4,5]
console.log(binarysearch(arr,2));