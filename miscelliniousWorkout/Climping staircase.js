function staircase(n) {
    let ways = [1, 2]
    for (let i = 2; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2]
    }
    return ways[n - 1]
}
console.log(staircase(1));
console.log(staircase(2));
console.log(staircase(3));
console.log(staircase(4));