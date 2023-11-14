var listenLink = $("#links");

// navbar




$(document).ready(function() {
  var nav = $("#myTopHeader");
  var navToggleId = $('#navToggleId');
  var body = $('body');

  $('.nav-toggle').on('click', function() {
      $(this).toggleClass('opened');
      if ($(this).hasClass('opened')) {
          listenLink.addClass('opened');
          nav.css('height', '100%');
          nav.css('background-color', '#070A1D33');
          body.css('overflow', 'hidden');
      } else {
          listenLink.removeClass('opened');
          nav.css('height', '80px');
          nav.css('background-color', 'rgba(7, 10, 29, 0)');
          body.css('overflow', 'auto');
      }
  });

  // Додано обробник кліків для елементів з класом '.my-class'
  $('.my-class').click(function() {
      navToggleId.removeClass('opened');
      listenLink.removeClass('opened');
      nav.css({
          'height': '80px',
          'background-color': 'rgba(7, 10, 29, 0)'
      });
      body.css('overflow', 'auto');
  });
});




var header = $("#myTopHeader"),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('hide');
	} else {
		header.removeClass('hide');
	}
	scrollPrev = scrolled;
});





// tp element




function handleResizeNav() {
  
  if ( window.innerWidth < 1000) {
    document.getElementById("links").appendChild(document.getElementById("singIn"));
    
  } else {
    
    document.getElementById("actions").appendChild(document.getElementById("singIn"));
    listenLink.removeClass('opened');
    
    
  }  
}
window.addEventListener('resize', handleResizeNav);
window.addEventListener('load', handleResizeNav);
window.addEventListener('resize', mobileLineHero);
window.addEventListener('load', mobileLineHero);




$('a[href^="#"]').on('click', function(e) {
  e.preventDefault();

  let target = this.hash;
  let $target = $(target);

  $('html, body').animate({
    'scrollTop': $target.offset().top
  }, 500, 'swing');
});





window.onload = function() {
  let tabElements = document.getElementsByClassName('tab');

  for (let i = 0; i < tabElements.length; i++) {
    tabElements[i].addEventListener('click', tabClickHandler);

    // Додаємо обробник подій для 'tab-text'
    let tabTextElement = document.getElementById('tab-text' + (i+1));
    if (tabTextElement) {
      tabTextElement.addEventListener('click', function() {
        tabElements[i].click();
      });
    }
  }

  // Спричиняємо клік на перший елемент 'tab' 
  document.getElementById('tab1').click();
}

function tabClickHandler() {
  let current = document.getElementsByClassName('active');

  if (current.length > 0) { 
    current[0].className = current[0].className.replace(' active', '');
  }

  this.className += ' active';

  let tabcontent = document.getElementsByClassName('tabcontent');
  let tabText = document.getElementsByClassName('tab-text');

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
    tabText[i].style.color = '#A6ABBF';  
  }

  document.getElementById('content' + (this.id).replace('tab', '')).style.display = 'flex';
  document.getElementById('tab-text' + (this.id).replace('tab', '')).style.color = '#070A1D';

  if (document.getElementById('content1').style.display == 'flex') {
    document.getElementById('first').style.animation = 'changeMarginTab1 0.8s 1 forwards';
  } else if (document.getElementById('content2').style.display == 'flex'){
    document.getElementById('first').style.animation = 'changeMarginTab2 0.8s 1 forwards';
  }
}



var bulianSeve = false;
var i = 0;
var txts = ['A Greek God Face', 'Yacht on the Waves', '«A» Shield', 'Sharped Man Face', 'Space Cat in the Mirror'];
var speed = 1000;
var erasing = false;
var currentTxtIndex = 0;
var initialSpeed = 1000;

var animations = [
  lottie.loadAnimation({
    container: $('#img-god')[0],
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/static/json/greek_god.json'
  }),
  lottie.loadAnimation({
    container: $('#img-yacht')[0],
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/static/json/yacht.json'
  }),
  lottie.loadAnimation({
    container: $('#img-a')[0],
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/static/json/a_shield.json'
  }),
  lottie.loadAnimation({
    container: $('#img-man')[0],
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/static/json/man.json'
  }),
  lottie.loadAnimation({
    container: $('#img-cat')[0],
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/static/json/cat.json'
  })
];
var timeoutId;

function typeWriter() {
  if (i < txts[currentTxtIndex].length && !erasing) {
    speed = 90;
    $('#text').html($('#text').html() + txts[currentTxtIndex].charAt(i));
    i++;
    clearTimeout(timeoutId);  // Очищуємо попередній таймаут
    timeoutId = setTimeout(typeWriter, speed);  // Зберігаємо id нового таймаута
    bulianSeve = true;
  } else if (i > 0 && erasing) {
    speed = 90;
    $('#text').html(txts[currentTxtIndex].substring(0, i - 1));
    i--;
    clearTimeout(timeoutId);  // Очищуємо попередній таймаут
    timeoutId = setTimeout(typeWriter, speed);  // Зберігаємо id нового таймаута
  } else if (i == 0 && erasing) {
    animations[currentTxtIndex].playSegments([24, 48], true);
    erasing = false;
    currentTxtIndex = (currentTxtIndex + 1) % txts.length;
    clearTimeout(timeoutId);  // Очищуємо попередній таймаут
    timeoutId = setTimeout(typeWriter, 1300);  // Зберігаємо id нового таймаута
  } else {
    $('#typewriter').css({
      'border': '2.4px solid #415EED',
      'box-shadow': '0px 8px 48px rgba(81, 110, 255, 0.18)',
      'padding': '22.8px 22.8px 22.8px 26.8px'
    });

    setTimeout(function() {
      $('#typewriter').css({
        'border': '1.2px solid rgba(15, 27, 94, 0.08)',
        'box-shadow': '0px 8px 48px rgba(81, 110, 255, 0)',
        'padding': '24px 24px 24px 28px'
      });
    }, 666);

    if (bulianSeve == true){
      setTimeout(() => {animations[currentTxtIndex].playSegments([0, 24], true)}, 250);
      animation.goToAndPlay(0, true);
      bulianSeve = false;
    }

    setTimeout(() => {
      erasing = true;
      setTimeout(typeWriter, speed);
    }, 1300); 
  }
}

// Create a new Intersection Observer
let observer = new IntersectionObserver((entries) => {
  // entries містить список всіх елементів, стан яких змінився
  entries.forEach(entry => {
    // Якщо елемент тепер видимий і анімація ще не була почата
    if (entry.isIntersecting) {
      typeWriter();
    }
  });
});

observer.observe(document.getElementById('text'));


// Починаємо спостерігати за елементом
let typewriter = document.getElementById('typewriter');
observer.observe(typewriter);



/*
var bulianSeve = false;
var i = 0;
var txts = ['A Greek God Face', 'Yacht on the Waves', '«A» Shield', 'Sharped Man Face', 'Space Cat in the Mirror'];
var speed = 190; // швидкість написання, мс
var erasing = false;
var currentTxtIndex = 0;
var initialSpeed = 190;

var animations = [
  lottie.loadAnimation({
    container: document.getElementById('img-god'), // id елемента для відображення анімації
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/static/json/greek_god.json' // шлях до файлу анімації JSON
  }),
  lottie.loadAnimation({
    container: document.getElementById('img-yacht'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/static/json/yacht.json'
  }),
  lottie.loadAnimation({
    container: document.getElementById('img-a'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/static/json/a_shield.json'
  }),
  lottie.loadAnimation({
    container: document.getElementById('img-man'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/static/json/man.json'
  }),
  lottie.loadAnimation({
    container: document.getElementById('img-cat'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/static/json/cat.json'
  })
];

function typeWriter() {
  if (i < txts[currentTxtIndex].length && !erasing) {
    speed = 190;
    document.getElementById('text').innerHTML += txts[currentTxtIndex].charAt(i);
    i++;
    
    setTimeout(typeWriter, speed);
    bulianSeve = true;
  } else if (i > 0 && erasing) {
    speed = 190;
    document.getElementById('text').innerHTML = txts[currentTxtIndex].substring(0, i - 1);
    i--;
    
    setTimeout(typeWriter, speed);
  } else if (i == 0 && erasing) {
    animations[currentTxtIndex].playSegments([24, 48], true);
    erasing = false;
    currentTxtIndex = (currentTxtIndex + 1) % txts.length;
    setTimeout(typeWriter, 1500);
  } else {
    
    
    document.getElementById('typewriter').style.outline = '2.4px solid #415EED';
    document.getElementById('typewriter').style.boxShadow = '0px 8px 48px rgba(81, 110, 255, 0.18)';

    setTimeout(function() {
      document.getElementById('typewriter').style.outline = '1.2px solid rgba(15, 27, 94, 0.08)';
      document.getElementById('typewriter').style.boxShadow = '0px 8px 48px rgba(81, 110, 255, 0)';
    }, 666);
    
    if (bulianSeve == true){
      setTimeout(() => {animations[currentTxtIndex].playSegments([0, 24], true)}, 250);
      animation.goToAndPlay(0, true);
      bulianSeve = false;
      
    }

    
    
    setTimeout(() => {
      erasing = true;
      setTimeout(typeWriter, speed);
    }, 1000); 
  }
}



// Створюємо новий Intersection Observer
let observer = new IntersectionObserver((entries) => {
  // entries містить список всіх елементів, стан яких змінився
  entries.forEach(entry => {
    // Якщо елемент тепер видимий і анімація ще не була почата
    if (entry.isIntersecting) {
      typeWriter();
    }
  });
});

observer.observe(document.getElementById('text'));


// Починаємо спостерігати за елементом
let typewriter = document.getElementById('typewriter');
observer.observe(typewriter);

*/


function toggleAnswer(id) {
  const answer = document.getElementById(id);
  answer.classList.toggle('open');
  if ( id === 'answer1') {
    document.getElementById('faqz1').classList.toggle('open');
  } else if (id === 'answer2') {
    document.getElementById('faqz2').classList.toggle('open');
  } else if ( id === 'answer3') {
    document.getElementById('faqz3').classList.toggle('open');
  } else if (id === 'answer4') {
    document.getElementById('faqz4').classList.toggle('open');
  } else if (id === 'answer5') {
    document.getElementById('faqz5').classList.toggle('open');
  }
  

}



var animation = lottie.loadAnimation({
  container: document.getElementById('img-off-typewriter'), // the dom element that will contain the animation
  renderer: 'svg', // 'canvas', 'html'
  loop: false, // whether to loop animation
  autoplay: false, // whether to start playing the animation immediately
  path: '/static/json/magic_icon.json' // the path to the animation json
});



var animationl, animationr;

function mobileLineHero() {
  var isMobile = window.innerWidth <= 702;

  // Видаляємо старі анімації, якщо вони існують
  if (animationl) {
    animationl.destroy();
  }

  if (animationr) {
    animationr.destroy();
  }

  // Завантажуємо нові анімації
  animationl = lottie.loadAnimation({
    container: document.getElementById('lenesL'), 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: isMobile ? '/static/json/mobile_left.json' : '/static/json/left_lines.json'
  });

  animationr = lottie.loadAnimation({
    container: document.getElementById('lenesR'), 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: isMobile ? '/static/json/mobile_right.json' : '/static/json/right_lines.json'
  });
}




 

                  
// Додаємо слухача для події зміни розміру вікна
window.addEventListener('resize', mobileLineHero);

// Викликаємо функцію в перший раз при завантаженні сторінки
mobileLineHero();











