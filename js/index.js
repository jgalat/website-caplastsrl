$(function () {

  var nav = $('nav').find('.left-side'),
      menuLinks = nav.find('a'),
      navOuterHeight = nav.outerHeight() / 2.5;


  menuLinks.click(function (evnt) {
    var regex = new RegExp("(#[a-z\-]*)", "gi"),
        href = regex.exec($(this).attr('href'))[0];

    if (href) {
      evnt.preventDefault();

      var offsetTop = href === "#" ? 0 : $(href).offset().top-navOuterHeight;

      $('html, body')
        .stop()
        .animate({ scrollTop: offsetTop }, 500);
    }

  });

  $("#about-us").find('.info').viewportChecker({
    classToAdd: 'animation-visible animated fadeInUp',
    classToRemove: 'animation-hidden',
    offset: 100
  });
});

$(window).on("load", function () {
  $('.landing-container').find('.caplast-lg').viewportChecker({
    classToAdd: 'animation-visible animated fadeIn',
    classToRemove: 'animation-hidden'
  });
});
