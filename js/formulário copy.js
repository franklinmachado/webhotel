const campoMensagem = document.querySelector('.mensagem')
const campoNome = document.querySelector('.nome')
const form = document.querySelector('#formulario')
const btnForm = document.querySelector('#botaoForm')

const user = {
    name: 'Kaue',
    email: 'kauecardinalli@hotmail.com',
    password: '1234',
}

function validarLogin(email, password) {
    if (email === user.email && password === user.password) {
        campoMensagem.appendChild = `Olá, ${user.name}`
        document.querySelector('.nome').innerHTML =
            localStorage.getItem('usuario')
    } else {
        alert('E-mail ou senha inválidos!')
    }
}

btnForm.onclick = function () {
    const usuario = document
        .querySelector('#user')
        .value.replace(/[^a-z]/gi, '')
    const email = document.querySelector('#email').value

    // Salvar nome e email do usuário em localStorage
    localStorage.setItem('user', usuario)
    localStorage.setItem('email', email)

    // Imprimir no header o nome do usuário
}

const nome = localStorage.getItem('nome')
/* const email = localStorage.getItem('email') */

document.getElementById('saudacao').innerHTML = `Olá ${nome} (${email}).`

// Redirecionar para a página home
/* window.location.href = '../../index.html' */
