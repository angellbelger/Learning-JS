var txtNumber = window.document.querySelector('input#txtNumber')
var result = window.document.querySelector('div#result')

function table(){
    var number = Number(txtNumber.value)

    result.innerHTML = 'Result: <br>'
    for (var c = 0; c <= 10; c++){
        result.innerHTML += `<br> ${number} x ${c} = ${number * c}`
    }
}