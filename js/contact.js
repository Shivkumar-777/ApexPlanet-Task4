const form = document.getElementById("contactForm");
const overlay = document.getElementById("successOverlay");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let valid = true;

  // Clear errors
  document.querySelectorAll(".error").forEach(err => err.textContent = "");

  // Validation
  if (name.value.trim() === "") {
    name.nextElementSibling.nextElementSibling.textContent = "Name required";
    valid = false;
  }

  if (email.value.trim() === "") {
    email.nextElementSibling.nextElementSibling.textContent = "Email required";
    valid = false;
  } else if (!email.value.includes("@")) {
    email.nextElementSibling.nextElementSibling.textContent = "Invalid email";
    valid = false;
  }

  if (message.value.trim() === "") {
    message.nextElementSibling.nextElementSibling.textContent = "Message required";
    valid = false;
  }

  if (!valid) return;

  // Save to localStorage
  const messages = JSON.parse(localStorage.getItem("contacts")) || [];
  messages.push({
    name: name.value,
    email: email.value,
    message: message.value,
    time: new Date().toLocaleString()
  });
  localStorage.setItem("contacts", JSON.stringify(messages));

  // Show popup
  overlay.classList.add("show");

  // Reset form
  form.reset();
});

// Close popup
function closePopup() {
  overlay.classList.remove("show");
}
