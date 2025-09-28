'use strict';

// =====================================================
// TODO: Objective

// We'll create a simple form where the user can enter their name, email, and message. "As the user types, we'll save the input to sessionStorage. If the user refreshes the page or navigates away and returns, the form data will be retrieved and populated automatically".

// We'll write JavaScript to:
// Save form data to `sessionStorage` whenever the user types.
// Populate the form with stored data if it's available.
// Clear the `sessionStorage` when the form is submitted successfully.
// =====================================================

// Select form elements
const form = document.getElementById('sessionForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Save form data to SessionStorage
const saveToSessionStorage = () => {
  sessionStorage.setItem('name', nameInput.value);
  sessionStorage.setItem('email', emailInput.value);
  sessionStorage.setItem('message', messageInput.value);
};

// Load form data from SessionStorage
const loadFromSessionStorage = () => {
  const savedName = sessionStorage.getItem('name');
  const savedEmail = sessionStorage.getItem('email');
  const savedMessage = sessionStorage.getItem('message');

  // Populate the form fields with session storage data
  if (savedName) nameInput.value = savedName;
  if (savedEmail) emailInput.value = savedEmail;
  if (savedMessage) messageInput.value = savedMessage;
};

// Event listener for form input changes (to save the data as the user types)
form.addEventListener('input', saveToSessionStorage);

// Load data from SessionStorage when the page loads
window.addEventListener('DOMContentLoaded', loadFromSessionStorage);

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Clear the SessionStorage
  sessionStorage.clear();

  // Display a success message
  alert('✅ Form submitted successfully!');

  // Reset the form
  form.reset();
});
