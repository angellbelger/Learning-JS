
function verify(){
    var date = new Date()
    var currentYear = date.getFullYear()
    var yearHim = window.document.querySelector('input#yearHim')
    var result = window.document.querySelector('div#result')

    if (yearHim.value.length == 0 || yearHim.value >= currentYear + 1){
        window.alert('Please, type a valid year.')
    }else {
        var genderFormu = window.document.getElementsByName('genderRadio')
        var genderTxt = ''
        var age = currentYear - yearHim.value
        var image = document.createElement('img')
        image.setAttribute('id', 'photo')
        
        if (genderFormu[0].checked){
            if (age >= 0 && age < 11)
            image.setAttribute('src', 'photos/photo-baby-boy.png')
        }
    }
    
}