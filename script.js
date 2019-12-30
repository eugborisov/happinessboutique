$(document).ready(function() {

  let windowsize = $(window).width();

  $(window).resize(function() {
    let windowsize = $(window).width();
  });

  $('.search-icon').click(function() {
    let windowsize = $(window).width();
    if (windowsize < 1025) {
      $('.mobile-search:hidden').show('fast');
      $('.mobile-search input').focus();
    } else {
      $('.desktop-search:hidden').show('fast');
      $('.desktop-search input').focus();
    }
  });

  $('.desktop-search input').blur(function() {
    $('.desktop-search').hide('fast');
  });

  $('.mobile-search input').blur(function() {
    $('.mobile-search').hide('fast');
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 100,
    to: 900,
    skin: "round",
    prettify_enabled: true,
    force_edges: true,
    hide_min_max: true,
//    hide_from_to: true,
    postfix: '€'
  });

  $('#from').text($('.irs-from').text());
  $('#to').text($('.irs-to').text());

  $('.js-range-slider').change(function() {
    $('#from').text($('.irs-from').text());
    $('#to').text($('.irs-to').text());
  });


  if (windowsize > 576) {
    $('.filters .dropdown').each(function() {
      let width = $(this).children('.dropdown-menu').width();
      $(this).css('width', width);
    });
  }

  $('.menu-icon').click(function(){
    let attr = $('.mobile-menu').attr('aria-expanded') ==='true';
    $('.mobile-menu').attr('aria-expanded', !attr);
  });

  $('.filters .dropdown-item:not(.filter-item)').click(function(e) {
    e.preventDefault();
    let name = $(this).children('.filters_name').text();
    if ($(this).hasClass('bold')) {
      $('.tags .tag_name').filter(function() {
          return $(this).text() == name;
      }).parent('li').remove();
    } else {
      $('.tags ul').append('<li><span class="tag_name">'+ name + '</span><span class="tag_cross">&#10005;</span></li>');
    }
    $(this).toggleClass('bold');
  });

  $('.filters .custom-control-input').click(function() {
    let name = $(this).siblings('.custom-control-label').text();
    if (!$(this).is(':checked')) {
      $('.tags .tag_name').filter(function() {
          return $(this).text() == name;
      }).parent('li').remove();
    } else {
      $('.tags ul').append('<li><span class="tag_name">'+ name + '</span><span class="tag_cross">&#10005;</span></li>');
    }
    $(this).closest('.dropdown-menu').addClass('show');
    $(this).closest('.dropdown').addClass('show').find('button').attr('aria-expanded', 'true');
  });

  $('.tags').on('click', '.tag_cross', function() {
    let li = $(this).parent('li');
    let name = li.children('.tag_name').text();
    $('.filters .dropdown-item').filter(function() {
      return $(this).children('.filters_name').text() == name;
    }).removeClass('bold');
    $('.filters .custom-control-input').filter(function() {
      return $(this).siblings('.custom-control-label').text() == name;
    }).prop('checked', false);
    li.remove();
  });

  $('.carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
  });

  if ($(window).width() > 768) {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 600) {
        $('.up').show();
      } else {
        $('.up').hide();
      }
    });
  }

  $('.up').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});
