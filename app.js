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

// link bosilganda sitenav yopiladi
[aboutLink, aboutDiscover, aboutStart].forEach(link => {
  if (link) {
    link.addEventListener("click", closeSitenav);
  }
});

// 🌙☀️ dark mode toggle
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");

  // tugmalarni sinxron qilish (desktop + mobile)
  themeBtns.forEach(b => b.classList.toggle("hidden"));

  // foydalanuvchi tanlovini saqlash
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// hamma tugmalarga event biriktiramiz
themeBtns.forEach(btn => {
  btn.addEventListener("click", toggleTheme);
});

// sahifa qayta ochilganda oxirgi tanlovni qo‘llash
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  // faqat quyosh tugmasi ko‘rinadi
  themeBtns[0].classList.add("hidden");
  themeBtns[1].classList.remove("hidden");
} else {
  document.body.classList.remove("dark-mode");
  // faqat oy tugmasi ko‘rinadi
  themeBtns[0].classList.remove("hidden");
  themeBtns[1].classList.add("hidden");
}
