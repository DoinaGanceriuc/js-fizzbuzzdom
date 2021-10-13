/* Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell'indice
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

  /* aggiungere uno stile differente a seconda del valore dell'indice per multipli di 3 e di 5 */
  if (i % 3 == 0 && i % 5 == 0) {
    const element = `<li class="box fizzbuzz - ${i}"> fizzbuzz </li>`;
    listElement.insertAdjacentHTML("beforeend", element);
    /* console.log(element); */

    /* multipli di 3*/
  } else if (i % 3 == 0) {
    const element = `<li class="box fizz - ${i}"> fizz </li>`;
    listElement.insertAdjacentHTML("beforeend", element);

    /* multipli di 5 */
  } else if (i % 5 == 0) {
    const element = `<li class="box buzz - ${i}"> buzz </li>`;
    listElement.insertAdjacentHTML("beforeend", element);

    /* tutti gli altri numeri */
  } else {
    const element = `<li class="box blue - ${i}"> ${i} </li>`;
    listElement.insertAdjacentHTML("beforeend", element);
    /* console.log(element); */
  }
}
