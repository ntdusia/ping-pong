$(document).ready(menu);

function menu(){
    $("<div/>").attr("id","menu").appendTo("body");
    var img = $("<img/>").attr("src","images/ping.jpg").appendTo("#menu");
    var button = $("<button/>").attr("click","id").css({
        "position":"obsolute",
        "top":"40%",
        "left":"50%",
        "font-size":"100%"
    }).text("start").appendTo("body");

    button.click(function(){
        $("body").empty();
        game();
    })
}