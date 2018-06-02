/* Variables*/
var json1 = 'https://cdn.rawgit.com/DAWdFarras/lenguajeMarcas/5d42937a/json/new1.json';
var json2 = 'https://cdn.rawgit.com/DAWdFarras/lenguajeMarcas/5d42937a/json/new2.json';
var json3 = 'https://cdn.rawgit.com/DAWdFarras/lenguajeMarcas/5d42937a/json/new3.json';
var json4 = 'https://cdn.rawgit.com/DAWdFarras/lenguajeMarcas/5d42937a/json/new4.json';
var json5 = 'https://cdn.rawgit.com/DAWdFarras/lenguajeMarcas/5d42937a/json/new5.json';
var jsonList = [json1, json2, json3, json4, json5];
var contador = 0;
var contadorTotal = 0;
var autoRef = false;

/* Función Windows onload */
$(function () {

$('#loadButton').click(function () {
    cargarMas();
});
$('#autoRefresh').click(autoRef=true)
$(window).scroll(function () {
    cargarScroll();
});
/*Cargar imagenes despues de cargar página*/
/*
$('.lazy').Lazy({
    scrollDirection: 'vertical',
    effect: 'fadeIn',
    effectTime: 1000,
    visibleOnly: true,
    onError: function(element) {
        console.log('error loading ' + element.data('src'));
    }
});*/




});

/**
* Función para capturar el evento on click del boton "LOAD MORE NEWS"
*/
function cargarMas() {

if (contadorTotal <= 10) {
    //esta linea no tiene pinta de ser relevante
    //$('#load').removeClass('d-none').addClass('d-block');
    if (contador < jsonList.length) {
        $.getJSON(jsonList[contador], function (jsonObject) {
            
            pintar(jsonObject);
            /*
            $('.lazy').Lazy({
                
                scrollDirection: 'vertical',
                effect: 'fadeIn',
                effectTime: 1000,
                visibleOnly: true,
                onError: function(element) {
                    console.log('error loading ' + element.data('src'));
                }
            })*/;
            //esta linea no tiene pinta de ser relevante
            //$('#load').removeClass('d-block').addClass('d-none');
        });

        
        contador++;
        contadorTotal++
        if (contador == 3) {
            contador = 0
        };
    };
}else{
    alert("There isn´t more news.")
};
};

/* Funcion para cargar el json con los contenedores dentro de una variable y luego introducirla en la página web*/
function pintar(json) {
/*inicio row  */
var datos = "<div id='someMoreNews' class='container-fluid'>";



$.each(json.news, function (i, news) {

    datos += "<div class='row secondaryNew'><div class='col-sm-5'><img class='img-responsive img-rounded' src='"+news.img+"' /></div><div class='col-sm-7'><div class='row'><h1>"+news.title+"</h1></div><div class='row'><div class='col-sm-12 bg-light' id='newsText'>"+news.description+"</div></div><div class='row'><div class='col-sm-12 bg-light' id='links'>"+news.date+"</div></div></div></div>";
});                                                                                                                                                                   
/*finalizacion row*/
datos += "</div>";
$('#main').append(datos);
}

/**
* Función para controlar si el scroll esta a menos de 100 pixeles del final de la pantalla, y si tiene seleccionado la opcion "cargar con Scroll"
*/
function cargarScroll() {

    if (($(window).scrollTop() + $(window).height() > $(document).height() - 100) && autoRef ) {
        cargarMas();
    };

};
