// Mobilmeny-toggle
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Lukk meny ved klikk på lenke
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Scroll-reveal (fade-in)
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal--visible");
      }
    });
  }, { threshold: 0.1 });
revealElements.forEach((el) => revealObserver.observe(el));

// Mørk/lys modus – tema settes tidlig i <head>, denne knappen bytter og lagrer valget
const themeToggle = document.querySelector("#themeToggle");
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
});
