function fact(param){
    let f = 1
    for (let c = param; param > 1; c--){
        f *= c
    }
    return f
}

console.log(fact(4))