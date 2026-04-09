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
  form.reset();
}

// ************************************************************
// ny javascript
// ************************************************************
