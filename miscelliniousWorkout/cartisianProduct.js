function cartisitanProduct(arr, arr2) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr[1], arr2[j]])
        }
    }
    return result
}
const arr=[1,2]
const arr2=[3,4,5]
console.log(misselinious(arr,arr2));

//! time complexity = O(mn)