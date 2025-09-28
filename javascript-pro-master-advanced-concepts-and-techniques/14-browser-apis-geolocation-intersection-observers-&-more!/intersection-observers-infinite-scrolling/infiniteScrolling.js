'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const postContainer = document.getElementById('post-container');
  const targetEl = document.getElementById('target');
  const loadingIndicator = document.getElementById('loading');

  let postCount = 0; // Counter to keep track of loaded posts
  const batchSize = 10; // Number of posts to load per batch
  const maxPosts = 100; // Maximum number of posts to load

  // Function to create a new post element
  const createPost = (id) => {
    const post = document.createElement('div');
    post.classList.add('post');
    post.textContent = `Post #${id}`;
    return post;
  };

  // Function to load a batch of posts
  const loadPosts = () => {
    if (postCount >= maxPosts) {
      observer.unobserve(targetEl);
      loadingIndicator.textContent = `No more post to load.`;
      loadingIndicator.style.display = 'block';
      return;
    }

    loadingIndicator.style.display = 'block';

    // Simulate network delay
    setTimeout(() => {
      for (let i = 0; i < batchSize; i++) {
        postCount += 1;
        const post = createPost(postCount);
        postContainer.appendChild(post);
      }
      loadingIndicator.style.display = 'none';
    }, 1000); // 1-second delay
  };

  // Initial load
  loadPosts();

  // 1. Intersection Observer callback
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadPosts();
      }
    });
  };

  // 2. Observer Options
  const options = {
    root: null, // Use the viewport as the root
    threshold: 1.0, // Trigger when the target element is fully visible
  };

  // 3. Create Intersection Observer instance
  const observer = new IntersectionObserver(callback, options);

  // 4. Observing the target or Target element
  observer.observe(targetEl);
});
