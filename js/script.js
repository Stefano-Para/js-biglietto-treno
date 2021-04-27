// calcolare il prezzo totale del viaggio, secondo queste regole: 
// var ticketTotal = X;?


// il prezzo del biglietto è definito in base ai km (0.21 € al km)

var totaleKm = parseFloat(prompt("Quanti km devi percorrere?"));
console.log(totaleKm);
document.getElementById('km').innerHTML = "Il totale da  percorrere è: " + totaleKm + " km";

var domandaEta = parseInt(prompt("Quanti anni hai?"));
console.log(domandaEta);
document.getElementById('eta').innerHTML = "L'età seleziona è: " + domandaEta + " anni";

var ticketPrice = totaleKm * 0.21;
console.log(ticketPrice);
document.getElementById('ticket-price').innerHTML = "Il totale è di: " + ticketPrice + " &euro;";




// va applicato uno sconto del 20% per i minorenni
var ticket20;
if (domandaEta <= 18) {
    ticket20 = "Avendo diritto al 20% di sconto il tuo biglietto avrà prezzo: " + (ticketPrice - (ticketPrice * 20 / 100)).toFixed(2);
    console.log(ticket20);
    document.getElementById('ticket-20').innerHTML = ticket20 + " &euro;";
}
// va applicato uno sconto del 40% per gli over 65

var ticket40; 
if (domandaEta >= 65) {
    ticket40 = "Avendo diritto al 40% di sconto il tuo biglietto avrà prezzo: " + (ticketPrice - (ticketPrice * 40 / 100)).toFixed(2);
    console.log(ticket40);
    document.getElementById('ticket-40').innerHTML = ticket40 + " &euro;";
}



