'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('box');

  // 1. Callback function
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const visibilityPercentage = entry.intersectionRatio;

      // Change background color based on visibility percentage
      if (visibilityPercentage === 1) {
        box.style.backgroundColor = 'green';
        box.textContent = 'Fully Visible';
      } else if (visibilityPercentage >= 0.75) {
        box.style.backgroundColor = 'lightgreen';
        box.textContent = '75% Visible';
      } else if (visibilityPercentage >= 0.5) {
        box.style.backgroundColor = 'yellow';
        box.textContent = '50% Visible';
      } else if (visibilityPercentage >= 0.25) {
        box.style.backgroundColor = 'red';
        box.textContent = '25% Visible';
      } else if (visibilityPercentage > 0) {
        box.style.backgroundColor = 'red';
        box.textContent = 'Barely Visible';
      } else {
        box.style.backgroundColor = 'lightgray';
        box.textContent = 'Not Visible';
      }
    });
  };

  // 2. Observer Options
  const options = {
    root: null, // Use viewport as the root (Default)
    threshold: [0, 0.25, 0.5, 0.75, 1], // Trigger at 0%, 25%, 50%, 75%, and 100% visibility
  };

  // 3. Create the Intersection Observer instance
  const observer = new IntersectionObserver(callback, options);

  // 4. Observe the target element
  observer.observe(box);
});
