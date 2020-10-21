var captionLength = 0;
var caption = 'An Aspiring Software Engineer'
var captionEl = $("#caption");


$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    type();
});

function hoverIn (class1,class2,html){
    $(class1).fadeOut("fast",function(e){
        $(class2).html(html);
    })
}

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});



function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) 
        setTimeout('type()', 70);
    else 
        captionLength = 0;
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}