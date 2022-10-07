let outputScreen = document.getElementById("output");

function display(num) {
  outputScreen.value += num;
}

function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid Expression");
  }
}

function ac() {
  outputScreen.value = "";
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
