function insertionsort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numbettoinsert = arr[i]
        j = i - 1
        while (j >= 0 && arr[j] > numbettoinsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = numbettoinsert
    }
}
const arr = [4,3,2,1]
insertionsort(arr)
console.log(arr);