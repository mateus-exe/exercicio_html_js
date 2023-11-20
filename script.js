const form = document.getElementById('formulario')

let NumeroA = document.getElementById('numeroA')
let NumeroB = document.getElementById('numeroB')

form.addEventListener ('submit', function(e) {
    e.preventDefault()

    const NumA = parseFloat(NumeroA.value);
    const NumB = parseFloat(NumeroB.value);

    const mensagemSucesso = `O numero B ${NumB} é maior que o número A ${NumA}`
    if(NumB > NumA) {
        alert(mensagemSucesso);
    }else {
        alert('O número B não é maior')
    }

})
console.log(form)
