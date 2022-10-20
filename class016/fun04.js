function fact(param){
    let f = 1
    for (let c = param; c > 1; c--){
        f *= c
    }
    return f
}

console.log(fact(4))