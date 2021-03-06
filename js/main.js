$(document).ready(function() {
  $('.feed-slide').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    prevArrow:"<div class='arrow-left'><i class='fas fa-angle-left'></i></div>",
    nextArrow:"<div class='arrow-right'><i class='fas fa-angle-right'></i></div>",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          }
      }
    ]
  });

  $('.counter').countUp();

  $('.social-link .icon').click(function() {
    var item = $(this).parent();
    if ($(item).hasClass('active')) {
        $(item).removeClass('active');
    } else {
        var socialLink = $(item).parents('.social-link');
        socialLink.find('li .item').removeClass('active');
        $(item).addClass('active');
    }
  })

  $('.messenger-icon').click(function() {
    $(this).parents('.messenger-wrapper').find('.messenger-body').toggleClass('active');
  })
  $('.messenger-close').click(function() {
    $(this).parents('.messenger-body').removeClass('active');
  })

  $('#loginModal').click(function() {
    this.modal('show');
    $(function() {
      $('[data-toggle="tooltip"]').tooltip()
    })
  })

  $('.nav-item').click(function() {
    var menu = $(this).parent();
    menu.find("li").removeClass('active');
    $(this).addClass('active');
    console.log('test');
    $("#hideheader").hide();
    $("#showheader").show();
  })

  $('#hideheader').click(function() {
    $('#showheader').show();
    $(this).hide();

    if ($(window).width() < 417) {
      $('#header').removeClass('active');
    }
  })

  $('#showheader').click(function () {
    $('#hideheader').show();
    $(this).hide();

    if ($(window).width() < 417) {
      $('#header').addClass('active');
    }
    
  })

  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');

    if ($(window).width() < 417) {
      $('#header').removeClass('active');
    }
  });

})