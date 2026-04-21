var map = L.map('map').setView([41.8902, 12.4922], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
}).addTo(map);


aggiungiMonumenti(map);
mostraStatisticheMonumenti();
