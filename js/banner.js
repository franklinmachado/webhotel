const images = [
    'home1.jpg',
    'home2.jpg',
    'home3.webp',
    'home4.jpg',
    'home5.webp',
]

const slogans = [
    'Encontre a paz no meio da natureza exuberante do sul de Minas Gerais no Montseny',
    'Viva a tranquilidade rodeado pela natureza exuberante do sul de Minas Gerais no Montseny',
    'Desfrute de uma escapada tranquila no meio da natureza exuberante do sul de Minas Gerais no Montseny',
    'Escape para o Montseny e encontre a paz e tranquilidade no meio da natureza exuberante do sul de Minas Gerais',
    'Sinta-se renovado e tranquilo no meio da natureza exuberante do sul de Minas Gerais no Montseny Hotel',
]

const heroImage = document.querySelector('.hero-image')
const slogan = document.querySelector('#slogan')

function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length)
    heroImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/${images[randomIndex]}')`
}

function randomizeSlogan() {
    const sloganElement = document.getElementById('slogan')
    const randomIndex = Math.floor(Math.random() * slogans.length)
    sloganElement.innerHTML = slogans[randomIndex]
}

randomizeSlogan()
displayRandomImage()
