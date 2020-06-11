//FUNKTIONSDEFINITION
function changeToBlue() {
    let mainHeadingId = document.getElementById("hello");
    mainHeadingId.classList.remove("green-text");
    mainHeadingId.classList.add("blue-text");

}

//EVENTLISTENER DEFINIERT
let blueButton = document.getElementById("blueButton");//Zugriff auf das HTML-Element mit der ID=blueButton
blueButton.addEventListener("click", changeToBlue);//Eventlistener zugeordnet (Art des Listeners, Funktionsaufruf)

/**
 * AUFGABE
 * 1) Erstelle in der HTML-Datei einen zweiten Button, so dass der Text in Grün angezeigt wird
 * 2) Verwende die CSS-Klasse "green-text"
 * 3) Erweitere die JavaScript-Datei um die notwendige Funktion und den Funktionsaufruf
 * 4) Verwende einen EVentListener
 */

 /**
  * SAUBEREN PROGRAMMIERSTIL
  * I HTML = Grundstruktur einer Website 
  * II CSS = Styling einer Website
  * III JavaScript = Interaktivität / Business Logik einer Website
  */