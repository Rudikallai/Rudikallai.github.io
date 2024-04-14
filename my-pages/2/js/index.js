const hamElement = document.querySelector(".hambi");
const menuElement = document.querySelector(".menu");
const shopElement = document.querySelector("#shop");
const storyElement = document.querySelector("#story");
const contactElement = document.querySelector("#contact");
const loginElement = document.querySelector("#login");
const closeBtn = document.querySelector(".closeBtn");

closeBtn.addEventListener("click", function () {
  menuElement.classList.toggle("active");
  hamElement.classList.toggle("toggle")
  closeBtn.classList.toggle("close")
})


hamElement.addEventListener("click", function () {
    menuElement.classList.toggle("active");

    hamElement.classList.toggle("toggle");
    closeBtn.classList.toggle("close")

    shopElement.classList.toggle("font1");
    storyElement.classList.toggle("font2");
    contactElement.classList.toggle("font3");
    loginElement.classList.toggle("font4");
});

document.addEventListener('click', e => {
  if(!menuElement.contains(e.target) && e.target !== hamElement) {
    menuElement.classList.add("active");
    shopElement.classList.add("font1");
    storyElement.classList.add("font2");
    contactElement.classList.add("font3");
    loginElement.classList.add("font4");
    hamElement.classList.add("toggle")
    closeBtn.classList.add("close")
  }
})


let mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




let slideIndex = 0;
showSlide(slideIndex);

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel img');
    const texts = [
        "The 918 Spyder",
        "The GT3 RS",
        "The 911 Turbo S"
    ];
    const carouselText = document.querySelector('.carousel-text p');

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
    carouselText.textContent = texts[slideIndex];
}