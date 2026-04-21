var map = L.map('map').setView([41.8902, 12.4922], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
}).addTo(map);

aggiungiMonumenti(map);
mostraStatisticheMonumenti();

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
