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
  let messages = [
    "Happy birthday B!!",
    "I wish you lots of happiness.",
    "Grade A's in all subjects.",
    "Keep fighting and soon you will graduate."
  ];

  titleElement.innerHTML = ""; // ล้างข้อความเดิม

  messages.forEach((message, index) => {
    setTimeout(() => {
      // สร้าง element span สำหรับแต่ละข้อความ
      let messageElement = document.createElement("span");
      messageElement.textContent = message;

      // เพิ่มพื้นหลังและการจัดแต่งอื่น ๆ
      messageElement.style.display = "block"; // ทำให้แต่ละข้อความอยู่ในบรรทัดใหม่
      messageElement.style.backgroundColor = "lightblue"; // เปลี่ยนสีพื้นหลัง
      messageElement.style.padding = "10px"; // เพิ่ม padding ให้ข้อความ
      messageElement.style.marginBottom = "5px"; // เพิ่มระยะห่างระหว่างข้อความ
      messageElement.style.borderRadius = "15px"; // ทำให้ขอบมน

      // เพิ่มข้อความใหม่ลงใน titleElement
      titleElement.appendChild(messageElement);
    }, index * 1000); // เวลารอ 1 วินาทีต่อข้อความ
  });

  // ซ่อนปุ่ม
  buttonsContainer.classList.add("hidden");

  // เปลี่ยนรูปภาพ
  changeImage("yes");

  // เปลี่ยนพื้นหลังของหน้าเว็บ
  document.body.style.backgroundImage = "url('https://img.freepik.com/free-vector/realistic-happy-birthday-black-golden_1361-3241.jpg')";
  document.body.style.backgroundSize = "cover"; // ทำให้ภาพพื้นหลังครอบคลุมทั้งหน้าเว็บ
  document.body.style.backgroundPosition = "center"; // จัดตำแหน่งพื้นหลังให้อยู่ตรงกลาง
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
    "Are you sure?",
    "ไอ้บี",
    "ไอ้เหี้ยบี!!",
    "What the fuck!!!!!!!",
    "มาต่อยกับกูเหอะ",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
