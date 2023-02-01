"use strict";

//CLICK ON BUTTON SUBCRIBLE - BUTTON CAROUSEL
const modalContent = document.querySelector(".subcri-box");
const modalLayout = document.querySelector(".over-layout");
const openBtn = document.querySelectorAll(".open-sub-btn");
const closeBtn = document.querySelector(".btn-close");

console.log(modalLayout);
// tao function khi click cac bttn
const openModal = function () {
  modalContent.classList.remove("hidden");
  modalLayout.classList.remove("hidden");
};
const closeModal = function () {
  modalContent.classList.add("hidden");
  modalLayout.classList.add("hidden");
};

// add listener vao cac btn
for (let x = 0; x < openBtn.length; x++)
  openBtn[x].addEventListener("click", openModal);

// close modal
closeBtn.addEventListener("click", closeModal);
modalLayout.addEventListener("click", closeModal);
//an modal bang escape
document.addEventListener("keydown", function (x) {
  if (x.key === "Escape" && !modalContent.classList.contains("hidden")) {
    closeModal();
  }
});

//PHAN NHAP EMAIL DE XEM CHI TIET THONG TIN CA NHA
//ham dung de mo phan nhap emai
const emailInputOpen = function () {
  document.querySelector(".emai-input-box").classList.remove("hidden");
  document.querySelector(".over-layout").classList.remove("hidden");
};
//ham dung de dong lai phan nhap emai
const emailInputClose = function () {
  document.querySelector(".emai-input-box").classList.add("hidden");
  document.querySelector(".over-layout").classList.add("hidden");
};
//Thao tac click on button VIEW MORE
let viewInfo = false;
// neu phan thong chua mo thi click view more se hien thi box nhap email
const viewPersonalInfo = function () {
  if (!viewInfo) {
    emailInputOpen();
    modalLayout.addEventListener("click", emailInputClose);
  }
  // neu phan thong tin da mo roi thi click viewless de dong lai
  else {
    document.querySelector(".personal-info-details").classList.add("hidden");
    document.querySelector(".viewmore").innerHTML = "View more...";
    viewInfo = false;
  }
};

// Thao tac tren box nhap email - click on submit
const submitEmail = function () {
  const email = document.getElementById("input-email-view-info").value;
  console.log(email);
  const regexpEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //neu email de trong
  if (email == "" || email == null) {
    document.getElementById("email-input-message").innerHTML =
      "Please enter your email";
    document.getElementById("email-input-message").style.color = "#ffc107";
    document.getElementById("email-input-message").style.fontSize = "1.3em";
  }
  // neu email nhap khong dung dinh dang
  else if (!regexpEmail.test(email)) {
    document.getElementById("email-input-message").innerHTML =
      "Please check your email again!!!";
    document.getElementById("email-input-message").style.color = "#ffc107";
    document.getElementById("email-input-message").style.fontSize = "1.3em";
  }
  // neu email nhap dung dinh dang
  else {
    emailInputClose();
    document.querySelector(".personal-info-details").classList.remove("hidden");
    document.querySelector(".viewmore").innerHTML = "View less...";
    viewInfo = true;
  }
};

// PHAN HOVER MO RA KINH NGHIEM-HOC VAN...

const jobDetail = document.querySelectorAll(".job-detail-content");
const bttnDown = document.querySelectorAll(".bttn-down");
let openDetail = [0, 0, 0, 0, 0, 0];

for (let x = 0; x < bttnDown.length; x++) {
  bttnDown[x].addEventListener("click", function () {
    if (!Boolean(openDetail[x])) {
      jobDetail[x].classList.remove("hidden");
      bttnDown[x].innerHTML = `<i class="fa-solid fa-caret-up"></i>View less`;
      openDetail[x] = 1;
    } else {
      jobDetail[x].classList.add("hidden");
      bttnDown[x].innerHTML = `<i class="fa-solid fa-caret-down"></i>View more`;
      openDetail[x] = 0;
    }
  });
}
