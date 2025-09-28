'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const adElement = document.getElementById('ad');
  const viewTimeDisplay = document.getElementById('view-time');

  let viewTime = 0;
  let viewStartTime = null;
  let isTracking = false;
  let timerInterval = null;
  let isViewable = false;

  // 1. Intersection Observer callback
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const visibilityPercentage = entry.intersectionRatio;

      // Start tracking if ad is more than 50% visible
      if (visibilityPercentage >= 0.5) {
        if (!isTracking) {
          startTracking();
        }
      } else {
        // Stop tracking if visibility falls below 50%
        if (isTracking) {
          stopTracking();
        }
      }
    });
  };

  // 2. Observer Options
  const options = {
    root: null,
    threshold: 0.5, // Track when 50% or more of the ad is visible
  };

  // 3. Create Intersection Observer instance
  const observer = new IntersectionObserver(callback, options);

  // 4. Start observing the ad element
  observer.observe(adElement);

  // Start tracking the view time
  function startTracking() {
    isTracking = true;
    viewStartTime = new Date().getTime(); // Get current time in milliseconds

    // Update the view time every second
    timerInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeViewed = Math.floor((currentTime - viewStartTime) / 1000); // In seconds
      viewTime = timeViewed;
      updateViewTimeDisplay();
    }, 1000);
  }

  // Stop tracking the view time
  function stopTracking() {
    if (isTracking) {
      isTracking = false;
      clearInterval(timerInterval);
    }
  }

  // Update the view time display on the page
  function updateViewTimeDisplay() {
    viewTimeDisplay.textContent = `Ad view time: ${viewTime} seconds`;

    // if (viewTime >= 1 && !isViewable) {
    //   viewTimeDisplay.textContent += ' (Viewable)';
    //   isViewable = true;
    // }
  }
});
