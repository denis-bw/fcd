
$(document).ready(function () {
    
    $('.navbar-toggler').on('click', function () {
        $(this).toggleClass('collapsed'); 
        $('.navbar-collapse').toggleClass('show'); 
    });

    $(document).on('click', function (event) {
        var $target = $(event.target); 
        
        if (!$target.closest('.navbar-collapse').length && !$target.closest('.navbar-toggler').length) {
            // Закриваємо меню, якщо клікнуто поза ним
            $('.navbar-collapse').removeClass('show');
            $('.navbar-toggler').addClass('collapsed');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
var map = L.map('map').setView([50.4501, 30.5234], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([50.4501, 30.5234]).addTo(map)
    .bindPopup('Ми тут.')
    .openPopup();
});
