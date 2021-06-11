$('#connect-button').on('click', () => {
    $('html,body').animate({
        scrollTop: $('#connect').offset().top
    }, 500)
})

$('.welcome__arrow').on('click', () => {
    $('html,body').animate({
        scrollTop: $('#about').offset().top
    }, 500)
})