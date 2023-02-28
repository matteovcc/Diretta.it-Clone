let dataAttuale = new Date();
let daysOfWeek = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];


function mostraData() {
  let giorno = dataAttuale.getDate();
  let mese = dataAttuale.getMonth() + 1;
  let data = giorno + "/" + mese;
  let day = daysOfWeek[dataAttuale.getDay()];

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


const searchButton = document.getElementById('search-button');
const overlayButton = document.getElementById('overlay-button');
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
  
  overlayButton.style.display = 'block';
  searchContainer.style.display = 'block';
  searchInput.focus();
});
overlayButton.addEventListener('click', () => {
  overlayButton.style.display = 'none';
  searchContainer.style.display = 'none';
});