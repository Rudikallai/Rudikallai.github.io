const hamElement = document.querySelector(".hambi");
const menuElement = document.querySelector(".menu");
const shopElement = document.querySelector("#shop");
const storyElement = document.querySelector("#story");
const contactElement = document.querySelector("#contact");
const loginElement = document.querySelector("#login");


hamElement.addEventListener("click", function () {
    menuElement.classList.toggle("active");

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

