var captionLength = 0;
var caption2 = 'An Aspiring Software Engineer'
var captionEl = $("#caption");


$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    type(caption2);
});




function type(caption) {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) 
        setTimeout(function(){type(caption)}, 100);
    else 
        captionLength = 0;
}


function erase(caption) {
    captionEl.html(caption.substr(0, captionLength--));
    if(captionLength >= 0)
        setTimeout(function(){erase(caption)}, 100);
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