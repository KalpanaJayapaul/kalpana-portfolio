// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar scroll background
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.backgroundColor = window.scrollY > 50
    ? 'rgba(10, 10, 10, 0.98)'
    : 'rgba(10, 10, 10, 0.95)';
});

// Typing effect
const typedText = document.querySelector('.typed-text');
const textArray = ["Full-Stack Developer", "UI/UX Designer", "Tech Enthusiast"];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
  document.getElementById('year').textContent = new Date().getFullYear();
});

// Contact form submit
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for reaching out! I will get back to you shortly.');
  this.reset();
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.skill-card, .project-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));