import "./styles.css";
import utils from "./utils";
let parent = document.getElementById("app");
function handleClick(event) {
  const selectedOption = document.getElementById("myChess").value;
  const allBoxes = Array.from(document.getElementsByClassName("box"));
  allBoxes.forEach(item => item.removeAttribute("style"));
  const [y, x] = event.target.id && event.target.id.replace("boxId", "");
  let possibleValues = utils[selectedOption](x, y);
  possibleValues.forEach(cor => {
    let box = document.getElementById(`boxId${cor.y}${cor.x}`);
    box.style.background = "lightcoral";
  });
}
for (let i = 0; i < 8; i++) {
  const row = document.createElement("DIV");
  row.setAttribute("class", `row row${i}`);
  for (let j = 0; j < 8; j++) {
    const box = document.createElement("DIV");
    const black = (i + j) % 2 === 1;
    box.setAttribute("class", `box box${i}${j} ${black ? "black" : ""}`);
    box.setAttribute("id", `boxId${i}${j}`);
    box.onclick = handleClick;
    row.appendChild(box);
  }
  parent.appendChild(row);
}
