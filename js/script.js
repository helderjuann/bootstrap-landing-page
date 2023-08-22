$(function() {

    disableTextS();

    function disableTextS() {
        $('body').css('-webkit-user-select','none');
        $('body').css('-moz-user-select','none');
        $('body').css('-ms-user-select','none');
        $('body').css('-o-user-select','none');
        $('body').css('user-select','none');
    }

    scrollPage(); 

    function scrollPage() {
        $('nav a').click(function(){
            var href = $(this).attr('href');
            var offSetTop = $(href).offset().top;
    
            $('html, body').animate({'scrollTop':offSetTop});
            return false;
        });
    }
})
