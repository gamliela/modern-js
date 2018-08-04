import {compute} from "./compute";
import {print} from "./print";

const buttonElement = document.getElementById("compute");
buttonElement.addEventListener("click", onClick);

function onClick() {
  const inputValue = document.getElementById("input").value;
  const result = compute(inputValue);
  print(result);
}
