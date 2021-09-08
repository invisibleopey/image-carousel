// Manuel Image Careosel
let slideIndex = 1;

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll('.mySlides');
  const dots = document.querySelectorAll('.dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
showSlides(slideIndex);

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
function plusSlides(n) {
  showSlides((slideIndex += n));
}
prevBtn.addEventListener('click', () => {
  plusSlides(-1);
});
nextBtn.addEventListener('click', () => {
  plusSlides(1);
});

// eslint-disable-next-line no-unused-vars
function currentSlide(n) {
  showSlides((slideIndex = n));
}
// Automatic Slideshow
let autoSlideIndex = 0;
function autoShowSlides() {
  let i;
  const slides = document.querySelectorAll('.mySlides');
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  autoSlideIndex += 1;
  if (autoSlideIndex > slides.length) {
    autoSlideIndex = 1;
  }
  slides[autoSlideIndex - 1].style.display = 'block';
  setTimeout(autoShowSlides, 6000); // Change image every 2 seconds
}
autoShowSlides();
