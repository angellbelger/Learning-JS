var start = window.document.querySelector('input#start')
var final = window.document.querySelector('input#final')
var pass = window.document.querySelector('input#pass')
var result = window.document.querySelector('div#result')

function counting(){
    var x = start
    for (start; final; start + pass){
        result.innerHTML = `${x}`
        x = start + pass
    }
}