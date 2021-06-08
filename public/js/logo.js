$(window).on('scroll', ()=> {
   

    if ( $(window).scrollTop() < $('.projects').offset().top ) {
        return $('#red-logo').css('opacity', percentOfHeaderInElement($('.about')))
    }

    $('#red-logo').css('opacity', percentOfHeaderInElement($('.connect')) * -1)
})

const percentOfHeaderInElement = (element) => {
    let headerHeight = $('header').height()
    let elementFromTop = $(element).offset().top
    let headerBottom = $(window).scrollTop() + headerHeight
    return (headerBottom - elementFromTop) / headerHeight
}