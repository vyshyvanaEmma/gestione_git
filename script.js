var map = L.map('map').setView([41.8902, 12.4922], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
}).addTo(map);

document.getElementById('btn-tabella').addEventListener('click', () => {
    const lista = ottieniListaMonumenti();
    const container = document.getElementById('container-tabella');

    container.innerHTML = "";

    const tabella = document.createElement('table');

    lista.forEach((m, index) => {
        const riga = tabella.insertRow();
        
        const cellaIndex = riga.insertCell(0);
        cellaIndex.textContent = index + 1;

        const cellaLat = riga.insertCell(1);
        cellaLat.textContent = m.lat; 

        const cellaLon = riga.insertCell(2);
        cellaLon.textContent = m.lng; 
    });

    container.appendChild(tabella);
});

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
