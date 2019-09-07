$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('#navbar').css('opacity', .8);
  } else {
    $('#navbar').css('opacity', 1);
  }
})

// Right button disabled to prevent from saving images
function nocontext(e) {
  var clickedTag = (e == null) ? event.srcElement.tagName : e.target.tagName;
  if (clickedTag == "IMG")
    return false;
}
document.oncontextmenu = nocontext;