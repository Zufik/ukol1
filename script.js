let fahrenheit = Number (prompt("Kolik Fahrenheitů chceš převést?"))
let celsius = 5/9* (fahrenheit - 32)

document.body.innerHTML = "Můžeš rozehřát troubu..." + fahrenheit + "°F  se rovná " + Math.round(celsius) + "°C "