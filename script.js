"use strict";

let cardList = [];
const display = document.querySelector(".grid-container");

function Card(type) {
  this.type = type;
}

function cardsLoader() {
  const cardGenerator = Math.trunc(Math.random() * 16 + 1);
  const imgNumber = cardGenerator;
  if (!cardList.includes(imgNumber)) {
    const newCard = new Card(imgNumber);
    cardList.push(imgNumber);
    const div = document.createElement("div");
    div.classList.add("card-back");
    div.innerHTML = `<img src='imgs/${newCard.type}.jpg'>`;
    display.append(div);
  }
}

while (cardList.length < 16) {
  cardsLoader();
}
