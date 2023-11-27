//ESERCIZI IN JS

// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
let myH1 = document.getElementById("onlyH1");
myH1.innerText="Sono l'h1 modificato";

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
function sfondo(color){
    let myBody = document.body;
    if (myBody) {
        myBody.style.backgroundColor = color;
    }
}
sfondo("#cbdbf4");

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
let myFooter = document.getElementById("onlyFooter");
myFooter.innerText="Via F. Ragno, 23 - 83764 - Mola(BA)";

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
let myLink = document.querySelectorAll("a.linkAmazon");
 myLink[length].classList.add("newClass");

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
let myImg = document.getElementsByTagName("img");
myImg[length].classList.toggle("imgClass");

let mySecondClass = document.getElementsByClassName("imgClass");
mySecondClass[length].style.visibility="hidden";

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
let myPrice = document.getElementsByTagName("h4");
function price(color){
    
    for (let i = 0; i < myPrice.length; i++){
        myPrice[i].style.color = color;
    }
}
price("");