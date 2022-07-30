

function table(){
    var txtNumber = window.document.querySelector('input#txtNumber')
    var table = window.document.querySelector('select#selTab')

    if (txtNumber.value.length == 0){
        window.alert('Please, type a value.')

    }else{

        var number = Number(txtNumber.value)
        
        result.innerHTML = 'Result: <br>'

        for (var c = 0; c <= 10; c++){
            var item = document.createElement('option')
            item.txt = `${number} x ${c} = ${number * c}`
            table.appendChild(item)
        }
    }
}