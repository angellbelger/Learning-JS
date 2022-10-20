let friend = {name: 'john', 
gender: 'male', 
weight: 55,
bold(w=0){
    console.log('bolder')
    this.weight += w
}
}

friend.bold(5)
console.log(`The ${friend.name} weighs ${friend.weight}Kg`)