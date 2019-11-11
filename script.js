$(document).ready(function() {

  let windowsize = $(window).width();

  $(window).resize(function() {
    let windowsize = $(window).width();
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

  $('.filters .dropdown-item').click(function(e) {
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

  $('.filters .form-check-input').click(function() {
    let name = $(this).siblings('.form-check-label').text();
    if (!$(this).is(':checked')) {
      $('.tags .tag_name').filter(function() {
          return $(this).text() == name;
      }).parent('li').remove();
    } else {
      $('.tags ul').append('<li><span class="tag_name">'+ name + '</span><span class="tag_cross">&#10005;</span></li>');
    }
  });

  $('.tags').on('click', '.tag_cross', function() {
    let li = $(this).parent('li');
    let name = li.children('.tag_name').text();
    $('.filters .dropdown-item').filter(function() {
      return $(this).children('.filters_name').text() == name;
    }).removeClass('bold');
    $('.filters .form-check-input').filter(function() {
      return $(this).siblings('.form-check-label').text() == name;
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
});
