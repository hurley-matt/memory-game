"use strict";

function Card(type) {
  this.type = type;
}

const cardGenerator = Math.trunc(Math.random() * 16 + 1);
let cardList = [];

for (let i = 0; i < 16; i++) {
  const cardNumber = cardGenerator;
  if (!cardList.includes(cardNumber)) {
    const card = new Card(cardNumber);
    cardList.push(cardNumber);
    console.log(card);
  }
}
