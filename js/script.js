// script.js

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
