function increasingMonotonicQueue(arr) {
    const q = [];
    for (let i = 0; i < arr.length; i++) {
        // If recently added element is greater than the current element
        while (q.length > 0 && q[q.length - 1] < arr[i]) {
            q.pop();
        }
        q.push(arr[i]);
    }
    return q;
}

const arr = [1, 2, 3, -3, 5, 6];
const q = increasingMonotonicQueue(arr);
console.log(q);
