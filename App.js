let screen = document.getElementById("screen");
let value = document.querySelectorAll("td");
let screenValue = "";
for (item of value) {
  item.addEventListener("click", (e) => {
    valueText = e.target.innerText;
    console.log(valueText);
    if (valueText == "X") {
      valueText = "*";
      screenValue = screen.value + valueText;
      screen.value = screenValue;
    } else if (valueText == "AC") {
      screenValue = "";
      screen.value = screenValue;
    } else if (valueText == "C") {
      screenValue = screenValue.slice(0, -1);
      screen.value = screenValue;
    } else if (valueText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue = screenValue + valueText;
      screen.value = screenValue;
    }
  });
}
