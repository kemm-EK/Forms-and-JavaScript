let currentStreet = "Guldbergsgade 29N";
let currentPostal = "2200 Nørrebro";

document.querySelector("#adr-button").addEventListener("click", revealAdr);

function revealAdr() {
  document.querySelector("#street").textContent = currentStreet;
  document.querySelector("#postal").textContent = currentPostal;
}
