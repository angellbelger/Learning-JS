
function thePass(){
    var result = window.document.querySelector('div#result')
    var tStart = window.document.querySelector('input#tStart')
    var tEnd = window.document.querySelector('input#tEnd')
    var tPass = window.document.querySelector('input#tPass')

    if (tStart.value.length == 0 || tEnd.value.length == 0 || tPass.value.length == 0){
        window.alert('Please, type a value on Start box.')
        result.innerHTML = 'Please, try again.'
    }



}