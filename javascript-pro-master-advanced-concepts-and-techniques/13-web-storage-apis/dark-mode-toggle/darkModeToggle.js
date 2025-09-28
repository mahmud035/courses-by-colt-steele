'use strict';

// Function to enable darkMode
const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
};

// Function to disable darkMode
const disabledDarkMode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
};

// Event listener for the toggle switch
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', function () {
  if (this.checked) enableDarkMode();
  else disabledDarkMode();
});

// Check the user's preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    themeToggle.checked = true;
    enableDarkMode();
  }
});
