var now = new Date()
var time = now.getHours()

console.log(`It is ${time}.`)
if (time >= 0 && time < 12){
    console.log('Good morning.')
}else if (time >= 12 && time < 18){
    console.log('Good afternoon.')
}else if (time >= 18){
    console.log('Good evening.')
}