var msg = window.document.querySelector("div#msgTime")
var image = window.document.querySelector("img#thumb")

date = new Date()
hour = date.getHours()
min = date.getMinutes()

function dinamic() {
    msg.innerHTML = `The time is ${hour}:${min}`

    if (hour >= 0 && hour < 6){
    image.src = 'images/photo-night.png'
    window.document.body.style.background = '#0B292B'
    } else if (hour >= 6 && hour < 12){
    image.src = 'images/photo-morning.png'
    window.document.body.style.background = '#EDC4A4'
    } else if (hour >= 12 && hour < 18){
    image.src = 'images/photo-afternoon.png'
    window.document.body.style.background = '#3D9BC3'
    } else if (hour >= 18 && hour <= 23){
    image.src = 'images/photo-evening.png'
    window.document.body.background = '#D26901'
    }
}