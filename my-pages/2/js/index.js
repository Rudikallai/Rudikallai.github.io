const hamElement = document.querySelector(".hambi");
const menuElement = document.querySelector(".menu");
const shopElement = document.querySelector("#shop");
const storyElement = document.querySelector("#story");
const contactElement = document.querySelector("#contact");
const loginElement = document.querySelector("#login")
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
  loginElement.classList.toggle("font4")

});

document.addEventListener('click', e => {
  if (!menuElement.contains(e.target) && e.target !== hamElement) {
    menuElement.classList.add("active");

  hamElement.classList.add("toggle");
  closeBtn.classList.add("close")

  shopElement.classList.add("font1");
  storyElement.classList.add("font2");
  contactElement.classList.add("font3");
  loginElement.classList.add("font4")
  }
})


let mybutton = document.getElementById("topBtn");

window.onscroll = function () { scrollFunction() };

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



const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;
  const itemWidth = carouselItems[0].clientWidth;
  let currentIndex = 0;

  function moveToIndex(index) {
    if (index < 0 || index >= totalItems) return;
    carousel.style.transform = `translateX(-${index * itemWidth}px)`;
    currentIndex = index;
  }

  function next() {
    currentIndex = (currentIndex + 1) % totalItems;
    moveToIndex(currentIndex);
  }

  function prev() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    moveToIndex(currentIndex);
  }






  document.addEventListener("DOMContentLoaded", function() {
    const images = [
      "roma4.jpeg",
      "roma3.jpeg",
      "roma.jpeg",
      // Add more image paths here as needed
    ];

    function getRandomImage() {
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    }

    const randomImageElement = document.getElementById('random-image');
    randomImageElement.src = getRandomImage();
  });