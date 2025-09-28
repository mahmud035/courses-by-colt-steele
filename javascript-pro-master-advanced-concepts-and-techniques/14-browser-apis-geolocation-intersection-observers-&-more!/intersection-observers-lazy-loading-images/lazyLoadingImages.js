'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Select all images
  const lazyImages = document.querySelectorAll('img');

  // 1. Intersection Observer callback
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;

        // Replace `src` with `data-src`
        img.src = img.dataset.src;
        img.classList.remove('lazy-img');
        observer.unobserve(img);
      }
    });
  };

  // 2. Observer Options
  const options = {
    root: null, // Use the viewport as the root (Default)
    threshold: 0.1, // Trigger when at least 10% of the image is visible
  };

  // 3. Create Intersection Observer instance
  const observer = new IntersectionObserver(callback, options);

  // 4. Observe each image
  lazyImages.forEach((image) => {
    observer.observe(image);
  });
});
