
num = window.document.querySelector('input#number')
table = window.document.querySelector('select#listnumbers')
let list = []
result = window.document.querySelector('div.result')


function isNumber(param){
    if (Number(param) >= 1 && Number(param) <= 100){
        return true

    }else{
        return false

    }
}


function inList(paramNumber, paramList){
    if (paramList.indexOf(Number(paramNumber)) != -1){
        return false
    }else{
        return true
    }
}

function addNum(){

    if (isNumber(num.value) == false || inList(num.value, list) == false){
        window.alert('Please, type a valid number.')

    }else {
        list.push(Number(num.value))
        result.innerHTML = '<h1>The Result</h1>'
        let item = document.createElement('option')
        item.text = `The value ${num.value} was added.`
        item.value = Number(num.value)
        table.appendChild(item)

    }
    num.value = ''
    num.focus()
}

function toFinesh(){
    if (list.length == 0){
        window.alert('Please, add values.')
    }else{
        var sum = 0
        result.innerHTML += `<br>Length: ${list.length}<br>The Array: `
        for (var c = 0; c < list.length; c++){
            result.innerHTML += `${list[c]} `
            sum += list[c]
        }
        let average = sum / list.length
        result.innerHTML += `<br>The sum: ${sum}<br>Average: ${average}`

        let lager = list[0]
        let smaller = list[0]
        for (let c in list){
            if (list[c] > lager){
                lager = list[c]
            }
            if (list[c] < smaller){
                smaller = list[c]
            }
        }
        result.innerHTML += `<br>The lager: ${lager}<br>The smaller: ${smaller}`
    }

}