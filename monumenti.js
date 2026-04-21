const monumenti = [
    { nome: "Colosseo", lat: 41.8902, lng: 12.4922 },
    { nome: "Pantheon", lat: 41.8986, lng: 12.4769 },
    { nome: "Fontana di Trevi", lat: 41.9009, lng: 12.4833 },
    { nome: "Castel Sant'Angelo", lat: 41.9031, lng: 12.4663 }
];

function aggiungiMonumenti(mappa) {
    monumenti.forEach(m => {
        L.marker([m.lat, m.lng]).addTo(mappa).bindPopup(m.nome);
    });
}

function mostraStatisticheMonumenti() {
    alert("Numero di monumenti mostrati sulla mappa: " + monumenti.length);
}

function ottieniListaMonumenti() {
    return monumenti; 
}
