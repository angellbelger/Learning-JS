
function thepass(){
    var result = window.document.querySelector('div#result')
    var tStart = window.document.querySelector('input#tStart')
    var tEnd = window.document.querySelector('input#tEnd')
    var tPass = window.document.querySelector('input#tPass')

    if (tStart.value.length == 0 || tEnd.value.length == 0 || tPass.value.length == 0){
        window.alert('Please, type a value on box.')
        result.innerHTML = 'Please, try again.'
    }else{
        result.innerHTML = 'Counting: <br>'
        var nStart = Number(tStart.value)
        var nEnd = Number(tEnd.value)
        var nPass = Number(tPass.value)
        
        for (var c = nStart; c < nEnd; c += nPass){
            result += `${c} `
        }
    }
}