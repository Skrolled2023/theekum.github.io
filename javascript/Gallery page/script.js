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
  

  let slideIndex = 0;
showSlides(); // Initial call to show the first slide

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.opacity = 1;
  setTimeout(showSlides, 2000); // Change slide every 2000ms
}



// SEC2 JS
let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let j;
  let slides1 = document.getElementsByClassName("mySlides2");
  for (j = 0; j < slides1.length; j++) {
    slides1[j].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
  slides1[slideIndex1 - 1].style.display = "block";  
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
}




// SEC 3 JS
let slideIndex3 = 0;
showSlides3();

function showSlides3() {
  let b;
  let slides3 = document.getElementsByClassName("mySlides3");
  for (b = 0; b < slides3.length; b++) {
    slides3[b].style.display = "none";  
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) {slideIndex3 = 1}    
  slides3[slideIndex3-1].style.display = "block";  
  setTimeout(showSlides3, 2000); // Change image every 2 seconds
}


// sec 4
let slideIndex5 = 0;
let slides5 = document.getElementsByClassName("mySlides5");
let c = 0;

function showSlides5() {
  for (c = 0; c < slides5.length; c++) {
    slides5[c].style.display = "none";  
  }
  slideIndex5++;
  if (slideIndex5 > slides5.length) {slideIndex5 = 1}    
  slides5[slideIndex5-1].style.display = "block";  
  setTimeout(showSlides5, 2000); // Change image every 2 seconds
}

showSlides5();



// sec 5

let slideIndex4 = 0;
showSlides4();

function showSlides4() {
  let a;
  let slides4 = document.getElementsByClassName("mySlides4");
  for (a = 0; a < slides4.length; a++) {
    slides4[a].style.display = "none";  
  }
  slideIndex4++;
  if (slideIndex4 > slides4.length) {slideIndex4 = 1}    
  slides4[slideIndex4-1].style.display = "block";  
  setTimeout(showSlides4, 2000); // Change image every 2 seconds
}

