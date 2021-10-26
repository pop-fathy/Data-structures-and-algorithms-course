const addUpTo = (n) => {
    let sum = 0;

    for(let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

const start = new Date()    // 5
addUpTo(1e10)
const end = new Date()      // 7

console.log((end - start) / 1000 + " seconds")
