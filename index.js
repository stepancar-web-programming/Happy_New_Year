let slideIndex = 0;
// eslint-disable-next-line no-use-before-define
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  slideIndex++;
  for (i = 0; i < slides.length; i++) { slides[i].style.display = 'none'; }
  if (slideIndex >= slides.length) { slideIndex = 0; }
  slides[slideIndex].style.display = 'block';
  setTimeout(showSlides, 5000);
}
