let slideIndex = 1;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  if (n === undefined) { n = ++slideIndex; }
  if (n > slides.length) { slideIndex = 1; }
  for (i = 0; i < slides.length; i++) { slides[i].style.display = 'none'; }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000);
}

showSlides(slideIndex);
