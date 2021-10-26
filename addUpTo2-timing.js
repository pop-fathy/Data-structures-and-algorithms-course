const addUpTo = (n) => {
    return n * (n + 1) / 2;
}

const start = new Date()    // 5
addUpTo(1e10)
const end = new Date()      // 7

console.log((end - start) / 1000 + " seconds")


