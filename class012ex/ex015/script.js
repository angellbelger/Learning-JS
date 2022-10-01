function verify(){
    var date = new Date()
    var currentYear = date.getFullYear()
    var himYear = window.document.querySelector('input#himYear')
    var result = window.document.querySelector('div#result')

    if (himYear.value.length == 0 || himYear.value > currentYear){
        window.alert('Please, type a valid value on the input box')
    }
    else{
        var formuGender = window.document.getElementsByName('radgender')
        var age = currentYear - himYear.value
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (formuGender[0].checked){
            gender = 'Male'
            if (age >= 0 && age < 11){
                // children
                img.setAttribute('src', 'photos/photo-baby-boy.png')
            }else if (age <= 18){
                // boy
                img.setAttribute('src', 'photos/photo-boy.png')
            }else if (age < 40){
                // man
                img.setAttribute('src', 'photos/photo-man.png')
            } else if (age >= 40){
                // old man
                img.setAttribute('src', 'photos/photo-grandfather.png')
            }
        }else if (formuGender[1].checked){
            gender = 'Female'
            if (age >= 0 && age < 11){
                // children
                img.setAttribute('src', 'photos/photo-baby-girl.png')
            }else if (age <= 18){
                // girl
                img.setAttribute('src', 'photos/photo-girl.png')
            }else if (age < 40){
                // woman
                img.setAttribute('src', 'photos/photo-woman.png')
            } else if (age >= 40){
                // old woman
                img.setAttribute('src', 'photos/photo-grandmother.png')
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = `Your gender is ${gender} and your age is ${age}`
        result.appendChild(img)
    }
}