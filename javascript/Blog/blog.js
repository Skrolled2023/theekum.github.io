// js for navbar
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
  
  // slider for sec 1
  let slideIndex = 0;

        function showSlides() {
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.opacity = 0;
                dots[i].classList.remove("active");
            }

            slideIndex++;

            if (slideIndex > slides.length) {
                slideIndex = 1;
            }

            slides[slideIndex - 1].style.opacity = 1;
            dots[slideIndex - 1].classList.add("active");

            setTimeout(showSlides, 3000); // Change image every 3 seconds (adjust as needed)
        }

        // Initial call to showSlides() to start the slideshow
        showSlides();

        // Add a function to manually switch slides when a dot is clicked
        function currentSlide(n) {
            slideIndex = n;
            showSlides();
        }

  // slider sec3
  var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

// sec4 js
// Get the "drop" link element
const dropLink = document.querySelector('.drop');

// Get the "less" link element
const lessLink = document.querySelector('.less');

// Get all elements with the "hide" class
const hideElements = document.querySelectorAll('.hide');

// Add a click event listener to the "drop" link
dropLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior

  // Toggle the display property of each element with the "hide" class
  hideElements.forEach(function(element) {
    element.style.display = 'flex';
  });

  // Toggle the display property of the "drop" and "less" links
  dropLink.style.display = 'none';
  lessLink.style.display = 'block';
});

// Add a click event listener to the "less" link
lessLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior

  // Toggle the display property of each element with the "hide" class
  hideElements.forEach(function(element) {
    element.style.display = 'none';
  });

  // Toggle the display property of the "drop" and "less" links
  dropLink.style.display = 'block';
  lessLink.style.display = 'none';
});
