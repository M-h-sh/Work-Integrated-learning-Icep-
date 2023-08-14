const darkModeToggle = select("#dark-mode-toggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    // Store the user's preference in local storage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.removeItem("darkMode");
    }
  });

  // Check for dark mode preference on page load
  const isDarkMode = localStorage.getItem("darkMode");
  if (isDarkMode === "enabled") {
    body.classList.add("dark-mode");
  }
