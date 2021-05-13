$(function(){
    $('nav a, .bnt1-text a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offSetTop});
        return false;
    });
})