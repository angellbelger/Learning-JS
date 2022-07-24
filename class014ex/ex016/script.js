
function counting(){
    var txtStart = window.document.querySelector('input#txtStart')
    var txtFinal = window.document.querySelector('input#txtFinal')
    var txtPass = window.document.querySelector('input#txtPass')
    var result = window.document.querySelector('div#result')

    if (txtStart.value.length == 0 || txtFinal.value.length == 0 || txtPass.value.length == 0){
        window.alert('Please, type a correct value');
        result.innerHTML = 'Impossible'

    } else {
        result.innerHTML = 'Counting: '
        s = Number(txtStart.value)
        f = Number(txtFinal.value)
        p = Number(txtPass.value)

        if (p <= 0){
            result.innerHTML = 'Invalid pass.'
        }

        if (s <= f){
            for (var c = s; c <= f; c += p){
                result.innerHTML += `${c} \u{2728}`
            }
            result.innerHTML += `\u{1F51A}`

        } else {
            for (var c = s; c >= f; c -= p){
                result.innerHTML += `${c} \u{2728}`
            }
            result.innerHTML += `\u{1F51A}`

        }
    }
}