// !function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


// document.addEventListener('DOMContentLoaded', function() {

//    /* Записываем в переменные массив элементов-кнопок и подложку.
//       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
//    var modalButtons = document.querySelectorAll('.js-open-modal'),
//        overlay      = document.querySelector('.js-overlay-modal'),
//        closeButtons = document.querySelectorAll('.js-modal-close');


//    /* Перебираем массив кнопок */
//    modalButtons.forEach(function(item){

//       /* Назначаем каждой кнопке обработчик клика */
//       item.addEventListener('click', function(e) {

//          /* Предотвращаем стандартное действие элемента. Так как кнопку разные
//             люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
//             Нужно подстраховаться. */
//          e.preventDefault();

//          /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
//             и будем искать модальное окно с таким же атрибутом. */
//          var modalId = this.getAttribute('data-modal'),
//              modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


//          /* После того как нашли нужное модальное окно, добавим классы
//             подложке и окну чтобы показать их. */
//          modalElem.classList.add('active');
//          overlay.classList.add('active');
//       }); // end click

//    }); // end foreach


//    closeButtons.forEach(function(item){

//       item.addEventListener('click', function(e) {
//          var parentModal = this.closest('.modal');

//          parentModal.classList.remove('active');
//          overlay.classList.remove('active');
//       });

//    }); // end foreach


//     document.body.addEventListener('keyup', function (e) {
//         var key = e.keyCode;

//         if (key == 27) {

//             document.querySelector('.modal.active').classList.remove('active');
//             document.querySelector('.overlay').classList.remove('active');
//         };
//     }, false);


//     overlay.addEventListener('click', function() {
//         document.querySelector('.modal.active').classList.remove('active');
//         this.classList.remove('active');
//     });




// }); // end ready!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


// document.addEventListener('DOMContentLoaded', function() {

//    /* Записываем в переменные массив элементов-кнопок и подложку.
//       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
//    var modalButtons = document.querySelectorAll('.js-open-modal'),
//        overlay      = document.querySelector('.js-overlay-modal'),
//        closeButtons = document.querySelectorAll('.js-modal-close');


//    /* Перебираем массив кнопок */
//    modalButtons.forEach(function(item){

//       /* Назначаем каждой кнопке обработчик клика */
//       item.addEventListener('click', function(e) {

//          /* Предотвращаем стандартное действие элемента. Так как кнопку разные
//             люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
//             Нужно подстраховаться. */
//          e.preventDefault();

//          /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
//             и будем искать модальное окно с таким же атрибутом. */
//          var modalId = this.getAttribute('data-modal'),
//              modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


//          /* После того как нашли нужное модальное окно, добавим классы
//             подложке и окну чтобы показать их. */
//          modalElem.classList.add('active');
//          overlay.classList.add('active');
//       }); // end click

//    }); // end foreach


//    closeButtons.forEach(function(item){

//       item.addEventListener('click', function(e) {
//          var parentModal = this.closest('.modal');

//          parentModal.classList.remove('active');
//          overlay.classList.remove('active');
//       });

//    }); // end foreach


//     document.body.addEventListener('keyup', function (e) {
//         var key = e.keyCode;

//         if (key == 27) {

//             document.querySelector('.modal.active').classList.remove('active');
//             document.querySelector('.overlay').classList.remove('active');
//         };
//     }, false);


//     overlay.addEventListener('click', function() {
//         document.querySelector('.modal.active').classList.remove('active');
//         this.classList.remove('active');
//     });




// }); // end ready
// document.getElementById("open-buynow1").onclick = function() {
//   openModal(1);
// };

// document.getElementById("open-buynow2").onclick = function() {
//   openModal(1);
// };

// document.getElementById("open-review").onclick = function() {
//   openModal(2);
// };

// document.getElementById("open-subs").onclick = function() {
//   openModal(3);
// };

// const closeButtons = document.getElementsByClassName("close");
// for (const closeButton of closeButtons) {
//   closeButton.onclick = function() {
//     closeModal();
//   };
// }

// // Закрытие по ESC
// document.addEventListener("keydown", function(event) {
//   if (event.keyCode === 27) {
//     closeModal();
//   }
// });

// // Закрытие при клике вне окна или на overlay
// const overlays = document.querySelectorAll(".overlay");
// for (const overlay of overlays) {
//   overlay.addEventListener("click", closeModal);
// };

// // Функция для открытия модального окна
// function openModal(modalNumber) {
//   switch (modalNumber) {
//   case 1:
//     const modal1 = document.getElementById("buynow");
//       modal1.classList.add("is-open");
//       const overlay1 = document.getElementById("overlay-buynow_w");
//       overlay1.classList.add("is-visible");
//       break;

//   case 2:
//     const modal2 = document.getElementById("review");
//       modal2.classList.add("is-open");
//       const overlay2 = document.getElementById("overlay-review_w");
//       overlay2.classList.add("is-visible");
//       break;

//   case 3:
//     const modal3 = document.getElementById("subs");
//       modal3.classList.add("is-open");
//       const overlay3 = document.getElementById("overlay-subs_w");
//       overlay3.classList.add("is-visible");
//       break;

//   default:
//     console.log("Invalid");
//   }
// }

// // Функция для закрытия модального окна
// function closeModal() {
//   const modals = document.getElementsByClassName("modal");
//   for (const modal of modals) {
//     modal.classList.remove("is-open");
//   }
  
//   const buyOverlay = document.getElementById("overlay-buynow_w");
//   if (!buyOverlay.contains(event.target)) {
//     buyOverlay.classList.remove("is-visible");
//   }
  
//   const reviewOverlay = document.getElementById("overlay-review_w");
//   if (!reviewOverlay.contains(event.target)) {
//     reviewOverlay.classList.remove("is-visible");
//   }
  
//   const subsOverlay = document.getElementById("overlay-subs_w");
//   if (!subsOverlay.contains(event.target)) {
//     subsOverlay.classList.remove("is-visible");
//   };
// }
