document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Reveal elements on scroll
  const fadeEls = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });

  fadeEls.forEach(el => observer.observe(el));
});

// Fake form submission
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent actual submission
  successMsg.style.display = 'block'; // show success message

  // Optional: hide message after 5 seconds
  setTimeout(() => {
    successMsg.style.display = 'none';
    form.reset(); // reset form fields
  }, 5000);
});