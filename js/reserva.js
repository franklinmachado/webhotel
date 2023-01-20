const chales = document.querySelectorAll("input[name='chale']")
const checkIn = document.querySelector("#check_in")
const checkOut = document.querySelector("#check_out")
const quantidadeDePessoas = document.querySelector("#quantidade_pessoas")

const modalQuarto = document.querySelector("#quarto")
const modalCheckIn = document.querySelector("#checkIn")
const modalCheckOut = document.querySelector("#checkOut")
const modalQtdPessoas = document.querySelector("#qtdPessoas")

const reserva = {
    checkIn: null,
    checkOut: null,
    quantidadeDePessoas: 0,
    quarto: {
        tipo: null,
        valor: 0,
    },
    total: 0,
}

checkIn.addEventListener("input", () => {
    reserva.checkIn = checkIn.value
    updateReserva(reserva)
})

checkOut.addEventListener("input", () => {
    reserva.checkOut = checkOut.value
    updateReserva(reserva)
})

quantidadeDePessoas.addEventListener("input", () => {
    reserva.quantidadeDePessoas = quantidadeDePessoas.value
    updateReserva(reserva)
})

chales.forEach((chale) => {
    chale.addEventListener("input", () => {
        reserva.quarto.tipo = chale.value
        updateReserva(reserva)
    })
})

function updateReserva(reserva) {
    localStorage.setItem("reserva", JSON.stringify(reserva))
    modalQuarto.textContent = reserva.quarto.tipo
    modalCheckIn.textContent = reserva.checkIn
    modalCheckOut.textContent = reserva.checkOut
    modalQtdPessoas.textContent = reserva.quantidadeDePessoas
}
