# 🏛️ Gestione Monumenti di Roma (Leaflet Map)

Un'applicazione web interattiva che permette di visualizzare i principali monumenti di Roma su una mappa, consultare i loro dati in una tabella e aggiungerne di nuovi dinamicamente.

## 📍 Coordinate Nuovo Monumento
Per testare la funzione di inserimento, puoi utilizzare i dati della **Piazza di Spagna**:
*   **Nome:** `Piazza di Spagna`
*   **Latitudine:** `41.9057`
*   **Longitudine:** `12.4823`

---

## 🚀 Funzionalità del Progetto

Il progetto integra diverse logiche di gestione dati e visualizzazione cartografica:

1.  **Mappa Interattiva:** Utilizza la libreria **Leaflet.js** per renderizzare i monumenti tramite marker personalizzati.
2.  **Visualizzazione Tabellare:** Premendo il tasto "Mostra Tabella", viene generata dinamicamente una tabella con gli indici e le coordinate (Lat/Lng) dei monumenti presenti nell'array.
3.  **Aggiunta Dinamica:** Un form dedicato permette di inserire nuovi monumenti. L'invio del form esegue due operazioni:
    *   Aggiorna l'array JavaScript interno tramite la funzione `aggiungiMonumentoArray()`.
    *   Posiziona immediatamente un nuovo marker sulla mappa con popup automatico.
4.  **Statistiche:** Un sistema di alert rapido per monitorare il numero totale di elementi visualizzati.

---

## 🛠️ Tecnologie Utilizzate

*   **HTML5 & CSS3:** Struttura del layout e interfaccia utente.
*   **JavaScript (ES6):** Logica di manipolazione del DOM e gestione dell'array di oggetti.
*   **Leaflet.js:** Libreria Open Source per mappe interattive.

---

## ⚙️ Istruzioni per l'Uso
1. Clona la repository.
2. Apri il file `index.html` nel tuo browser.
3. Clicca su **"Mostra Tabella"** per vedere i dati tecnici.
4. Usa il form in fondo alla pagina per aggiungere nuovi punti di interesse (come la **Piazza di Spagna** indicata sopra).
