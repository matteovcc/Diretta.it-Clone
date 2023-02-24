var dataAttuale = new Date();
var daysOfWeek = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];


function mostraData() {
  var giorno = dataAttuale.getDate();
  var mese = dataAttuale.getMonth() + 1;
  var data = giorno + "/" + mese;
  var day = daysOfWeek[dataAttuale.getDay()];

  document.getElementById("data-scroll").innerHTML =  data + " "+ day;
}

function avanzaGiorno() {
  dataAttuale.setDate(dataAttuale.getDate() + 1);
  mostraData();
}

mostraData();