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
  if (openFormButton) {
    openFormButton.addEventListener('click', function (e) {
      // Отменяем действие по умолчанию
      e.preventDefault();
      ITVDN.form.open();
    })
  }
  // Add event listener for submit button
  var form = document.querySelector('.form');
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
  // Add event listener for menu buttons
  var nav = document.querySelector('.nav');
  if (nav) {
    nav.addEventListener('click', function (e) {
      var target = e.target;
      if (target.tagName.toLowerCase() !== 'a') {
        return;
      }
      e.preventDefault();
      ITVDN.navigation.toggleToActiveLink(target);
    });
  }
}());