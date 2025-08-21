const showSitenavBtn = document.querySelector(".click-btn");
const overlay = document.querySelector(".extra__sitenav-overlay");
const sitenav = document.querySelector(".extra-sitenav");
const closeBtn = document.querySelector(".extra__sitenav-btn");

// sitenav linklar
const aboutLink = document.querySelector('.extra-sitenav a[href="#about"]');
const aboutDiscover = document.querySelector('.extra-sitenav a[href="#discover"]');
const aboutStart = document.querySelector('.extra-sitenav a[href="#get-start"]');

// dark mode tugmalari (desktop va mobile ikkisini ham oladi)
const themeBtns = document.querySelectorAll(".theme-controller button");

// scroll uchun 
const toTopBtn = document.getElementById('toTopBtn');
const footer = document.getElementById('page-footer');

function openSitenav() {
  overlay.style.transform = "translate(0)";
  sitenav.style.transform = "translateX(0)";
  document.body.style.overflow = "hidden"; 
}

function closeSitenav() {
  overlay.style.transform = "translate(100%)";
  sitenav.style.transform = "translateX(100%)";
  document.body.style.overflow = ""; 
}

showSitenavBtn.addEventListener("click", openSitenav);
overlay.addEventListener("click", closeSitenav);
closeBtn.addEventListener("click", closeSitenav);


[aboutLink, aboutDiscover, aboutStart].forEach(link => {
  if (link) {
    link.addEventListener("click", closeSitenav);
  }
});


function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");


  themeBtns.forEach(b => b.classList.toggle("hidden"));


  localStorage.setItem("theme", isDark ? "dark" : "light");
}


themeBtns.forEach(btn => {
  btn.addEventListener("click", toggleTheme);
});


if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");

  themeBtns[0].classList.add("hidden");
  themeBtns[1].classList.remove("hidden");
} else {
  document.body.classList.remove("dark-mode");

  themeBtns[0].classList.remove("hidden");
  themeBtns[1].classList.add("hidden");
}

// Footer ko‘ringanda tugma chiqsin
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      toTopBtn.classList.add('show');
    } else {
      toTopBtn.classList.remove('show');
    }
  });
});
io.observe(footer);


toTopBtn.addEventListener('click', () => {

  if ("scrollBehavior" in document.documentElement.style) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }


  const topElement = document.body || document.documentElement;
  if (topElement.scrollIntoView) {
    topElement.scrollIntoView({ behavior: "smooth" });
    return;
  }


  document.body.scrollTop = 0;         
  document.documentElement.scrollTop = 0; 
});