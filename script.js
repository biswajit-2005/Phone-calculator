const display = document.getElementById("display");

function append(value) {
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function deleteChar() {
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent.length === 0) {
    display.textContent = "0";
  }
}
function precentage() {}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = "Error";
  }
}
