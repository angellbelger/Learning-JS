
function thepass(){
    var tStart = window.document.querySelector('input#tStart')
    var tEnd = window.document.querySelector('input#tEnd')
    var tPass = window.document.querySelector('input#tPass')
    var result = window.document.querySelector('div#result')

    if (tStart.value.length == 0 || tEnd.value.length == 0 || tPass.value.length == 0){
        window.alert('Please, type a value on box.')
        result.innerHTML = 'Please, try again.'
    }else{
        result.innerHTML = 'Counting: <br>'
        var nStart = Number(tStart.value)
        var nEnd = Number(tEnd.value)
        var nPass = Number(tPass.value)

        if (nPass <= 0){
            window.alert('This pass is invalid.')
            nPass = 1
        }
        if (nStart < nEnd){
            for (var c = nStart; c < nEnd; c += nPass){
                result += `${c} `
            }
        }else if{
            
        }
    }
}