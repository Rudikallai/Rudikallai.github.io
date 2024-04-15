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
  if (!menuElement.contains(e.target) && e.target !== hamElement) {
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



let slideIndex = 0;
const slides = document.querySelectorAll('.carousel .slide');
const text1 = document.querySelector('.carousel-text1');
const text2 = document.querySelector('.carousel-text2');

showSlide(slideIndex);

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
    updateText();
}

function updateText() {
    // For demonstration, you can customize these texts dynamically
    switch (slideIndex) {
        case 0:
            text1.textContent = "The 992 GT3 RS";
            text2.innerHTML = `<p>0-60 mph in 3.0 seconds</p>
                               <p>190 mph top speed</p>
                               <p>525 hp (518 bhp) 8,500 - 9,000 rpm</p>
                               <p>4.0-litre flat-six engine</p>`;
            break;
        case 1:
            text1.textContent = "The 911 Turbo S";
            text2.innerHTML = `<p>0-60 mph in 2.6 seconds</p>
                               <p>205 mph top speed</p>
                               <p>640 hp, 590 lb-ft of torque</p>
                               <p>Twin-turbo 3.7-liter flat-six engine</p>`;
            break;
        case 2:
            text1.textContent = "The 718 Cayman GT4 RS";
            text2.innerHTML = `<p>0-60 mph in 3.3 seconds</p>
                               <p>188 mph top speed</p>
                               <p>414 hp, 309 lb-ft of torque</p>
                               <p>4.0-litre six-cylinder naturally aspirated engine</p>`;
            break;
        // Add more cases if needed for additional slides
    }
}