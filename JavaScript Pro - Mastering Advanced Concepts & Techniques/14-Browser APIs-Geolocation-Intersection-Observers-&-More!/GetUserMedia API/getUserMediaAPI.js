'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const videoElement = document.getElementById('videoElement');
  const errorMsg = document.getElementById('errorMsg');

  // Constraints for accessing both video (camera) and audio (microphone)
  const constraints = {
    video: true, // Request camera access
    audio: true, // Request microphone access
  };

  // Request access to both video and audio
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      // Assign the stream to the video element's source
      videoElement.srcObject = stream;
      videoElement.play();
    })
    .catch((error) => {
      errorMsg.textContent = `Error accessing media devices: ${error.name}`;
    });
});
