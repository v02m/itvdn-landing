/*
(function () {
  // Add event listener for open form button
  var openFormButton = document.querySelector('.arrow-down');
  console.log(openFormButton);
}());
*/

(function () {
  // Add event listener for open form button
  var openFormButton = document.querySelector('.arrow-down');
  // console.log(openFormButton);
  var form = document.querySelector('.form');

  if (openFormButton) {
    openFormButton.addEventListener('click', function (e) {
      // Отменяем действие по умолчанию
      e.preventDefault();
      ITVDN.form.open();
    })
  }
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (ITVDN.form.isValid()) {
        console.log('Is valid');
      } else {
        console.log('Is not valid');
      }
    })
  }
}());