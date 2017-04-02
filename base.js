$(document).ready(function () {

    // Open navbarSide when button is clicked
    $('#sideToggle').on('click', function () {
        $('#navbarSide').addClass('toggleSide');
    });

    // Close navbarSide when the outside of menu is clicked
    $('.close').on('click', function () {
        $('#navbarSide').removeClass('toggleSide');
    });
    
    $('.mask').on('click', function () {
        $('#navbarSide').removeClass('toggleSide');
    });

});
