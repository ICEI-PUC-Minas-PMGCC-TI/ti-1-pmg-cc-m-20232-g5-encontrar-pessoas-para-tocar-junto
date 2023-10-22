$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

const expandir = document.querySelector('#expandir')
const popup = document.querySelector('.popup-wrapper')
const popupclose = document.querySelector('.popup-close')
 
    expandir.addEventListener('click', () => {
        popup.style.display = 'block'
    })

    popupclose.addEventListener('click', () => {
        popup.style.display = 'none'
    })

   