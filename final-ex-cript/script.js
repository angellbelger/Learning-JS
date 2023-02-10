
text = window.document.querySelector('p.name');
result = window.document.querySelector('p.result');

text2 = window.document.querySelector('p.name2')
result2 = window.document.querySelector('p.result2')

function code(){
    var encodedString = btoa(text);
    result.innerHTML = encodedString;
    var decodedString = atob(text2);
    result2.innerHTML = decodedString;
}

