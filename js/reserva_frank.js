const checkIn = document.querySelector('#check_in')
const checkOut = document.querySelector("#check_out")
const quantidadePessoas = document.querySelector('#quantidade_pessoas')
const quarto = document.querySelectorAll('input[type=radio]')


const reserva = {
    check_in: '',
    check_out: '',
    apartamento: '',
    pessoas: '',
}

checkIn.addEventListener('change', function() {
    reserva.check_in = checkIn.value
    console.log(`Entrada: ${reserva.check_in}`);
} )

checkOut.addEventListener('change', function () {
    reserva.check_out = checkOut.value
    console.log(`Saida: ${reserva.check_out}`);
})

quantidadePessoas.addEventListener('change', function () {
    reserva.quantidadePessoas = quantidadePessoas.value
    console.log(reserva.quantidadePessoas)
})

document.addEventListener('change', function (e) {
    console.log();
})