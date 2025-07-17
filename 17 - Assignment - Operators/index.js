// Assignment Operators

let userName = "kamycoding";
// EN: Declares variable 'userName' and assigns the string "kamycoding"
// DE: Deklariert die Variable 'userName' und weist den Wert "kamycoding" zu

userName = "JS";
// EN: Re-assigns the value "JS" to 'userName'
// DE: Weist der Variable 'userName' den neuen Wert "JS" zu

let number = 13;
// EN: Declares variable 'number' and assigns the value 13
// DE: Deklariert die Variable 'number' und weist den Wert 13 zu

console.log(number);
// EN: Logs the current value of 'number' (13) to the console
// DE: Gibt den aktuellen Wert von 'number' (13) in der Konsole aus

// let newNumber = number + 3;
// EN: Example showing how to add 3 to 'number' and store it in 'newNumber'
// DE: Beispiel, wie man 3 zu 'number' addiert und in 'newNumber' speichert

number = number + 3; // number += 3; // number /= 2;
// EN: Adds 3 to 'number' and re-assigns the result to 'number'
// DE: Addiert 3 zu 'number' und weist das Ergebnis erneut der Variable 'number' zu

console.log(number);
// EN: Logs the updated value of 'number' (now 16) to the console
// DE: Gibt den aktualisierten Wert von 'number' (jetzt 16) in der Konsole aus

number++;
// EN: Post-increments 'number' by 1 (increments after evaluation)
// DE: Führt Post-Inkrement an 'number' aus und erhöht den Wert um 1 nach der Auswertung

console.log(number);
// EN: Logs the value of 'number' after post-increment
// DE: Gibt den Wert von 'number' nach dem Post-Inkrement aus

number--;
// EN: Post-decrements 'number' by 1 (decrements after evaluation)
// DE: Führt Post-Dekrement an 'number' aus und verringert den Wert um 1 nach der Auswertung

console.log(number);
// EN: Logs the value of 'number' after post-decrement
// DE: Gibt den Wert von 'number' nach dem Post-Dekrement aus

number++;
// EN: Another post-increment of 'number'
// DE: Noch ein Post-Inkrement an 'number'

++number;
// EN: Pre-increments 'number' by 1 (increments before evaluation)
// DE: Führt Pre-Inkrement an 'number' aus und erhöht den Wert um 1 vor der Auswertung

console.log(number);
// EN: Logs the value of 'number' after pre-increment
// DE: Gibt den Wert von 'number' nach dem Pre-Inkrement aus

console.log(--number);
// EN: Pre-decrements 'number' by 1 and logs the result (decrements before evaluation)
// DE: Führt Pre-Dekrement an 'number' aus und gibt das Ergebnis aus (verringert vor der Auswertung)

console.log(number--);
// EN: Logs the current value of 'number', then post-decrements it by 1
// DE: Gibt den aktuellen Wert von 'number' aus und verringert ihn anschließend um 1