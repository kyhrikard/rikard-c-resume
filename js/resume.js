$(document).ready(function () {

    let scrollLink = $('.smoothScroll');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 700);
    });

    // Closes responsive menu when a scroll trigger link is clicked
    scrollLink.click(function () {
        $('.navbar-collapse').collapse('hide');
    });

});