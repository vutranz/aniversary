/* ==================== 
  toggle icon navbar 
====================== */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* =========================== 
    Scroll Section Active Link 
============================= */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* ========================
      Sticky Navbar 
=========================== */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /* ===================== 
    Menu Icon Navbar 
====================== */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* ===================== 
    Scroll Reveal 
====================== */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/* ===================== 
    Typed Js 
====================== */
const typed = new Typed(".multiple-text", {
  strings: ["Em bé", "Xinh Đẹp",],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});



document.addEventListener("DOMContentLoaded", function() {
  updateDaysCounter();
});

function updateDaysCounter() {
  var startDate = new Date('2019-01-03');
  var now = new Date();

  var timeDiff = Math.abs(now.getTime() - startDate.getTime());
  var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));

  var daysCounterElement = document.getElementById('clocktoday');
  daysCounterElement.textContent = 'Số ngày kể từ 1/3/2019 đến hiện tại là: ';
  
  // Thêm màu đỏ cho diffDays
  var diffDaysSpan = document.createElement('span');
  diffDaysSpan.textContent = diffDays + ' ngày';
  diffDaysSpan.style.color = 'var(--main-color)';
  daysCounterElement.appendChild(diffDaysSpan);
} 

// ------








