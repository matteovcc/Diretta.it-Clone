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

let buttons = document.querySelectorAll(".btn-match");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    button.style.backgroundColor = "#ff0046";
    button.style.color = "white";
    

  });
});
