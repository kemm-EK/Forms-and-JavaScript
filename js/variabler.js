// Functions
function revealAdr() {
  street.textContent = currentStreet;
  postal.textContent = currentPostal;
}

// All my let variables
let currentStreet = "Guldbergsgade 29N";
let currentPostal = "2200 Nørrebro";

// All my element references
const street = document.querySelector("#street");
const postal = document.querySelector("#postal");
const adrBtn = document.querySelector("#adr-button");

// EventListeners
adrBtn.addEventListener("click", revealAdr);
