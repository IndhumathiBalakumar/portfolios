/* =========================================================
   EDIT HERE: TYPING EFFECT TEXT
   Add or remove roles below - the typing effect will cycle
   through each one automatically on the Home section.
========================================================= */
const ROLES = [
  "Java Frontend Developer",
  "Java Developer",
  "Junior Software Developer"
];

// ---- Typing effect logic (no need to edit below this line) ----
const typingEl = document.getElementById("typingText");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const currentRole = ROLES[roleIndex];

  if (!deleting) {
    typingEl.textContent = currentRole.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeLoop, 1500); // pause at full word before deleting
      return;
    }
  } else {
    typingEl.textContent = currentRole.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % ROLES.length;
    }
  }

  setTimeout(typeLoop, deleting ? 40 : 90);
}

typeLoop();

// ---- Scroll reveal: fade/slide elements in as they enter the screen ----
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el) => revealObserver.observe(el));

// ---- Mobile menu toggle ----
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// close mobile menu automatically when a nav link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});
