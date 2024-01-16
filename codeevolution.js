
{
    {



        //!fibonacci sequence 
        function fib(n) {
            const a = [0, 1]
            for (let i = 2; i < n; i++) {
                a[i] = a[i - 1] + a[i - 2]
            }
            return a
        }
        // console.log(fib(6));



        //!factorial finding
        function fac(n) {
            let result = 1
            for (let i = 2; i <= n; i++) {
                result = result * i
            }
            return result
        }
        // console.log(fac(4));




        //!prime suming
        function isprime(n) {
            if (n < 2) {
                return false
            }
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) {
                    return false
                }
            }
            return true
        }
        // console.log(isprime(4));






        //!power of two 
        function poweroftwo(n) {
            if (n < 1) {
                return false
            }
            while (n > 1) {
                if (n % 2 !== 0) {
                    return false
                }
                n = n / 2
            }
            return true
        }
        //another way using bitwise operator
        function bitwise(n) {
            if (n < 1) {
                return false
            }
            return (n & (n - 1)) == 0
        }
        // console.log(poweroftwo(5));
        // console.log(bitwise(5));







        //! Recursive fabinachiee
        function Recursivefab(n) {
            if (n < 2) {
                return n
            }
            return Recursivefab(n - 1) + Recursivefab(n - 2)
        }

        // console.log(Recursivefab(7));
        // working of this is like first we pass 5 and then it dividee into 4,3 
        // then this 3 divide to 2,1 
        // this 2 divide to 1,0
        // now recursion end to limit now this function pass 1 and this one is caught on first ifcase and return that Numberitself
        // after thsi  this last nu will be added like 1 and 0 is 1  it countinu 




        //! Recursive factorial 
        function recursionfac(n) {
            if (n === 0) {
                return 1
            }
            return n * recursionfac(n - 1)
        }
        // console.log(recursionfac(5));




        //! Binary search
        function binarysearch(arr, target) {
            let leftindex = 0
            let rightindex = arr.length - 1
            while (leftindex <= rightindex) {
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
        console.log(binarysearch([-5, 2, 4, 6, 10], 10));
        console.log(binarysearch([-5, 2, 4, 6, 10], 6));
        console.log(binarysearch([-5, 2, 4, 6, 10], 20));











    }
}



































