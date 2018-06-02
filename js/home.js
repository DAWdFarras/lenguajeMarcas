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

$(function () {
    $('#loadButton').click(function () {
        cargarMas();
    });
    $('#autoRefresh').click(function () {
        autoRef=true
    });
    $(window).scroll(function () {
        cargarScroll();
    });
});

function cargarMas() {
   if (contadorTotal <= 10) {
      if (contador < jsonList.length) {
         $.getJSON(jsonList[contador], function (jsonObject) {
            pintar(jsonObject);
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
