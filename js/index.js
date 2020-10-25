var captionLength = 0;
var caption = "An Aspiring Software Engineer";
var captionEl = $("#caption");

$(document).ready(function () {
    setInterval("cursorAnimation()", 600);
    type();
});

$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if (captionLength < caption.length + 1) setTimeout("type()", 70);
    else captionLength = 0;
}

function cursorAnimation() {
    $("#cursor")
        .animate(
            {
                opacity: 0,
            },
            "fast",
            "swing"
        )
        .animate(
            {
                opacity: 1,
            },
            "fast",
            "swing"
        );
}

var shapes = [".android", ".ai", ".embedded", ".DB", ".cloud", ".web"];

function randomShapes() {
    var currentY = (Math.floor(Math.random() * 100) + 100).toString();
    anime({
        targets: shapes[Math.floor(Math.random() * 6) - 1],
        keyframes: [
            {
                translateY: "-=" + currentY,
                rotate: "-=360",
                easing: "easeOutCubic",
                duration: 600,
            },
            {
                translateY: "+=" + currentY,
                rotate: "-=360",
                easing: "easeInCubic",
                duration: 600,
            },
        ],

        delay: 300,
        complete: randomShapes,
    });
}

randomShapes();
