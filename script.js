"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Sabia que no eras tan fria! xd";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Dale, no seas mala.",
    "Por favor 😢? ",
    "Dale di que si :(",
    "Lo siento de verdad 😭 ",
    "Dale No volverá a pasar...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

//agregado para audio
document.addEventListener('touchstart', function() {
  const audio = document.getElementById('myAudio');
  audio.play();
});

// document.addEventListener('touchstart', function() {
//   const audio = document.getElementById('myAudio');
//   audio.play().then(() => {
//       console.log("El audio ha comenzado a reproducirse.");
//   }).catch(function(error) {
//       console.log("No se pudo reproducir el audio: ", error);
//   });
// }, { once: true });  // El evento se ejecutará solo una vez