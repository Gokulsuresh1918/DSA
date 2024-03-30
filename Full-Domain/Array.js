function twoSum(arr, target) {
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                console.log('hii');
            }
        }
    }
}



function Re(arr, target) {
    for (let i = 0; i <= arr.length; i++) {
        for (let j = arr.length - 1; j >= i; j--) {
            if (arr[i] == target) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}


function fibonacci(n) {
    const a = [0, 1]
    for (let i = 2; i <= n; i++) {
        a[i] = a[i - 1] + a[i - 2]
    }
    return a
}

function factrorila(n){
    let a=1
    for(let i=2;i<=n;i++){
        a*=i
    }
    return a
}

function prime(n){
    if(n<2){
        return false
    }
    for(let i=2;i<Math.sqrt(n);i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

function power(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
            return false
        }
        n=n/2
    }
    return true 
}