// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Light/Dark mode toggle with localStorage
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

function setTheme(dark) {
  if (dark) {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
  }
}

// On load, set theme from localStorage
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark');

themeToggle.addEventListener('click', () => {
  setTheme(!body.classList.contains('dark-mode'));
});

// Contact form validation and message
const form = document.querySelector('.contact-form');
const formMsg = document.getElementById('form-message');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      formMsg.textContent = 'Please fill in all fields.';
      formMsg.style.color = '#e11d48';
      return;
    }
    // Simulate sending (no backend)
    formMsg.textContent = 'Thank you for reaching out! I will get back to you soon.';
    formMsg.style.color = '#3a8dde';
    form.reset();
    setTimeout(() => { formMsg.textContent = ''; }, 5000);
  });
}

// (Optional) Responsive mobile menu toggle
// Uncomment below if you add a hamburger menu in the future
// const nav = document.querySelector('nav');
// const menuBtn = document.createElement('button');
// menuBtn.className = 'menu-btn';
// menuBtn.innerHTML = '&#9776;';
// nav.prepend(menuBtn);
// menuBtn.addEventListener('click', () => {
//   document.querySelector('.nav-links').classList.toggle('active');
// });

// Typing animation for hero role/title (continuous loop)
const typedRole = document.getElementById('typed-role');
const roleText = 'Aspiring Software Developer';
let roleCharIndex = 0;
let typingForward = true;

function typeRoleLoop() {
  if (!typedRole) return;
  if (typingForward) {
    if (roleCharIndex < roleText.length) {
      typedRole.textContent += roleText[roleCharIndex];
      roleCharIndex++;
      setTimeout(typeRoleLoop, 80);
    } else {
      typingForward = false;
      setTimeout(typeRoleLoop, 1200);
    }
  } else {
    if (roleCharIndex > 0) {
      typedRole.textContent = roleText.slice(0, roleCharIndex - 1);
      roleCharIndex--;
      setTimeout(typeRoleLoop, 40);
    } else {
      typingForward = true;
      setTimeout(typeRoleLoop, 400);
    }
  }
}
typeRoleLoop();
// Always show the blinking cursor
const cursor = document.querySelector('.typed-cursor');
if (cursor) cursor.style.display = ''; 