const form = document.getElementById('formulario')

let NumeroA = document.getElementById('numeroA')
let NumeroB = document.getElementById('numeroB')

form.addEventListener ('submit', function(e) {
    e.preventDefault()



    const mensagemSucesso = `O numero B ${NumeroB.value} é maior que o número A ${NumeroA.value}`
    if(NumeroB.value > NumeroA.value) {
        alert(mensagemSucesso);
    }else {
        alert('O número B não é maior')
    }

})
console.log(form)