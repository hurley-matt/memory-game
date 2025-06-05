"use strict";

let cardList = [];
let firstCard;
let secondCard;
let clickNumber = 1;
const display = document.querySelector(".grid-container");
display.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (clickNumber === 1) {
    firstCard = card;
    firstCard.innerHTML = `<img src='imgs/${firstCard.id}.jpg'>`;
    clickNumber = 2;
  } else {
    secondCard = card;
    secondCard.innerHTML = `<img src='imgs/${secondCard.id}.jpg'>`;
    clickNumber = 1;
    if (firstCard.className !== secondCard.className) {
      setTimeout(() => {
        firstCard.innerHTML = `<img src='imgs/card-back.jpg'>`;
        secondCard.innerHTML = `<img src='imgs/card-back.jpg'>`;
      }, 1000);
    } else {
      firstCard.classList.add("solved");
      secondCard.classList.add("solved");
    }
  }
});

function cardsLoader() {
  const cardGenerator = Math.trunc(Math.random() * 16 + 1);
  const imgNumber = cardGenerator;
  if (!cardList.includes(imgNumber)) {
    cardList.push(imgNumber);
    const div = document.createElement("div");
    div.setAttribute("id", imgNumber);
    div.classList.add("card");
    if (imgNumber === 1 || imgNumber === 2) {
      div.classList.add("black");
    }
    if (imgNumber === 3 || imgNumber === 4) {
      div.classList.add("calico");
    }
    if (imgNumber === 5 || imgNumber === 6) {
      div.classList.add("grey");
    }
    if (imgNumber === 7 || imgNumber === 8) {
      div.classList.add("orange");
    }
    if (imgNumber === 9 || imgNumber === 10) {
      div.classList.add("siamese");
    }
    if (imgNumber === 11 || imgNumber === 12) {
      div.classList.add("white");
    }
    if (imgNumber === 13 || imgNumber === 14) {
      div.classList.add("tuxedo");
    }
    if (imgNumber === 15 || imgNumber === 16) {
      div.classList.add("tabby");
    }
    div.innerHTML = `<img src='imgs/card-back.jpg'>`;
    display.append(div);
  }
}

while (cardList.length < 16) {
  cardsLoader();
}
