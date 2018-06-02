var json0 = 'https://cdn.rawgit.com/DAWdFarras/lenguajeMarcas/5d42937a/json/new1.json';
var json1 = 'https://cdn.rawgit.com/DAWdFarras/lenguajeMarcas/5d42937a/json/new2.json';
var json2 = 'https://cdn.rawgit.com/DAWdFarras/lenguajeMarcas/5d42937a/json/new3.json';
var json3 = 'https://cdn.rawgit.com/DAWdFarras/lenguajeMarcas/5d42937a/json/new4.json';
var json4 = 'https://cdn.rawgit.com/DAWdFarras/lenguajeMarcas/5d42937a/json/new5.json';
var jsonList = [json0, json1, json2, json3, json4];
var total = 0;
var autoRef = false;

$(function () {
    $('#loadButton').click(function () {
        load();
    });
    $('#autoRefresh').click(function () {
            autoRef=true;
    });
    $(window).scroll(function () {
        chargeOnScroll();
    });
});

function load() {
    if (total < jsonList.length) {
        $.getJSON(jsonList[total], function (jsonObject) {
            charge(jsonObject);
        });
        total++;
    };
};

function charge(json) {
   data="";
      $.each(json.news, function (i, news) {
         data += "<div class='row secondaryNew'><div class='col-sm-5'><img class='img-responsive img-rounded' src='"+news.img+"' /></div><div class='col-sm-7'><div class='row'><h1>"+news.title+"</h1></div><div class='row'><div class='col-sm-12 bg-light' id='newsText'>"+news.description+"</div></div><div class='row'><div class='col-sm-12 bg-light' id='links'>"+news.date+"</div></div></div></div>";
      });                                                                                                                                                                   
   $('#someMoreNews').append(data);
};

function chargeOnScroll() {
    if (($(window).scrollTop() + $(window).height() > $(document).height() - 100) && autoRef ) {
        load();
    };
};
