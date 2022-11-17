let create = document.querySelector("[name='create']");
let numbers = document.querySelector("[name='elements']");
let text = document.querySelector("[name='texts']");
let typeToCreate = document.querySelector("[name='type']");
let results = document.querySelector("[class='results']");

create.onclick = (event) => {
  document.querySelectorAll(".box").forEach((el) => el.remove());

  for (let i = 0; i < numbers.value; i++) {
    let myMainElement;
    if (typeToCreate.value === "Div") {
      myMainElement = document.createElement("div");
    } else if (typeToCreate.value === "Section") {
      myMainElement = document.createElement("section");
    }
    myMainElement.className = "box";
    let myParagraphText = document.createTextNode(`${text.value}`);
    myMainElement.appendChild(myParagraphText);
    document.getElementById("results").appendChild(myMainElement);
  }

  event.preventDefault(event);
};
