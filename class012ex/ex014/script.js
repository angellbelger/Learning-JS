 function loading(){
    var msg = window.document.querySelector('div#msg')
    var image = window.document.querySelector('img#thumb')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `It is ${hour} hours`

    if (hour >= 7 && hour < 12){
        image.src = ''
    }
 }