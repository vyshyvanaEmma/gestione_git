var map = L.map('map').setView([41.8902, 12.4922], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
}).addTo(map);


document.getElementById('monumento-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const nomeInput = document.getElementById('nome').value;
    const latInput = parseFloat(document.getElementById('lat').value);
    const lngInput = parseFloat(document.getElementById('lng').value);

     const nuovoMonumento = { 
        nome: nomeInput, 
        lat: latInput, 
        lng: lngInput 
    };

    aggiungiMonumentoArray(nuovoMonumento);

    L.marker([latInput, lngInput]).addTo(map).bindPopup(nomeInput).openPopup();

    this.reset();
});

document.getElementById('btn-statistiche').addEventListener('click', function() {
    mostraStatisticheMonumenti();
});

aggiungiMonumenti(map);
