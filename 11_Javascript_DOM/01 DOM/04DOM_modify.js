let mainHeadingId = document.getElementsByTagName("h1")[0];//ZUGRIFF ÜBER DIE ID
mainHeadingId.textContent = "Hello, new heading!";//MODIFIKATION DES HTML-Elements mit der ID=hello
//mainHeadingId.style.color = "red";//Modifikation von CSS-Eigenschaften
mainHeadingId.style.fontFamily = "Roboto";//Modifikation von CSS-Eigenschaften

/**
 * AUFGABE
 * 1) Modifikation der Schriftgröße
 * 2) Modifikation der Hintergrundfarbe
 * 3) Modifikation einer CSS-Eigenschaft eurer Wahl ;) 
 */

 let aufgabe1 = document.getElementById("hello");
 aufgabe1.style.fontSize = "50px";

 let aufgabe2 = document.getElementsByTagName("html")[0];
 aufgabe2.style.backgroundColor = "red";

 let aufgabe3 = document.getElementsByTagName("h1")[0];
 aufgabe3.style.color = "limegreen";