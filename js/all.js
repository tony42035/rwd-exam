$(document).ready(function () {
    $(".hamburger-btn").click(function (e) { 
        e.preventDefault();
        $("body").addClass("active");
    });

    $(".hamburger-menu .close-menu").click(function (e) { 
        e.preventDefault();
        $("body").removeClass("active");
    });

});

