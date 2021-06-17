$('form').on('submit', (e) => {
    e.preventDefault()

    $('#connect-title').fadeOut(500, function() {
        $('#connect-title h2').text('Talk to you soon.')
        $(this).fadeIn(500)
    })
    $('form').animate({height: '0px'}, 1000, () => {
        $('form').hide()
        // $('#connect-title').text('Thank you.').fadeTo(1000, 1)
    })
    
  
})