const checkIn = document.querySelector("#check_in")
const checkOut = document.querySelector("#check_out")
const quantidadePessoas = document.querySelector("#quantidade_pessoas")
const quarto = document.querySelectorAll("input[type=radio]")
const msgQuarto = document.getElementById("quarto")
const msgCheckIn = document.getElementById("checkIn")
const msgCheckOut = document.getElementById("checkOut")
const qtdPessoas = document.getElementById("qtdPessoas")

localStorage.setItem(
    "reserva",
    JSON.stringify({
        check_in: "",
        check_out: "",
        apartamento: "",
        pessoas: "",
    })
)

const reserva = JSON.parse(localStorage.getItem("reserva"))

checkIn.addEventListener("change", function () {
    reserva.check_in = new Date(`${checkIn.value} 00:00:00`).toLocaleDateString(
        "pt-BR"
    )
    msgCheckIn.innerText = reserva.check_in

    console.log(`Entrada: ${reserva.check_in}`) //console
})

checkOut.addEventListener("change", function () {
    reserva.check_out = new Date(
        `${checkOut.value} 00:00:00`
    ).toLocaleDateString("pt-BR")
    msgCheckOut.innerText = reserva.check_out

    console.log(`Saida: ${reserva.check_out}`) //console
})

quantidadePessoas.addEventListener("change", function () {
    reserva.pessoas = quantidadePessoas.value
    qtdPessoas.innerText = reserva.pessoas
})

const quartoIds = Object.values(quarto).map((item) => item.id)

document.addEventListener("change", function (e) {
    let el = e.target
    if (quartoIds.find((item) => item === el.id)) {
        msgQuarto.innerText = el.value
    }
})
