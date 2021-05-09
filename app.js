//menu button on mobile

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.navigation ul').classList.toggle('show');

    let icon = document.querySelector('.menu i');

    if (icon.classList == 'fa fa-bars') {
        icon.className = 'fa fa-times';
    } else {
        icon.className = 'fa fa-bars';
    }
})