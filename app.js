//menu button on mobile

document.querySelector('.menu').addEventListener('click', () => {
    console.log('menu clicked');
    document.querySelector('.navigation ul').classList.toggle('show');
})