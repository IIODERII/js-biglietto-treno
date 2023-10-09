// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

const price = 0.21;

let totPrice;

let km = prompt("Inserisci il numero di chilometri che vuoi percorrere");

if(isNaN(km)){
    window.location.reload();
}

let age = prompt("Inserisci la tua età");

if(isNaN(age)){
    window.location.reload();
}

totPrice = price * km;

if(age < 18){
    totPrice = totPrice * 0.8;
}

if(age > 65){
    totPrice = totPrice * 0.6;
}

document.getElementById('title').innerHTML = 'Il prezzo del suo biglietto è: €'+ totPrice.toFixed(2);

