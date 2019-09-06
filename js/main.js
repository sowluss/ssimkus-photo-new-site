$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('#navbar').css('opacity', .8);
  } else {
    $('#navbar').css('opacity', 1);
  }
})