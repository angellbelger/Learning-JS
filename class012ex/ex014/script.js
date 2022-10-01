var msg = window.document.querySelector("div#msgTime")
var image = window.document.querySelector("img#thumb")

date = new Date()
hour = date.getHours()


hour = 14
function dinamic() {
    msg.innerHTML = `The time is ${hour}h.`
}

if (hour >= 6 && hour < 12){
    image.src = 'images/photo-morning.png'
    window.document.body.style.background = '#EDC4A4'
} else if (hour >= 12 && hour < 18){
    image.src = 'images/photo-afternoon.png'
    window.document.body.style.background = '#3D9BC3'
}