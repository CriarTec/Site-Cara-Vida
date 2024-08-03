const paragraphs = document.querySelectorAll(".Menu");

document.addEventListener("scroll", function () { 
  paragraphs.forEach((paragraph) => { 
    if (isInView(paragraph)) {
          paragraph.classList.add("Menu--visible");
      };
    });      
});


function isInView(element) {
const rect = element.getBoundingClientRect();
return (
rect.bottom > 0 &&
rect.top <
  (window.innerHeight - 150 || document.documentElement.
  clientHeight - 150)
  );
}

// slideup/slidedown
trigger = function () {
  Slider.classList.toggle("slide-down")
  //Slider.classList.toggle("slideup")
};

/* Slider Codigo */

let slideIndex = 1;
showSlides(slideIndex);

function moveSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Initial display
const slides = document.getElementsByClassName("slide");
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slides[0].style.display = "block";