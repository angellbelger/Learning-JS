 function loading(){
    var msg = window.document.querySelector('div#msg')
    var image = window.document.querySelector('img#thumb')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `It is ${hour} hours`

    if (hour >= 6 && hour < 9){
        image.src = 'images/photo-morning.png'
        window.document.body.style.background = '#f0cdb6'
    }else if (hour >= 9 && hour < 17){
        image.src = 'images/photo-afternoon.png'
        window.document.body.style.background = '#2d90bf'
    }else if ( hour >= 17 && hour < 20){
        image.src = 'images/photo-evening.png'
        window.document.body.style.background = '#a64918'
    }else {
        image.src = 'images/photo-night.png'
        window.document.body.style.background = '#0d292a'
    }
 }