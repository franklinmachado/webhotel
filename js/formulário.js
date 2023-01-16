const form = document.querySelector('#formulario')
const campoMensagem = document.getElementById('mensagem')
const campoNome = document.getElementById('nome')
const sair = document.getElementById('sair')
const logado = document.getElementById('logado')

const user01 = {
    nome: 'Kaue',
    email: 'kauecardinalli@hotmail.com',
    senha: '1234',
}

if (localStorage.nome === user01.nome) {
    campoMensagem.hidden = true
    campoNome.textContent = `Olá, ${user01.nome}`
    sair.textContent = '     Sair'
} else {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const email = document.getElementById('email').value
        const senha = document.getElementById('senha').value

        validarLogin(email, senha)

        localStorage.setItem('nome', user01.nome)
        localStorage.setItem('email', user01.email)

        window.location.href = '/index.html'
    })
}

function validarLogin(email, senha) {
    if (email === user01.email && senha === user01.senha) {
        campoMensagem.textContent = `Olá, ${user01.nome}`
    }

    // Remover aspas duplas ou simples do valor
    email = email.replace(/\"|\'/g, '').trim()
    senha = senha.replace(/\"|\'/g, '').trim()

    if (!email || !senha) {
        alert('Por favor, preencha todos os campos.')
        return false
    }

    // Verificar se usuário e senha conferem
    if (user01.senha !== senha) {
        alert('Usuário e senha não conferem.')
        return false
    }

    // Redirecionar para a página home

    return true
}

sair.style.cursor = 'pointer'
sair.addEventListener('click', clickSair)

function clickSair() {
    localStorage.clear()
    window.location.href = '/pages/public/login.html'
}
