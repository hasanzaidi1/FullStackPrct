

$("h1").addClass("big-title");



$("button").click(function(){
    $("h1").css("color", "pink");
    $("h1").css("font-style", "italic");
    $("h1").slideUp().slideDown().animate({opacity:0.5})
})

// Alternative to do the same thing
// 
// $("button").click(function(){
//     $("h1").css({
//       "color": "pink",
//       "font-style": "italic"
//     });
//   });

$("h1").click(function() {
    $("h1").css("color", "green");
})



$(document).keypress(function(event){
    $("h1").text(event.key)
    $("h1").fadein(event.key)

})


$("h1").on("mouseover", function(){
    $("h1").css("color", "blue");
})
