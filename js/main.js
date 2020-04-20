$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});

$(document).ready(function() {
    $('.footer__menu-title').click(function(event) {
        if($('.footer__container').hasClass('one')){
            $('.footer__menu-title').not($(this)).removeClass('active');
            $('.footer__menu-text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});