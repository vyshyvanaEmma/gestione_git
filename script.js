var map = L.map('map').setView([41.8902, 12.4922], 13);

L.tileLayer('https://openstreetmap.org{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(map);
