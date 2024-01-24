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
