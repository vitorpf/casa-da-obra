$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        alwaysShowClose: true,
        showArrows: true
    });
});

$('.logo-mobile a, .navbar-nav li a').click(function(e){
    e.preventDefault(); // Cancelar o comportamento padrão
    var nomeTarget      = $(this).attr('href'); // Pegar o nome do atributo = (this) attr(nome do atributo)
    var distanciaTarget = $(nomeTarget).offset().top; // Pegar a posição = offset() .top ou .left

    $('html, body').animate({
        scrollTop: distanciaTarget
        
    },
    800);
    $('div.show').removeClass();
    $('#menu').addClass('collapse navbar-collapse');

});



$(document).scroll(function(){
    var servico = $("#servico").offset().top;
    var contador_scroll  = $(document).scrollTop();
    
    if(servico > contador_scroll){
        $('header').css('background-color', 'rgba(0, 0, 0, 0)');

    }
    else{
        $('header').css('background-color', 'rgba(0, 0, 0, 0.3)');

    }
});

