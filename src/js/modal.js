
document.getElementById("open-buynow1").onclick = function() {
  openModal(1);
};

document.getElementById("open-buynow2").onclick = function() {
  openModal(1);
};

document.getElementById("open-review").onclick = function() {
  openModal(2);
};

document.getElementById("open-subs").onclick = function() {
  openModal(3);
};

const closeButtons = document.getElementsByClassName("close");
for (const closeButton of closeButtons) {
  closeButton.onclick = function() {
    closeModal();
  };
}

// Закрытие по ESC
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    closeModal();
  }
});

// Закрытие при клике вне окна или на overlay
const overlays = document.querySelectorAll(".overlay");
for (const overlay of overlays) {
  overlay.addEventListener("click", closeModal);
};

// Функция для открытия модального окна
function openModal(modalNumber) {
  switch (modalNumber) {
  case 1:
    const modal1 = document.getElementById("buynow");
      modal1.classList.add("is-open");
      const overlay1 = document.getElementById("overlay-buynow_w");
      overlay1.classList.add("is-visible");
      break;

  case 2:
    const modal2 = document.getElementById("review");
      modal2.classList.add("is-open");
      const overlay2 = document.getElementById("overlay-review_w");
      overlay2.classList.add("is-visible");
      break;

  case 3:
    const modal3 = document.getElementById("subs");
      modal3.classList.add("is-open");
      const overlay3 = document.getElementById("overlay-subs_w");
      overlay3.classList.add("is-visible");
      break;

  default:
    console.log("Invalid");
  }
}

// Функция для закрытия модального окна
function closeModal() {
  const modals = document.getElementsByClassName("modal");
  for (const modal of modals) {
    modal.classList.remove("is-open");
  }
  
  const buyOverlay = document.getElementById("overlay-buynow_w");
  if (!buyOverlay.contains(event.target)) {
    buyOverlay.classList.remove("is-visible");
  }
  
  const reviewOverlay = document.getElementById("overlay-review_w");
  if (!reviewOverlay.contains(event.target)) {
    reviewOverlay.classList.remove("is-visible");
  }
  
  const subsOverlay = document.getElementById("overlay-subs_w");
  if (!subsOverlay.contains(event.target)) {
    subsOverlay.classList.remove("is-visible");
  };
}
