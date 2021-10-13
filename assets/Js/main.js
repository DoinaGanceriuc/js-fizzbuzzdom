/* Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell'indice
per i multipli di 3, 
per i multipli di 5
 e per i valori che sono sia multipli di 3 che di 5.
 */

// selezionare un elemento dal DOM
const listElement = document.querySelector(".list");
/* console.log(listElement); */
const containerElement = document.querySelector(".container");

// aggiungere un elemento ad un tag specifico
containerElement.insertAdjacentHTML("afterbegin", "<h1>FizzBuzzDOM</h1>");

// ciclo for
for (let i = 1; i <= 100; i++) {
  /* console.log(i); */
  const element = `<li class="box fizzbuzz - ${i}"> fizzbuzz </li>`;
  listElement.insertAdjacentHTML("beforeend", element);
}
