//preloader
$(document).ready(function() {
  $('#preloader').fadeOut(400);
});


// Ширина текста в меню
var lis = document.querySelectorAll('ul li');
var li;

for (var i = 0; i < lis.length; i += 1) {
	li = lis.item(i);
  li.style.fontWeight = 700;
  
  li.style.width = li.getBoundingClientRect().width + 'px'; 
  li.style.fontWeight = 400;
}

//popup
document.addEventListener('DOMContentLoaded', function() {
  const popup = document.querySelector('.popup');
  const popupBtn = document.querySelector('.popup__btn');

  popup.addEventListener('click', function(event) {
    if (event.target === this) {
      popup.classList.remove('popup__open');
    }
  });
 
  popupBtn.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('popup__open');
  });

  
  
});

//burger

$(document).ready(function(){
  $('.header__menu').click(function(event){
    $('.menu').toggleClass('active__menu');
   
  });
  var headerMenu = $('.header__menu');
  var menuImage = headerMenu.find('.burger__img');
  var menuImageSrc = menuImage.attr('src'); // Сохраняем исходный src изображения

  headerMenu.on('click', function() {
      if (menuImage.attr('src') === menuImageSrc) {
          menuImage.attr('src', 'assets/img/close.png');
      } else {
          menuImage.attr('src', menuImageSrc);
      }
  });
});

//scroll bottom
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.offer__wrapp');

  btn.addEventListener('click', function(e) {
      e.preventDefault();
      const firstSection = document.querySelector('footer'); 
      firstSection.scrollIntoView({ behavior: 'smooth' });
  });
});

//tabs
$(function() {
  $('.tab__item').on('click', function(e) {
    e.preventDefault();
   
    
    $('.tab__item').removeClass('active__item');
    $(this).addClass('active__item');
    

  });
});

//tabs color
$(function() {
  $('.tab__item_mod').on('click', function(e) {
    e.preventDefault();
    
    
    $('.tab__item_mod').removeClass('active__item_mod');
    $(this).addClass('active__item_mod');
    

  });
});

//header

$(function() {
  let header = $('.header');
  let headerHeight = header.outerHeight(); // Use outerHeight() to include padding, border, and margin
  
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('scrolled');
     $('body').css({
        'paddingTop': headerHeight + 'px'
     });
    } else {
     header.removeClass('scrolled');
     $('body').css({
      'paddingTop': 0
     })
    }
  });
});
