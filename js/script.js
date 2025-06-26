

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

// This function filters through the projects
function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    const categories = card.getAttribute("data-category").split(" ");
    if (category === "all" || categories.includes(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}


// This function toggles the dark mode
document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// validate form inputs(no acctual submission)
function validateForm()
 {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Validate email format
    if (!emailPattern.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "red";
      return false;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    return false; // Prevent actual form submission
  }
