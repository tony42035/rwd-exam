$(document).ready(function () {
    $(".hamburger-btn").click(function (e) { 
        e.preventDefault();
        $("body").toggleClass("active");
    });
});