


function sort(array) {
    let swap
    do {
         swap = false
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                swap = true
            }
        }
    } while (swap);
}
array=[1,4,3,2,6,9]
sort(array)
console.log(array);