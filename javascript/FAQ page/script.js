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
  

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submit action

    // Here you would typically gather form data and send it to a server
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log('Form submitted', { name: name, email: email, message: message });

    // Show a success message or handle the form submission (e.g., via AJAX)
    alert('Thank you for your message!');
});


document.addEventListener('DOMContentLoaded', function() {
  var faqs = document.querySelectorAll('.faq-question');

  // Add click event listener to each faq question
  faqs.forEach(function(faq) {
      faq.addEventListener('click', function() {
          // Toggle 'expanded' class on this faq
          this.classList.toggle('expanded');
          
          // Ensure only this faq is expanded and others are not
          faqs.forEach(function(otherFaq) {
              if (otherFaq !== faq) {
                  otherFaq.classList.remove('expanded');
              }
          });
      });
  });
});


document.addEventListener("DOMContentLoaded", function(event) { 


  var acc = document.getElementsByClassName("accordion");
  var panel = document.getElementsByClassName('panel');
  
  for (var i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
          var setClasses = !this.classList.contains('active');
          setClass(acc, 'active', 'remove');
          setClass(panel, 'show', 'remove');
  
          if (setClasses) {
              this.classList.toggle("active");
              this.nextElementSibling.classList.toggle("show");
          }
      }
  }
  
  function setClass(els, className, fnName) {
      for (var i = 0; i < els.length; i++) {
          els[i].classList[fnName](className);
      }
  }
  
  });

  // drop menu
  const accordionContent = document.querySelectorAll(".accordion-content");

  accordionContent.forEach((item, index) => {
      let header = item.querySelector("header");
      header.addEventListener("click", () =>{
          item.classList.toggle("open");
  
          let description = item.querySelector(".description");
          if(item.classList.contains("open")){
              description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
              item.querySelector("i").classList.replace("fa-plus", "fa-minus");
          }else{
              description.style.height = "0px";
              item.querySelector("i").classList.replace("fa-minus", "fa-plus");
          }
          removeOpen(index); //calling the funtion and also passing the index number of the clicked header
      })
  })
  
  function removeOpen(index1){
      accordionContent.forEach((item2, index2) => {
          if(index1 != index2){
              item2.classList.remove("open");
  
              let des = item2.querySelector(".description");
              des.style.height = "0px";
              item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
          }
      })
  }


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