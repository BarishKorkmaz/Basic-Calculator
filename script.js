let input = document.querySelector(".displayInput");
let buttons = document.querySelectorAll("button");

function clearInput() {
  input.value = "";
}

function addInput(e) {
  input.value += e;
}

function calculate() {
  let process = input.value;
  let value = eval(process);
  input.value = value;
}
