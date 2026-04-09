// grib fat i form
const form = document.querySelector("form");

// stop default ved invalid
form.addEventListener("invalid", cancelPopup, true);

// formen submitter
form.addEventListener("submit", submitForm);

function cancelPopup(event) {
  console.log("cancelPopup");
  // console.log(event);
  event.preventDefault();
}

function submitForm(event) {
  console.log("submitForm");
  event.preventDefault();
  printdata();
  form.reset();
}

// ************************************************************
// ny javascript
// ************************************************************

function printdata() {
  console.log("printdata");

  // have fat i data fra form
  const data = new FormData(form);
  const pet = data.getAll("pet");

  document.querySelector("#output-firstname > span").textContent = data.get("firstname");
  document.querySelector("#output-password> span").textContent = data.get("pw");
  document.querySelector("#output-mail> span").textContent = data.get("mail");
  document.querySelector("#output-age> span").textContent = data.get("num");

  document.querySelector("#output-pet> span").textContent = pet.join(", ");

  // Skrive data fra form ud i UI
}
