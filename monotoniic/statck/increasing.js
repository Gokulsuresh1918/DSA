//A Monotonic Stack is a stack where all elements are either monotonically 
// increasing or decreasing. The main idea is to ensure that the elements
//  in the stack are in a specific order (either ascending or descending). 
//  When a new element is pushed into the stack, we pop out all elements that violate 
//  this order before pushing the new element 2.


function increasingStack(arr) {
    let str = []
    for (let i = 0; i < arr.length; i++) {
        while (str.length > 0 && str[str.length-1] > arr[i])      {
            str.pop()
        }
        str.push(arr[i])
    }
    return str
}
let arr = [4,7,2,43,90,-2];
console.log(increasingStack(arr));
