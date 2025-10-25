let display = document.getElementById("display");

function clearCal() {
  display.value = '';
}
function press(value) {
  display.value += value;
}
function result() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}