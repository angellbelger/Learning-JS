
function verify(){
    var date = new Date()
    var currentYear = date.getFullYear()
    var himYear = window.document.querySelector('input#himYear')
    var result = window.document.querySelector('div#result')

    if (himYear.value.length == 0 || himYear.value >= currentYear + 1){
        window.alert('Please, type a valid year.')
    }else {
        var genderFormu = window.document.getElementsByName('genderRadio')
        var genderTxt = ''
        var age = currentYear - himYear.value
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')

        // Male
        if (genderFormu[0].checked){
            genderTxt = 'Male'

            if (age >= 0 && age < 11){
                img.setAttribute('src', 'photos/photo-baby-boy.png')

            }else if (age <= 18){
                img.setAttribute('src', 'photos/photo-boy.png')

            }else if (age < 50){
                img.setAttribute('src', 'photos/photo-man.png')

            }else if (age >= 50){
                img.setAttribute('src', 'photos/photo-grandfather.png')
            }
        }
        // Female
        else if (genderFormu[1].checked){
            genderTxt = 'Female'

        }
    }
    result.style.textAlign = 'center'
    result.innerHTML = `Your gender is ${genderTxt}, and your age is ${age}`
    result.appendChild(img)
    
    
    
}