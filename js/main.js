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
        breakpoint: 768,
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

  $('.menu-item').click(function() {
    var menu = $(this).parent();
    menu.find("li").removeClass('active');
    $(this).addClass('active');
  })
})

function showheader() {
  document.getElementById("hideheader").style.display = "block";
  document.getElementById("hideheader").style.width = "5px";
  document.getElementById("showheader").style.display = "none";
  document.getElementById("navbarNav").style.display = "block";
}
function hideheader() {
  document.getElementById("hideheader").style.display = "none";
  document.getElementById("showheader").style.display = "block";
  document.getElementById("navbarNav").style.display = "none";
}
function hidenav() {
  document.getElementById("navbarNav").style.display = "none";
  document.getElementById("hideheader").style.display = "none";
  document.getElementById("showheader").style.display = "block";
}
