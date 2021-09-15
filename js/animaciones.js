// INTENTANDO QUE SE PRODUZCA UNA ANIMACIÓN SOBRE EL BOTÓN DE LAS CARDS
/*
$(".btn").mouseover(function() {
    $(".btn").animate({
        color: '#357376',
        backgroundColor: '#E5DFDF',
    }, "slow");        
});*/

$(".card-img-top").mouseover(() => {
    $(".btn").animate({
        'font-size':'2em'}, 300)
});


// ANIMACIÓN EN HOVER DE ZOOM IN Y OUT A LOS TITULOS DE "RECOMENDADOS" Y "NOVEDADES" DEL INDEX

$("#title-recomendados").mouseover(() =>
$("#title-recomendados").animate({'zoom': 0.9}, 400)
                        .delay(100)
                        .animate({'zoom': 1}, 400)                        
);

$("#title-novedades").mouseover(() =>
$("#title-novedades").animate({'zoom': 0.9}, 400)
                     .delay(100)
                     .animate({'zoom': 1}, 400)                        
);

// ANIMACIÓN PARA QUE AL HACER CLICK EN EL TÍTULO DE LA CATEGORÍA EN LA HOME APAREZCA CON FADE BOTÓN DE VER MÁS 

/* $("#title-ensayos-destacados").click(() => {
    $(".view-more-ensayos").fadeIn("slow");
});

$("#title-manuales-destacados").click(() => {
    $(".view-more-manuales").fadeIn("slow");
});

$("#title-guiones-destacados").click(() => {
    $(".view-more-guiones").fadeIn("slow");
});

$("#title-ficciones-destacados").click(() => {
    $(".view-more-ficciones").fadeIn("slow");
});*/


// ANIMACIÓN PARA QUE AL HACER HOVER EN EL TÍTULO DE LA CATEGORÍA EN LA HOME APAREZCA CON FADE BOTÓN DE VER MÁS 

$("#title-ensayos-destacados").mouseover(() => {
    $(".view-more-ensayos").fadeIn("slow")
});

$("#title-manuales-destacados").mouseover(() => {
    $(".view-more-manuales").fadeIn("slow")
});

$("#title-guiones-destacados").mouseover(() => {
    $(".view-more-guiones").fadeIn("slow")
});

$("#title-ficciones-destacados").mouseover(() => {
    $(".view-more-ficciones").fadeIn("slow")
});