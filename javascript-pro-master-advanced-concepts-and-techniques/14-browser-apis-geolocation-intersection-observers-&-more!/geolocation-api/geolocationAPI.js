'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const statusElement = document.getElementById('status');
  const mapElement = document.getElementById('map');
  const mapZoomLevels = 13;
  let coords = [51.505, -0.09]; // London (default)

  // Initialize map with Leaflet.js
  const map = L.map(mapElement).setView(coords, mapZoomLevels);

  // Use OpenStreetMap tiles
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Add a marker for the user's location
  const marker = L.marker(coords).addTo(map);

  // Check if Geolocation is available
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Update status
        statusElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;

        // Set map view and marker position
        coords = [latitude, longitude];
        map.setView(coords, 10);
        marker.setLatLng(coords);

        // Dealing with events
        const popup = L.popup();
        const onMapClick = (mapE) => {
          popup
            .setLatLng(mapE.latlng)
            .setContent('You clicked the map at ' + mapE.latlng.toString())
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
        timeout: 10000,
      }
    );
  } else {
    statusElement.textContent = 'Geolocation is not supported by your browser.';
  }
});
