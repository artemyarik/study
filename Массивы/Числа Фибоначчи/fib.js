function fib(n) {
    let num = n;
    let arr = [0,1];
    let numFib = 0;
    for (let k = 2; k <= n - 1; k++) {
        numFib = arr[k-1]+arr[k-2];
        arr.push(numFib);
    }
    return arr[num-1];
}
console.log(fib(1));


