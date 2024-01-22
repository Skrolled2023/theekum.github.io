let currentImageIndex = 0;
const slideshow = document.getElementById('slideshow');
const imageArray = ["./img/SLIDESHOW 1.jpg","./img/SLIDESHOW 2.jpg", "./img/SLIDESHOW 3.jpg","./img/SLIDESHOW 4.jpg"];  // Add more images if needed

function changeImage() {
    slideshow.style.opacity = '0'; // Reduce opacity to start the fade-out
    setTimeout(() => {
        currentImageIndex++;
        if (currentImageIndex >= imageArray.length) {
            currentImageIndex = 0;
        }
        slideshow.src = imageArray[currentImageIndex];
        slideshow.style.opacity = '1'; // Restore opacity to fade-in the new image
    }, 200); // Delayed by 0.3 seconds (300ms) which matches the transition duration in CSS
}

setInterval(changeImage, 2300); // Adjusted the interval to account for the transition time



// Testimonials
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);




//map

function initMap() {
    var delhi = {lat: 28.560030, lng: 77.206627};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: delhi
    });
    var marker = new google.maps.Marker({
        position:  delhi,
        map: map
    });
}



//scroll animation

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the controller
    var controller = new ScrollMagic.Controller();

    // Loop through each .sec (section) element
    document.querySelectorAll('.sec').forEach(function(sec, index) {
        // Create a timeline for the current section
        var tl = gsap.timeline();

        // Add animations to the timeline
        tl.fromTo(sec, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });

        // Create a ScrollMagic scene
        new ScrollMagic.Scene({
            triggerElement: sec, // Trigger animation when this element is in view
            triggerHook: 0.5, // Middle of the viewport
            reverse: true // Animation will reverse when scrolling up
        })
        .setTween(tl) // Link the timeline to the scene
        .addTo(controller); // Add this scene to the ScrollMagic controller
    });

    
});


//side ways
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the controller
    var controller = new ScrollMagic.Controller();

    // Loop through each .sec (section) element
    document.querySelectorAll('.ani').forEach(function(sec, index) {
        // Create a timeline for the current section
        var tl = gsap.timeline();

        // Add animations to the timeline
        tl.fromTo(sec, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

        // Create a ScrollMagic scene
        new ScrollMagic.Scene({
            triggerElement: sec, // Trigger animation when this element is in view
            triggerHook: 1, // Middle of the viewport
            reverse: true // Animation will reverse when scrolling up
        })
        .setTween(tl) // Link the timeline to the scene
        .addTo(controller); // Add this scene to the ScrollMagic controller
    });

    // For .herotext in the hero section, if you want this to also reverse on scroll up/down
    var heroTextTl = gsap.timeline();
    heroTextTl.from('.herotext', { x: 150, opacity: 0, duration: 2 });

    new ScrollMagic.Scene({
        triggerElement: '.hero',
        triggerHook: 1,
        reverse: true // This will allow the animation to reverse on scrolling up
    })
    .setTween(heroTextTl)
    .addTo(controller);
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the controller
    var controller = new ScrollMagic.Controller();

    // Loop through each .sec (section) element
    document.querySelectorAll('.ani2').forEach(function(sec, index) {
        // Create a timeline for the current section
        var tl = gsap.timeline();

        // Add animations to the timeline
        tl.fromTo(sec, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

        // Create a ScrollMagic scene
        new ScrollMagic.Scene({
            triggerElement: sec, // Trigger animation when this element is in view
            triggerHook: 0.9, // Middle of the viewport
            reverse: true // Animation will reverse when scrolling up
        })
        .setTween(tl) // Link the timeline to the scene
        .addTo(controller); // Add this scene to the ScrollMagic controller
    });

});



let slideIndex = 0;
showSlides(); // Initial call to show the first slide

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Hide the image
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}  // Loop back to the first image
  slides[slideIndex-1].style.display = "block"; // Show the current image
  slides[slideIndex-1].style.opacity = 0;
  setTimeout(() => { slides[slideIndex-1].style.opacity = 1; }, 10); // Fade-in effect
  setTimeout(showSlides, 2000); // Change image every 1 second
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
  


//smooth scrolling

let Scrollbar = window.Scrollbar;
     const options = {
        "damping": .06,
        "alwaysShowTracks": true
     }
     
     Scrollbar.init(document.querySelector('body'), options);


// EMAILJS JAVASCRIPT
const YOUR_SERVICE_ID = 'service_p3tiqph';
const YOUR_TEMPLATE_ID = 'template_2snzukk';
const YOUR_USER_ID = '5PRY1Kg3Z9fYk6fsv';

document.getElementById('contact-form').addEventListener('submit', function(event) {
   event.preventDefault();
 
   emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, this, YOUR_USER_ID)
     .then(function(response) {
       console.log('Email sent!', response.status, response.text);
       alert('Your message has been sent successfully!');
     })
     .catch(function(error) {
       console.error('Error sending email:', error);
       alert('There was an error sending your message. Please try again later.');
     });
 });
