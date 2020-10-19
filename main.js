// Creare un array contenente dei cognomi in ordine casuale.
// Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
// Stampare la lista dei cognomi in ordine alfabetico e comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).

// Creato array con cognomi all'interno

var cognomi = ['Lombardo', 'Chianese', 'Cappato', 'Hamitaj', 'Rizzi', 'Guidi', 'Scarsella', 'Gargiulo', 'Adami', 'Guerra', 'Chelli', 'Amodeo', 'Liccardi', 'Muzzi', 'Berselli', 'Vaccariello', 'Sannito'];

// Chiedo all'utente il suo cognome
var cognomeUtente = prompt('Ciao! Qual è il tuo cognome?');

// Inserisco il cognome dell'utente nell'array
cognomi.push(cognomeUtente);

for (var i = 0; i < cognomi.length; i++) {
  console.log(cognomi[i]);
}
