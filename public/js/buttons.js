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

$(document).scroll(() => {
    if ($(document).scrollTop() > 500) {
        return $('.welcome__arrow').fadeOut()
    }

    $('.welcome__arrow').fadeIn()
})