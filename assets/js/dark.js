// JavaScript to toggle dark mode
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
// Check if dark mode preference is stored in local storage
const isDarkMode = localStorage.getItem("darkMode");

if (isDarkMode) {
  body.classList.add("dark-mode");
}

// Toggle dark mode and update local storage
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.removeItem("darkMode");
  }
});