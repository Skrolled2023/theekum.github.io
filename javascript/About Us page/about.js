document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.querySelector('.menu-btn');
    var body = document.body;
    var nav = document.querySelector('nav');
    var logo = document.querySelector('.theekum');
  
    menuBtn.addEventListener('click', function() {
      var menuOpen = body.classList.contains('no-scroll');
      
      if (menuOpen) {
        body.classList.remove('no-scroll');
        nav.classList.remove('nav-bg');
        logo.classList.remove('nav-col');

      } else {
        body.classList.add('no-scroll');
        nav.classList.add('nav-bg');
        logo.classList.add('nav-col');
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    // Select the checkbox
    var checkbox = document.querySelector('input[type="checkbox"]');
    // Select all the nav links
    var links = document.querySelectorAll('nav ul li a');
    // Select the body element
    var body = document.body;
    var nav = document.querySelector('nav');
    var logo = document.querySelector('.theekum');
  
    // Add a click event listener to each link
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        // If the checkbox exists and is checked, uncheck it and enable scrolling
        if (checkbox && checkbox.checked) {
          checkbox.checked = false;
          body.classList.remove('no-scroll'); // This line re-enables scrolling
          nav.classList.remove('nav-bg');
          logo.classList.remove('nav-col');
        }
      });
    });
  });

// mobile version slider
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});