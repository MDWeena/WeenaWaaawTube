const show = document.querySelector('#show');
// console.log('show');

const sideBar = document.querySelector('.sidebar');

show.addEventListener('click', function () {
    sideBar.classList.toggle('guy-show')
})