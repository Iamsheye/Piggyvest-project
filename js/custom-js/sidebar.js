$('.custom-burger').click(function () {
    ($('.overlay-bar').hasClass('expand')) ? $('.overlay-bar').removeClass('expand').addClass('reduce') : $('.overlay-bar').removeClass('reduce').addClass('expand')
    // $('.overlay-bar').toggleClass('d-none')
    $('.line').toggleClass('white-line')
});