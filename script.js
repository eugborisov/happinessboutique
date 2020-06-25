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
      let width = $(this).find('.dropdown-menu').width();
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

  $('.vertical').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true
  });

  $('.home-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    pauseOnDotsHover: true
  });

  if ($(window).width() > 768) {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 600) {
        $('.up').show();
      } else {
        $('.up').hide();
      }
    });
  } else {
    $('.grid.instagram').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1
    })
  }

  $('.up').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  if ($('.rating').length > 0) $('.rating').raty({
    start: 3.3,
    showHalf: true,
    path: 'raty/images/',
    scoreName: 'score',
    score: 4,
    readOnly: true
  });


  if ($('.rating-review').length > 0) $('.rating-review').raty({
    start: 3.3,
    showHalf: true,
    path: 'raty/images/',
    half: true,
    scoreName: 'score',
    score: 0,
    single: false
  });

  $('.vertical img').click(function() {
    $('.main img').attr('src', $(this).attr('src'))
  });

  $('[data-toggle="tooltip"]').tooltip();

  if ($('.table').length > 0) {

    $('.remove').click(function() {
      $(this).closest('tr').remove();
    });

    $('.table .quantity').each(function() {
      if (Number($(this).children('span').text()) === 1) {
        $(this).find('.arrow-down').hide();
      }
    });

    $('.table .quantity button').click(function() {
      let span = $(this).closest('.arrows').siblings('span');
      let oldAmount = Number(span.text());
      let newAmount = ($(this).hasClass('arrow-up')) ? oldAmount + 1 : oldAmount - 1;
      span.text(newAmount);
      if (newAmount === 1) $(this).hide();
      else if (newAmount === 2) $(this).siblings('.arrow-down').show();
    });
  }
});
