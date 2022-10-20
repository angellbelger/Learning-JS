

function addNum(){
    num = window.document.querySelector('input#number')
    table = window.document.querySelector('select#listnumbers')
    let list = []

    if (num.value.length == 0 || num.value < 0 || num.value > 100){
        window.alert('Please, type a valid number.')

    }else {
        var numPro = Number(num.value)
        list.push(numPro)

        var item = document.createElement('option')
        item.value = numPro
    }
}