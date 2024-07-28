function a(array) {
    let str = []
    for (let i = 0; i < array.length; i++) {
        while (str.length > 0 && str[str.length - 1] < arr[i]) {//no < use > for incresing
            str.pop()
        }
        str.push(arr[i])
    }
    return str
}
let arr = [2, 7, 2, 3, 3]
console.log(a(arr));




