$(window).scroll(function() {
  if ($(".navbar").offset().top > 30) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1300, 'easeInOutExpo');
    event.preventDefault();
  });
});

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
