const chales = document.querySelectorAll("input[name='chale']")
const checkIn = document.querySelector("#check_in")
const checkOut = document.querySelector("#check_out")
const quantidadeDePessoas = document.querySelector("#quantidade_pessoas")

const modalQuarto = document.querySelector("#quarto")
const modalCheckIn = document.querySelector("#checkIn")
const modalCheckOut = document.querySelector("#checkOut")
const modalQtdPessoas = document.querySelector("#qtdPessoas")

const tiposDeChales = [
    { id: 1, tipo: "Ofurô", valor: 100 },
    { id: 2, tipo: "Master", valor: 100 },
    { id: 3, tipo: "Luxo Familia", valor: 100 },
]

let reserva = {
    checkIn: null,
    checkOut: null,
    quantidadeDePessoas: 0,
    quarto: {
        tipo: null,
        valor: 0,
    },
    totalDeDias: 0,
    total: 0,
}

document.addEventListener("DOMContentLoaded", () => {
    const reservaLocalStorage = localStorage.getItem("reserva")
    if (reserva) {
        reserva = JSON.parse(reservaLocalStorage)
        updateView(reserva)
        // alert("existe reserva em localStorage")
    }
})

checkIn.addEventListener("input", () => {
    reserva.checkIn = checkIn.valueAsDate
    sendReservaToLocalStorage(reserva)
    updateView(reserva)
})

checkOut.addEventListener("input", () => {
    reserva.checkOut = checkOut.valueAsDate
    sendReservaToLocalStorage(reserva)
    updateView(reserva)
})

quantidadeDePessoas.addEventListener("input", () => {
    reserva.quantidadeDePessoas = quantidadeDePessoas.valueAsNumber
    updateView(reserva)
    sendReservaToLocalStorage(reserva)
})

chales.forEach((chale) => {
    chale.addEventListener("input", () => {
        const quarto = tiposDeChales.find(el => el.id === Number(chale.value))
        reserva.quarto = quarto;
        updateView(reserva);
        sendReservaToLocalStorage(reserva)
    })
})

function sendReservaToLocalStorage(reserva) {
     localStorage.setItem("reserva", JSON.stringify(reserva))
}

function updateView(reserva) {
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
}

function totalDeDias(dataCheckIn, dataCheckOut) {
    const checkIn = new Date(dataCheckIn)
    const checkOut = new Date(dataCheckOut)

    const diferencaEmMs = checkOut - checkIn;
    const diferencaEmDias = diferencaEmMs / (1000 * 60 * 60 * 24);
    return diferencaEmDias;
}

function formatDate(date) {
    return new Intl.DateTimeFormat("pt-BR", {
        timeZone: "UTC",
    }).format(new Date(date))
}
