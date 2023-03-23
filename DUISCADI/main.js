window.onscroll = function() { scrollFunction() };

function scrollFunction() {
	x = document.getElementsByClassName("nav")[0];
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
		x.classList.remove('nav-up');
		x.classList.add('nav-down');
  } else {
		x.classList.remove('nav-down');
		x.classList.add('nav-up');
  }
}

const swiper = new Swiper('.swiper',{
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	autoplay: {
		delay: 2000,
	  },
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
  });

ScrollReveal({ reset: true });
ScrollReveal().reveal('.about-background', {delay: 400});

ScrollReveal().reveal('.speaker-container', { 
	// distance: '100px',
	// origin: 'right',
	// easing:'ease-out',
	delay: 500,
	scale:'0.5',
	duration: 400,
	easing: 'ease-out',
	// reset: 'true',

});
// ScrollReveal().reveal('.quote-margin', { delay: 500 });

ScrollReveal().reveal('.quote-margin', {
	// distance: '100px',
	// origin: 'left',
    delay: 400,
    // duration: 700,
	easing: 'ease-out',
	reset: 'true',
	
	
    // reset: true
});
ScrollReveal().reveal('.about-animate1', {
	distance: '100px',
	origin: 'left',
    delay: 500,
    // duration: 700,
	easing: 'ease-out',
	reset: 'true'
	
    // reset: true
});
ScrollReveal().reveal('.about-animate2', {
	distance: '100px',
	origin: 'right',
    delay: 500,
    // duration: 700,
	easing: 'ease-out',
	reset: 'true'
	
    // reset: true
});
ScrollReveal().reveal('.gallary-container', {
    delay: 500,
    // duration: 700,
	easing: 'ease-out',
	reset: 'true'
	
    // reset: true
});
ScrollReveal().reveal('.venue', {
	distance: '100px',
	origin: 'bottom',
    delay: 500,
    // duration: 700,
	easing: 'ease-out',
	reset: 'true'
	
    // reset: true
});
ScrollReveal().reveal('.footer-background', {
	distance: '200px',
	origin: 'bottom',
    delay: 500,
    // duration: 700,
	easing: 'ease-out',
	reset: 'true'
	
    // reset: true
});
ScrollReveal().reveal('.contact-container', {
	// distance: '100px',
	// origin: 'bottom',
	scale: '0.6',
    delay: 500,
    duration: 1000,
	easing: 'ease-out',
	reset: 'true'
	
    // reset: true
});


const swiper2 = new Swiper('.swiper2',{
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	autoplay: {
		delay: 2000,
	  },
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 1,
		  spaceBetween: 10,
		},
		// when window width is >= 480px
		700: {
		  slidesPerView: 2,
		  spaceBetween: 30,
		},
		// when window width is >= 640px
		1000: {
		  slidesPerView: 3,
		  spaceBetween: 40,
		},
		// 1400:{
		// 	slidesPerView:3,
		// }
	  }
  });	  