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
  if (openFormButton) {
    openFormButton.addEventListener('click', function (e) {
      // Отменяем действие по умолчанию
      e.preventDefault();
      form.open();
    })
  }
  // console.log(openFormButton);
}());