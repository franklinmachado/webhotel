const chales = document.querySelectorAll("input[name='chale']")
const checkIn = document.querySelector("#check_in")
const checkOut = document.querySelector("#check_out")
const quantidadeDePessoas = document.querySelector("#quantidade_pessoas")

const modalQuarto = document.querySelector("#quarto")
const modalCheckIn = document.querySelector("#checkIn")
const modalCheckOut = document.querySelector("#checkOut")
const modalQtdPessoas = document.querySelector("#qtdPessoas")
const modalTotal = document.querySelector("#total")

const tiposDeChales = [
    { id: 1, tipo: "Ofurô", valor: 100 },
    { id: 2, tipo: "Master", valor: 150 },
    { id: 3, tipo: "Luxo Familia", valor: 200 },
]

const servicos = [
    { id: 1, tipo: "cofre", valor: 20 },
    { id: 2, tipo: "pet", valor: 30 },
    { id: 3, tipo: "almoco", valor: 40 },
    { id: 4, tipo: "massagem", valor: 50 },
    { id: 5, tipo: "banheiro", valor: 60 },
]

let reserva = {
    checkIn: null,
    checkOut: null,
    quantidadeDePessoas: 0,
    quarto: {
        tipo: null,
        valor: 0,
    },
    servicos: [],
    totalDeDias: 0,
    total: 0,
}

document.addEventListener("DOMContentLoaded", () => {
    const reservaLocalStorage = localStorage.getItem("reserva")
    if (reservaLocalStorage) {
        reserva = JSON.parse(reservaLocalStorage)
        updateView(reserva)
    }
})

checkIn.addEventListener("input", () => {
    reserva.checkIn = checkIn.value
    updateView(reserva)
    sendReservaToLocalStorage(reserva)
})

checkOut.addEventListener("input", () => {
    reserva.checkOut = checkOut.value
    reserva.totalDeDias = totalDeDias(reserva.checkIn, reserva.checkOut)
    updateView(reserva)
    sendReservaToLocalStorage(reserva)
})

quantidadeDePessoas.addEventListener("input", () => {
    reserva.quantidadeDePessoas = quantidadeDePessoas.valueAsNumber
    updateView(reserva)
    sendReservaToLocalStorage(reserva)
})

chales.forEach((chale) => {
    chale.addEventListener("input", () => {
        const quarto = tiposDeChales.find((el) => el.id === Number(chale.value))
        reserva.quarto = quarto
        updateView(reserva)
        sendReservaToLocalStorage(reserva)
    })
})

function sendReservaToLocalStorage(reserva) {
    localStorage.setItem("reserva", JSON.stringify(reserva))
}

function updateView(reserva) {
    // ! tirar daqui
    

    checkIn.value = reserva.checkIn
    checkOut.value = reserva.checkOut
    quantidadeDePessoas.value = reserva.quantidadeDePessoas
    chales.forEach((chale) => {
        if (chale.value == reserva.quarto.id) {
            chale.checked = true
        }
    })


    updateModal(reserva)
}

function updateModal(reserva) {
    modalQuarto.textContent = reserva.quarto.tipo
    modalCheckIn.textContent = formatDate(reserva.checkIn)
    modalCheckOut.textContent = formatDate(reserva.checkOut)
    modalQtdPessoas.textContent = reserva.quantidadeDePessoas
    modalTotal.textContent = reserva.total;
}

function totalDeDias(checkIn, checkOut) {
    const diferencaEmMs = new Date(checkOut) - new Date(checkIn)
    const diferencaEmDias = diferencaEmMs / (1000 * 60 * 60 * 24)
    return diferencaEmDias
}

function formatDate(date) {
    return new Intl.DateTimeFormat("pt-BR", {
        timeZone: "UTC",
    }).format(new Date(date))
}

function getTotal(reserva) {
    let total = 0;
    let valorServicos = 0;
    const dias = reserva.totalDeDias;
    const valorQuarto = reserva.quarto.valor;
    if(reserva.servicos.length > 0) {
        valorServicos = reserva.servicos.reduce((accumulator, { valor }) => accumulator + valor, 0);
    }
    total = (valorQuarto * dias) + valorServicos;
    return total;
}

const myModal = document.getElementById('exampleModal')
const cadastrarServicos = document.getElementById("cadastrarServicos")
const inputsServicos = document.querySelectorAll("input[name=servicos]")

// myModal.addEventListener('shown.bs.modal', () => {
    
// })

cadastrarServicos.addEventListener("click", () => {
    
    inputsServicos.forEach((input) => {
        if(input.checked) {
            const servico = servicos.find(el => el.id == input.value);
            reserva.servicos.push(servico);
        }
    })
    reserva.total = getTotal(reserva);
    updateView(reserva)
    sendReservaToLocalStorage(reserva);
})

