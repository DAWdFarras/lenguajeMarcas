/* Variables*/
var json0 = 'https://cdn.rawgit.com/DAWdFarras/lenguajeMarcas/5d42937a/json/new1.json';
var json1 = 'https://cdn.rawgit.com/DAWdFarras/lenguajeMarcas/5d42937a/json/new2.json';
var json2 = 'https://cdn.rawgit.com/DAWdFarras/lenguajeMarcas/5d42937a/json/new3.json';
var json3 = 'https://cdn.rawgit.com/DAWdFarras/lenguajeMarcas/5d42937a/json/new4.json';
var json4 = 'https://cdn.rawgit.com/DAWdFarras/lenguajeMarcas/5d42937a/json/new5.json';
var jsonList = [json0, json1, json2, json3, json4];
var contador = 0;
var contadorTotal = 1;
var autoRef = false;

$(function () {
    $('#loadButton').click(function () {
        cargarMas();
    });
    $('#autoRefresh').click(function () {
        autoRef=!autoRef;
    });
    $(window).scroll(function () {
        cargarScroll();
    });
});

function cargarMas() {
    if (contador < jsonList.length) {
        $.getJSON(jsonList[contador], function (jsonObject) {
            pintar(jsonObject);
        });
        contador++;
    };
};

function pintar(json) {
   datos="";
      $.each(json.news, function (i, news) {
         datos += "<div class='row secondaryNew'><div class='col-sm-5'><img class='img-responsive img-rounded' src='"+news.img+"' /></div><div class='col-sm-7'><div class='row'><h1>"+news.title+"</h1></div><div class='row'><div class='col-sm-12 bg-light' id='newsText'>"+news.description+"</div></div><div class='row'><div class='col-sm-12 bg-light' id='links'>"+news.date+"</div></div></div></div>";
      });                                                                                                                                                                   
   $('#someMoreNews').append(datos);
}

function cargarScroll() {
    if (($(window).scrollTop() + $(window).height() > $(document).height() - 100) && autoRef ) {
        cargarMas();
    };
};
