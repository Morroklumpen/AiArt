
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove "active" class from dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Slide in from the right
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.animation = "slideInRight 0.5s forwards";
  
  // Add "active" class to the current dot
  dots[slideIndex - 1].className += " active";
  
  // Change image every 8 seconds
  setTimeout(function() {
    plusSlides(1); // Automatically advance to the next slide
  }, 8000); // 8000 milliseconds (8 seconds)
}

// Initialize the slideshow
showSlides(slideIndex);



