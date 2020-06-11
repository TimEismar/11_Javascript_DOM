function changeToBlue() {
    let mainHeadingId = document.getElementById("hello");//Zugriff auf das HTML-ELement mit der Id=hello
    mainHeadingId.classList.add("blue-text");//Zuweisung der CSS-Klasse "blue-text" für dieses HTML-ELements 
    mainHeadingId.classList.remove("green-text");
}


function changeToGreen() {
    let greenButton = document.getElementById("hello");
    greenButton.classList.remove("blue-text");
    greenButton.classList.add("green-text");
}

let buttonTest = 0;

function changeButton(){
    let changeButton = document.getElementById("buttoncn");

    if (buttonTest == 0){
        changeButton.classList.add("buttoncn");
        buttonTest = 1;
    }
    else {
        changeButton.classList.remove("buttoncn");
        buttonTest = 0;
    }
}
/**
 * AUFGABE
 * 1) In der index.html einen zweiten Knopf bauen mit dem Text Change to Green und dem onClick-Event changeToGreen()
 * 2) In der events.js Programmierung der Funktion, die changeToGreen() verarbeitet. 
 * 3) Variable mainHeadingId und Modifikation der classList mit der CSS-Klasse green-text
 * 
 */