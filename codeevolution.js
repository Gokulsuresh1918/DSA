
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







       








    }
}



































