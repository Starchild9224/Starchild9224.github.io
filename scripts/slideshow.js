// Loop through all slideshow containers
document.querySelectorAll('.slideshow-container').forEach((container, slideshowIndex) => {
  let slideIndex = 1;
  const slides = container.getElementsByClassName("mySlides");
  const dotContainer = container.nextElementSibling;
  const dots = dotContainer?.getElementsByClassName("dot") || [];

  // Show initial slide
  showSlides(slideIndex);

  // Attach event listeners to arrows
  const prevBtn = container.querySelector('.prev');
  const nextBtn = container.querySelector('.next');
  prevBtn?.addEventListener('click', () => changeSlide(-1));
  nextBtn?.addEventListener('click', () => changeSlide(1));

  // Attach event listeners to dots
  Array.from(dots).forEach((dot, i) => {
    dot.addEventListener('click', () => currentSlide(i + 1));
  });

  function changeSlide(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    if (dots.length) {
      dots[slideIndex - 1].classList.add("active");
    }
  }
});