function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    darkModeSwitch.checked = body.classList.contains('dark-mode');
    // Save the user's preference for dark mode in local storage
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
  }

  // Check if the user has a preference for dark mode in local storage
  const prefersDarkMode = localStorage.getItem('darkMode') === 'true';
  if (prefersDarkMode) {
    document.body.classList.add('dark-mode');
  }

  // Attach an event listener to the dark mode switch
  const darkModeSwitch = document.getElementById('darkModeSwitch');
  darkModeSwitch.addEventListener('change', toggleDarkMode);
 





