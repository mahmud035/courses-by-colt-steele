'use strict';

/*  
  NOTE: Result:

  ✅ As you scroll the page, each `.box` element’s background color changes when 50% of it becomes visible in the viewport.

  ✅ When a `.box` element leaves the viewport (i.e., less than 50% of it is visible), its background color returns to the default.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with class 'box'
  const boxes = document.querySelectorAll('.box');

  // 1. Callback function for IntersectionObserver
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const element = entry.target;

      if (entry.isIntersecting) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  };

  // 2. Observer Options
  const options = {
    root: null, // Use the viewport as the root (Default)
    threshold: 0.5, // Trigger when 50% of the element is visible
  };

  // 3. Create Intersection Observer instance
  const observer = new IntersectionObserver(callback, options);

  // 4. Observe each 'box' element
  boxes.forEach((box) => {
    observer.observe(box);
  });
});
