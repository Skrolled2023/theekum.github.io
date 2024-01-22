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
  

// SEC 1
  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll('.slideshow img');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// SEC 2
function subscribe() {
  var email = document.getElementById('email').value;
  // Here you would usually send the email to your server or a third-party service
  alert('Thank you for subscribing with the email: ' + email);
}
