// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data
// Altro possibile Bonus:
// gestire una funzione con un evento nel modo Vue.


var app = new Vue({
  el: '#root',
  data: {
    message: 'Hello World',
    mieClassi: 'classe1 classe2',
    image: '..img/cutesnek.jpg'
  },
  methods: {
    miaFunzione: function() {
      alert('ciao');
    }
  }
});
