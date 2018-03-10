$(document).ready(function(){
  var colors = [ '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  var i=0;
  $("#r-btn").click(function(){
    $("body").css({"background-color":colors[i%11]});
    $(".btn").css({"background-color":colors[i%11]});
    $("#txt").css({"color":colors[i%11]});
    $(".fa-quote-left").css({"color":colors[i%11]});
    $(".text-author").css({"color":colors[i%11]});
    i++;
    getQuote();
  });
  
  var content="";
    var author="";
    var getQuote = function(){
        $.getJSON("https://sslapi.hitokoto.cn/?encode=json",function(json){
            content = json["hitokoto"];
            author = json["from"];
            $("#txt").html(content);
            $("#author").html("-"+author);
        });
    }
});