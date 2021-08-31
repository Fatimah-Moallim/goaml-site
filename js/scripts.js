/* Constellation */
function showConstellation() {
  // Init plugin
  // var height = $('.left-side').height() * (90 / 100);
  // var width = $('.left-side').innerWidth();
  // var height = $('.main').outerHeight(true);
  // var width = $('.main').outerWidth(true);
  var height = $('.constellation').height();
  var width = $('.constellation').width();
  console.log(height, width);
  // width = width > window.innerWidth ? window.innerWidth : width;
  $('canvas').constellation({
    star: {
      color: 'rgba(0, 200, 170, .9)',
      width: 1.5
    },
    line: {
      color: 'rgba(255, 255, 255, .4)',
      width: 0.2
    },
    height: height,
    width: width,
    // radius: 150,
    length: (width / 10),
    radius: (width / 8),
    velocity: 0.5,
    distance: 160,
  });
}


$(window).on('resize', function() {

  setTimeout(function() {
    var onMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      onMobile = true;
    }
    if ((onMobile === false)) {
      // Init plugin
      showConstellation();
    } else {}
  }, 0);

});

$(document).ready(function() {

  showConstellation();

});
