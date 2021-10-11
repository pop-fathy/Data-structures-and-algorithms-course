const addUpToN = (n) => {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}


let t1 = performance.now()
addUpToN(1e10)
let t2 = performance.now()
console.log((t2 - t1) / 1000 + " seconds")
