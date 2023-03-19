const form = document.querySelector("#my-form");
const n = document.querySelector("#Name");
const txt = document.querySelector("#text");
const msg = document.querySelector("#msg");

const ch = form.firstElementChild;

const chb = document.getElementById("changer");
console.log(ch);
form.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  console.log(n.value);
  if (n.value == "amad" && txt.value == "1212") {
    alert("Welcome " + n.value);
  } else {
    alert("Oops sorry " + n.value);
  }
}