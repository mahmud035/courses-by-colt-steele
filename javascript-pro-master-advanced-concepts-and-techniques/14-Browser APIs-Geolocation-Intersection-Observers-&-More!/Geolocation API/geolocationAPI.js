'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const statusElement = document.getElementById('status');
  const mapElement = document.getElementById('map');

  // Initialize map with Leaflet.js
  const map = L.map(mapElement).setView([51.505, -0.09], 13);

  // Use OpenStreetMap tiles
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Add a marker for the user's location
  const marker = L.marker([51.5, -0.09]).addTo(map);

  // Check if Geolocation is available
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Update status
        statusElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;

        // Set map view and marker position
        const latLng = [latitude, longitude];
        map.setView(latLng, 10);
        marker.setLatLng(latLng);

        // Dealing with events
        const popup = L.popup();
        const onMapClick = (e) => {
          popup
            .setLatLng(e.latlng)
            .setContent('You clicked the map at ' + e.latlng.toString())
            .openOn(map);
        };
        map.on('click', onMapClick);
      },
      (error) => {
        statusElement.textContent = `Error: ${error.message}`;
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      }
    );
  } else {
    statusElement.textContent = 'Geolocation is not supported by your browser.';
  }
});
