$(document).ready(function(){
  // Visualizzare in pagina 5 numeri casuali.
  // Da lì parte un timer di 30 secondi.
  // Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
  // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

  // genero 5 numeri casuali
  function randomNumbers() {
    let numeriRandom = []
    for (var i = 0; i < 5; i++) {
      let numeri = getRndInteger(1, 100)
       numeriRandom.push(numeri)

    }

    return numeriRandom
  }

  var numbers = randomNumbers()

  $('#numbers').text(numbers.join(","))

  // setto un timer di 30 secondi e allo scadere faccio scomparire i numeri
  var timer = 5;

  var clock = setInterval(function() {

    console.log(timer);
    timer--;

    if (timer == 0) {
      clearInterval(clock);
      $('#numbers').hide()
    }


  }, 1000)


  // chiedo all'utente che numeri ricorda
  var rightNumbers = []

  setTimeout(function() {

    for (var i = 0; i < 5; i++) {
        userNumbers = parseInt(prompt('inserisci i numeri che ricordi'))
       if (numbers.includes(userNumbers)) {
         rightNumbers.push(userNumbers)
       }

    }
    console.log('hai indovinato ' + rightNumbers.length + ' numeri');

  },((timer + 1) * 1000))






  function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

});
