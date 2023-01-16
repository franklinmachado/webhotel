const chales = document.querySelectorAll("input[name=chale]");

const reserva = {
    checkIn: null,
    checkOut: null,
    quantidadeDePessoas: 0,
    quarto: {
        tipo: null,
        valor: 0
    },
    total: 0,
}

chales.forEach((chale) => {
    chale.addEventListener("click", () => {
        if (chale.checked) {
            reserva.quarto.tipo = chale.value;
            console.log(reserva);
        }
    })
})