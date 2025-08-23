'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('box');

  // 1. Callback function to execute when intersection occurs
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add a class when the element is visible in the viewport
        entry.target.classList.add('active');
      } else {
        // Remove the class when the element leaves the viewport
        entry.target.classList.remove('active');
      }
    });
  };

  // 2. Observer Options
  const options = {
    root: null, // Use the viewport as the root (Default)
    threshold: 0.5, // Trigger when 50% of the element is visible
  };

  // 3. Create an Intersection Observer instance
  const observer = new IntersectionObserver(callback, options);

  // 4. Observe the target element
  observer.observe(box);
});
