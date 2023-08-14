document.addEventListener("DOMContentLoaded", function () {
  const darkModeSwitch = document.getElementById("darkModeSwitch");
  const body = document.body;

  // Check dark mode preference on page load
  const isDarkMode = localStorage.getItem("darkMode");
  if (isDarkMode === "enabled") {
    body.classList.add("dark");
    darkModeSwitch.checked = true;
  }

  darkModeSwitch.addEventListener("change", function () {
    if (this.checked) {
      body.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      body.classList.remove("dark");
      localStorage.removeItem("darkMode");
    }
  });
});
