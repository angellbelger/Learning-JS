
num = window.document.querySelector('input#number')
table = window.document.querySelector('select#listnumbers')
let list = []


function isNumber(param){
    if (Number(param) >= 1 && Number(param) <= 100){
        return true

    }else{
        return false

    }
}


function inList(paramNumber, paramList){
    for (var c = 0; c < paramList.length; c++){
        if (Number(paramNumber) == Number(paramList[c])){
            window.alert('Type a valid number.')
            return false
        }else{
            return true
        }
    }
}


function addNum(){

    if (isNumber(num.value) == false || inList(num.value, list) == false){
        window.alert('Please, type a valid number.')

    }else {
        list.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `The value ${num.value} was added.`
        item.value = Number(num.value)
        table.appendChild(item)

    }
}