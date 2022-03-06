/* Constellation */
function showConstellation() {
  // Init plugin
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
    velocity: 0.6,
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

  $('body').keypress(function(e){
    console.log('Enter Key');
    const keycode = (e.keyCode ? e.keyCode : e.which);
    if(keycode == '13'){
      // $('.go-here')[0].('click');
        $('.go-here').get(0).click();
    }
  });

});
