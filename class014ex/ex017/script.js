

function table() {
    nTxt = window.document.querySelector('input#nTxt')
    table = window.document.querySelector('select#seltab')

    if (nTxt.value.length == 0){
        window.alert('Attention! Type a valid number to calculate.')

    }else {
        numb = Number(nTxt.value)
        table.innerHTML = ''

        for (var c = 0; c <= 10; c++){
            
        }
    }
}