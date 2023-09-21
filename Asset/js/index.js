const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove("active-slide");
  currentSlide = index;
  slides[currentSlide].classList.add("active-slide");
}

function nextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  showSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
}

setInterval(nextSlide, 3000);

showSlide(currentSlide);

// for last slider

const slider = document.querySelector(".slider");
let scrollInterval;

function scrollRight() {
  const firstSlide = slider.firstElementChild;
  slider.style.transition = "none";
  slider.appendChild(firstSlide);
  slider.style.transform = "translateX(25%)";
  setTimeout(() => {
    slider.style.transition = "transform 0.8s ease-in-out";
    slider.style.transform = "translateX(0)";
  }, 0);
}

function autoScroll() {
  scrollInterval = setInterval(scrollRight, 5000); 
}

autoScroll();

// search box navbar functionality
// chatgpt code 

function search() {
  let search = document.getElementById("search-box");
  search.style.transform = "translateY(150px)";
  search.style.zIndex = 2000;
  
}

function resetSearch() {
  let search = document.getElementById("search-box");
  search.style.transform = "translateY(-150px)";
  search.style.zIndex = 0;
}

let inputBox = document.querySelectorAll(".sea");

inputBox.addEventListener("mouseover", () => {
  search();
});




inputBox.addEventListener("mouseout", () => {
  resetSearch();
});







//    for hamerger button

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}






// for parallax effect 





















