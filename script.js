// Validar o formulário com JS 

const button = document.getElementById ('button')
button.addEventListener ( 'click', (event) => {
 event.preventDefault ()
const nome = document.getElementById ('nome')
const email = document.getElementById ('email')
const cpf = document.getElementById ('CPF')
const cep = document.getElementById ('cep')
const bairro = document.getElementById ('bairro')
const endereço = document.getElementById ('endereço')

if (nome.value == '' ) {
    nome.classList.add('errorInput')
}

if (email.value == '' ) {
    email.classList.add('errorInput')
}

if (cpf.value == '' ) {
    cpf.classList.add('errorInput')
}

if  (cep.value == '') {
    cep.classList.add ('errorInput')
}



if (bairro.value == '') {

    bairro.classList.add ('errorInput')
}

if (endereço.value == '') {
    endereço.classList.add ('errorInput')
}
   
if (email.value.indexOf('@') == -1 || email.value.indexOf ('.') == -1 || (email.value.indexOf ('.') - email.value.indexOf ('@') == 1)) {
    email.classList.add ('errorInput')

} else {
    
    email.classList.remove ('errorInput')
    
}

if (cpf.value.length <=10) {
    cpf.classList.add('errorInput')

} else {
    cpf.classList.remove('errorInput')
}

if (cep.value.length <= 8) {
cep.classList.add('errorInput')
} else {
    cep.classList.remove('errorInput')
}


// }

// )

// Função de buscar o cep


const preencherFormulario = (endereco)=> {
    document.getElementById ('endereço').value = endereco.logradouro
    document.getElementById ('bairro').value = endereco.bairro;

}

const PesquisarCep = async () => { 

const cep = document.getElementById.value 
const url = `https://viacep.com.br/ws/${cep}/json/`
const dados = await fetch (url)
const endereco = await dados.json
preencherFormulario (endereco)
 if (endereco.hasOwProperty ('Error') ) {
    document.getElementById.value = 'CEP não foi encontrado'
 }
}




