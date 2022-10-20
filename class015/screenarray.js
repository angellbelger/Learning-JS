numbers = [1,2,3,4,5,6,7]
/*
for (var c = 0; c < numbers.length; c++){
    console.log(`Index: ${c}; number: ${numbers[c]}`)
}
*/

for (let index in numbers){
    console.log(numbers[index])
}

console.log('------------')
console.log(`The value 3 is on index ${numbers.indexOf(3)}`)