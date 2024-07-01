// Slider

$('.slickSlider').slick({
  infinite: false,
  speed: 1000,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
      }
    }
  ],
  prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
});

// sticky header

function stickyHeader() {
  if ($('.header').length) {
    var sticky = $('header'),
      scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  };
}

// Sidebar / mobile menu

function sidebar() {
  if ($("body").hasClass("sidebar-active")) {
    $("body").removeClass("sidebar-active");
  } else {
    $("body").addClass("sidebar-active");
  }
}
$('#sidebar').click(function () {
  event.stopPropagation();
});

// Window scroll function

jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader()
  })(jQuery);
});

// Clients Slider

$('.client-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000
});

// Brands Slider

$('.brands-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: false,
  prevArrow: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


//skill bar animation

$(window).on("scroll", function () {
  $(".progress-bar").each(function () {
    var scrollTop = $(window).scrollTop();
    var offsetTop = $(this).offset().top;
    var windowHeight = $(window).height();
    var skillBarHeight = $(this).parent().outerHeight();
    var progressWidth = 0;

    if (scrollTop > (offsetTop - windowHeight + skillBarHeight)) {
      var percentage = $(this).data("percentage");
      progressWidth = percentage + "%";
    }

    $(this).css("width", progressWidth);
  });
});


// Scroll to top
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('header nav ul li');

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(li => {
    li.classList.remove('active');
    if (li.querySelector('a').getAttribute('href').substring(1) === current) {
      li.classList.add('active');
    }
  });

  // Scroll top button show/hide
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

