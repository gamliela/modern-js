function compute(s) {
  const args = s.split('+');
  let sum = 0;
  for (arg of args)
    sum += parseInt(arg);
  return sum;
}

function print(s) {
  const outputElement = document.getElementById("output");
}

const buttonElement = document.getElementById("compute");
buttonElement.addEventListener("click", onClick);

function onClick() {
  const inputValue = document.getElementById("input").value;
  const result = compute(inputValue);
  document.getElementById("output").innerText = result;
}
